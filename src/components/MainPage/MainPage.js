import "./style.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


export default function MainPage() {
  return (
    <main class="principal">
      <div class="center">
        <img class="logo" src={logo} alt="logo" />
        <Link to="/card">
        <button data-identifier="start-zap-recall" class="startCard">
          {" "}
          Praticar React{" "}
        </button>
        </Link>
      </div>
    </main>
  );
}
