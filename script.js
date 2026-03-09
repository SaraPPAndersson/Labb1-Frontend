const secret = document.getElementById("secretEgg");

secret.addEventListener("click", function () {
  document.body.classList.toggle("party");
});

let code = "";
document.addEventListener("keydown", function (event) {
  code += event.key;

  if (code.includes("1337")) {
    document.getElementById("secondHiddenEgg").style.display = "flex";
 
    code = "";
  }
});

const modal = document.getElementById("secondHiddenEgg");

const closeBotton = document.querySelector(".close");

closeBotton.onclick = function () {
  modal.style.display = "none";
};
