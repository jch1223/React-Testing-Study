import { render, screen } from "@testing-library/react";
import App from "./App";

test("카운터는 0부터 시작합니다.", () => {
  render(<App />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(0);
});

test("마이너스 버튼은 -를 가지고 있어야 합니다.", () => {
  render(<App />);
  const button = screen.getByTestId("minus-button");
  expect(button).toHaveTextContent("-");
});

test("플러스 버튼은 +를 가지고 있어야 합니다.", () => {
  render(<App />);
  const button = screen.getByTestId("plus-button");
  expect(button).toHaveTextContent("+");
});
