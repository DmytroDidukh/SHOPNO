'use strict';


const serviceBody = document.querySelector('.service-body');
let parentInner;

serviceBody.addEventListener('click', (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const button = event.target;
    const parent = button.parentNode;

    if (button.innerText !== "X") parentInner = parent.innerHTML;

    parent.style.background = 'rgb(61, 197, 187)';
    parent.style.justifyContent = 'flex-start';
    parent.innerHTML = `
    <h3>DESIGNING IS THE COOL LOVE FOR.</h3>
    <p>Hollywood town hall must be one of the most melodic rock albums released in past 25 years . A bonafide desert classic album-each song is a classic and sounds great even after repeated listening. While the Jayhawks scored with an equally engaging sophomore album (Tomorrow the green grass), they changed changed direction to incorporate pop and noise rock in later albums ( except Rainy day music) . </p>
<button>X</button>`;

    const btn = parent.lastChild;

    btn.style.textAlign = 'center';
    btn.style.fontSize = '20px';
    btn.style.color = 'slategrey';
    btn.style.border = '1px solid slategrey';
    btn.style.marginTop = 'auto';
    btn.style.marginRight = 'auto';

    if (button.innerText === 'X') {
        parent.style.background = '';
        parent.style.justifyContent = '';
        parent.innerHTML = parentInner;
    }
});
