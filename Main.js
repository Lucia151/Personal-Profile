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
        alert("Message successfully sent")
    }
)
.catch(err=>console.log(err));
}
