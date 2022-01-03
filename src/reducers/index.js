import { ADD_CARD, DELETE_CARD, ADD_BOARD, DELETE_BOARD } from "../constants";

const initialStateBoards = [
  {
    id: 1,
    title: "To do",
    cards: [
      {
        id: 1,
        title: "Card 1",
        tasks: [],
        labels: [
          {
            text: "urgent",
            color: "red",
          },
        ],
        desc: "have to finish now",
        date: "29 Nov",
      },
      {
        id: 2,
        title: "Card 2",
        tasks: [],
        labels: [
          {
            text: "important",
            color: "green",
          },
        ],
        desc: "have to finish now 2",
        date: "30 Nov",
      },
    ],
  },
];
export const boardReducer = (state = initialStateBoards, action) => {
  switch (action.type) {
    case ADD_CARD:
      const newCard = {
        id: 100,
        title: action.payload.cardContent.title,
        label: [],
        tasks: [],
        date: "",
        desc: "",
      };

      const updatedCards = [...state[action.payload.boardIndex].cards, newCard];

      const updatedBoard = {
        ...state[action.payload.boardIndex],
        cards: updatedCards,
      };

      let newArr = [...state];

      newArr[action.payload.boardIndex] = updatedBoard;
      return newArr;
    case DELETE_CARD:
      let newState = [...state];
      newState[action.payload.boardIndex].cards.splice(
        action.payload.cardIndex,
        1
      );
      return newState;

    case ADD_BOARD:
      const newBoard = {
        id: 100,
        title: action.payload.boardContent.title,
        cards: [],
      };

      return [...state, newBoard];

    case DELETE_BOARD:
      let newBoards = [...state];
      newBoards.splice(action.payload.boardIndex, 1);

      return newBoards;

    default:
      return state;
  }
};
