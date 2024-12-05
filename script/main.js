import { getInfo, getRepos } from "./api.js";
import { insertIntoElement } from "./utils.js";
import { insertRepos, insertUser, insertTitle } from "./inserts.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const user = await getInfo();
    const repos = await getRepos();
    
    insertUser(user);
    insertTitle(user);
    insertRepos();
  } catch (err) {
    insertIntoElement('body', `<div class="text-center position-absolute top-50 w-100">Nada por aqui!</div>`)
  }
})