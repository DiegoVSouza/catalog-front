import { useEffect } from "react";
import './HomeView.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "../../Components/Projects/Repositories";
export default function HomeView() {

  return (

    <main>
      <aside></aside>
      <section id="wellcome-section">
        <h1>Hello, nice to see you</h1>
        <h2>These are my private repositories</h2>
        <h3>Feel free to look around</h3>
      </section>
      <AboutMe/>
      <Projects/>
      <article>
        <header>
          <h2>About Me</h2>
        </header>
      </article>
    </main>
  );
}
