// local Storage

const amount = localStorage.getItem('amount'); // Retrieve the amount
console.log(amount);

if (amount) {
    const upiLink = document.querySelector('.upi-link');
    upiLink.href = `upi://pay?pa=7610000950-1@okbizaxis&pn=RS%20HOtel&cu=INR&am=${amount}`;
}



// for using query parameter --

// function getQueryParam(param) {
//     console.log(window.location.search);
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// const amount = getQueryParam('amount');
// console.log(amount);
// if (amount) {
//     const upiLink = document.querySelector('.upi-link');
//     upiLink.href = `upi://pay?pa=7610000950-1@okbizaxis&pn=RS%20HOtel&cu=INR&am=${amount}`;
// }