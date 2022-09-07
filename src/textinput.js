import { useState, useRef } from "react";
function TextInputWithFocusButton() {
  const [textinput, settextinput] = useState("enter text");
  const [textoputput, settextoutput] = useState("");
  const ref = useRef(null);
  function handle() {
    settextinput(ref.current.value);
  }

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "mr");
  encodedParams.append("text", `${textinput}`);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "af4f6ce6c2msh71e6818ad63cd45p155613jsneddd0bd8794d",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
    },
    body: encodedParams
  };

  fetch("https://text-translator2.p.rapidapi.com/translate", options)
    .then((response) => response.json())
    .then((response) => settextoutput(response.data.translatedText))
    .catch((err) => console.error(err));

  return (
    <>
      <label> Text </label>
      <input type="text" ref={ref} placeholder="enter text" />
      <button onClick={handle}>translate</button>
      <h2>{textoputput}</h2>
    </>
  );
}
export default TextInputWithFocusButton;
