import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5001/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
    );
  }),
  rest.get("http://localhost:5001/options", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
  rest.post("http://localhost:5001/order", (req, res, ctx) => {
    let dummyData = [{ orderNumber: 2131234324, price: 2000 }];
    return res(ctx.json(dummyData));
  }),
];
