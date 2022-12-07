// src/pages/Works.js
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../components/custombutton/CustomButton";
// import CustomButtonComplete from "../components/custombutton/CustomButtonComplete";
// import CustomButtonDelete from "../components/custombutton/CustomButtonDelete";
import {
  addButton,
  deleteButton,
  changeButton,
} from "../redux/modules/counter";
import User from "../components/user/User";

function Todolist() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const user = useSelector((state) => state.counter.users);
  const dispatch = useDispatch();

  const addUserHandler = () => {
    dispatch(
      addButton({
        id: Math.floor(Math.random() * 10000),
        title: title,
        contents: contents,
        done: true,
      })
    );
  };
  const deleteUserHandler = (id) => {
    dispatch(deleteButton(id));
  };

  const changeUserHandler = (id) => {
    dispatch(changeButton(id));
  };
  return (
    <div>
      <div className="main">
        <div className="title-content">
          <div className="title">
            <h4>제목</h4>
            <input
              className="input-box"
              value={title}
              placeholder=""
              // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
              onChange={(e) => setTitle(e.target.value)}
            />
            <h4>내용</h4>
            <input
              className="input-box"
              value={contents}
              placeholder=""
              // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
              onChange={(e) => setContents(e.target.value)}
            />
          </div>
          <CustomButton color="#00796b" onClick={addUserHandler} padding>
            추가하기
          </CustomButton>
        </div>
        <h2>&nbsp;&nbsp;Working..🔥</h2>
        <ul className="app-style">
          {user.map((user) =>
            user.done === true ? (
              <User
                handleChange={changeUserHandler}
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            ) : null
          )}
        </ul>
        <h2>&nbsp;&nbsp;Done..!🎉</h2>
        <ul className="app-style">
          {user.map((user) =>
            user.done === false ? (
              <User
                handleChange={changeUserHandler}
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;

/* <div>
      {data.map((todolist) => {
        return (
          <div key={todolist.id}>
            <div>할일: {todolist.id}</div>
            <Link to={`/todolist/${todolist.id}`}>
              <span style={{ cursor: "pointer" }}>
                ➡️ Go to: {todolist.todo}
              </span>
            </Link>
          </div>
        );
      })}
    </div> */
