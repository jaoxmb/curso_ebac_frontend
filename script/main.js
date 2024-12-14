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
    window.location.href = "../pages/form/"
  }
})