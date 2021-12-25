import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import JobPositionPage from "./pages/JobPositionPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<JobPositionPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
