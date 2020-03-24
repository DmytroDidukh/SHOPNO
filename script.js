'use strict';

// SERVICE
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


// FEEDBACK

const teamMemberImg = document.querySelectorAll('.team-item img'),
    feedbackReplica = document.querySelectorAll('.replica'),
    feedbackDescription = document.querySelector('.feedback-description'),
    feedbackSlideBtn = document.querySelector('.feedback-next-description'),
    feedbackImg = document.querySelector('.feedback-img-block img'),
    feedbackSpan = document.querySelectorAll('.feedback-next-slide span');

const data = {
    rating: ` <div class="feedback-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                 </div>`,
    //imgSrc: teamMemberImg[0].src.match(/img.+/i).toString(),
};

const imgSources = Object.values(teamMemberImg).map(img => img.src.match(/img.+/i).toString());

console.dir(feedbackSpan[0]);

feedbackImg.src = imgSources[0];
feedbackDescription.innerHTML = feedbackReplica[0].innerHTML + data.rating;

let i = 0;

feedbackSlideBtn.addEventListener('click', (event) => {
    const target = event.target;
    let rating = ` <div class="feedback-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(random(1, 5))}                    
                 </div>`;

    feedbackImg.style.opacity = '0';

    if (target.classList.contains('fa-step-backward')) {
        feedbackDescription.style.transform = 'translateX(-600px)';
        feedbackDescription.style.opacity = '0';
        setTimeout(() => {
            feedbackDescription.style.transform = 'translateX(600px)';
        }, 200)
    } else {
        feedbackDescription.style.transform = 'translateX(600px)';
        feedbackDescription.style.opacity = '0';
        setTimeout(() => {
            feedbackDescription.style.transform = 'translateX(-600px)';
        }, 200)
    }

    setTimeout( () => {
        feedbackSpan.forEach(item => item.classList.remove('selected'));

        if (target.classList.contains('fa-step-backward')) {
            i = i - 1 < 0 ? i = 5 : --i;

            feedbackDescription.innerHTML = feedbackReplica[i].innerHTML + rating;
            feedbackImg.src = imgSources[i];
            feedbackSpan[i].classList.add('selected');
        } else {
            i = i + 1 > 5 ? i = 0 : ++i;

            feedbackDescription.innerHTML = feedbackReplica[i].innerHTML + rating;
            feedbackImg.src = imgSources[i];
            feedbackSpan[i].classList.add('selected');
        }
        feedbackDescription.style.transform = '';
        feedbackDescription.style.opacity = '';
        feedbackImg.style.opacity = '';
    }, 500);


});

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

