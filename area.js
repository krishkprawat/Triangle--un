const input = document.querySelectorAll(".input");
const btnarea = document.querySelector("#button");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#btnreset");

function formula(base, height) {
  const multi = base * height;
  return multi;
}

function resethandle() {
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";

  output.innerText = "";
}

function checkArea() {
  const multi = formula(Number(input[0].value), Number(input[1].value));
  const area = multi / 2;
  output.innerText = "area of triangle is:" + area;
}

btnarea.addEventListener("click", checkArea);
resetBtn.addEventListener("click", resethandle);
