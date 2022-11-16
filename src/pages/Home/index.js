import { useEffect, useState } from "react";
import "./index.css";
//import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Social } from "../../components/Social";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGit,
} from "react-icons/fa";

import { db } from "../../services/firebaseConnection";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const linksRef = collection(db, "linksname");
    const queryRef = query(linksRef, orderBy("created", "asc"));
    onSnapshot(queryRef, (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bgcolor: doc.data().bgcolor,
          textcolor: doc.data().textcolor,
          created: doc.data().created,
        });
      });

      setLinks(list);
    });
  }, []);

  useEffect(() => {
    function loadUrl() {
      const docRef = doc(db, "socialnetwork", "url");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data !== undefined) {
            setUrls({
              youtube: snapshot.data().youtube,
              facebook: snapshot.data().facebook,
              linkedin: snapshot.data().linkedin,
              github: snapshot.data().github,
              instagram: snapshot.data().instagram,
            });
            //toast.success("Data stored on Firebase database successfully!");
          }
        })
        .catch((error) => {
          toast.error(
            "Failed stored new Data on Firebase Database, try again later : " +
              error
          );
        });
    }
    loadUrl();
  }, []);

  return (
    <div className="home-container">
      <Logo />
      <h1>
        RAIZ<span className="logo-text">TECH</span>
      </h1>
      <span>Look below my links 👇 </span>

      <main className="links">
        {links.map((item, index) => (
          <section
            className="link-area"
            key={index}
            style={{ backgroundColor: item.bgcolor, color: item.textcolor }}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <p className="link-text">{item.name}</p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(urls).length > 0 && (
          <footer>
            <Social url={urls?.youtube}>
              <FaYoutube size={35} color="#FFF" />
            </Social>

            <Social url={urls?.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Social>

            <Social url={urls?.linkedin}>
              <FaLinkedin size={35} color="#FFF" />
            </Social>

            <Social url={urls?.github}>
              <FaGit size={35} color="#FFF" />
            </Social>

            <Social url={urls?.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
