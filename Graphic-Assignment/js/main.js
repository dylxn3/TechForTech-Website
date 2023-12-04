function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {

    var controller = new ScrollMagic.Controller();


    var scene = new ScrollMagic.Scene({
        triggerElement: ".product-img-main",
        triggerHook: 0.8,
        reverse: false
    })
        .setTween(gsap.to("#product-main-img", { opacity: 1, transform: "translateY(0)", duration: 3 }))
        .addTo(controller);


    window.onscroll = function () {
        var mybutton = document.getElementById("back-to-top");

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
});





function toggleProductID() {
    var reasonDropdown = document.getElementById("reason");
    var productIDLabel = document.getElementById("productIDLabel");
    var productIDInput = document.getElementById("productID");

    if (reasonDropdown.value === "product-info") {
        productIDLabel.style.display = "block";
        productIDInput.style.display = "block";
    } else {
        productIDLabel.style.display = "none";
        productIDInput.style.display = "none";
    }
}

function validateName() {
    var nameInput = document.getElementById('name');
    var isValid = /^[^\d]{4,}$/.test(nameInput.value);
    updateValidationStyle(nameInput, isValid);
}

function validatePhoneNumber() {
    var phoneInput = document.getElementById('phone');
    var isValid = /^\d{3} \d{3} \d{4}$/.test(phoneInput.value);
    updateValidationStyle(phoneInput, isValid);
}

function validateProductID() {
    var productIDInput = document.getElementById('productID');
    var validProductIDs = ['IDE-Java-23', 'IDE-Python-23', 'IDE-CPP-23', 'IDE-JS-23', 'IDE-React-23', 'IDE-Multi-23'];
    var isValid = validProductIDs.includes(productIDInput.value);
    updateValidationStyle(productIDInput, isValid);
}

function validateMessage() {
    var messageInput = document.getElementById('message');
    var isValid = messageInput.value.length > 10 && messageInput.value.length < 30;
    updateValidationStyle(messageInput, isValid);
}

function updateValidationStyle(element, isValid) {
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function openWebsite() {

    window.location.href = "https://www.youtube.com/watch?v=rCNSDYHXhcs&ab_channel=OutdoorBoys";
}
