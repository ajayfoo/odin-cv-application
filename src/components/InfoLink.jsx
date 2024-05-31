import { useState } from "react";
import "../styles/Info.css";

export default function InfoLink({ editMode, name, initialUrl }) {
  const [inputValue, setInputValue] = useState(initialUrl);
  let field = null;
  if (editMode) {
    field = (
      <>
        <label htmlFor={"info-" + name}>{name}</label>
        <input
          tabIndex={editMode ? 0 : -1}
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
        <a className="value" href={inputValue}>
          Link
        </a>
      </>
    );
  }
  return <div className="info link">{field}</div>;
}
