import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

// test("", async () => {
//   // ARRANGE
//   render(<App />);

//   // ACT
//   // await screen.findByRole("heading");

//   // ASSERT
//   // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
//   // expect(screen.getByRole("button")).toBeDisabled();

//   // In this lab, you will create a user-friendly React application
//   // that displays a 5-day weather forecast.
//   // You’ll implement a dynamic, component-based structure and
//   // practice the core concept of passing data using props in React.

//   // expect each div to have day, image, conditions and time
// });

test("renders the heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /local weather/i })
  ).toBeInTheDocument();
});
test("renders the 5-day forecast", () => {
  // ARRANGE
  render(<App />);

  // ACT
  const forecastElements = screen.getAllByRole("heading", { level: 2 }); //h2

  // ASSERT
  expect(forecastElements).toHaveLength(5);
});
test("renders each div contains `conditions:` and `time:`", () => {
  const { container } = render(<App />); // need to get the screen
  const weatherDivs = container.querySelectorAll("div.weather"); //divs

  weatherDivs.forEach((div) => {
    const htmlDiv = div as HTMLElement; //type assertion is ok for testing
    const utils = within(htmlDiv);
    expect(utils.getByText(/conditions:/i)).toBeInTheDocument();
    expect(utils.getByText(/time:/i)).toBeInTheDocument();
  });
});

test("renders if some conditions are cloudy vs. time is night", () => {
  const { container } = render(<App />); // need to get the screen
  const weatherDivs = container.querySelectorAll("div.weather"); //divs

  // found this method of testing but feels a bit weird ot me
  const hasCloudyOrNight = Array.from(weatherDivs).some((div) => {
    const text = div.textContent?.toLowerCase() || "";
    return text.includes("cloudy") || text.includes("night");
  });

  expect(hasCloudyOrNight).toBe(true);
});
