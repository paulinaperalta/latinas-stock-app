import React from "react";

const Revisar = () => {
  return (
    <div className="component">
      <h2> Mis acciones </h2>
      <div className="myStocks">
        <p>Actualmente tienes:</p>
        <span className="myStockqty">$7,532.11</span>
      </div>
      <div>
        <p className="highlightedText">Inversiones</p>
        <table className="tablewrap">
          <thead>
            <tr>
              <td></td>
              <th className="th-title">
                <span>Precio</span>
              </th>
              <th className="th-title">
                <span>Cambio</span>
              </th>
              <th className="th-title">
                <span>Divisa</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>GOOG</th>
              <td>1,456.20</td>
              <td className="gains">+0.51</td>
              <td>USD</td>
            </tr>
            <tr>
              <th>TWT</th>
              <td>39.45</td>
              <td className="gains">+0.27</td>
              <td>USD</td>
            </tr>
            <tr>
              <th>AMZN</th>
              <td>3214.85</td>
              <td className="gains">+0.42</td>
              <td>USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Revisar;
