import "../styles/Info.css";

export default function Info({ editMode, name, type }) {
  const label = editMode ? (
    <label htmlFor={"info-" + name}>{name}</label>
  ) : (
    <p>{name}</p>
  );
  return (
    <div className="info">
      {label}
      <input
        tabIndex={editMode ? 0 : -1}
        type={type}
        id={"info-" + name}
        className={editMode ? "" : "display"}
      />
    </div>
  );
}
