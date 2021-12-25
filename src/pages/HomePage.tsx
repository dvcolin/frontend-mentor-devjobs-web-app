import { useState } from "react";
import data from "../data.json";
import FilterGroup from "../components/FilterGroup";
import JobPostingList from "../components/JobPostingList";

const HomePage = () => {
  const [jobPosts, setJobPosts] = useState(data);

  const filterJobPosts = (queryString: string) => {
    const filteredPosts = data.filter((post) =>
      post.position.toLowerCase().includes(queryString.toLowerCase())
    );
    setJobPosts(filteredPosts);
  };

  return (
    <>
      <FilterGroup filterJobPosts={filterJobPosts} />
      <JobPostingList posts={jobPosts} />
    </>
  );
};

export default HomePage;
