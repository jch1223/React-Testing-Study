import { render, screen } from "@testing-library/react";
import App from "./App";

test("카운터는 0부터 시작합니다.", () => {
  render(<App />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(0);
});
