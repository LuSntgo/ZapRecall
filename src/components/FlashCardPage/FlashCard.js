import "./style.css";
import logoMini from "../../assets/logo-mini.png";
import Card from "../Card/Card";

export default function FlashCard() {
  return (
    <>
      <img class="logo-mini" src={logoMini} alt="logo-mini" />
      <div class="flashcard">
        <Card />
      </div>
    </>
  );
}
