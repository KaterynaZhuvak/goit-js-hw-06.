const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

// input.addEventListener("blur", () => {
//   const personInput = input.value.replace(/ /g, "");
//   if (personInput.length === Number(inputLength)) {
//     if (input.classList.contains("invalid")) {
//       input.classList.remove("invalid");
//       input.classList.add("valid");
//     } else {
//       input.classList.add("valid");
//     }
//   } else if (input.classList.contains("valid")) {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   } else {
//     input.classList.add("invalid");
//   }
//   console.log(personInput.length);
// });

input.addEventListener("blur", () => {
  if (input.value.trim().length === Number(inputLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
