# React Test Study

## 테스팅으로 얻는 이점

1. 디버깅 시간을 단축할 수 있습니다. 데이터가 잘못 나왔을 때 UI의 문제인지 DB의 문제인지 등 쉽게 찾아 낼 수 있습니다.
2. 많은 테스트 코드와 함께 작성된 어플리케이션은 좀 더 안정적입니다.
3. 리팩터링이나 무언가를 추가로 구현해야 할 때 용이하게 할 수 있습니다.

## React Testing Library(RTL)

공식문서: https://testing-library.com/docs/react-testing-library/intro/

### React Testing Library란?

컴포넌트의 작업을 위한 api를 추가하여 DOM Testing Library 위에 구축됩니다. DOM Testing Library는 DOM의 node를 테스트하기 위한 매우 가벼운 라이브러리 입니다.  
RTL는 컴포넌트의 구현 세부 정보를 테스트 하기 보다 사용자의 행위를 기반하여 테스트하는 것을 중점으로 둡니다.

## Jest란?

페이스북에서 만들어진 테스팅 프레임 워크. 최소한의 설정으로 동작하며 test case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인하는 라이브러리입니다. 유닛테스트에서 사용합니다.

- describe 안에 test(it)으로 구조를 생성할 수 있습니다.
- expect: 값을 테스트 할 때마다 사용되고, 단독으로 사용되지 않고 matcher(toBe 등)와 함께 사용합니다.
- matcher: 값을 비교하는 메서드를 말합니다.
  https://github.com/testing-library/jest-dom

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
