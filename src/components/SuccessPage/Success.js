import './style.css';
import happy from "../../assets/party.png";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <>
        <div class="center">
        <div class="successPage">
        <h1 class="title-success">PARABÉNS!
        <img class="happy" src={happy}></img>
        </h1>
        <p class="textSuccess">Você não esqueceu de nenhum flashcard!!</p>
        <Link to="/">
        <button data-identifier="start-zap-recall" class="restartCard">
          {" "}
          Tentar novamente{" "}
        </button>
        </Link>
        </div>
        </div>
        </>

    )
}