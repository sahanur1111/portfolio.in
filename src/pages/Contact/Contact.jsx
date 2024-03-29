import { useState } from "react";
import emailjs from "@emailjs/browser";
import  Swal  from "sweetalert2";
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // EmailJS service ID and template ID, and public key
    const serviceId = "service_vppuwsj";
    const templateId = "template_28q8ika";
    const publickKey = "Zc0VG_KSAvY09cXsb";

    // Create a new object that dynamic temple params

    const templateParams = {
      from_name: name,
      form_email: email,
      to_name: "Sahanur",
      message: message,
    };

    // send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        if(response){
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: `Hey ${name}, Your Message has been sent`,
          showConfirmButton: false,
          timer: 1500
        });
      }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error sending email:", err);
      });
  };
 

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.49893573501!2d88.4110555734898!3d22.56043523341948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1710339721890!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              
            />

            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            className="form-input"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
