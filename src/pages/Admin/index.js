import { useState } from "react";
import "./index.css";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { FiTrash2 } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  async function handleRegister(e) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      toast.warn("Fill all fields, try again later!");
      return;
    }
    addDoc(collection(db, "linksname"), {
      name: nameInput,
      url: urlInput,
      bgcolor: backgroundColorInput,
      txtcolor: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
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

      <form className="form-admin" onSubmit={handleRegister}>
        <label className="label">Name of Link</label>
        <Input
          placeholder="Name of Link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">URL of Link</label>
        <Input
          type="url"
          placeholder="URL of Link..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
          <div>
            <label className="label right">Link ForeColor</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>

          <div>
            <label className="label right">Link TextColor</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label className="label">See how is it going bellow</label>
            <article
              className="list"
              style={{
                marginTop: 8,
                marginBottom: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Register <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="title">My Links</h2>

      <article
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Group exclusive of Telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
}
