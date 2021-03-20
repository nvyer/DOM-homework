const highlightBtn = document.querySelector("button");
const paragraph = document.querySelector("p");

highlightBtn.addEventListener("click", (event) => {
  paragraph.innerHTML = paragraph.innerText
    .trim()
    .split(" ")
    .map((el) => {
      if (el.length >= 8) {
        return '<span class="highlight">' + el + "</span>";
      } else if (el === "!") {
        return el.replace("!", "😲");
      } else if (el === "?") {
        return el.replace("?", "🤔");
      } else {
        return el;
      }
    })
    .join(" ");
});