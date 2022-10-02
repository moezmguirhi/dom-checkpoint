var item = document.getElementsByClassName("Item");
var minus = document.getElementsByClassName("minus-btn");
let plus = document.getElementsByClassName("plus-btn");
var del = document.querySelectorAll(".delete");
var price = document.getElementById("finalPrice");
var like = document.getElementsByClassName("like");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.value++;
    total();
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].nextElementSibling.value > 1) {
      minus[i].nextElementSibling.value--;
      total();
    }
  });
}
for (let i = 0; i < like.length; i++) { 
  like[i].addEventListener("click", function () {
    if (like[i].style.color == "red") {
      like[i].style.color = "black";
    } else like[i].style.color = "red";
  });
}
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    del[i].parentElement.remove();
    total();
  });
}
function total() {
    let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum =
      sum +
      item[i].querySelector(".price").innerText *
        item[i].querySelector(".Quant").value;
  }
  return (price.value = sum);
}