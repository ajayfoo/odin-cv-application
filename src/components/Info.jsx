import { useState } from "react";
import "../styles/Info.css";
import { shortDate } from "../utils/date";

export default function Info({ editMode, name, type, value }) {
  const [inputValue, setInputValue] = useState(value);
  const formattedValue = type === "date" ? shortDate(inputValue) : inputValue;
  let field = null;
  if (editMode) {
    field = (
      <>
        <label htmlFor={"info-" + name}>{name}</label>
        <input
          tabIndex={editMode ? 0 : -1}
          type={type}
          id={"info-" + name}
          className={editMode ? "" : "display"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </>
    );
  } else {
    field = (
      <>
        <p>{name}</p>
        <p>{formattedValue}</p>
      </>
    );
  }
  return <div className="info">{field}</div>;
}
