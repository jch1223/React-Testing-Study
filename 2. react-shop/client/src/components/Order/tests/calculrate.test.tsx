import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderPage from "../../../pages/OrderPage/OrderPage";
import { render } from "../../../test-utils";
import Type from "../Type";

test("프로덕트가 변경되면 토탈 가격이 변경되어야 합니다.", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});

test("옵션이 변경되면 옵션 총 가격이 변경되어야 합니다.", async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText("총 가격:", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.click(insuranceCheckbox);
  expect(optionsTotal).toHaveTextContent("500");

  const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");

  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
});

describe("옵션과 상품 총 가격 계산", () => {
  test("총 가격은 0원에서 시작하고, 상품과 옵션 가격이 더해져야 합니다", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total Price:", { exact: false });
    expect(total).toHaveTextContent("0");

    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(total).toHaveTextContent("1000");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("1500");
  });

  test("옵션이 추가 될 때 가격이 수정되어야 합니다", async () => {
    const total = screen.getByText("Total Price:", { exact: false });
    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("500");
  });

  test("상품과 옵션이 제거 되었을 때 가격이 수정되어야 합니다", async () => {
    render(<OrderPage />);

    const total = screen.getByText("Total Price:", { exact: false });
    const americaInput = await screen.findByRole("spinbutton", {
      name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "3");
    userEvent.type(americaInput, "1");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
      name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent("1000");
  });
});
