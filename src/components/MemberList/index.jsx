import React from "react";
import Member from "./Member";

const MemberList = ({ data }) => {
  return (
    <section>
      {data.length > 0 ? (
        <table>
          <tr>
            <th>Depósitos</th>
          </tr>
          {data.map((member) => (
            <Member key={member.name} {...member} />
          ))}
        </table>
      ) : (
        <p>No hay depósitos </p>
      )}
    </section>
  );
};

MemberList.defaultProps = {
  data: []
};

export default MemberList;
