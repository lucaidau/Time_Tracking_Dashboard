const cards = document.querySelectorAll(".card");
const button = document.querySelectorAll(".menu__item");

let data = [];

fetch("data.json")
  .then((res) => res.json())

  .then((data) => {
    updateUI("weekly", data);
    button.forEach((btn) => {
      btn.addEventListener("click", () => {
        button.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const period = btn.dataset.period;
        updateUI(period, data);
      });
    });
  });

function updateUI(period, data) {
  data.forEach((items, index) => {
    const card = cards[index];
    card.querySelector(".card__title").textContent = items.title;
    card.querySelector(
      ".card__current"
    ).textContent = `${items.timeframes[period].current}hrs`;
    card.querySelector(
      ".card__previous"
    ).textContent = `Last week - ${items.timeframes[period].previous}hrs`;
  });
}
