# 타입스크립트 - 도구와 프레임 옵션

## 내용
* 타입스크립트 소개
* 타입스크립트의 장점
* 개발환경 설정 => install 정도만 (에디터 설정은 각자가)

## 타입스크립트 소개
책 내용 ~~~~

+ 타입스크립트는 전통적 객체지향 언어처럼 개발하게 해주는 언어이자 컴파일러이다.
=> es5 이상 부터 클래식 객체 선언이 가능해졌다.
=> 타입 명시해주게 해주는 트랜스 파일러
=> es6 또는 그 이상의 super set
=> 그럼에도 객체지향이 강화 시키는 면도 있는듯?(interface?)
=> flow 등의 존재감 없는 경쟁자가 있긴 하다.( 다분히 개인적인 생각 )


## 타입스크립트의 장점
### 컴파일
자바스크립트로 변경하여 준다.(transpile)

### 강타입, 타입스크립트의 편의 문법
여느 타입언어 처럼 타입 선언, 체크가 가능하다.
다양한 타입 선언을 지원한다.
또한 타입 추론 역시 가능하다.

ex)
```typescript
const a: number = 1 // number
const b: string = 'string' // string

function x(a: number, b:string): string {
  return `${a} - ${b}`
}

x(a, b)

const k = 5 // number
```

### 자바스크립트와 타입스크립트의 정의, DefinitelyType
기존에 자바스크립트 라이브러리(ex. jQuery) 등에 대해서 외부에서 타입 정의를 가능하게 한다.
.d.ts가 정의 파일이 되어 외부에서 정의 할 수 있다.

교재 코드 예시 참조(41, 42p)

또한 많은 이전에 javascript 들 역시 타입 정의가 되고 있다.

+ 그렇다는 말은 아직 정의 되지 않은 javascript 라이브러리 들도 많이 있다는 말이다.
=> 그렇다는 말은 필요에 따라 내가 직접 정의할 일도 발생할 수도 있다는 것이다. :(
=> 또한 기존의 정의도 오버라이드 할 수 있다.

### 캡슐화
원래 es6에서 부터 지원하던 거다. 패스

[Playground Link](https://www.typescriptlang.org/play/?target=1&ssl=1&ssc=1&pln=9&pc=18#)
+ 참고로 typescript playground 는 컴파일 결과를 볼 수 있어 좋다.( 예전엔 안되던 익스포트도 되네!)

### 퍼블릭, 프라이빗 접근자
이게 됨에 따라 정보를 숨기는 것이 가능해진다.
[Playground Link](https://www.typescriptlang.org/play/index.html?ssl=16&ssc=13&pln=16&pc=1#code/MYGwhgzhAECyCeBhcVoG8CwAoa0AOATgJYBuYALgKbQD6wA9gK4B25AXNM4wLYBGlBaAF5oABgDc2bLgDmlctAYtyACgCU6abmgF5jAs2jkAFkQgA6Ok1ZaAvlJzQwAE2cB5ZpXWbHuE2cslVgBqYMlHeyxsSOwyQXphTkoAdzgkFAh1bAZmCHoQSnMQehkVenMg8jVscpd3TyysHLyCopKyiusqoA)

## install
```shell script
npm i -g typescript

tsc -h


Version 3.6.4
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'es2019' 'es2020' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.asyncgenerator' 'es2018.asynciterable' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'es2019.array' 'es2019.object' 'es2019.string' 'es2019.symbol' 'es2020.string' 'es2020.symbol.wellknown' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictBindCallApply                              Enable strict 'bind', 'call', and 'apply' methods on functions.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.

```
옵션의 대부분은 tsconfig에 들어가는 옵션이다.
경험상 실제 쓰게 되는 옵션은 --init 정도 인것 같다.
그러면 약간의 실습을..

```shell script
tsc -v
Version 3.6.4

tsc --init
message TS6071: Successfully created a tsconfig.json file.

// tsconfig 파일을 잠시 살펴 보자.
```
[tsconfig 옵션 정리](https://jsdev.kr/t/typescript/3048)

tsconfig는 트랜스 파일할 대상, 트랜스 파일 하는 라이브러리(es2017, es2018 등..)의 설정 및 모듈 레졸루션, strict 설정, extend를 통한 다양한 확장들을 가능하게 한다.
매우 중요한 부분이니 틈틈히 보도록...
어짜피 프로젝트 설정 들어가면 강제 삽질하는 부분이니 걱정하지 말자. 
여기서는 넘어가는 것으로.

 
