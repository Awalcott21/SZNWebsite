document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("preorderModal");
    const closeModal = document.querySelector(".close");

    // Modal elements to be dynamically updated
    const modalShirtImg = document.getElementById("modal-shirt-image");
    const modalShirtTitle = document.getElementById("modal-shirt-title");
    const modalShirtPrice = document.getElementById("modal-shirt-price");

    // Select all shirt links
    const shirtLinks = document.querySelectorAll('.floating-shirt-link');

    shirtLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get data attributes from clicked shirt
            const shirtSrc = this.getAttribute('data-shirt-src');
            const shirtTitle = this.getAttribute('data-shirt-title');
            const shirtPrice = this.getAttribute('data-shirt-price');
            
            // Update modal content
            modalShirtImg.src = shirtSrc;
            modalShirtTitle.textContent = shirtTitle;
            modalShirtPrice.textContent = shirtPrice;
            
            // Display the modal
            modal.style.display = "block";
        });
    });

    // Close modal functionality
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Handle preorder form submission and confirmation message display
const preorderForms = document.querySelectorAll(".preorder-form");

preorderForms.forEach((form, index) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Get selected size and shirt name
        const size = form.querySelector("select[name='size']").value;
        const shirtName = `Shirt ${index + 1}`; // Example of differentiating shirts

        if (size) {
            // Hide the current form and show the confirmation message
            form.style.display = "none"; // Hide the specific form
            document.querySelector("#confirmationMessage").style.display = "block"; // Show confirmation message
            document.querySelector("#shirtName").textContent = shirtName; // Set shirt name
            document.querySelector("#shirtSize").textContent = size; // Set shirt size
        } else {
            alert("Please select a size.");
        }
    });
});

// Handle modal opening for each shirt
document.querySelectorAll(".floating-shirt").forEach((shirt, index) => {
    shirt.addEventListener("click", () => {
        const modal = document.getElementById("preorderModal");
        modal.style.display = "block";

        // Customize modal content for the specific shirt
        document.getElementById("modal-shirt-image").src = `shirt${index + 1}.png`; // Example image
        document.querySelector(".modal-content h2").textContent = `Shirt ${index + 1}`; // Example title
    });
});

// Close modal logic
document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("preorderModal");
    modal.style.display = "none";

    // Reset modal form and hide confirmation message for the next shirt
    const forms = document.querySelectorAll(".modal-content form");
    forms.forEach(form => form.style.display = "block"); // Show all forms again
    document.querySelector("#confirmationMessage").style.display = "none"; // Hide confirmation message

    // Reset modal content if needed
    document.getElementById("modal-shirt-image").src = ""; // Clear image src if necessary
    document.querySelector(".modal-content h2").textContent = ""; // Clear title if necessary
});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://awalcott213:PIffg0iZcBt5lnkZ@sznstudios.kgpvz.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas!");
}).catch(err => {
    console.error("Connection error", err);
});

