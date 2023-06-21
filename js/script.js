// HYPERPLEXED
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("li").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                    return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
                if(iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }      
        iterations += 1 / 3;
    }, 30);

}

//Reset scroll top
// history.scrollRestoration = "manual";

// $(window).on('beforeunload', function(){
//       $(window).scrollTop(0);
// });

// splash Screen
const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=> {
        loader.classList.add('display-none');

    }, 7500);
})
