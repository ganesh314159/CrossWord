import 'crossword.js'

let button = document.getElementById("button");
button.addEventListener("click", function () {
  let text = document.getElementById("text");
  text.classList.remove("hide");
  setTimeout(function () {
    text.classList.add("fade-in");
    setTimeout(function () {
      text.classList.remove("fade-in");
      setTimeout(function () {
        text.classList.add("hide");
      }, 1000);
    }, 2000);
  });
});

clue = document.getElementById("clue2")
console.log(clue.textContent || clue.innerText);
clues = V()