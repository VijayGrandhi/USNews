import React from "react";
import { Comments } from "../Comments";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);
it("renders comments correctly without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Comments currentUserId="1" />, div);
});

// it("renders comments with props", () => {
//     const {getByTestId} = render(<Comments currentUserId="1" />)
//     expect(getByTestId('1')).toHaveTe
// })
