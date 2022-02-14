import React from "react";
import Board from "./components/Board";
import AddCardOrBoard from "./components/AddCardOrBoard";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { addCard, deleteCard } from "./actions/cardActions";

function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  console.log(boards);

  const handleOnDragEnd = (e) => {
    if (!e.destination) return;
    const { source, destination } = e;
    const sourceBoardIndex = parseInt(source.droppableId);
    const destinationBoardIndex = parseInt(destination.droppableId);
    const sourceCardIndex = source.index;
    const destinationIndex = destination.index;
    const cardData = boards[sourceBoardIndex].cards[sourceCardIndex];
    console.log(destinationIndex);
    dispatch(deleteCard(sourceCardIndex, sourceBoardIndex));
    dispatch(addCard(cardData, destinationBoardIndex, destinationIndex));
  };

  return (
    <div className="font-Rajdhani w-screen h-screen bg-yellow-50 flex flex-col gap-4 font-bold">
      <header className="bg-blue-900 w-full h-16 flex justify-center items-center text-5xl text-orange p-9">
        TASK OVERFLOW
      </header>

      <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
        <main className="flex gap-8 p-3 px-5 h-full overflow-x-auto flex-1 w-full">
          {boards.map((board, index) => {
            return (
              <Droppable key={board.id} droppableId={index.toString()}>
                {(provided, snapshot) => {
                  return (
                    <Board
                      boardData={board}
                      boardIndex={index}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  );
                }}
              </Droppable>
            );
          })}
          <div className="w-1/4 min-w-1/4">
            <AddCardOrBoard
              btnText="+ Add Board"
              placeholder="Add board title..."
              btnColor="rgb(30, 58, 138)"
              callingComponent="app"
            />
          </div>
        </main>
      </DragDropContext>
    </div>
  );
}

export default App;
