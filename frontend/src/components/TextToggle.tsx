import React, { useState } from "react";

type Props = {
  title: string;
  text: string;
  show?: boolean; // Optional prop, defaults to true
};
export function TextToggle({ title, text, show = true }: Props) {
  const [isVisibel, setIsVisibel] = useState(show);

  const toogleVisibility = () => {
    setIsVisibel(!isVisibel);
  };

  return (
    <div className="p-3">
      <h2>{title}</h2>
      <button className="mx-5" onClick={toogleVisibility}>
        {isVisibel ? "Hide" : "Show"}</button>
      {isVisibel && <p>{text}</p>}
    </div>
  );
}
