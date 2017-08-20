# TypeScript란 무엇인가?

TypeScript는 Microsoft에서 개발하여 2012년에 발표한 JavaScript로 컴파일 되는 언어이다.
 JavaScript에 정적 타이핑과 ES2015를 기반으로 하는 객체지향적 문법이 추가된 것을 주요 특징으로 한다.
나올 당시에는 Windows 이외의 다른 개발 환경지원이 미비해서 부정적인 의견도 적지 않았던 것으로 알고 
있지만, 생태계 지원이 점점 확장되고, 최근에는 Angular 팀에서 이 언어를 메인 언어로 채택하면서 현재로서는
 정적 타이핑을 지원하는 다른 JavaScript 전처리기(Flow 등)에 비해서 커뮤니티나 안정성 측면에서
  앞서나가는 모양새다.

JavaScript로 컴파일 되는 언어라고 하니 CoffeeScript가 떠오른다. 그러나 TypeScript는
 CoffeeScript와는 달리 JavaScript의 Superset이라는 차이점이 있다. 즉, 지금까지 사용했던 익숙한
  JavaScript의 문법을 사용하면서도 코딩이 가능하다. 특히, TypeScript는 ES2015 문법도 지원하므로
   TypeScript 이외의 별도 Transpiler를 사용하지 않아도 ES2015 기능들을 브라우저에서
    사용할 수 있다는 장점도 있다. 게다가 미래의 ECMAScript Feature들도 계속해서 지원할 예정이므로
표준에서 벗어날 걱정도 덜 수 있겠다.

* 사실은 그래서 자바스크립트이다. 하지만 고유의 타입스크립트 문법이 있고, 컴파일 과정을 통해 자바스크립트로 변환한다
* 정적 타입 정의를 지원한다.
* es6의 문법을 지원한다.

<img src="https://hyunseob.github.io/images/ts-es6-es5.png"/>

# 뜬금 없이 TypeScript를 하는 이유는?
* 원래 정적 타입을 사랑한다. 동적 타입 언어 싫어!(아니 자바스크립트 프로그래머가??)
* 정적 타입 선언은 미연에 발생할 오류를 줄여준다.
* 정적 타입 언어는 대게 괜찮은 문서화 도구를 제공한다(TypeDoc)
* 나는 명확한 Domain의 정의가 프로그램 유지 보수에 도움이 된다고 생각하면, 이걸 쓰면 그걸 더 잘 할거 같아서..
* 왠지 멋져보이니까???@#@_#!!

# Features

TypeScript의 기능들은 크게 보면 정적 타이핑과 ECMAScript 구현으로 나뉠 수 있다.

* Type annotation & 정적 타입 체크
* **타입 추론**(오예!!)
* Interfaces
* ES2015 Features
  - let & const
  - Block scope
  - Arrow functions
  - Classes
  - Promise
  - Etc…
* Namespaces & Modules(CommonJS, ES2015, AMD)
* Generic
* Mixin


출처 : [TypeScript: 소개](https://hyunseob.github.io/2016/09/25/typescript-introduction/)
