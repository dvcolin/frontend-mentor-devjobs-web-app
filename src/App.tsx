import { useState } from "react";
import data from "./data.json";
import Layout from "./components/layout/Layout";
import FilterGroup from "./components/FilterGroup";
import JobPostingList from "./components/JobPostingList";

const App = () => {
  const [jobPosts, setJobPosts] = useState(data);

  const filterJobPosts = (queryString: string) => {
    const filteredPosts = data.filter((post) =>
      post.position.toLowerCase().includes(queryString.toLowerCase())
    );
    setJobPosts(filteredPosts);
  };

  return (
    <Layout>
      <FilterGroup filterJobPosts={filterJobPosts} />
      <JobPostingList posts={jobPosts} />
    </Layout>
  );
};

export default App;
