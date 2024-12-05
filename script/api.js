import { CustomExpecion } from "./utils.js";

const user = new URLSearchParams(window.location.search.substring(1)).get("user");
let repos = {
  data: [],
  personRepo: {},
  readmeIndex: 0
};

const fetchApi = async (typePath, config = { response: 'json', repo: '' }) => {
  const path = {
    user: `https://api.github.com/users/${user}`,
    repos: `https://api.github.com/users/${user}/repos`,
    readme: `https://raw.githubusercontent.com/${user}/${config.repo || ""}/HEAD/README.md`
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
    if (repo.name.toLowerCase() === user.toLowerCase()) {
      repos.personRepo = repo;
      return false
    }
    return true
  })

  repos.data = filtredData
  return filtredData
};

export const getReadme = async (callback) => {
  let readme = [];

  if (!repos.data)
    throw new CustomExpecion("Você ainda não realizou a consulta de repositórios, realize através do método `getRepos()`", 400)

  if (repos.readmeIndex >= repos.data.length)
    throw new CustomExpecion("Não há mais repositórios para buscar!", 404)

  while (readme.length < 10) {
    
    // Pare o loop se já tiver buscado de todos os repo
    if (repos.readmeIndex >= repos.data.length) {
      console.log("break!");
      break;
    }

    const name = repos.data[repos.readmeIndex].name;

    await fetchApi('readme', { repo: name, response: 'text' })
      .then((data) => {
        if (callback) callback(data)

        repos.data[repos.readmeIndex]["readme"] = data
        readme.push(repos.data[repos.readmeIndex])
      })
      .catch(err => console.error(err))

    repos.readmeIndex++
  }

  return readme;
};