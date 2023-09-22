


// *******************************SEND BUTTON*******************
function sendEmail(){
    var params={
        name: document.getElementById("name").value ,
        email: document.getElementById("your-email").value ,
        postMessage: document.getElementById("your-message").value ,
    };
    const serviceID ="service_s3zuiui";
const templateID = "template_hq73m4m";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("your-email").value="";
        document.getElementById("your-message").value="";
        console.log(res);
        // alert("Message successfully sent")
    }
)
.catch(err=>console.log(err));
}



  function setActiveLink() {
    
    var navLinks = document.querySelectorAll('.nav-link');


    navLinks.forEach(function (link) {
      var sectionId = link.getAttribute('href').substring(1);
      var section = document.getElementById(sectionId);

      
      if (
        section &&
        section.getBoundingClientRect().top <= 50 &&
        section.getBoundingClientRect().bottom >= 50
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);

  window.addEventListener('load', setActiveLink);


