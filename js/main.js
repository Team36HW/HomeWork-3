const card = document.querySelectorAll(".card");
let delay = 0;

card.forEach(el => {
    el.style.animation = "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    el.style.animationDelay = delay + "s";
    delay += 0.2;
});