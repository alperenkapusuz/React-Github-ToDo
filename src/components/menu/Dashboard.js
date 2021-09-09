import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/Firebase";
import { Card, Form, Input, Button } from "antd";
import {DeleteOutlined} from '@ant-design/icons'

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

  const removeToFirestore = (item) => {
     auth.onAuthStateChanged((user) => {
          db.collection(user.uid).doc(`${item.id}`).delete()
        })
      }
  

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
      <Card style={{ margin: "50px", width: "400px" }}>
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
      </Card>
      <Card style={{ margin: "50px", width: "400px" }}>
      <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >      
          <table >
            <tbody>
            {items.map(({ id, data: { todo } }) => (
              <tr>
                <th scope="row">{id}.</th>
                <td>{todo}</td>
                <td><DeleteOutlined onClick={()=>removeToFirestore({id})}/></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
