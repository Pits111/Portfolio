import emailjs from "emailjs-com";
import './Contact.css'; 

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_123",
        "template_I5qsr8t",
        e.target,
        "user_wZ0KNqiOqPUj7Ez8SnqU5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  
   
  }

  return (
    <div>
      <div className="contact-container">
        <div className="form-page">
          <h1 className="contact-us">Get in touch</h1>
          <br></br>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="input-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="input-form">
                <textarea
                  className="form-control"
                  id="text-area"
                  cols="30"
                  rows="8"
                  placeholder="Type here your message..."
                  name="message"
                />
              </div>
              <div className="input-form">
                <input className="button-contact" type="submit" value="Send"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 