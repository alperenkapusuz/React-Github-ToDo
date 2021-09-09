import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/Firebase";
import { Card, Form, Input, Button } from "antd";
import {DeleteOutlined} from '@ant-design/icons'
import './Dashboard.css'

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
    <div className="div">
      <div className="div1">
      <Card style={{ margin: "50px", width: "400px" }}>
        <h1>To do</h1>
        <Form>
          <Form.Item>
            <Input value={id} placeholder="Id" onChange={(e) => setId(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Input value={todo} placeholder="todo" onChange={(e) => setTodo(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ marginLeft:"140px"}} onClick={addToFirestore}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
      </div>
      <div className="div2">
      <Card style={{ margin: "50px", width: "400px", height:"275px" }}>
      <div className="table-div">      
          <table >
            <tbody>
            {items.map(({ id, data: { todo } }) => (
              <tr className="table-data">
                <th scope="row">{id}.</th>
                <td>{todo}</td>
                <td><DeleteOutlined onClick={()=>removeToFirestore({id})} style={{color:"red" ,marginLeft:"20px"}}/></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default Dashboard;
