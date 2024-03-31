import React, { useState } from "react";

export default function Speakers() {
  const [hideModal, setHideModal] = useState(true);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Speakers
      </h1>
      <br />
      <p className="">
        Revealing Soon...
      </p>
    </div>
  );
}
