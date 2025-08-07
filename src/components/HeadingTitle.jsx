import React from "react";

function HeadingTitle({ title }) {
  return (
    <div>
      <h1 className="font-bold sm:text-2xl text-lg text-red-700">{title}</h1>
    </div>
  );
}

export default HeadingTitle;
