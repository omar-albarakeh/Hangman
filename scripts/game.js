document.addEventListener("DOMContentLoaded", function () {
  let answer = document.getElementById("answer-section");
  let letter = document.querySelectorAll(".letter");

  let words = ["APPLE", "HOUSE", "BUS", "CAR", "WAR"];
  let word = words[Math.floor(Math.random() * words.length)];
  let gussedletter = [];
  let imgs = [
    { src: "./assets/head.svg", className: "head" },
    { src: "./assets/body.svg", className: "body" },
    { src: "./assets/left-hand.svg", className: "left-hand" },
    { src: "./assets/right-hand.svg", className: "right-hand" },
    { src: "./assets/left-leg.svg", className: "left-leg" },
    { src: "./assets/right-leg.svg", className: "right-leg" },
  ];
  let wrong = 0;

  function display() {
    let display = "";
    for (let i = 0; i < word.length; i++) {
      if (gussedletter.includes(word[i])) {
        display += word[i];
      } else {
        display += "_";
      }
      display += " ";
    }
    answer.textContent = display.trim();
  }

  function showparts() {
    if (wrong < imgs.length) {
      let img = imgs[wrong];
      let part = document.createElement("img");
      part.src = img.src;
      part.className = `part ${img.className}`;
      document.getElementById("hang").appendChild(part);
      wrong++;
    } else {
      alert("game over !!!");
    }
  }

  function checkwin() {
    for (let letter of word) {
      if (!gussedletter.includes(letter)) {
        return;
      }
    }
    alert("you did it !!!");
  }

  function letterclick(event) {
    let letter = event.target.textContent;
    event.target.classList.add("pressed");
    event.target.removeEventListener("click", letterclick);

    if (word.includes(letter)) {
      gussedletter.push(letter);
      display();
      checkwin();
    } else {
      showparts();
    }
  }

  function addClickEvent(letter) {
    letter.addEventListener("click", letterclick);
  }

  letter.forEach(addClickEvent);
  display();
});
