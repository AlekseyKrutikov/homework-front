import { ChangeEvent } from "react";

type InputPropsType = {
  currentText: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: (title: string) => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.currentTarget.value;
    props.setCurrentText(newTitle);
  };

  return (
    <input
      id={"hw04-input"}
      type="text"
      value={props.currentText}
      onChange={onChangeHandler}
    />
  );
};
