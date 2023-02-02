import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

import { rest } from "msw";
import { setupServer } from "msw/node";

const serverExample = setupServer(
  // I recommend listing the success scenarios when declaring the server.
  rest.get("/resource", (req, res, ctx) => {
    return res(ctx.json({ id: 1 }));
  })
);

beforeAll(() => serverExample.listen());
afterEach(() => serverExample.resetHandlers());
afterAll(() => serverExample.close());

it("handles a successful response", () => {
  // run your code (i.e. render components, execute functions)
  // without any additions, this test case will receive a successful response
  // defined above.
});

//https://mswjs.io/docs/api/setup-server/use#permanent-override
it("handles an error response", () => {
  serverExample.use(
    // In this paticular test respond to the same request with a 404 response.
    rest.get("/resource", (req, res, ctx) => {
      return res.once(ctx.status(404));
    })
  );

  // run your code here.
  // within this test a "GET /resource" will receive a 404 error response
  // specified above.
});
