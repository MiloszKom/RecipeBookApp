import React from "react";

export default function ErrorMesasge({ message }) {
  return (
    <div className="col-span-full text-center text-red-600 text-xl">
      Something went wrong: {message}
    </div>
  );
}
