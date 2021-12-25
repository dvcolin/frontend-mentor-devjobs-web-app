import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobPosting } from "../types";
import data from "../data.json";

const JobPositionPage = () => {
  const [job, setJob] = useState<null | JobPosting>(null);
  const { id } = useParams<"id">();

  useEffect(() => {
    const job = data.find((j) => j.id === +id!) || null;

    setJob(job);
  }, [id]);

  return <div>{job && job.position}</div>;
};

export default JobPositionPage;
