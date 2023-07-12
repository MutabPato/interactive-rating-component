const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");
const submit = document.getElementById("submit");
const rates = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");

submit.addEventListener("click",() =>{
thankYouCard.classList.remove("hidden");
ratingCard.classList.add("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click",function() {
        rating.innerHTML=this.innerHTML;
        
        submit.style.opacity="100%";
    })
})