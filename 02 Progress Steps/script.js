const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");

let activeCirclesCount = 1;

const updateDom = () => {
  if (activeCirclesCount >= circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  if (activeCirclesCount <= 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
  progress.style.width = `${
    ((activeCirclesCount - 1) / (circles.length - 1)) * 100
  }%`;

  circles.forEach((circle, idx) => {
    if (idx + 1 <= activeCirclesCount) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};

next.addEventListener("click", () => {
  if (activeCirclesCount < circles.length) {
    activeCirclesCount++;
    updateDom();
  }
});
prev.addEventListener("click", () => {
  if (activeCirclesCount > 1) {
    activeCirclesCount--;
    updateDom();
  }
});
