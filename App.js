import "./design.css";
import React from "react";
import iniciar from "./iniciar.js";

export default function App() {
  return (
    <div className="App">
      <h1 className="titulo perguntas">PERGUNTAS</h1>
      <h1 className="titulo e">&</h1>
      <h1 className="titulo respostas">RESPOSTAS</h1>
      <button className="btn first" onClick={() => iniciar()}>
        Iniciar jogo
      </button>
    </div>
  );
}
