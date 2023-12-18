interface props {
  condition: boolean;
}

function CheckBool({ condition }: props) {
  return condition ? <h1>Prop is True</h1> : <h1>prop is False</h1>;
}
export default CheckBool;
