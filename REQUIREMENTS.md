# 요구사항

### 헤더

- [ ] 좌측 상단 버튼 `.toggle-all` 클릭시 토글 처리
- [ ] 모든 To Do 상태가 완료(Black)일때  `.toggle-all` 클릭시 모든 To Do 미완료 상태로 변경된다.
- [ ] 모든 To Do 상태가 미완료(Grey)일때 `.toggle-all` 클릭시 모든 To Do 완료 상태로 변경된다.
- [ ] 입력창에 To Do 내용 입력 후 `Enter` 키 발동시 입력된 내용의 Active To Do 생성 후 입력된 내용은 제거된다.
- [ ] 빈 문자는 등록되지 않는다.

### 리스트

- [ ] To Do 존재하지 않을 때는 보이지 않는다.
- [ ] To Do 1개 이상 있을 때만 등록된 To Do 리스트를 보여준다.
- [ ] To Do 마우스 오버시 `X` 버튼 노출 클릭 시 해당 To Do 삭제 처리
- [ ] To Do 더블 클릭시 수정 입력창 제공
	- [ ] 입력 창에 기존 To Do 내용이 보여진다.
	- [ ] 입력 창을 제외한 곳을 클릭하거나 `ESC` 키 입력시 원래 상태로 돌아간다.
  - [ ] `Enter` 키 발동시 입력된 수정 내용이 반영된다.
- [ ] 라디오 체크박스 클릭시 To Do 상태 (Active <=> Completed) 토글 가능
  - [ ] Active 상태는 취소선 표시


### 하단 필터

- [ ] To Do 존재하지 않을 때는 보이지 않는다.
- [ ] To Do 1개 이상 있을 때만 볼 수 있다.
- [ ] `All` 상태에서는 모든 To Do를 볼 수 있으며 Default 값이다.
- [ ] `Active` 상태에서는 Active To Do를 볼 수 있다.
- [ ] `Completed` 상태에서는 Completed To Do를 볼 수 있다.
- [ ] `Clear completed` 버튼은 Completed To Do 1개 이상일때만 노출된다.
- [ ] `Clear completed` 버튼 클릭시 모든 Completed To Do가 제거된다
- [ ] 좌측 하단에 Active To Do 개수를 표시한다.
   - [ ] `0 items left`로 표시한다. s는 0이거나 2이상일때 붙는다.
