import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div className="font-Rajdhani w-screen h-screen bg-yellow-50 flex flex-col gap-8 font-bold">
      <header className="bg-blue-900 w-full h-16 flex justify-center items-center text-5xl text-orange p-9">
        TASK OVERFLOW
      </header>

      <div className="overflow-x-auto w-full flex-1">
        <main className="flex gap-8 p-3 h-full">
          <Board />
          <Board />
          <Board />
        </main>
      </div>
    </div>
  );
}

export default App;
