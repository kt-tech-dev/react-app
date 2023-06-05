import React from "react";
import { render, screen } from "@testing-library/react";
import Mcu from "./Mcu";

test("renders learn react link", () => {
  render(<Mcu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
