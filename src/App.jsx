import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeDetailSkeleton from "./components/RecipeDetailSkeleton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/skeleton" element={<RecipeDetailSkeleton />} />
      </Routes>
    </Router>
  );
}

export default App;
