import React from "react";
import { MAP_URL } from "../api/configs";

const ContactUs = () => {
  return (
    <section className="contactUs">
      {/* Get in Touch */}
      <div className="contactUs-getInTouch">
        <div className="contactUs-getInTouch-Twrpr">
          <div className="contactUs-getInTouch-Twrpr-title">Get in Touch With Us</div>
          <div className="contactUs-getInTouch-Twrpr-horizSeparator"></div>
          <div className="contactUs-getInTouch-Twrpr-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quibusdam nemo eum,
            libero consectetur dolores veniam blanditiis natus magni, quae quas iusto.
          </div>
        </div>

        <div class="contactUs-getInTouch-feedbackInfo">
          <input
            type="text"
            class="contactUs-getInTouch-feedbackInfo-user-details"
            placeholder="Name"
          />
          <input
            type="text"
            class="contactUs-getInTouch-feedbackInfo-user-details"
            placeholder="Email"
          />
          <input
            type="text"
            class="contactUs-getInTouch-feedbackInfo-user-details"
            placeholder="Subject"
          />
          <textarea
            name="message"
            class="contactUs-getInTouch-feedbackInfo-contact_massage"
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <button class="contactUs-getInTouch-feedbackInfo-btn">submit</button>
        </div>
      </div>
      <iframe className="contactUs-MapImg" src={MAP_URL}></iframe>
    </section>
  );
};

export default ContactUs;
