// FLAMES Game Class
class FlamesGame {
    constructor() {
      this.name1Input = document.getElementById("name1");
      this.name2Input = document.getElementById("name2");
      this.printElement = document.getElementById("print");
      this.flamesMagicElement = document.getElementById("flames_magic");
    }
  
    // Initialize the game
    init() {
      this.renderForm();
      console.log("%cFLAMES Game Version 2.0 \nUpdated On 18th April 2024", "color: red; font-family: sans-serif; font-size: 2.1em; font-weight: bolder; text-shadow: #000 1px 1px;");
      console.log("%cNew Version Written Using ES6 Javascript & Modern CSS", "color: #6872CB; font-family: sans-serif; font-size: 2.1em; font-weight:bolder; text-shadow: #6C6D75 1px 1px;");
    }
  
    // Render the user form layout
    renderForm() {
      const formHtml = `
        <p>Your Name</p>
        <input type="text" id="name1">
        <br>
        <p>Your Crush Name</p>
        <input type="text" id="name2">
        <br>
        <button onclick="flamesGame.play()">FLAMES !</button>
        <p id="print"></p>
      `;
      this.flamesMagicElement.innerHTML = formHtml;
      this.name1Input = document.getElementById("name1");
      this.name2Input = document.getElementById("name2");
      this.printElement = document.getElementById("print");
    }
  
    // Play the FLAMES game
    play() {
      let name1 = this.name1Input.value.replace(/\s+/g, "").toLowerCase();
      let name2 = this.name2Input.value.replace(/\s+/g, "").toLowerCase();
  
      if (!name1 || !name2) {
        alert("No names have been entered");
        return;
      }
  
      if (name1 === name2) {
        alert("Same name has been entered");
        return;
      }
  
      let commonLetters = 0;
      let name2Array = name2.split('');
      for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2Array.length; j++) {
          if (name1[i] === name2Array[j]) {
            commonLetters++;
            name2Array[j] = "_";
            break;
          }
        }
      }
  
      const flamesResult = (name1.length + name2.length - 2 * commonLetters) % 6;
      this.renderResult(flamesResult);
    }
  
    // Render the FLAMES result
    renderResult(result) {
      const resultText = ["FRIENDS", "LOVERS", "AFFECTIONATE", "MARRIAGE", "ENEMY", "SISTER"];
      const resultImage = ["friends.png", "lovers.png", "affectionate.jpg", "marriage.jpg", "enemy.gif", "sister.jpg"];
      const resultHtml = `
        <button onclick="flamesGame.reload()">Try another one !</button>
        <br>
        <p class="fr">${resultText[result]}</p>
        <br>
        <img src="img/${resultImage[result]}" width="460" height="345">
      `;
      this.printElement.innerHTML = resultHtml;
    }
  
    // Reload the game
    reload() {
      location.reload(false);
    }
  }
  
  // Create a new instance of the FLAMES game
  const flamesGame = new FlamesGame();
  flamesGame.init();