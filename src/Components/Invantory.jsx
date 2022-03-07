import React from "react";
import { useState } from "react";

const Invantory = () => {
  const [book, setBook] = useState(13);
  const [pens, setPens] = useState(10);
  const [notebook, setNotebook] = useState(44);
  const [inkpens, setInkpens] = useState(78);

  const books = (val) => {
    setBook(book + 1);
  };
  const decbook = (val) => {
    setBook(book - 1);
  };
  const pen = (val) => {
    setPens(pens + 1);
  };
  const decpen = (val) => {
    setPens(pens - 1);
  };
  const notebooks = () => {
    setNotebook(notebook + 1);
  };
  const decnotebooks = () => {
    setNotebook(notebook - 1);
  };
  const inkpen = () => {
    setInkpens(inkpens + 1);
  };
  const decinkpen = () => {
    setInkpens(inkpens - 1);
  };
  return (
    <div className="items">
      <h1>Inventory</h1>
      <h2>
        Book{" "}
        <button className="addBook" onClick={() => books(1)}>
          Add Book
        </button>
        <button className="remBook" onClick={() => decbook(-1)}>
          Dec Book
        </button>
      </h2>
      <h2>
        Pens{" "}
        <button className="addPen" onClick={() => pen(1)}>
          Add Pens
        </button>
        <button className="remPen" onClick={() => decpen(-1)}>
          Dec Pens
        </button>
      </h2>
      <h2>
        Notebook{" "}
        <button className="addNotebook" onClick={() => notebooks(1)}>
          Add Notebook
        </button>{" "}
        <button className="remNotebook" onClick={() => decnotebooks(-1)}>
          Dec Notebook
        </button>
      </h2>
      <h2>
        Inkpens{" "}
        <button className="addInkpen" onClick={() => inkpen(1)}>
          Add Inkpens
        </button>{" "}
        <button className="remInkpen" onClick={() => decinkpen(-1)}>
          Dec Inkpens
        </button>
      </h2>

      <div className="total">
        <h2 className="totalBooks">Total Book : {book}</h2>
        <h2 className="totalPens">Total Pens : {pens}</h2>
        <h2 className="totalNotebooks">Total Notebook : {notebook}</h2>
        <h2 className="totalinkpens">Total Inkpens : {inkpens}</h2>
      </div>
      <h1>Total Inavnatory : {book + pens + notebook + inkpens}</h1>
    </div>
  );
};

export default Invantory;