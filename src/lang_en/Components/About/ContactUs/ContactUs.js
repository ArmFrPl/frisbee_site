import React from 'react';
import './contactUs.css';

class ContactUs extends React.Component {
  render(){
    return (
      <div className="ContactUs">
        <div className="container">
          <h1>Contact Us</h1>
          <form>
            <table>
              <tbody>
                <tr>
                  <td><p>Adress:</p></td>
                  <td><p>16 Halabyan, Yerevan, Armenia</p></td>
                </tr>
                <tr>
                  <td><p>Phone:</p></td>
                  <td><p>37496491549</p></td>
                </tr>
                <tr>
                  <td><p>Email:</p></td>
                  <td><p>armnuff@gmail.com</p></td>
                </tr>
              </tbody>
            </table>
          </form>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2477.032630509559!2d44.479541690208464!3d40.194493622457856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd748bc3f737%3A0x2aa5553cb11f9d14!2sTumanyan%20Park!5e0!3m2!1sen!2sus!4v1593206789907!5m2!1sen!2sus"
            width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
            tabIndex="0" title={'map'}/>

          <h2>In Social Media</h2>
          <div className="socMed">
            <p>
              <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/Armfrisbee/">Facebook</a>
            </p>
            <p>
              <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/ultimate_armenia/">Instagram</a>
            </p>
            <p>
              <a target='_blank' rel='noopener noreferrer' href="https://www.youtube.com/channel/UCP3G6qKYG3z1gGaGU-jKGNw">Youtube</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
