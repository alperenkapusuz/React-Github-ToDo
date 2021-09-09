import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/Firebase";
import { Card, Form, Input, Button, Table } from "antd";

const Dashboard = () => {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const addToFirestore = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      db.collection(user.uid).doc(id).set({
        todo: todo,
      });
    });
    setId("");
    setTodo("");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      db.collection(user.uid).onSnapshot((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: "50px", width: "400px", height: "500px" }}>
        <h1>To do</h1>
        <Form>
          <Form.Item>
            <Input value={id} onChange={(e) => setId(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={addToFirestore}>
              Add
            </Button>
          </Form.Item>
        </Form>
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TODO</th>
              </tr>
            </thead>
            <tbody>
            {items.map(({ id, data: { todo } }) => (
              <tr>
                <th scope="row">{id}</th>
                <td>{todo}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card style={{ margin: "50px", width: "400px", height: "500px" }}>

      </Card>
    </div>
  );
};

export default Dashboard;
