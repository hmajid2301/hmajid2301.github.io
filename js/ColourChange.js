window.onload = function () {
  const main = document.getElementsByTagName("main")[0]
  main.onclick = function changeColour() {
    this.classList.toggle("primary");
    this.classList.toggle("secondary");
  }
}