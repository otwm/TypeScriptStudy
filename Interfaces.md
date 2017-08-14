# Interfaces
TypeScript의 핵심 원리 중 하나는 유형 검사는 값이 갖는 모양에 초점을 맞추는 것입니다. 
이것은 때때로 "duck typing"또는 "structural subtyping"라고도합니다.
TypeScript에서 인터페이스는 이러한 유형의 이름을 지정하는 역할을 수행하며 코드 내에서 계약을 정의 할뿐만
 아니라 프로젝트 외부의 코드로 계약을 정의하는 강력한 방법입니다
 
## Our First Interface
```
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

```
* 타입 스크립트는 가지지 않는 값에 대해서 체크하지 않는다.
* 명시적인 구현 없이도 똑같은 형태를 취하기만 하면 됨.
* 순서 따윈 상관 없다.
```
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
## Optional Properties
인터페이스의 모든 속성이 필요할 수는 없습니다. 일부는 특정 조건 하에서 존재하거나 전혀 존재하지 않을 수도 있습니다.
 이러한 선택적 속성은 두 개의 속성 만 채워진 함수에 개체를 전달하는 "옵션 백"과 같은 패턴을 만들 때 널리 사용됩니다.

다음은 이 패턴의 예입니다.
```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

```
선택적 속성의 장점은 인터페이스의 일부가 아닌 속성의 사용을 방지하면서 가능한 이러한 사용 가능한 속성을 
설명 할 수 있다는 것입니다. 예를 들어 createSquare에서 color 속성의 이름을 잘못 입력했다면 다음과 
같은 오류 메시지가 표시됩니다.
```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

```
## Readonly properties
```
interface Point {
    readonly x: number;
    readonly y: number;
}

```
* 리드온니를 설정 할 수 있다.( 첫 할당 후 변경 금지됨.)
```
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

```
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

```
* ReadonlyArray는 array의 리드온니 버전
```
a = ro as number[];
```
* [ReadonlyArray]하지만 타입 어서션으로 캐스팅은 가능하다.
### readonly vs const

readonly 또는 const를 사용할지를 기억하는 가장 쉬운 방법은 변수 또는 속성에서 사용하는지 여부를 묻는 
것입니다. 변수는 const를 사용하지만 속성은 읽기 전용을 사용합니다.
## Excess Property Checks
```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });

```
* optional property에서의 프로퍼티 체크는 엄격하다. 존재하지 않는 프로퍼티를 추가해선 안됨
```
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```
즉, 위와 같은 코드는 안됨.
```
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```
* 해결 하기 가장 쉬운 방법은 타입 어서션을 사용한다.
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

```
위에 처럼 프로퍼티를 추가적으로 정의할 수 있다.
```
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

```
* 신기하게도 다른 개체에 재할당하는 방법도 있다.(실제로는 하나 이상의 프로퍼티를 가져야 하더라.)
하지만 이렇게까진 하진 말자... :(
## Function Types
* 펑션 타입을 선언할 수 도 있다.
```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

```
```
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```
* 파라미터는 이름 매칭은 아니고, 타입만 매칭 되면 된다.
```
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```
* 타입 매칭이 아니라도 추론에 알아서 매칭된다.
```
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```

기능 매개 변수는 한 번에 하나씩 확인되며 각 매개 변수 위치의 유형이 서로 대조됩니다. 유형을 전혀 지정하지
 않으려면 함수 값이 SearchFunc 유형의 변수에 직접 지정되므로 TypeScript의 컨텍스트 유형에 따라 인수
 유형을 유추 할 수 있습니다. 여기서 또한 함수 표현식의 반환 유형은 반환하는 값 (여기에는 false 및 true)에
의해 암시됩니다. 함수식이 숫자 나 문자열을 반환했다면 형식 검사기는 반환 형식이 SearchFunc 인터페이스에
 설명 된 반환 형식과 일치하지 않는다고 경고했습니다.
## Indexable Types
```
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
[번역]
위에서 우리는 인덱스 서명이있는 StringArray 인터페이스를 가지고 있습니다. 이 인덱스 서명은 StringArray가
 숫자로 인덱싱되면 문자열을 반환한다는 것을 나타냅니다.

지원되는 인덱스 서명에는 문자열과 숫자의 두 가지 유형이 있습니다. 두 가지 유형의 인덱서를 모두 지원할 수
 있지만 숫자 인덱서에서 반환 된 형식은 문자열 인덱서에서 반환 된 형식의 하위 형식이어야합니다. 이것은 숫자로
색인을 생성 할 때 JavaScript가 실제로 개체로 색인하기 전에이를 문자열로 변환하기 때문입니다.
 즉, 100 (숫자)으로 인덱싱하는 것은 "100"(문자열)으로 인덱싱하는 것과 동일하므로 두 개가 일관성이 있어야합니다.
(으응???) 
<img src="https://scontent.cdninstagram.com/t51.2885-15/e15/10735159_661683380611703_1730717863_n.jpg"/>
```
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
```

문자열 인덱스 서명은 "사전"패턴을 설명하는 강력한 방법이지만 모든 속성이 반환 유형과 일치하도록합니다. 
이것은 문자열 인덱스가 obj.property를 obj [ "property"]로 사용할 수 있다고 선언하기 때문입니다.
 다음 예제에서는 name의 유형이 문자열 인덱스의 유형과 일치하지 않으며 유형 검사기에서 오류가 발생합니다.
(어....어??) 
```
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}
```
```
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```
## Class Types
```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

```
## Extending Interfaces
```
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

```
## Hybrid Types

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## Interfaces Extending Classes
```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image {
    select() { }
}

class Location {
    select() { }
}

```