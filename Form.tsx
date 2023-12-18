import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`your name is: ${name}`);
      }}
    >
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
    </form>
  );
}
export default MyForm;
