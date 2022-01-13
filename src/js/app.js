import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    const priceHots = document.querySelectorAll(".hot");
    priceHots.forEach(priceHot =>{
      priceHot.innerText = priceHot.innerText + "🔥";
    })
});
