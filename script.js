let dates = document.querySelector('span#date');

if (new Date().getFullYear()>2018) {
    let date = new Date().getFullYear();
    dates.textContent = `-${date}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');