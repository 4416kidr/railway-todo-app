import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Sorry, Not found</h1>
      <Link to="/">Home画面に戻る</Link>
    </div>
  );
};
