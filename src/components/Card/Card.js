import "./style.css";
import turn from "../../assets/turn.png";
import { useState } from "react";
import { text } from "../Card/CardContent";

export default function Card(props) {
  const [isFront, setFrontCard] = useState(true);
  const [cardCounter, setCard] = useState(0);
  const { question, answer } = text[cardCounter];
  const [style, setStyle] = useState("back-card");
  const [isAnswered, setAnswered] = useState(false)

  function ChangeStyle(color) {
    setStyle(`borderColor${color}`);
    setAnswered(true)
  }
  function TryReact() {
    setCard(cardCounter + 1);
    setAnswered(false)
    setFrontCard(true);
    setStyle("");
  }

  function Flip() {
    setFrontCard(false);
  }

  return (
    <>
      {" "}
      {isFront ? (
        <div class="front-card">
          <p class="counter">{cardCounter + 1}/8</p>
          <h1 class="title">{question}</h1>
          <img class="turn" src={turn} onClick={() => Flip()} alt="turn" />
        </div>
      ) : (
        <div className={style}>
          <div class="back-card">
            <p class="counter">{cardCounter + 1}/8</p>
            <h1 class="title-mini">{question}</h1>
            <h3 class="answer">{answer}</h3>
            {isAnswered ? <img class="turn" src={turn} onClick={() => TryReact()} alt="turn" /> : (
            <div class="buttons">
              <button class="black" onClick={() => ChangeStyle("Black")}>
                "Aprendi agora"
              </button>
              <button class="red" onClick={() => ChangeStyle("Red")}>
                "Não lembrei"
              </button>
              <button class="green" onClick={() => ChangeStyle("Green")}>
                "Lembrei com esforço"
              </button>
              <button class="yellow" onClick={() => ChangeStyle("Yellow")}>
                <strong>"Zap!"</strong>
              </button>
              
            </div>
              )}
          </div>
        </div>
      )}
    </>
  );
}
