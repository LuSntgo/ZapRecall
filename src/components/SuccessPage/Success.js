import './style.css';
import happy from "../../assets/party.png";

export default function Success() {
    return (
        <>
        <div class="center">
        <div class="successPage">
        <h1 class="title-success">PARABÉNS!
        <img class="happy" src={happy}></img>
        </h1>
        <p class="textSuccess">Você não esqueceu de nenhum flashcard!!</p>
        </div>
        </div>
        </>

    )
}