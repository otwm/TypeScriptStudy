# Basic Type

## Boolean
```
let isDone: boolean = false;
```
## Number
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
* 이진, 16진, 8진 다됨.
## String 
```
let color: string = "blue";
color = 'red';
```
```
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```
* string interpolation 지원
* 문자가 끈어져도 표현됨.
* 여까지는 es6와 비
## Array
```
let list: number[] = [1, 2, 3];
```
```
let list: Array<number> = [1, 2, 3];
```
## Tuple
보통은 두개의 쌍 데이터를 다루는 데이터 타입인데, typescript는 뭔가 기묘한듯.
```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```
```
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
```
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

x[6] = true; // Error, 'boolean' isn't 'string | number'
```
* 특이한 것은 튜플은 보통 두개의 쌍 데이터인데, typescript는 그 이상도 가능하다.(뭐..뭐뭐지? 이컨셉은 ??)
* 세번째 부터는 유니온 타입이 된다.
* 결국에 자바스크립트로 변환되는 거 생각해보면, 사실은 그냥 어레이 인듯...
## Enum
피싱!
프로그램 내에서 상수 정의는 중요한 부분이다!!(과도한 설계/미진한 설계)
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
```
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
* 기본적으로 enum은 0부터 시작되는 숫자 타입이지만, 위에 처럼 바꿀수도 있다.
```
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```
* 내가 원하는 경우로 바
```
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);
```
* 네임 매칭도 가능 하다.
* 순서 지정 가능

그렇다면 이것은???(js compile 결과)
## Any
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
* 타입 체크 하기 싫으면 이거
* 
any 유형은 기존 JavaScript로 작업 할 수있는 강력한 방법이므로 컴파일하는 동안 점진적으로 유형 확인을
 옵트 인하거나 옵트 아웃 할 수 있습니다. Object가 다른 언어에서와 마찬가지로 비슷한 역할을 할 것으로 
 기대할 수 있습니다. 그러나 Object 유형의 변수는 값을 할당 할 수만 있습니다. 실제 존재하는 메소드라도 
 임의의 메소드를 호출 할 수는 없습니다.
```
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
``` 
```
let list: any[] = [1, true, "free"];

list[1] = 100;
```
## Void
```
function warnUser(): void {
    alert("This is my warning message");
}
```
* any 랑은 반대. 리턴 타입 시 유효. undefined는 별도 타입이 있으니 쓰지 말자.
## Null and Undefined
```
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
각각의 undefined, null 타입이 존재하며, 모든 타입의 서브 타입. 그러므로, number 타입에서도 쓸 수 있다
하지만 --strictNullChecks 옵션이 존재하며, 이 옵션이 활성화 되면 넘버 타입에 널이나 언디파인드 등이 할당
되는 것을 방지 한다. 이 것은 에러 방지에 도움되며, 권장된다. 만약, 할당 가능하게 하고 싶다면, 유니온 타입을
사용한다.
## Never
```
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```
도달 할 수 없는 타입. 보통 에러가 쓰로우 되던가, 무한 루프 던가 하는 것들. 변수도 쓸수 잇는듯.
네버 타입은 모든 타입의 서브 타이지만, 네버 타입 자신을 제외하고는 다른 타입의 서브 타입이 될 수
없다. any도 할당 불가능.
## Type assertions
종종 당신이 타입스크립트 보다 해당 값의 타입을 더 잘 알고 있는 경우 Type assertions을 쓸수 있다.
즉 Type assertions은 나는 잘 알고 있은 날 따라와 뭐 이런거? Type assertions은 타입 캐스트와도 
비슷하며 데이터에 대한 체킹이나 재구조화를 하지 않는다. 런타임 상황에서 충돌이 없으며, 컴퍼일러에 의해 순
수하게 사용된다. 타입 스크립트는 여기에 체크가 필요 없다고 생각한다.
두 가지 문법이 존재하며, 
* angle-braket 방식
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
* as 문
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
어느 것을 사용하든 당신의 선택이지만, jsx와 같이 사용할 때는 as 많이 가능하다. 
## A note about let
타입스크립트에서는 var 않쓰고 let 쓰다고 합니다.

https://www.typescriptlang.org/docs/handbook/basic-types.html