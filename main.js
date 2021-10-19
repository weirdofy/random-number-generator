// REQUIRED VARIABLES
let nFrom = document.querySelector("#numberFrom"),
  nTo = document.querySelector("#numberTo"),
  btnGen = document.querySelector("#genBtn"),
  btnReset = document.querySelector("#resetBtn"),
  output = document.querySelector("#outputNumber");

// FUNCTION FOR GENERATING THE NUMBER
function genNum() {
  let outputNumber =
    Math.floor(Math.random() * parseInt(nTo.value - nFrom.value + 1)) +
    parseInt(nFrom.value);

  output.innerHTML = outputNumber;
}
btnGen.addEventListener("click", genNum);

// FUNCTION FOR RESETTING THE VALUES
function reset() {
  nFrom.value = null;
  nTo.value = null;
  output.innerHTML = 0;
}
btnReset.addEventListener("click", reset);
