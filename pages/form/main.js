import { fetchApi } from "../../script/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const errorToast = new bootstrap.Toast(document.querySelector("#user-error"));
  const successToast = new bootstrap.Toast(document.querySelector("#user-success"));

  document.getElementById("form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("teste");
      const element = e.currentTarget;
      const userId = element.user.value;

      fetchApi("user", { user: userId })
        .then(() => {
          successToast.show();
          setTimeout(() => {
            window.location.href = `../../?user=${userId}`
          }, 1500)
        })
        .catch(() => {
	        errorToast.show();
          setTimeout(() => {
            errorToast.hide();
          }, 3000)
        })
    });
})