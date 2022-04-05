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
