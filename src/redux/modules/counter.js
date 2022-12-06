// src/redux/modules/counter.js

//Action value
const ADD_BUTTON = "ADD_BUTTON";
const DELETE_BUTTON = "DELETE_BUTTON";
const CHANGE_BUTTON = "CHANGE_BUTTON";
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
        number: state.number + action.payload,
      };
    }
    case DELETE_BUTTON: {
      return {
        number: state.number - action.payload,
      };
    }
    case CHANGE_BUTTON: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};
//export default reducer
export default counter;
