import React, { useState } from "react";
import Board from "./components/Board";
import Editable from "./components/Editable";

function App() {
  const [boards, setBoards] = useState([
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
  ]);

  return (
    <div className="font-Rajdhani w-screen h-screen bg-yellow-50 flex flex-col gap-4 font-bold">
      <header className="bg-blue-900 w-full h-16 flex justify-center items-center text-5xl text-orange p-9">
        TASK OVERFLOW
      </header>

      <main className="flex gap-8 p-3 px-5 h-full overflow-x-auto flex-1 w-full">
        {boards.map((board, index) => (
          <Board key={index} boardData={board} />
        ))}
        <div className="w-1/4 min-w-1/4">
          <Editable
            text="+ Add Board"
            placeholder="Add board title..."
            btnColor="rgb(30, 58, 138)"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
