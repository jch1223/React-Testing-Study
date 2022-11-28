import { render, RenderOptions } from "@testing-library/react";
import { OrderContextProvider } from "./context/OrderContext";

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: OrderContextProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
