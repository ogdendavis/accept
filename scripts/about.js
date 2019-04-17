// Custom script for front page (about)
// Old-school because plenty of educators are still on IE

function titleMod() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var short = 'ACCEPT';
    var long = 'ACCEPT: Admissions Community Cultivating Equity & Peace Today';
    var title = document.querySelector('header h1.title a');
    if (width < 1300 && title.innerText !== short) {
        title.innerText = short;
    }
    else if (width >= 1300 && title.innerText !== long) {
        title.innerText = long;
    }
}
window.addEventListener('resize', titleMod);
