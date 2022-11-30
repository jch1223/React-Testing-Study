import SummaryPage from "../SummaryPage";
import { screen } from "@testing-library/react";
import { render } from "../../../test-utils";

test("체크박스와 버튼이 렌더링 되어야 합니다.", () => {
  render(<SummaryPage />);
  const checkbox: HTMLInputElement = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton: HTMLButtonElement = screen.getByRole("button", {
    name: "주문 확인",
  });
  expect(confirmButton).toBeDisabled();
});
