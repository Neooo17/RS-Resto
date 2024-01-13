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



//order now button UI and payment option

const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemName = this.dataset.item;
        const price = parseInt(this.dataset.price);
        const quantityId = this.dataset.quantityId;
        const quantity = document.getElementById(quantityId).value;
        const total = price * quantity;
        showModal(itemName, quantity, total);
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
