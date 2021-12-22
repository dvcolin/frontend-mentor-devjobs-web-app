import data from "./data.json";
import Layout from "./components/layout/Layout";
import JobPostingList from "./components/JobPostingList";

const App = () => {
  return (
    <Layout>
      <JobPostingList posts={data} />
    </Layout>
  );
};

export default App;
