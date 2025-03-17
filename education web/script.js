document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("educationSupportCount");

    let count = 0;
    function updateCounter() {
        count += Math.floor(Math.random() * 5) + 1; 
        counterElement.textContent = `Over ${count} children supported through education!`;
    }

    setInterval(updateCounter, 3000); 

    // Modal Logic for Signup
    const signupModal = document.getElementById("signupModal");
    const closeModal = document.querySelector(".close-btn");
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        signupModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        signupModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
    });

    // Payment Confirmation
    const donationForm = document.getElementById("donationForm");
    const paymentStatus = document.getElementById("paymentStatus");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        paymentStatus.textContent = "Thank you for your generous contribution to education!";
        paymentStatus.style.color = "green";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Donation Modal Logic
    const donationModal = document.getElementById("donationModal");
    const donateBtn = document.querySelector(".donate-btn");
    const closeDonation = document.getElementById("closeDonation");
    const donationStatus = document.getElementById("donationStatus");

    donateBtn.addEventListener("click", () => {
        donationModal.style.display = "flex"; 
    });

    closeDonation.addEventListener("click", () => {
        donationModal.style.display = "none"; 
    });

    window.addEventListener("click", (event) => {
        if (event.target === donationModal) {
            donationModal.style.display = "none";
        }
    });

    // Donation Form Submission
    const donationForm = document.getElementById("donationForm");
    const paymentStatus = document.getElementById("paymentStatus");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Simulate payment processing
        paymentStatus.innerText = "Processing payment...";
        paymentStatus.style.color = "blue";

        setTimeout(() => {
            paymentStatus.innerText = "Payment successful! Thank you for your support.";
            paymentStatus.style.color = "green";
        }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const donationModal = document.getElementById("donationModal");
    const donateBtn = document.querySelector(".donate-btn");
    const closeModal = document.querySelector(".donation-close-btn");

    donateBtn.addEventListener("click", () => {
        donationModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        donationModal.style.display = "none"; 
    });

    window.addEventListener("click", (event) => {
        if (event.target === donationModal) {
            donationModal.style.display = "none"; 
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donationForm");
    const paymentStatus = document.getElementById("paymentStatus");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Simulate payment processing
        paymentStatus.innerText = "Processing payment...";
        paymentStatus.style.color = "blue";

        setTimeout(() => {
            paymentStatus.innerText = "Payment successful! Thank you for your support.";
            paymentStatus.style.color = "green";
        }, 2000);
    });
});



