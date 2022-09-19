const box = document.querySelector(".box");
console.log(box);

for (let i = 10; i > 1; i--) {
  for (let j = 0; j < i; j++) {
    box.innerHTML += "&#160" + "&#160";
  }
  for (let j = 10; j > i; j--) {
    box.innerHTML += "*";
  }
  box.innerHTML += "<br>";
}
