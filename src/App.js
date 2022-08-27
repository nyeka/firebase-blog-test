import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import styled from "styled-components";
import { async } from "@firebase/util";

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newName, setNewname] = useState("");
  const [age, setAge] = useState("");
  const usercollection = collection(db, "users");

  const newUser = async () => {
    try {
      setLoading(true);
      await addDoc(usercollection, { name: newName, age: age });
      setTimeout(() => {
        fetchData();
      }, 1000);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const deleteUser = async () => {
    const user = await doc(db, "users");
  };

  // useEffect(() => {

  //   fetchData();
  // }, [usercollection]);
  const fetchData = async () => {
    try {
      const data = await getDocs(usercollection);
      setdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container">
      <div className="form">
        <input
          type="text"
          placeholder="input your name"
          value={newName}
          onChange={(e) => setNewname(e.target.value)}
        />
        <input
          type="number"
          placeholder="input your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={newUser}>Submit</button>
      </div>
      {loading ? (
        <div>loading</div>
      ) : (
        data.map((item, index) => {
          return (
            <div key={index} className="content">
              <h3>Name: {item.name}</h3>
              <p>Age: {item.age}</p>
            </div>
          );
        })
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content {
  }
`;
