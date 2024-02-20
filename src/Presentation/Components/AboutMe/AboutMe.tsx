import { useEffect } from "react";
import './AboutMe.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function AboutMe() {

  return (
      <section>
        <h2>About Me</h2>
        <h3>Diego Vieira de Souza</h3>
        <p>
          Student Developer
        </p>
        <dl>
          <dt><TbBrandGithubFilled/> GitHub</dt>
          <dd><a href="https://github.com/DiegoVSouza">My profile on gitHub</a></dd>
          <dt><FaPhoneAlt/>Phone</dt>
          <dd>(88) 9 97974229</dd>
          <dt><FaLinkedinIn/> Linkedin</dt>
          <dd><a href="https://www.linkedin.com/in/diegovsouza99">My Profile on Linkedin</a></dd>
          <dt><SiGmail/> Gmail</dt>
          <dd><a href="mailto:dvsdiegovieira@gmail.com">dvsdiegovieira@gmail.com</a></dd>
        </dl>
      </section>
  );
}
