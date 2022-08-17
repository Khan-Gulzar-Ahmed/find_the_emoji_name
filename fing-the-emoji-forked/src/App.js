import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😊": "Happy Face",
    "😗": "Kissing Face",
    "😉": "Smiling Face",
    "😪": "Sleepy Face",
    "😵": "Dizzy Face",
    "😏": "Smirking Face",
    "❤️": "Heart",
    "😂": "LOL",
    "💌": "Love Letter",
    "😍": "Smiling Face with Heart-Eyes",
    "🏁": "Chequered Flag",
    "😒": "UNAMUSED FACE"
  };
  var emojiKnown = Object.keys(emojiDictionary);

  var [emojiMeaning, setValue] = useState("");

  function emojiClicked(emoji) {
    var getNameOfEmoji = emojiDictionary[emoji];
    setValue(getNameOfEmoji);
  }

  function findEmoji(event) {
    var getEmoji = event.target.value;
    var getEmoji = getEmoji.trim();
    var getNameOfEmoji = emojiDictionary[getEmoji];
    if (getNameOfEmoji === undefined) {
      getNameOfEmoji = "This Emoji is not our Database .";
    }

    setValue(getNameOfEmoji);
  }
  return (
    <div className="App">
      <h1>😊 Paste the Emoji to Know 😊 </h1>
      <h2>paste in below box ⬇️ </h2>
      <input type="text" onChange={findEmoji} />
      <br /> <br />
      The Meaning Apear Here : ⬇️
      <h1 id="result"> {emojiMeaning} </h1>
      <br />
      <h2>Here we know the some emoji Click to know</h2>
      <p>
        {" "}
        {emojiKnown.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClicked(emoji)}
              style={{ cursor: "pointer", margin: "10px" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </p>
    </div>
  );
}
