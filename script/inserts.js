import { insertIntoElement } from "./utils.js";
import { getReadme } from "./api.js";

export const insertUser = ({
  avatar_url,
  name,
  login,
  public_repos,
  public_gists,
  html_url,
  followers,
  following
}) => {
  insertIntoElement(".profile-avatar", avatar_url, { type: 'attr', atribute: 'src' });
  insertIntoElement(".profile-link", html_url, { type: 'attr', atribute: 'href' });
  insertIntoElement(".public_repos", public_repos);
  insertIntoElement(".followers", followers);
  insertIntoElement(".following", following);
  insertIntoElement(".name", name);
  insertIntoElement(".login", login);
}

export const insertRepos = () => {
  const handlerLoadData = async () => {
    try {
  
      (await getReadme())
        .map(({ readme, html_url }) => {
          if (!readme) return;
  
          const card = document.createElement('div');
          const converter = new showdown.Converter();
          const parsedHTML = converter.makeHtml(readme);
  
          let body = document.createElement("div"), image;
  
          body.innerHTML = parsedHTML;
          image = body.querySelectorAll("img")[0];
  
          card.innerHTML = `
                  <div class="card mb-3 overflow-hidden card-animation">
                    <div class="row g-0">
                      <div class="col-md-5">
                        <a href="${html_url}" target="_blank">
                          <img src="${image ? image.src : "https://via.placeholder.com/1024x1024"}" class="img-fluid w-100 h-100 object-fit-cover" alt="from-script">
                        </a>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body h-100">
                          <div class="readme-content position-relative overflow-hidden h-100" style="max-height: 300px;">
                            ${body.innerHTML}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
  
          insertIntoElement(".repos__list", card);
        })
  
    } catch (err) {
      insertIntoElement('.loading__data__end', 'loading__data__end--opened', { type: 'class-add' });
      insertIntoElement('.loading__data__placeholder', 'loading__data__placeholder--closed', { type: 'class-add' });
    }
  }

  inView('.loading__data')
    .on('enter', () => {
      handlerLoadData();
      insertIntoElement('.loading__data__placeholder', 'loading__data__placeholder--closed', { type: 'class-remove' });
    })
    .on('exit', () => {
      insertIntoElement('.loading__data__placeholder', 'loading__data__placeholder--closed', { type: 'class-add' });
    })
}