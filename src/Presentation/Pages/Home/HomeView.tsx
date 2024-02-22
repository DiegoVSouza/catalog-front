import { useEffect } from "react";
import './HomeView.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";
export default function HomeView() {

  return (

    <main>
      <aside></aside>
      <section id="wellcome-section">
        <h1 id="hello">Hello</h1>
        <h1>nice to see you</h1>
        <h2>These are my private repositories</h2>
        <h3>Feel free to look around</h3>
     
        <div className="cicle"></div>
      </section>
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
