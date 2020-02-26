# 타입, 변수, 함수 기법

## 내용
* 기본 타입과 타입 구문 - 문자열, 숫자, 불리언
* 타입 추론 
* --덕 타이핑--
* --템플릿 문자열--
* --배열--
* --for ... in 과 for ... of 의 사용법--
* any 타입과 명시적 변환
* 열거형
* 상수 열거형과 상수값
* --let 키워드--
* 함수와 익명 함수
* 선택적 인자와 기본 함수 인자
* 인자 배열
* 함수 콜백, 함수 시그니처, 함수 오버로드
* 공용체, 타입가드, 타입 별명

## 기본 타입과 타입 구문 - 문자열, 숫자, 불리언
교제 예제 참조
78p 위쪽문장을 읽어보자
=> + 자바 스크립트는 매우 유연한 언어이다. (x)
   + 자바 스크립트는 매우 어렵다. (o)
   + 자바 스크립트 캐스팅....;;;

교재 타입 구문 참조(~81p)
=> 명확하게 할당 에러를 코드 작성 시점에서 부터 발성 시킨다.

+ 기본 타입에 대해서는 뒤쪽에서 내용 추가 하겠다.

## 타입 추론
+ 한마디로 내가 타입을 설정하지 않아도 컴파일러가 해당 타입을 적절히 추론하여 예측한다는 이야기다.
+ 교제의 타입 추론에 대한 설명은 너무나 부족하다. 상세한 내용은 [이것이 타입 추론!](https://www.typescriptlang.org/docs/handbook/type-inference.html)를 참조하라.
  (시간이 있다면 뒤에서 살펴보자)
 
## 덕 타이핑, 템플릿 문자열, 배열, for...in, for...of
해당 내용은 타입 스크립트와 직접 관련이 없고 일반적인 내용이므로 패스 
[덕 타이핑](https://nesoy.github.io/articles/2018-02/Duck-Typing)
템플릿 문자열, 배열, for...in, for...of 패스 [mdn](https://developer.mozilla.org/ko/)을 보자

## any 타입
+ 어떤 타입이든 대체 가능한 타입
+ any 타입을 가능하면 쓰지말자.( 과연 그럴 수 있을까?)
+ 많이 사용하면 할수록 타입 스크립트의 강점이 소멸된다.

https://mariusschulz.com/blog/the-unknown-type-in-typescript
https://engineering.huiseoul.com/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-3-0-99e5d45ec439
https://stackoverflow.com/questions/51439843/unknown-vs-any
https://medium.com/@auth0/typescript-3-0-exploring-tuples-and-the-unknown-type-2b96ec1099ea

## 명시적 형변환 (type assertions)
타입을 변경할 수 있다.
89p info를 읽어보자.
<>, as 로 사용 가능하다.

<>
```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

as
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 열거형
### enum
[enum example](https://www.typescriptlang.org/play/index.html?e=54#example/enums)
교재 샘플 및 설명 참조(90p, 91p)

```typescript
enum CompassDirection {
  North,
  East,
  South,
  West
}

console.log(CompassDirection) 
/*
0: "North"
1: "East"
2: "South"
3: "West"
North: 0
East: 1
South: 2
West: 3
*/
```
[enum doc](https://www.typescriptlang.org/docs/handbook/enums.html)

### const enum
성능상의 이유로 사용. 교재 93,94p

### reverse mapping
```typescript
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A" reverse mapping
```
### Ambient enum
Ambient enums은 이미 존재하는 열거형의 모양을 Typescript에 (혹은 IDE에) 선언할때 사용 됩니다.
Ambient enums와 non-ambient enums의 가장 중요한 차이점은 Ambient enums는 initializer(=)가 없는 맴버는 computed member로 간주 한다는 것 입니다

```typescript
declare enum Foo1 {
    X, // Computed Not 0! Careful!
    Y = 2, // constant
    Z, // Computed! Not 3! Careful!
}

enum Foo2 {
    X, // constant
    Y = 2, // constant
    Z, // constant
}
```
https://vomvoru.github.io/blog/typescript-Enum/

## 함수와 익명 함수, 선택적 인자와 기본 함수 인자, 인자 배열, 함수 콜백, 함수 시그니처, 함수 오버로드
```typescript
// 함수
function t1(a: number, b: number): number {
  return a + b
}

//optional
function t2(a: number, b?: number): number {
  return a + (b || 0)
}

//default
function t3(a: number, b: number = 5): number {
  return a + b
}

//rest
function t4(a: number, b: number, ...tt: number[]): number {
  console.log(tt.length)
  return a + b
}

//function
function t5(a: string, b: (k: number) => number): number {
  return b(Number(a))
}

//overload
function t6(a: number): number;
function t6(a: string): string;
function t6(a: any): any {
  return a
}
// 오버로딩이 진짜 필요한가?
```
[Playground Link](https://www.typescriptlang.org/play/index.html?ssl=1&ssc=1&pln=32&pc=2#code/PTAEgtVwMIYWAKAMwK4DsDGAXAlge2adAjABQCGAXKMogLYBGApgE4A0otFVdTAlBzQ41ABvOKFCN66RIzwlQAajZwAvnDghsAByy4SAGzhI0OvOgBMpPlxZsA-FYG9K-JsNHjJ02QtBFaoAB8A0AAGbhU1WBAAE3p4EkQ9dEMUDBxTAGZLZ2tWdhyBUABeUABWJ05CkVgxCSkZUDlFWgjYdWAJAGdkhFSTfAAWbMqmPIdR0AA6afR0ccYAbQBdCpdBarFUXE7sPXpJvWwAcyJZg-pkI-QAC3Caj3rvZtb2ozTcFON0-FLs7sZMJcxr4ANbzbjFAB8BR48zc9zqXjYRAAcmtSNw7qo2lFgNgAG5MQ4kaKfd6mABswzWq2sAG4yf10FTyKB-oCjk52ZcGb0vrh8CyKCRkABPJwi0Xw2qeBokFRAA)

## 공용체, 타입가드, 타입 별명
```typescript
// 공용체
let t: number | string
t = 1
t = '1'

// 타입가드
/**
 * string 타입을 가져와서 왼쪽에 "padding"을 추가합니다.
 * 'padding'이 string인 경우에는 'padding'이 왼쪽에 추가됩니다.
 * 'padding'이 number인 경우에는 해당 개수의 공백이 왼쪽에 추가됩니다.
 */
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // "    Hello world" 반환

//타입 얼라이즈
type YYYY_MM_DD = string
type myT = string | number | boolean

```
[Playground Link](https://www.typescriptlang.org/play/index.html?ssl=1&ssc=1&pln=28&pc=1#code/PTAEleaxKscFpmFgCgA2BTALqVAuUA7ArgLYBGyATqAD6gDOqpAljgOYLoC8oAjK6BwOSc+CBCFCABhcCh44AAawDstIgFTyEoeTTqMm4iYBFx0FMAcE4AExwDiDoQD5jgXqnAC6OgARAAcAhgBNnG27sAps1MCWq4AmmwBOmgDplVT4nVw0+QBdxtQZmQA9x0EBemsAGsatAFKbQcJc3Zhjza1BvQEoWwJD4FWyIvKYC-GIyJLTM0EAXVcBPptBAHBrADCHADXGIQEYe2MsbUvLQ4AQAMzwcAGNUegB7HFAIgBlkGdQACgA3R0Q8ZGxaeKYAGg3cjWxHHABPAEpQAG9lUG-6GdA91BPezIFZ-GoaXhsDi2BokUi2N6fSrfFHfUhoPCkdYAQVIpEcTz24OYoAA1FwXkEAFYrRh7Wx2N7ko4nZAAbi+3wAvpzQL9-oDgaDbpESVDoRd3Ijeaj0ahMetiZpmcdThzkdzeagABakFYAd1wyENAFE8StSHsAAYmgAewKWyGccQhFtwhDhNyYK3QfAAJO8lVy+EErS91Tz4Agtjt9rYABLIRCIFagfUWxDOWw3AAs4dAogZKMTydT6dImYZgAwewAaa8J4CBJKBAD2jgB926KACMnWEDkKAAJoDvsAfQAsiOhwARCe8F3MbvA0AEJ4AFRnkpJVFhZEooCIKxWKEe9aAA)

optional 기본 타입
https://www.typescriptlang.org/docs/handbook/basic-types.html
