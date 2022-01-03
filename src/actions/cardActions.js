import { ADD_CARD, DELETE_CARD } from "../constants";

export const addCard = (cardContent, boardIndex) => {
  return {
    type: ADD_CARD,
    payload: {
      cardContent: cardContent,
      boardIndex: boardIndex,
    },
  };
};

export const deleteCard = (cardIndex, boardIndex) => {
  return {
    type: DELETE_CARD,
    payload: {
      cardIndex: cardIndex,
      boardIndex: boardIndex,
    },
  };
};
