# React

물리적으로 존재하는 URL이 index.html이 유일하다.
그 밖의 페이지들은 모두 js가 동작하면서 실시간으로 생성하는 결과물

# SSR

모든 URL이 물리적으로 존재한다.

어떤 URL에 접근 할 경우 해당 페이지만 https로 내려받고
이후 페이지들은 Ajax를 통해 local에서 실행된다.
