import React, { useState } from "react";

const MemberForm = ({ onSubmit }) => {
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
    setData({});
  };

  return (
    <form className="member-form" onSubmit={handleOnSubmit}>
      <h2>Depositar fondos</h2>
      <div className="myStocks">
        <label htmlFor="name">$</label>
        <input
          placeholder="Ingresa la cantidad"
          name="name"
          className="deposit-form_input"
          value={data.name}
          onChange={handleInputChange}
        />
        <button className="buttonDeposit" type="submit">
          Depositar
        </button>
      </div>
    </form>
  );
};

MemberForm.defaultProps = {
  onSubmit: () => {}
};

export default MemberForm;
