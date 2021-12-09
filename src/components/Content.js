import FlashCard from "./FlashCard";

const text = [
  {
    question: "O que é JSX?",
    answer:
      "O JSX é uma extensão de sintaxe para JavaScript, que pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.",
    card: "1/8",
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces.",
    card: "2/8",
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "Letra maiúscula.",
    card: "3/8",
  },
  {
    question: "Podemos colocar __ dentro do JSX ",
    answer: "Expressões.",
    card: "4/8",
  },
  {
    question: "O ReactDOM nos ajuda __ ",
    answer: "interagindo com a DOM para colocar componentes React na mesma.",
    card: "5/8",
  },
  {
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências.",
    card: "6/8",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes.",
    card: "7/8",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    card: "8/8",
  },
];

  export default function Content(){
      return (
        <>
        {text.map((t) => (< FlashCard question={t.question} answer={t.answer} card={t.card} />
        ))}
        </>
      )
  }