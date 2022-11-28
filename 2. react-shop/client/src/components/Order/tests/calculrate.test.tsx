import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderContextProvider } from "../../../context/OrderContext";
import Type from "../Type";

test("프로덕트가 변경되면 토탈 가격이 변경되어야 합니다.", async () => {
  render(<Type orderType="products" />, { wrapper: OrderContextProvider });

  const productsTotal = screen.getByText("총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});
