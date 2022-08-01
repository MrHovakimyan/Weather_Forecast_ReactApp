import React from "react";
import sunnyIcon from "../media/aboutUs/sunn.png";
import thunderIcon from "../media/aboutUs/thunder.png";
import rainyIcon from "../media/aboutUs/rain.png";
import tMemb1 from "../media/aboutUs/TeamMember1.jpg";
import tMemb2 from "../media/aboutUs/TeamMember2.jpg";
import tMemb3 from "../media/aboutUs/TeamMember3.jpg";
import tMemb4 from "../media/aboutUs/TeamMember4.jpg";

const AboutUs = () => {
  return (
    <section className="aboutUs">
      {/* Section intro */}
      <div className="aboutUs-content">
        <div className="aboutUs-content-title">about us</div>
        <div className="aboutUs-content-horizSeparator"></div>
        <div className="aboutUs-content-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione asperiores qui ullam
          vel. Rerum recusandae vitae sint at animi fuga laboriosam tempore dolores, repudiandae
          odit, quod, ab nostrum praesentium necessitatibus culpa sed tenetur. Quis officia
          doloremque fugiat sunt dolores officiis repellat nihil doloribus quia mollitia ipsa
          molestias quaerat deserunt, itaque perferendis laborum consequatur quidem in.
        </div>
      </div>
      {/*Icons*/}
      <div className="aboutUs-iconsWrpr">
        {/*  First Icon */}
        <div className="aboutUs-iconsWrpr-icon">
          <img src={thunderIcon} alt="icon" className="aboutUs-iconsWrpr-icon-image" />
          <div className="aboutUs-iconsWrpr-icon-name">Weather Desktop App</div>
          <div className="aboutUs-iconsWrpr-icon-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit iusto ea esse
            dicta eaque molestias possimus.
          </div>
        </div>
        {/* Second Icon */}
        <div className="aboutUs-iconsWrpr-icon">
          <img src={sunnyIcon} alt="icon" className="aboutUs-iconsWrpr-icon-image" />
          <div className="aboutUs-iconsWrpr-icon-name">Weather Mobile App</div>
          <div className="aboutUs-iconsWrpr-icon-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit iusto ea esse
            dicta eaque molestias possimus.
          </div>
        </div>
        {/* Third Icon */}
        <div className="aboutUs-iconsWrpr-icon">
          <img src={rainyIcon} alt="icon" className="aboutUs-iconsWrpr-icon-image" />
          <div className="aboutUs-iconsWrpr-icon-name">Weather Forecast</div>
          <div className="aboutUs-iconsWrpr-icon-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit iusto ea esse
            dicta eaque molestias possimus.
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="aboutUs-ourTeam">
        <div className="aboutUs-ourTeam-infoWrpr">
          <div className="aboutUs-ourTeam-infoWrpr-title">Meet our team</div>
          <div className="aboutUs-ourTeam-infoWrpr-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas dicta praesentium
            sunt soluta, quod maiores unde illum animi vero dolorem dolore nisi autem, ratione
            beatae asperiores repellendus quos iusto.
          </div>
        </div>

        <div className="aboutUs-ourTeam-membersWrpr">
          {/* First Member */}
          <div className="aboutUs-ourTeam-membersWrpr-tMember">
            <img
              src={tMemb1}
              alt="Team Member"
              className="aboutUs-ourTeam-membersWrpr-tMember-pic"
            />
            <div className="aboutUs-ourTeam-membersWrpr-tMember-name">Joyce Hudson</div>
            <div className="aboutUs-ourTeam-membersWrpr-tMember-position">Founder & Designer</div>
          </div>
          {/* Second Member */}
          <div className="aboutUs-ourTeam-membersWrpr-tMember">
            <img
              src={tMemb2}
              alt="Team Member"
              className="aboutUs-ourTeam-membersWrpr-tMember-pic"
            />
            <div className="aboutUs-ourTeam-membersWrpr-tMember-name">Mike Creston</div>
            <div className="aboutUs-ourTeam-membersWrpr-tMember-position">Mobile Developer</div>
          </div>
          {/* Third Member */}
          <div className="aboutUs-ourTeam-membersWrpr-tMember">
            <img
              src={tMemb3}
              alt="Team Member"
              className="aboutUs-ourTeam-membersWrpr-tMember-pic"
            />
            <div className="aboutUs-ourTeam-membersWrpr-tMember-name">Joyce Hudson</div>
            <div className="aboutUs-ourTeam-membersWrpr-tMember-position">Meteorologist</div>
          </div>
          {/* Fort Member */}
          <div className="aboutUs-ourTeam-membersWrpr-tMember">
            <img
              src={tMemb4}
              alt="Team Member"
              className="aboutUs-ourTeam-membersWrpr-tMember-pic"
            />
            <div className="aboutUs-ourTeam-membersWrpr-tMember-name">Joyce Hudson</div>
            <div className="aboutUs-ourTeam-membersWrpr-tMember-position">
              CEO/Software Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
