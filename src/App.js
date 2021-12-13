import MainPage from "./components/MainPage/MainPage";
import FlashCard from "./components/FlashCardPage/FlashCard";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Fail from "./components/FailurePage/Fail";
import Success from "./components/SuccessPage/Success";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/card" element={<FlashCard />} />
      <Route exact path="/fail" element={<Fail />} />
      <Route exact path="/Success" element={<Success />} />
      </Switch>
    </Router>
  );
}
