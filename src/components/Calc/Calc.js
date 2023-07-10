import "./Calc.css";

const Calc = () => {
  return (
    <div className="recalculate radius-border">
      <input
        type="number"
        name="amount"
        placeholder=" to convert"
        className="amount radius-border"
        id="input"
        value="0"
      />
      <select name="currency" id="select" className="currencies radius-border">
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button className="convert-bnt radius-border" id="convertBtn">
        Convert!
      </button>
      <p className="to">To:</p>
      <div className="recalculated">
        <input
          type="number"
          className="converted radius-border"
          id="converted"
          value="0"
          disabled
        />
      </div>
      <p>PLN</p>
    </div>
  );
};
export default Calc;
