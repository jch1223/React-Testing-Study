// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server";

beforeAll(() => server.listen()); // 첫번째 테스트 실행 전에 한번 실행
afterEach(() => server.resetHandlers()); // 각각의 테스트가 끝나면 실행
afterAll(() => server.close()); // 마지막 테스트가 끝나면 샐행
