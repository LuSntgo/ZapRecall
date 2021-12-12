import "./style.css";
import turn from "../../assets/turn.png";
import { useState } from "react";
import { text, buttonOption } from "../Card/CardContent";

export default function Card(props) {
  const [isFront, setFrontCard] = useState(true);
  const [cardCounter, setCard] = useState(0);
  const { question, answer } = text[cardCounter];
  const { button1, button2, button3, button4} = buttonOption;

  function TryReact() {
    setCard(cardCounter + 1);
    setFrontCard(true);
  }

  function Flip() {
    setFrontCard(false);
  }

  return (
    <>
      {isFront ? false : true}
      <div class="front-card hide">
        <p class="counter">{cardCounter + 1}/8</p>
        <h1 class="title">{question}</h1>
        <img class="turn" src={turn} onClick={() => Flip()} alt="turn" />
      </div>
      {isFront ? true : false}
      <div class="back-card">
        <p class="counter">{cardCounter +1}/8</p>
        <h1 class="title-mini">{question}</h1>
        <h3 class="answer">{answer}</h3>
        <div class="buttons">
        <button class="black">{button1}</button>
        <button class="red">{button2}</button>
        <button class="green">{button3}</button>
        <button class="yellow">{button4}</button>
        </div>
      </div>
    </>
  );
}