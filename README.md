# Notes App

- nodejs version : 14.17.4
- npm: 7.6.0
- modules: yargs, chalk, fs

## Yargs

- [yargs npm](https://www.npmjs.com/package/yargs)

- 커맨드 라인에서 값을 파싱해주고 인터페이스를 생성하는 도구이다

- yargs doc 내용을 최대한 준수하여 작성하였다

  ```js
  yargs(hideBin(process.argv))
    .command(
      'add',
      'Add a note',
      (yargs) =>
        yargs.option({
          title: titleOption,
          body: bodyOption,
        }),
      (argv) => {
        console.log(`Add a note with the title "${argv.title}"...`)
        console.log(`What is written is below.\n"${argv.body}"`)
  
        addNote(argv.title, argv.body)
      }
    )
  ```

  ```bash
  $ node app.js --help
  
  app.js [명령]
  
  명령:
    app.js add     Add a note
    app.js remove  Remove the note
    app.js list    List notes
    app.js read    Read a note
  
  옵션:
    --help     도움말을 보여줍니다                                          [여부]
    --version  버전 넘버를 보여줍니다                                       [여부]
  ```

  ```bash
  $ node app.js add --help
  app.js add
  
  Add a note
  
  옵션:
        --help     도움말을 보여줍니다                                      [여부]
        --version  버전 넘버를 보여줍니다                                   [여부]
    -t, --title    노트 이름을 입력합니다                          [문자열] [필수]
    -b, --body     노트 내용을 입력합니다                          [문자열] [필수]
  ```

## [Use of `const` for defining functions](https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions)

- 함수가 변경되는 상황을 막아준다

## [Arrow function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- `function` 표현에 비해 구문이 짧다
- `this`, `arguments`, `super` 나 `new.target`을 바인딩 하지 않는다
- 메서드로 사용할 때 `this` 객체의 값을 읽지 못한다 
- `new` 와 함께 사용하지 못하고 생성자 함수로 사용되지 못한다
- `prototype` 속성이 존재하지 않는다
- `params => {object:literal}` 을 사용한 객체 리터럴 반환은 `undefined`를 반환한다
- 파라미터와 화살표 사이에 개행을 할 수 없다
- [더보기](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

## Strict Mode

- sloppy mode 느슨한 모드에서 무시되던 에러들을 throwing 한다
- javscript 엔진의 최적화 작업을 어렵게 하는 실수를 바로 잡는다
- [공식 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

## Debugger

- `debugger` 키워드를 사용한다 

  ```js
    // addNote 예시   
    const note = notes.find((n) => n.title === title)
  
    debugger
  
    if (!note) {
      notes.push({ title, body: [body] })
  ```

- window command

  ```bash
  $ node inspect app.js add --title=hello --body=Node
  ```

  ```bash
  $ node --inspect-brk app.js add --title=hello --body=Node
  ```

- chrome insepct

  - `chrome://inspect` 에서 nodejs를 디버그할 수 있다

    ```bash
    debug> restart // 다시 디버깅 시작
    ```

    

