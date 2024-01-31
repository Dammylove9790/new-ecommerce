
  // Product details
  var productdetails = document.querySelector('.product-button')


function shareOnWhatsApp(productdetails) {

    console.log(productdetails.parentNode.previousElementSibling.firstElementChild.innerHTML)

    console.log(productdetails.parentNode.previousElementSibling.firstElementChild.nextElementSibling.innerHTML)

    console.log(productdetails.parentNode.previousElementSibling.lastElementChild.firstElementChild.innerHTML)
    //   // Create the WhatsApp message
//   var message = encodeURIComponent(
//     `Check out this product:\n\nName: ${productdetails.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML}\nPrice: ${productdetails.previousElementSibling.previousElementSibling.innerHTML}\nDescription: ${productdetails.previousElementSibling.innerHTML}`
//   );

//   // Specify the phone number
//   var phoneNumber = "+2347057878050";

//   // Create the WhatsApp share link
//   var whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

//   // Open WhatsApp in a new window with the pre-filled message
//   window.open(whatsappLink, '_blank');
}
