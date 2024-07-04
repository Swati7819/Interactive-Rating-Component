addEventListener("DOMContentLoaded", (event) => {
const con1 = document.querySelector(".show-c1")
const con2 = document.querySelector(".show-c2")
const ratingCredit = document.querySelectorAll(".rate")
const submitBtn = document.querySelector(".btn")
let ratingNum = document.querySelector("#ratingNumber")
let selectedRating =0


    con1.classList.add('visible');
    con2.classList.add('hidden');



ratingCredit.forEach((r) => {
    r.addEventListener("click", () => {
        // Remove the style from all rating buttons
        ratingCredit.forEach((rate) => {
            rate.style.backgroundColor = "";
            rate.style.color = "";
        });

        // Apply the style to the clicked rating button
        r.style.backgroundColor = "white";
        r.style.color = "black";
        selectedRating = r.getAttribute('data-rate')
        ratingNum.textContent = selectedRating
    });
});

submitBtn.addEventListener("click", () => {
    con1.classList.remove('visible');
    con1.classList.add('hidden');
    con2.classList.remove('hidden');
    con2.classList.add('visible');

  
});

});



