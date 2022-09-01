import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import styled from "styled-components";

const Home = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const usecollection = collection(db, "posts");

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getDocs(usecollection);
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, [usecollection]);

  const deletepost = async (id) => {
    const psotdoc = doc(db, "posts", id);
    await deleteDoc(psotdoc);
  };

  return (
    <Container>
      {posts.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="header">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <div>
                <p>{item.author.name}</p>
              </div>
            </div>
            {isAuth && item.author.id === auth.currentUser.uid && (
              <div>
                <button
                  onClick={() => {
                    deletepost(item.id);
                  }}
                >
                  hapus
                </button>
              </div>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .card {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .header {
    display: flex;
    flex-direction: column;
  }
`;
