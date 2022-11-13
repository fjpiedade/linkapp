import "./index.css";
//import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Social } from "../../components/Social";

import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

export default function Home() {
  return (
    <div className="home-container">
      <Logo />
      <h1>
        RAIZ<span className="logo-text">TECH</span>
      </h1>
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

        <footer>
          <Social url="https://youtube.com/@raiztech">
            <FaYoutube size={35} color="#FFF"/>
          </Social>

          <Social url="https://youtube.com/@raiztech">
            <FaLinkedin size={35} color="#FFF"/>
          </Social>

          <Social url="https://youtube.com/@raiztech">
            <FaFacebook size={35} color="#FFF"/>
          </Social>

          <Social url="https://youtube.com/@raiztech">
            <FaInstagram size={35} color="#FFF"/>
          </Social>
        </footer>
      </main>
    </div>
  );
}
