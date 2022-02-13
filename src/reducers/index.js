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
        date: "2022-02-12",
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
        id: action.payload.cardContent.id
          ? action.payload.cardContent.id
          : state[action.payload.boardIndex].cards.length +
            Math.floor(Math.random() * 1000 + 1),
        title: action.payload.cardContent.title,
        label: [],
        tasks: [],
        date: "",
        desc: "",
      };
      let updatedCards = [...state[action.payload.boardIndex].cards];
      let addAt =
        action.payload.indexToAddCardAt !== -1
          ? action.payload.indexToAddCardAt
          : updatedCards.length;
      console.log(addAt);
      updatedCards.splice(addAt, 0, newCard);
      console.log("cards", updatedCards);
      const updatedBoard = {
        ...state[action.payload.boardIndex],
        cards: [...updatedCards],
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
        id: state.length + Math.floor(Math.random() * 1000 + 1),
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
