import React from "react";
import { Link } from "react-router-dom";
import social from "../../../../social";
const SocialMedia = () => {
  return (
    <div className="socials">
      {social.map((socials) => {
        const { id, url, icon, fan } = socials;
        return (
          <section key={id} className="social">
            <div className="socBox">
              <Link className="fab" to={url}>
                {icon}
              </Link>
              <span>{fan}</span>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SocialMedia;
