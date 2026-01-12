const universe = document.getElementById("universe");
const quantityStar = 130;

const stars = [];

for (let i = 0; i < quantityStar; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 7;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.x = Math.random() * window.innerWidth;
    star.y = Math.random() * window.innerHeight;

    star.velX = Math.random() * 0.7;
    star.velY = Math.random() * 0.7;

    star.style.left = `${star.x}px`;
    star.style.top = `${star.y}px`;

    universe.appendChild(star);
    stars.push(star);
}

function animateStars() {
    stars.forEach(star => {
        star.x += star.velX;
        star.y += star.velY;

        if (star.x < 0) star.x = window.innerWidth;
        if (star.x > window.innerWidth) star.x = 0;
        if (star.y < 0) star.y = window.innerHeight;
        if (star.y > window.innerHeight) star.y = 0;

        star.style.left = `${star.x}px`;
        star.style.top = `${star.y}px`;
    });

    requestAnimationFrame(animateStars);
}

animateStars();
