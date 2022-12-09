//import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//import { getTodoByID } from "../redux/modules/counter.js";

const Detail = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.users);
  const navigate = useNavigate();
  const param = useParams();
  // const { id } = useParams();

  const getid = user.find((user) => user.id === parseInt(param.id));
  // useEffect(() => {
  //   dispatch(addButton(user));
  // }, [dispatch, user]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {getid.id} </div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/todolist");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{getid.title}</StTitle>
          <StBody>{getid.contents}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 5px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 5px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export default Detail;
