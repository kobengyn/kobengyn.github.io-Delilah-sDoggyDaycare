// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const contactUsButton = document.querySelector("#submit-button");
const contactPage = document.querySelector("#contact-page");

function ContactSubmit() {
    contactPage.innerHTML = "<p>Thank you for your message!</p>";

    const thankYouMessage = contactPage.querySelector("p");
    thankYouMessage.style.fontSize = "24px"; // Set font size
    thankYouMessage.style.textAlign = "center";
}

contactUsButton.addEventListener("click", ContactSubmit);