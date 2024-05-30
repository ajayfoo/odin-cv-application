import { useState } from "react";
import Info from "./Info";
import "../styles/Section.css";

export default function Section({ name }) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <section>
      <header>
        <h2>{name}</h2>
        <button onClick={() => setIsEditMode(!isEditMode)}>
          <svg
            alt="pencil"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
            />
          </svg>
        </button>
      </header>
      <div className="fields">
        <Info name="Name" editMode={isEditMode} />
        <Info name="Email ID" type="email" editMode={isEditMode} />
        <Info name="Phone No." type="tel" editMode={isEditMode} />
      </div>
    </section>
  );
}
