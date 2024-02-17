const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const links = document.querySelectorAll("li");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


links.forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    })
})

//** nav bar toggle */


//** quantity increase & decrese by plus minus click

var qtyWrappers = document.querySelectorAll('.qty-wrapper');

qtyWrappers.forEach( wrapper => {
    var quantityInput = wrapper.querySelector('.quantity-input');
    var minusButton = wrapper.querySelector('.qty-minus');
    var plusButton = wrapper.querySelector('.qty-plus');

    minusButton.addEventListener('click', function () {
        decreaseQuantity(quantityInput);
    });

    plusButton.addEventListener('click', function () {
        increaseQuantity(quantityInput);
    });
});


function decreaseQuantity(inputElement) {
    var currentValue = parseInt(inputElement.value, 10);

    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
}

function increaseQuantity(inputElement) {
    var currentValue = parseInt(inputElement.value, 10);

    inputElement.value = currentValue + 1;
}

//** quantity increase & decrese by plus minus click */


//** order now button UI and payment option

const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemName = this.dataset.item;
        const price = parseInt(this.dataset.price);
        const quantityId = this.dataset.quantityId;
        const quantity = document.getElementById(quantityId).value;
        const total = price * quantity;
        showModal(itemName, quantity, total);

        // window.location.href = `payment.html?amount=${total}`;  for query parameter
        localStorage.setItem('amount', total); // for using local storage
    });
});


function showModal(itemName, quantity, total) {
    // Create and show the modal with the order summary
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>You have ordered ${quantity} ${itemName}(s).</p>
            <p>Total: ₹${total}</p>
            <button id="proceedToPayment">Proceed to Payment</button>
        </div>
    `;

    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close');
    closeButton.onclick = function() {
        modal.style.display = "none";
        modal.remove();
    };

    modal.style.display = "block";
}

//** order now button UI and payment option */



// for payment page

document.body.addEventListener('click', function(event) {
    if (event.target.id === 'proceedToPayment') {
        window.location.href = 'payment.html';
    }
});

