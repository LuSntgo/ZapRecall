import './style.css';
import sad from "../../assets/sad.png";

export default function Fail() {
    return (
        <>
        <div class="center">
        <div class="failPage">
        <h1 class="title-Fail">Putz..
        <img class="sad" src={sad}></img>
        </h1>
        <p class="textFail">Você esqueceu alguns flashcards... 
        <br />
        Não desanime! Na próxima você consegue!</p>
        </div>
        </div>
        </>

    )
}