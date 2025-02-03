import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrw from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ea53471-ed0c-4630-9ea7-132f7fca787a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
     
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };
    return (
        <div className='contact'>
            <div className='contact-col'>

                <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
                <p>Feel free to reach out throgh contact from or find our Contactinformation below.
                    your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.

                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" />ar7999723@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />+919935859457</li>
                    <li> <img src={location_icon} alt="" />Jankipuram Sector H, Tedhi Puliya Lucknow 226022</li>
                </ul>
                </div>
                <div className='contact-col'></div>
                <form onSubmit={onSubmit}>
                  <label>Name :</label>
        <input type="text" name="name" required/>
        <label>E-mail :</label>
        <input type="email" name="email" required/>
        <label>Message :</label>
        <textarea name="message" required></textarea>

        <button className='btn dark-btn' type="submit">Submit <img src={white_arrw} alt="" /> </button>

      </form>
      <span>{result}</span>
            </div>
            )
}

            export default Contact
