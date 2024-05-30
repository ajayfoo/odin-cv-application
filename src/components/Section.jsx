import { useState } from "react";
import Info from "./Info";
import "../styles/Section.css";

export default function Section({ name }) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <section>
      <header>
        <h2>{name}</h2>
        <button onClick={() => setIsEditMode(!isEditMode)}>Toggle Edit</button>
      </header>
      <div className="fields">
        <Info name="Name" editMode={isEditMode} />
        <Info name="Email ID" type="email" editMode={isEditMode} />
        <Info name="Phone No." type="tel" editMode={isEditMode} />
      </div>
    </section>
  );
}
