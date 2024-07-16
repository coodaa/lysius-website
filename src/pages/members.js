// src/pages/members.js
import { fetcher } from "../lib/api";
import { useEffect, useState } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      const data = await fetcher("/members");
      setMembers(data);
    };

    getMembers();
  }, []);

  if (!members.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Members</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
