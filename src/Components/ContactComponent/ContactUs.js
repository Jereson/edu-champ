import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import "./ContactStyle.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact (){
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_npm71iv",
//         "template_rlii4i9",
//         form.current,
//         "M7k7IZhugikDKOey4"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <section id="contact" className="our-service-slider">
      
      <h2 className="sub-service-heading">Contact Us</h2>
      <hr className="hoz-line"></hr>

      <div className="contact-body">
      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>educhampsandlogistics@gmail.com</h5>
            <a href="mailto:educhampsandlogistics@gmail.com">Send a message</a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>olugu.jeremiah</h5>
            <a href="https://m.me/olugu.jeremiah" target="_blank">
              Send a message
            </a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348065838441</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348101895306"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* WE WILL BE USING EMAIL JS TO BUILD THE CONTACT US */}
        <form 
        // ref={form} 
        // onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="20"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
      </div>

    </section>
  );
};

export default Contact;
