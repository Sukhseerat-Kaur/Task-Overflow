import {
  ADD_CARD,
  DELETE_CARD,
  ADD_BOARD,
  DELETE_BOARD,
  UPDATE_CARD,
} from "../constants";

let initialStateBoards;
const boardsFromLocalStorage = localStorage.getItem("boards");
if (boardsFromLocalStorage) {
  initialStateBoards = JSON.parse(boardsFromLocalStorage);
} else {
  initialStateBoards = [
    {
      id: 1,
      title: "To do",
      cards: [
        {
          id: 1,
          title: "Card 1",
          tasks: [{ id: 1, taskName: "task1", completed: true }],
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
          date: "2022-02-14",
        },
      ],
    },
  ];

  localStorage.setItem("boards", JSON.stringify(initialStateBoards));
}
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

      localStorage.setItem("boards", JSON.stringify(newArr));
      return newArr;

    case UPDATE_CARD:
      let updatedCardsArray = state[action.payload.boardIndex].cards;
      updatedCardsArray[action.payload.cardIndex] = action.payload.cardContent;

      const updatedBoardsObj = {
        ...state[action.payload.boardIndex],
        cards: updatedCardsArray,
      };

      const updatedState = [...state];
      updatedState[action.payload.boardIndex] = updatedBoardsObj;
      localStorage.setItem("boards", JSON.stringify(updatedState));
      return updatedState;

    case DELETE_CARD:
      let newState = [...state];
      newState[action.payload.boardIndex].cards.splice(
        action.payload.cardIndex,
        1
      );

      localStorage.setItem("boards", JSON.stringify(newState));
      return newState;

    case ADD_BOARD:
      const newBoard = {
        id: state.length + Math.floor(Math.random() * 1000 + 1),
        title: action.payload.boardContent.title,
        cards: [],
      };

      localStorage.setItem("boards", JSON.stringify([...state, newBoard]));
      return [...state, newBoard];

    case DELETE_BOARD:
      let newBoards = [...state];
      newBoards.splice(action.payload.boardIndex, 1);

      localStorage.setItem("boards", JSON.stringify(newBoards));
      return newBoards;

    default:
      return state;
  }
};
