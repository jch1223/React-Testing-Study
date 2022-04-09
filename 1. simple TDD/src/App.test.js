import { fireEvent, render, screen } from "@testing-library/react";
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

test("마이너스 버튼을 눌렀을 때 count가 감소하여야 합니다.", () => {
  render(<App />);
  const button = screen.getByTestId("minus-button");
  fireEvent.click(button);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(-1);
});

test("플러스 버튼을 눌렀을 때 count가 증가하여야 합니다.", () => {
  render(<App />);
  const button = screen.getByTestId("plus-button");
  fireEvent.click(button);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(1);
});

test("on/off 버튼은 빨간색이어야 합니다.", () => {
  render(<App />);
  const button = screen.getByTestId("on-off-button");
  expect(button).toHaveStyle({ backgroundColor: "red" });
});
