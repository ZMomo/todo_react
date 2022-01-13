import { useRef } from 'react'

function TextInputWithFocusButton() {
    const inputEl = useRef();

    const onButtonClick = () => {
      // `current` fait référence au champ textuel monté dans le DOM
      inputEl.current.type = "password"
      inputEl.current.focus();
    };
    return (
      <>
        <input type="text" ref={inputEl} />
        <button onClick={onButtonClick}>Donner le focus au champ</button>
      </>
    );
}

export default TextInputWithFocusButton