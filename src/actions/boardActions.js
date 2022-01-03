import { ADD_BOARD, DELETE_BOARD } from "../constants";

export const addBoard = (boardContent) => {
  return {
    type: ADD_BOARD,
    payload: {
      boardContent: boardContent,
    },
  };
};

export const deleteBoard = (boardIndex) => {
  return {
    type: DELETE_BOARD,
    payload: {
      boardIndex: boardIndex,
    },
  };
};
