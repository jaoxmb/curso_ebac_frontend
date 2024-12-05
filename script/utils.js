export class CustomExpecion {
  constructor(message, code) {
    let error = new Error(message)
    error.code = code
    return error;
  }
};

export const insertIntoElement = (elementSelector, value, config = { type: "content" }) => {
  const element = typeof elementSelector == "string"
    ? document.querySelector(elementSelector) : elementSelector;

  switch (config.type) {
    case "content":
      if (typeof value == "object") {
        element.appendChild(value)
      } else {
        element.innerHTML = value
      }
      break;
    case "attr":
      element.setAttribute(config.atribute || "", value)
      break;
    case "class-add":
      element.classList.add(value)
      break;
    case "class-remove":
      element.classList.remove(value)
      break;
  }
}