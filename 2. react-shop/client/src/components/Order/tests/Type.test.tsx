import { render, screen } from "@testing-library/react";

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
