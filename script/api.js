import { CustomExpecion } from "./utils.js";

let USER = new URLSearchParams(window.location.search.substring(1)).get("user");
let REPOS = {
  data: [],
  personRepo: {},
  readmeIndex: 0
};

export const fetchApi = async (typePath, config = { response: 'json', repo: '' }) => {
  const path = {
    user: `https://api.github.com/users/${config.user || USER}`,
    repos: `https://api.github.com/users/${USER}/repos`,
    readme: `https://raw.githubusercontent.com/${USER}/${config.repo || ""}/HEAD/README.md`
  }[typePath]

  const payload = await fetch(path)

  if (payload.status != 200)
    throw new Error("Error!")

  if (config.response === 'json') {
    return await payload.json()
  }
  if (config.response === 'text') {
    return await payload.text()
  }
};

export const getInfo = async () => {
  return await fetchApi("user")
};

export const getRepos = async () => {
  const data = await fetchApi("repos")
  const filtredData = data.filter((repo) => {
    if (repo.name.toLowerCase() === USER.toLowerCase()) {
      REPOS.personRepo = repo;
      return false
    }
    return true
  })

  REPOS.data = filtredData
  return filtredData
};

export const getReadme = async (callback) => {
  let readme = [];

  if (!REPOS.data)
    throw new CustomExpecion("Você ainda não realizou a consulta de repositórios, realize através do método `getRepos()`", 400)

  if (REPOS.readmeIndex >= REPOS.data.length)
    throw new CustomExpecion("Não há mais repositórios para buscar!", 404)

  while (readme.length < 10) {
    
    // Pare o loop se já tiver buscado de todos os repo
    if (REPOS.readmeIndex >= REPOS.data.length) {
      console.log("break!");
      break;
    }

    const name = REPOS.data[REPOS.readmeIndex].name;

    await fetchApi('readme', { repo: name, response: 'text' })
      .then((data) => {
        if (callback) callback(data)

        REPOS.data[REPOS.readmeIndex]["readme"] = data
        readme.push(REPOS.data[REPOS.readmeIndex])
      })
      .catch(err => console.error(err))

    REPOS.readmeIndex++
  }

  return readme;
};