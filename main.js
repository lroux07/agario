const circle = document.querySelector('#circle');
let x = 0;
let y = 0;

window.addEventListener('keydown', (e) => {
    const keydown = e.key

    if(keydown === 'z') {
        y -= 35;
    }
    circle.style.top = `${y}px`;

    if(keydown === 'q') {
        x -= 35;
    }
    circle.style.right = `${x}px`;

    if(keydown === 's') {
        y += 35;
    }
    circle.style.top = `${y}px`;

    if(keydown === 'd') {
        x += 35;
    }
    circle.style.left = `${x}px`;
});