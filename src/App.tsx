import data from "./data.json";
import Layout from "./components/layout/Layout";
import FilterGroup from "./components/FilterGroup";
import JobPostingList from "./components/JobPostingList";

const App = () => {
  return (
    <Layout>
      <FilterGroup />
      <JobPostingList posts={data} />
    </Layout>
  );
};

export default App;
