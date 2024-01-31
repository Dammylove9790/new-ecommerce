
  // Product details
  var productdetails = document.querySelector('.product-button')


function shareOnWhatsApp(productdetails) {
    console.log(window.location.href)

    console.log(productdetails.parentNode.previousElementSibling.previousElementSibling.src)

    // console.log(productdetails.parentNode.previousElementSibling.firstElementChild.innerHTML)

    // console.log(productdetails.parentNode.previousElementSibling.firstElementChild.nextElementSibling.innerHTML)

    // console.log(productdetails.parentNode.previousElementSibling.lastElementChild.firstElementChild.innerHTML)
  // Product link
//   var productLink = document.getElementById("productLink").href;
  // Create the WhatsApp message
  var message = encodeURIComponent(
    `I'm interested in buying this products.\nCheck out this product:
    
    ${productdetails.parentNode.previousElementSibling.previousElementSibling.src}
    
    Name: ${productdetails.parentNode.previousElementSibling.firstElementChild.innerHTML}Price: ${productdetails.parentNode.previousElementSibling.lastElementChild.firstElementChild.innerHTML}
    Description: ${''}`
  );

  // Specify the phone number
  var phoneNumber = "+2347057878050";

  // Create the WhatsApp share link
  var whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp in a new window with the pre-filled message
  window.open(whatsappLink, '_blank');
}
