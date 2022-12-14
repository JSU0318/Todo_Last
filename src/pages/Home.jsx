// src/pages/home.js
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <button
      className
      onClick={() => {
        navigate("/todolist");
      }} 
    >
      TodoList로 이동하기
    </button>
  );
};

export default Home;
