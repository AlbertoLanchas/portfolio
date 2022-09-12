import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/alberto-lanchas" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/AlbertoLanchas" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
