# TypeScript in 5 minutes

## 설치
```shell
npm install -g typescript
```
## 첫번째 컴파일
```javascript
function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
```
```
tsc greeter.ts
```
결과적으로 컴파일 됨
## 타입 어노테이션
```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```
이럼 워닝 뜬다.
```
greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```
하지만 결과적으로 그래도 컴파일은 된다.(뭔가 조정 옵션이 있지 않을까?)
## 인터페이스
````
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);

````
**명시적 구현 따윈 없어도 된다.그저 구성요소만 같으면 될뿐!!**
## 클래스
```
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```
* oop 같다. java랑도 비스므레함. 이게 결과적으로 es6에 타입을 얹어 놓으니 그리되는듯.
* 인터페이스와 클래스는 찰떡쿵이 맞는다!
* 생성자에 public 멤버로 선언하게 되면, 자동적으로 해당 프로퍼티가 생성된다. 
( 결과적으로 여기서는 interface 구현)
## 타입스크립트 기동!!
```html
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>

```
## VisualScript
[visual code](https://code.visualstudio.com/)

## 기타
[nvs](https://github.com/jasongin/nvs)
[direnv](https://direnv.net/)

출처 : https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html