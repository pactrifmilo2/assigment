import styled, { createGlobalStyle, css } from "styled-components";

const StyledButton = styled.button<{}>`
  /* Adapt the colors based on primary prop */
  background: ${() => "#BF4F74"};
  color: ${() => "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
export default StyledButton;