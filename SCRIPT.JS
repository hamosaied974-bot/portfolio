// زر Explore Games
const exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", function () {
  alert("Welcome to Playwise Games!");
});

// أزرار Play
const playButtons = document.querySelectorAll(".card button");

playButtons.forEach(function(button){
  button.addEventListener("click", function(){
    const gameName = this.parentElement.querySelector("h4").innerText;
    alert("You selected: " + gameName);
  });
});

// Animation عند الاسكرول
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function(){
  cards.forEach(function(card){
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
