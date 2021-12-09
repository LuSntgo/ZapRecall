export default function FlashCard(props) {

  return (
    <>
      <img class="logo-mini" src="assets/logo-mini.png" alt="logo-mini" />
      <div class="flashcard">
      <div class="front-card">
          <p class="counter">{props.card}</p>
          <h1 class="title">{props.question}</h1>
          
      </div>
        </div>
    </>
  );
}
function TryReact() {
  alert("Funfa");
}
