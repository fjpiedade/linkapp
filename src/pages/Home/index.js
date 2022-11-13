import "./index.css";
//import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";

export default function Home() {
  return (
    <div className="home-container">
      <Logo />
      <h1>RAIZTECH</h1>
      <span>Look below my links 👇 </span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Youtube Channel</p>
          </a>
        </section>

        <section className="link-area">
          <a href="#">
            <p className="link-text">Facebook Page</p>
          </a>
        </section>

        <section className="link-area">
          <a href="#">
            <p className="link-text">LinkedIn Profile</p>
          </a>
        </section>

      </main>
    </div>
  );
}
