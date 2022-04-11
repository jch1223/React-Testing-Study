# React Testing Study

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

### 데이터 요청 mock `FollowersList.test.jsx 참고`

- axios를 jest.mock함수를 통해서 실제 요청을 보내지 않아도 리턴값을 변경할 수 있습니다.
