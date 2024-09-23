const inp = document.querySelector("#name-input");
const nameOutputSpan = document.querySelector("#name-output");

inp.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  
  if (inputValue === "") {
    nameOutputSpan.textContent = "Anonymous";
  } else {
    nameOutputSpan.textContent = inputValue;
  }
});
