import { render, screen } from "@testing-library/react";
import { rest } from "msw";

import { server } from "../../../mocks/server";

import Type from "../Type";

test("이미지가 렌더링 되어야 합니다.", async () => {
  render(<Type orderType="products" />);

  const productImages: HTMLImageElement[] = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages.length).toBe(2);

  const altTexts = productImages.map((element) => element.alt);
  expect(altTexts).toEqual(["America product", "England product"]);
});

test("데이터를 가져오는데에 실패하면 에러 배너가 나타나야 합니다.", async () => {
  server.resetHandlers(
    rest.get("http://localhost:5000/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("option 정보를 서버에서 부터 가지고 와야합니다.", async () => {
  render(<Type orderType="options" />);

  const optionCheckbox = await screen.findAllByRole("checkbox");

  expect(optionCheckbox).toHaveLength(2);
});
