import { useState, useEffect } from "react";
import data from "../data/data";
import Stockdisplay from "./Stockdisplay";

export default function Dashboard() {
  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    setTimeout(() => setStocks(data), 1000);
  }, []);

  const loaded = () => {
    return (
      <div className="dashboard">
        <h1>Most Active Stocks</h1>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <Stockdisplay stock={stock} key={stock.symbol} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return stocks ? loaded() : loading();
}
