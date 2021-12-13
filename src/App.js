import MainPage from "./components/MainPage/MainPage";
import FlashCard from "./components/FlashCardPage/FlashCard";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Fail from "./components/Failure/Fail";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/card" element={<FlashCard />} />
      <Route exact path="/fail" element={<Fail />} />
      </Switch>
    </Router>
  );
}
