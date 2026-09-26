import "./phone-console.ts";
import "./style.css";
import { transferFee } from "./logic.ts";

// The page: find each element once, check it's there, then use it.
const form = document.querySelector<HTMLFormElement>("#fee-form");
const amountInput = document.querySelector<HTMLInputElement>("#amount");
const result = document.querySelector<HTMLParagraphElement>("#result");

if (form !== null && amountInput !== null && result !== null) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(amountInput.value);
    result.textContent = `Fee: ${transferFee(amount)} FCFA`;
  });
}
