# memory card game with react

## 상태

- status type: "selected", "fixed", "closed"

  ```[javascript]
  // cards state
  [
    {
      status: "closed",
      imageUrl: "/src/assets/..1..",
    },
    {
      status: "selected",
      imageUrl: "/src/assets/..1..",
    },
    ...,
  ]
  ```

## 의사코드

- Card (제어받음)
  - 카드는 closed 상태일 경우, 선택가능한 버튼을 표시해야 한다.
  - 카드가 closed상태가 아닐 경우, 이미지가 렌더링 된다.
  - 카드가 closed상태가 아닐 경우, disable 버튼을 표시해야 한다.

- CardList (제어받음)
  - 카드들이 렌더링된다.
  - 3*4의 형태로 렌더링된다.
  - (전체 카드 중 selected 상태인 카드가 0개 라면,) closed 상태인 카드 중 한 장을 클릭할 수 있다.
    - 선택한 카드는 selected 상태가 된다.
  - (전체 카드 중 selected 상태인 카드가 1개 라면,) closed 상태인 카드 중 또 다른 카드 한 장을 클릭할 수 있다.
    - 선택한 카드는 selected 상태가 된다.

- App
  - 두 카드가 선택된 상태는 1초간 유지되어 화면에 그림이 보인다.
  - 선택된 두 카드가 같은 그림일 경우, 해당 카드들은 fixed된다.
  - 선택된 두 카드가 다른 그림일 경우, 해당 카드들은 closed된다.
  - 전부 픽스된 경우 게임은 끝난다.
  - 리셋 버튼을 누르면 카드가 랜덤화 재배치 된다.
