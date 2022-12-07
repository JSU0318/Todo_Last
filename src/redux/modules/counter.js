// src/redux/modules/counter.js

// import Todolist from "../../pages/TodoList";

//Action value
const ADD_BUTTON = "ADD_BUTTON";
const DELETE_BUTTON = "DELETE_BUTTON";
const CHANGE_BUTTON = "CHANGE_BUTTON";
//const GET_TODO_BY_ID = "GET_TODO_BY_ID";
//Action Creator

export const addButton = (payload) => {
  return {
    type: ADD_BUTTON,
    payload,
  };
};
export const deleteButton = (payload) => {
  return {
    type: DELETE_BUTTON,
    payload,
  };
};

export const changeButton = (payload) => {
  return {
    type: CHANGE_BUTTON,
    payload,
  };
};

// export const getTodoByID = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };
// Initial State

const initialState = {
  users: [
    { id: 1, done: true, title: "리액트 공부하기", contents: "기초공부합니다" },
    {
      id: 2,
      done: false,
      title: "리액트 공부하기",
      contents: "기초공부합니다",
    },
  ],
};
//Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON: {
      return {
        users: [...state.users, action.payload],
      };
    }
    case DELETE_BUTTON: {
      return {
        users: state.users.filter((users) => users.id !== action.payload),
      };
    }
    case CHANGE_BUTTON: {
      // if (payload.user.done === true) {
      //   payload.user.done = false;
      // } else {
      //   payload.user.done = true;
      // }
      return {
        users: state.users.map((users) =>
          users.id === action.payload ? { ...users, done: !users.done } : users
        ),
      };
    }
    // case GET_TODO_BY_ID: {
    //   return {
    //     users: state.user.filter((users) => users.id === action.payload),
    //   };
    // }
    default:
      return state;
  }
};
//export default reducer
export default counter;
