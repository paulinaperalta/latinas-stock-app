import React from "react";
import { useEffect, useState } from "react";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";

export default function Depositar() {
  const [members, setMembers] = useState([]);

  const handleAddMember = (member) => {
    setMembers([member, ...members]);
  };

  return (
    <div className="component">
      <MemberForm onSubmit={handleAddMember} />
      <MemberList data={members} />
    </div>
  );
}
