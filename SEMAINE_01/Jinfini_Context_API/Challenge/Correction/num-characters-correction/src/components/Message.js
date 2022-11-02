import { useContext } from "react";
import { CharContext } from "../reducers/characters";

import FormGroup from "../Styles/FormGroup";
import Input from "../Styles/Input";
import Select from "../Styles/Select";
import Button from "../Styles/Button";

const Message = () => {
  const [state, dispatch] = useContext(CharContext);
  const { content, letters, color, colors, size, sizes, message } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({ type: "ON_CHANGE", name: name, value: value });
  };

  const handleChangeSelect = (e) => {
      const { value, name} = e.target;

      dispatch({ type: "SET_SELECT", value : value, name : name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type : 'ADD' });
  };

  return (
    <>
      { message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <FormGroup label="message">
          <Input value={content} onChange={handleChange} name="content" />
          <p>nombre de lettres : {letters} </p>
        </FormGroup>
        <FormGroup label="style">
          <Select defaultValue={color} onChange={handleChangeSelect} name="color">
            {colors.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup label="size">
          <Select defaultValue={size} onChange={handleChangeSelect} name="size">
            {sizes.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup label="">
          <Button>Add</Button>
        </FormGroup>
      </form>
    </>
  );
};

export default Message;
