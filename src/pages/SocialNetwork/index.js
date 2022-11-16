import { useEffect, useState } from "react";
import "./index.css";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

export default function Admin() {
  const [youtube, setYoutube] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    function loadUrl() {
      const docRef = doc(db, "socialnetwork", "url");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data !== undefined) {
            setYoutube(snapshot.data().youtube);
            setFacebook(snapshot.data().facebook);
            setLinkedin(snapshot.data().linkedin);
            setGithub(snapshot.data().github);
            setInstagram(snapshot.data().instagram);
            toast.success("Data stored on Firebase database successfully!");
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

  function handleRegister(e) {
    e.preventDefault();

    if (youtube === "" || facebook === "") {
      toast.warn("Fill all fields, try again later!");
      return;
    }
    setDoc(doc(db, "socialnetwork", "url"), {
      youtube: youtube,
      facebook: facebook,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      created: new Date(),
    })
      .then(() => {
        setYoutube("");
        setFacebook("");
        setLinkedin("");
        setGithub("");
        setInstagram("");
        toast.success("Data stored on Firebase database successfully!");
      })
      .catch((error) => {
        toast.error(
          "Failed stored new Data on Firebase Database, try again later : " +
            error
        );
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <Logo />
      <h1 className="title">Your Social Networks</h1>

      <form className="form-admin" onSubmit={handleRegister}>
        <label className="label">Youtube Link</label>
        <Input
          type="url"
          placeholder="URL of Link..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <label className="label">Facebook Link</label>
        <Input
          type="url"
          placeholder="Name of Link..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">LinkedIn Link</label>
        <Input
          type="url"
          placeholder="URL of Link..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="label">Github Link</label>
        <Input
          type="url"
          placeholder="URL of Link..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <label className="label">Instagram Link</label>
        <Input
          type="url"
          placeholder="URL of Link..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button className="btn-register" type="submit">
          Save all URL <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}
