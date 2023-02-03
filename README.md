# React Test Study

## INTRO

### 참고 문서

- https://www.robinwieruch.de/react-testing-library/
- https://www.freecodecamp.org/news/testing-react-hooks/
- https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/

### unit 테스트

- 쉽게 이야기 하면 컴포넌트 단위의 테스트. 하나의 컴포넌트로 분리되어 있어야 한다.
- props 등 데이터에 대한 변경이 있을 때 올바른 데이터가 나오는가?

### 통합 테스트

- 하나의 데이터가 변경되었을 때 여러 컴포넌트가 변경되는 것을 테스트

### e2e 테스트

- 유저 flow에 대한 테스트

### 테스트 기준

- props가 잘 전달 되는지 확인.
- 같은 데이터이지만 갯수 등에 따라 다른 데이터가 렌더링 되어야 한다면 확인.
- 하나의 테스트 케이스에서는 하나의 기능만 테스트하는 것이 에러 발생시 추적이 쉽기 때문에 권장.

### 테스팅으로 얻는 이점

1. 디버깅 시간을 단축할 수 있습니다. 데이터가 잘못 나왔을 때 UI의 문제인지 DB의 문제인지 등 쉽게 찾아 낼 수 있습니다.
2. 많은 테스트 코드와 함께 작성된 어플리케이션은 좀 더 안정적입니다.
3. 리팩터링이나 무언가를 추가로 구현해야 할 때 용이하게 할 수 있습니다.

## React Testing Library(RTL)

공식문서: https://testing-library.com/docs/react-testing-library/intro/

### React Testing Library란?

컴포넌트의 작업을 위한 api를 추가하여 DOM Testing Library 위에 구축됩니다. DOM Testing Library는 DOM의 node를 테스트하기 위한 매우 가벼운 라이브러리 입니다.  
RTL는 컴포넌트의 구현 세부 정보를 테스트 하기 보다 사용자의 행위를 기반하여 테스트하는 것을 중점으로 둡니다.

### test queries 우선 순위

- https://testing-library.com/docs/queries/about#priority

### userEvent > fireEvent

- fireEvent보다 userEvent를 사용하는 것을 권장.
- fireEvent.click은 클릭만 수행되지만 userEvent.click은 사용자가 실제 클릭 했을 때 처럼 동작합니다. (button 클릭 시 focus가 되는 등)

## Jest란?

페이스북에서 만들어진 테스팅 프레임 워크. 최소한의 설정으로 동작하며 test case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인하는 라이브러리입니다. 유닛테스트에서 사용합니다.

- describe 안에 test(it)으로 구조를 생성할 수 있습니다.
- expect: 값을 테스트 할 때마다 사용되고, 단독으로 사용되지 않고 matcher(toBe 등)와 함께 사용합니다.
- matcher: 값을 비교하는 메서드를 말합니다.
  https://github.com/testing-library/jest-dom

### jest debuging

- p -> 정규식으로 파일 이름을 추적하여 테스트
- `.only` 하나의 테스트만 실행하고 싶을 때
- `.skip` 테스트를 스킵하고 싶을 때

### waitFor

- jest에서 finBy 같이 어떤 작업을 여러개 기다려야 할 때 컴퓨터의 성능에 따라서 여러 작업 중 일부만 캣치하는 경우가 있다. 이럴 때 기다리는 시간을 지정하기 위해서 사용되는 함수이다.

## eslint 설정

```
 npm install eslint-plugin-testing-library eslint-plugin-jest-dom
```

```
// .eslintrc.json
{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}
```

## error 해결 상황

### react 18버전에서 test-library 버전 호환성 에러

- `testlibray in react 18` 키워드로 검색 후 https://stackoverflow.com/questions/71685441/react-testing-library-gives-console-error-for-reactdom-render-in-react-18 글을 확인하여 test-library 최신 버전으로 업데이트
