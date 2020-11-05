export default function (text) {
  const element = document.createElement("div");
  element.innerHTML = text;

  document.getElementById("main").appendChild(element);
}
