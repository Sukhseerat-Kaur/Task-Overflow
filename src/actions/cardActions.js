import { ADD_CARD, DELETE_CARD, UPDATE_CARD } from "../constants";

export const addCard = (cardContent, boardIndex, indexToAddCardAt = -1) => {
  return {
    type: ADD_CARD,
    payload: {
      cardContent: cardContent,
      indexToAddCardAt: indexToAddCardAt,
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

export const updateCard = (cardIndex, boardIndex, cardContent) => {
  return {
    type: UPDATE_CARD,
    payload: {
      cardIndex: cardIndex,
      boardIndex: boardIndex,
      cardContent: cardContent,
    },
  };
};
