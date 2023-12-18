import { useState } from "react";
import StyledButton from "./StyledComponent";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>{count}</h2>
      <StyledButton onClick={() => setCount(count + 1)}>
        Increment button
      </StyledButton>
    </div>
  );
}

export default Counter;
