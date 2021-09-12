const inputarea = document.querySelectorAll(".input");
const btnhype = document.querySelector("#button");
const output = document.querySelector("#output");
const btnReset = document.querySelector("#btnreset");

function sumofSquare(a, b) {
  const sum = a * a + b * b;
  return sum;
}

function handleReset() {
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";

  //document.getElementById("tri2").value = "";
  //document.getElementById("tri3").value = "";
  output.innerText = "";
}

function hypotaneus() {
  const sum = sumofSquare(
    Number(inputarea[0].value),
    Number(inputarea[1].value)
  );
  const sqroot = Math.sqrt(sum);
  output.innerText = "The hypotaneus is:" + sqroot;
}

btnhype.addEventListener("click", hypotaneus);
btnReset.addEventListener("click", handleReset);
