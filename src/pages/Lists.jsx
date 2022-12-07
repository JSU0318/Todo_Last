import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addButton } from "../redux/modules/counter.js";

const Detail = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.users);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(addButton(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{user.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/todolist");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{user.title}</StTitle>
          <StBody>{user.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
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
