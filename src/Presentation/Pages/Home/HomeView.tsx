import { useEffect } from "react";
import './HomeView.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import AboutMe from "../../Components/AboutMe/AboutMe";
export default function HomeView() {
  // const {
  //   getTodos,
  //   createTodo,
  //   onChangeValue,
  //   toggleRead,
  //   removeTodo,
  //   value,
  //   todos,
  // } = useViewModel();

  return (

    <main>
      <aside></aside>
      <section id="wellcome-section">
        <h1>Hello, nice to see you</h1>
        <h2>These are my private repositories</h2>
        <h3>Feel free to look around</h3>
      </section>
      <AboutMe/>
      
      <article>
        <header>
          <h2>About Me</h2>
        </header>
      </article>
    </main>
  );
}
