type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  // const handleInputChange = (e: React.ChangeEvent<InputEvent>): void => {
  //   console.log(e);
  // };

  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
