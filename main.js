let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerHTML = eval(display.innerHTML);
        } catch {
          display.innerText = " !! اية يسطا اللي انتا كاتبو دة";
        }
        break;
      default:
        display.innerHTML += e.target.innerText;
    }
  });
});
