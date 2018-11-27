function sendEmail(){

const name = document.querySelector("#txtName").value
const message = document.querySelector("#txtMessage").value

emailjs.init("user_XlBjymS6gth9SRdMyLZC1")

const template_params = {
    "reply_to": "reply_to_value",
    "from_name": name,
    "to_name": "to_name_value",
    "message_html": message
 }
 
const service_id = "default_service"
const template_id = "template_7nipI0oX"
 emailjs.send(service_id,template_id,template_params)

console.log("Ola " + name)

}