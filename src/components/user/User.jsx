import CustomButtonDelete from "../custombutton/CustomButtonDelete";
import CustomButtonComplete from "../custombutton/CustomButtonComplete";
import { Link } from "react-router-dom";

function User(props) {
  return (
    <li className="square-style">
      <Link to={`/todolist/${props.user.id}`}>상세보기</Link>
      <br></br>
      <strong>{props.user.title}</strong>
      <p>{props.user.contents}</p>
      <div className="gp">
        <CustomButtonDelete
          color="white"
          gap="50px"
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </CustomButtonDelete>
        <CustomButtonComplete
          color="white"
          gap="50px"
          onClick={() => {
            props.handleChange(props.user.id);
          }}
        >
          {props.user.done === true ? "완료" : "취소"}
        </CustomButtonComplete>
      </div>
    </li>
  );
}

export default User;
