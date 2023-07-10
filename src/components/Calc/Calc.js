import { useState } from "react";
import axios from "axios";
import "./Calc.css";

const Calc = () => {
  const [inputValue, setInputValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSeletChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const convertValue = () => {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/`)
      .then((response) => {
        const mid = response.data?.rates?.[0]?.mid;
        if (mid) {
          const convertedValue = mid * inputValue;
          setConvertedValue(convertedValue);
        } else {
          alert(
            "Sorry, there was an error while fetching the currency rate, please try later"
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleConvertClick = () => {
    if (inputValue >= 0.01) {
      convertValue();
    }
  };

  return (
    <div className="recalculate radius-border">
      <input
        type="number"
        name="amount"
        placeholder=" to convert"
        className="amount radius-border"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <select
        name="currency"
        id="select"
        className="currencies radius-border"
        value={selectedCurrency}
        onChange={handleSeletChange}
      >
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button
        className="convert-bnt radius-border"
        id="convertBtn"
        onClick={handleConvertClick}
      >
        Convert!
      </button>
      <p className="to">To:</p>
      <div className="recalculated">
        <div className="output radius-border converted">
          <output
            className="converted radius-border output"
            id="converted"
            htmlFor="input"
          >
            {convertedValue}
          </output>
        </div>
      </div>
      <p>PLN</p>
    </div>
  );
};

export default Calc;
