'use strict';


const teamMemberImg = document.querySelectorAll('.team-item img'),
    teamMemberReplica = document.querySelectorAll('.replica'),
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
    isProcessing: false,

};

const imgSources = Object.values(teamMemberImg).map(img => img.src.match(/img.+/i).toString());

console.dir(feedbackSpan[0]);

feedbackImg.src = imgSources[0];
feedbackDescription.innerHTML = teamMemberReplica[0].innerHTML + data.rating;

let i = 0;

feedbackSlideBtn.addEventListener('click', startMove);


function startMove(event) {
    if (data.isProcessing) return;
    data.isProcessing = true;

    const target = event.target;


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

    endMove(target);
}


function endMove(target) {
    let rating = ` <div class="feedback-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(random(1, 5))}                    
                 </div>`;

    setTimeout(() => {
        feedbackSpan.forEach(item => item.classList.remove('selected'));

        if (target.classList.contains('fa-step-backward')) {
            i = i - 1 < 0 ? i = 5 : --i;

            feedbackDescription.innerHTML = teamMemberReplica[i].innerHTML + rating;
            feedbackImg.src = imgSources[i];
            feedbackSpan[i].classList.add('selected');
        } else {
            i = i + 1 > 5 ? i = 0 : ++i;

            feedbackDescription.innerHTML = teamMemberReplica[i].innerHTML + rating;
            feedbackImg.src = imgSources[i];
            feedbackSpan[i].classList.add('selected');
        }
        feedbackDescription.style.transform = '';
        feedbackDescription.style.opacity = '';
        feedbackImg.style.opacity = '';
        data.isProcessing = false;
    }, 500);
}


function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

