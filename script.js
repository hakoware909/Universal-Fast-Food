let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
};

const orderButton = document.querySelector('.myform .btn');
orderButton.addEventListener('click', openPopup);

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true,
});

sr.reveal('.myimage', { delay: 350, origin: 'left' });
sr.reveal('.home .content', { delay: 350, origin: 'right' });
sr.reveal('.speciality', { delay: 350, origin: 'top' });
sr.reveal('.popular', { delay: 350, origin: 'bottom' });
sr.reveal('.gallery', { delay: 350, origin: 'bottom' });
sr.reveal('.review .box', { delay: 350, origin: 'top' });
sr.reveal('.myform', { delay: 350, origin: 'bottom' });

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("number").value;
  var address = document.getElementById("address").value;

  if (name === "" || email === "" || password === "" || number === "" || address === "") {
      alert("Fill up first");
      return false;
  }

  return true;
}


Email.send({
    SecureToken : "f1f2e26f-bd87-400d-8367-ec12b0baf030",
    To : 'boruto321133@gmail.com',
    From : "boruto321133@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
