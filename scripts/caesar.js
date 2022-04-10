function caesarRenderer() {
  
  const form = document.querySelector("#caesar");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    /** grabs input value via the textarea's id */
    const input = event.target["caesar-input"].value;

    /** direction will be either "encode" or "decode" */
    const direction = event.target["caesar-options"].value;

    /** grabs the value of the shift number input (aka the number to shift the message by) */
    const shift = event.target["caesar-shift"].value;

    /** sets the value of the shift in integer form */
    const result =
      direction === "encode"
        ? caesarModule.caesar(input, Number(shift))
        : caesarModule.caesar(input, Number(shift), false);

    const alert = document.querySelector("#caesar-alert");
    
    if (result) {
      alert.classList.add("d-none");
      const output = document.querySelector("#caesar-output");
      output.innerHTML = result;
    } else {
      alert.classList.remove("d-none");
    }
  });
}

document.addEventListener("DOMContentLoaded", caesarRenderer);
