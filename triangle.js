const inputs = document.querySelectorAll(".angle-input");
const btnTriangle = document.querySelector("#btnsubmit");
const outputBox = document.querySelector("#output");
const resetBtn = document.querySelector("#reset");

//sum of angles
function sumofAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}
//reset
function handleReset() {
  document.getElementById("tri").value = "";

  document.getElementById("tri2").value = "";
  document.getElementById("tri3").value = "";
  outputBox.innerText = "";
}
//check
function isTriangle() {
  //value of each input field
  const sum = sumofAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    outputBox.innerText = "📐this is triangle!";
  } else {
    outputBox.innerText = "❌❌ it is not a traingle!";
  }
}

btnTriangle.addEventListener("click", isTriangle);
resetBtn.addEventListener("click", handleReset);
