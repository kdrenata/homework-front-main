import {ChangeEvent } from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (currentText: string) => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent <HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value); // Устанавливаем новый текст в стейт
	};

	return (
	  <input id={'hw04-input'}
			 type="text"
			 value={props.currentText}
			 onChange={onChangeHandler} />
	);
};
