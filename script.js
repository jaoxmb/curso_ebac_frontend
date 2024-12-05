const user = "joaoxmb";
let info;
let repos = {
  data: [],
  readme: {
    data: [],
    pages: 0,
    currentPage: 0,
  }
};

const getInfo = async () => {
  const data = await fetchApi("user");

  info = data;
  return data;
};

const getRepos = async () => {
  const data = await fetchApi("repos");

  const slicedRepos = data.reduce((previus, _, __, array) => {
    const quantyInRow = 2;
    const lengthWithQuanty = previus.length * quantyInRow;
    const sliced = array.slice(lengthWithQuanty, lengthWithQuanty + quantyInRow);

    return sliced.length < 1 ? previus : [...previus, sliced]
  }, []);

  repos.data = slicedRepos;
  repos.readme.pages = slicedRepos.length;

  return slicedRepos;
}

const getReadme = async (pageNumber) => {
  if (!repos.data) throw new Error("Você ainda não realizou a consulta de repositórios, realize através do método `getRepos()`")

  const payload = repos.data[pageNumber].map(async ({ name }) => {
    let content;
    try {
      const payload = await fetch(`https://raw.githubusercontent.com/${user}/${name}/HEAD/README.md`)

      content = payload.status == "404" ? null : await payload.text();

    } finally {
      
      return {
        name,
        content
      }
    }
  })

  const data = await Promise.all(payload);

  repos.readme.data = data;
  return data;
}

const fetchApi = async (typePath, params) => {
  const host = "https://api.github.com";
  const path = {
    user: `/users/${user}`,
    repos: `/users/${user}/repos`,
    readme: `/repos/${user}/${params?.repo}/readme`
  }[typePath]

  try {
    const payload = await fetch(host + path)
    return await payload.json();
  } catch (err) {
    console.error(err);
  }
}

const insertContentToElement = (elementClass, content = "", type = "content", attrName) => {
  const element = document.querySelector(`.${elementClass}`);

  switch (type) {
    case "content":
      element.innerHTML = content
      break;
    case "attr":
      element.setAttribute(attrName, content)
      break;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const {
      avatar_url,
      name,
      login,
      public_repos,
      public_gists,
      html_url,
      followers,
      following
    } = await getInfo();
    await getRepos();

    insertContentToElement("profile-avatar", avatar_url, "attr", "src");
    insertContentToElement("profile-link", html_url, "attr", "href");
    insertContentToElement("public_repos", public_repos);
    insertContentToElement("followers", followers);
    insertContentToElement("following", following);
    insertContentToElement("name", name);
    insertContentToElement("login", login);

    const handlerLoadData = async () => {
      if (repos.readme.currentPage == repos.readme.pages) {
        document.querySelector("#load__data")
          .textContent = "Não há mais repositórios a serem mostrados!";

        return;
      }

      try {
        const data = await getReadme(repos.readme.currentPage);

        data.map(({ content, name }) => {

          if (!content) return;

          const converter = new showdown.Converter();
          const parsedHTML = converter.makeHtml(content);

          let body = document.createElement("div"), image;

          body.innerHTML = parsedHTML;
          image = body.querySelectorAll("img")[0];

          document.querySelector(".repos__list").innerHTML += `
            <li class="repos__list__item">
              <article>
                <header>
                  <img src="${image ? image.src : "https://via.placeholder.com/1024x1024"}" alt="from-readme" />
                </header>
                <main>
                  ${body.innerHTML}
                </main>
              </article>
            </li>
          `;
        });

        repos.readme.currentPage++
      } catch (err) {
        console.error(err);
        handlerLoadData();
      }
    }

    inView('#load__data')
      .on('enter', handlerLoadData)


  } catch (err) {
    insertContentToElement("body", "Nada encontrado!")
  }
})