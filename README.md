# React Testing Study

## 참고 문서

- https://www.robinwieruch.de/react-testing-library/

## unit 테스트

- 쉽게 이야기 하면 컴포넌트 단위의 테스트. 하나의 컴포넌트로 분리되어 있어야 한다.
- props 등 데이터에 대한 변경이 있을 때 올바른 데이터가 나오는가?

## 통합 테스트

- 하나의 데이터가 변경되었을 때 여러 컴포넌트가 변경되는 것을 테스트

## e2e 테스트

- 유저 flow에 대한 테스트

## 테스트 기준

- props가 잘 전달 되는지 확인.
- 같은 데이터이지만 갯수 등에 따라 다른 데이터가 렌더링 되어야 한다면 확인.
- 하나의 테스트 케이스에서는 하나의 기능만 테스트하는 것이 에러 발생시 추적이 쉽기 때문에 권장.

## 테스트 케이스

### 엘리먼트 선택 `Header.test.jsx 참고`

- getBy: 요소가 존재하지 않을 시에 오류가 반환됩니다.
- queryBy: 요소가 존재하지 않아야 할 때 사용합니다. (존재하지 않을 때 오류를 반환하지 않음.)
- findBy: 비동기 과정 후에 요소나 나타나는 경우에 사용합니다.

### expect에 대한 비교 `TodoFooter.test.jsx 참고`

- toBe를 사용하여 expect가 어떤 값이어야 하는지 비교할 수 있습니다.

### 유저의 행동에 대한 테스트

- `AddInput.test.jsx` `TodoFooter.test.jsx` 참고
- fireEvent 메소드를 통해서 작성할 수 있습니다.
- fireEvent를 통해 함수의 실행 여부를 체크 할 수 있습니다. `AddInput.test.jsx 참고`
- 여러번의 fireEvent 메소드를 사용해야 할 때에 대한 예시: `Todo.test.jsx`
