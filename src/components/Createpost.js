import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Createpost = ({ isAuth }) => {
  const usecollection = collection(db, "posts");

  let navigate = useNavigate();

  const addBlog = async () => {
    await addDoc(usecollection, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    }).catch((error) => console.log(error));
    navigate("/");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/login");
    }
  }, []);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <h2>Create Post</h2>
      <div className="title">
        <label>Title: </label>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="text">
        <label>body </label>
        <textarea
          placeholder="title"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={addBlog}>Submit Post</button>
    </Container>
  );
};

export default Createpost;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  textarea {
    width: 400px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    textarea {
      width: fit-content;
    }
  }
`;
