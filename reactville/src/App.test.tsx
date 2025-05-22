import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import App from "./App";

test("", async () => {
  // ARRANGE
  render(<App />);

  // ACT
  await screen.findAllByRole("h2");
  // await screen.findByRole("heading");

  // ASSERT
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toBeDisabled();

  // In this lab, you will create a user-friendly React application
  // that displays a 5-day weather forecast.
  // You’ll implement a dynamic, component-based structure and
  // practice the core concept of passing data using props in React.
  expect(screen.getAllByRole("h2")).toHaveLength(5);
  // expect each div to have day, image, conditions and time
});
