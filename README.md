# Vue - 완벽 가이드 (Router 및 Composition API 포함)
<img src="https://img-c.udemycdn.com/course/240x135/4861998_7208_4.jpg">

## What I Learned
- [x] VueJS는 무엇이고 사용 목적은?
- [x] 기초 개념(기본 구문, 템플릿 이해 등 포함!)
- [x] 반응형 데이터를 출력하고 이벤트를 수신하는 방법
- [x] DOM과 상호작용하기(목록 렌더링, 조건부로 요소 연결/분리 등)
- [ ] 개발 환경 및 워크플로우 설정하기
- [x] 컴포넌트 사용하기(컴포넌트의 정의 포함)
- [x] Vue 내부 심층 분석
- [ ] 양식 입력에 바인딩하기
- [ ] 백엔드 API에 HTTP 요청 보내기
- [ ] Vue에서의 인증
- [ ] 애니메이션과 전환으로 앱을 더 아름답게 만드는 방법
- [ ] 라우팅을 사용하여 멋진 싱글 페이지 애플리케이션(SPA)을 만드는 방법
- [ ] Vuex를 통한 상태 관리 개선 방법
- [ ] 앱 배포 방법
<br>

## Todo
- 몬스터 슬레이어 게임
  - [x] 체력 바 업데이트
    - 플레이어와 몬스터의 체력 데이터 프로퍼티 추가 및 바인딩
    - 플레이어와 몬스터의 공격 methods 생성 후 클릭 이벤트 추가
      - 공격으로 인한 체력 감소는 랜덤으로 함
      - 몬스터의 공격력이 더 크도록 함
    - 체력바 스타일 업데이트(computed와 v-bind를 이용하여 동적 값 적용)
  - [x] 특수 공격 추가하기
    - 세 턴마다 한 번씩 가능하게 함
      - 게임 턴 수 데이터 프로퍼티 추가 및 바인딩
      - 세 턴째가 아닐 때 버튼 비활성화(v-bind를 이용하여 동적 값 적용)
  - [x] 회복 기능 추가하기
    - 시작 체력인 100을 넘지 않도록 함
    - 게임의 턴으로 집계함
    - 몬스터가 플레이어를 공격하게 함
  - [x] 항복 기능 추가하기
    - #controls 비노출
  - [x] 게임 오버 화면 추가하기
    - 감시자(Watch) 추가하여 승패 변화 파악
    - winner 데이터 프로퍼티 추가
    - winner 데이터 프로퍼티와 v-if 디렉티브 사용하여 메세지 노출
    - 다시 시작하기 버튼, 메소드 추가
  - [x] 전투 기록 추가하기
- [Vue 내부 들여다보기](https://github.com/twilight92/vue-perfect-guide/wiki/%EC%84%B9%EC%85%985-Vue-%EB%82%B4%EB%B6%80-%EB%93%A4%EC%97%AC%EB%8B%A4%EB%B3%B4%EA%B8%B0)
  - [x] Proxy를 이용한 Vue 반응성 심층 분석
  - [x] 여러 개의 Vue 앱 사용이 가능한지 알아보기
  - [x] Ref 이해
  - [x] Vue가 DOM을 업데이트하는 방법
- [컴포넌트 소개](https://github.com/twilight92/vue-perfect-guide/wiki/%EC%84%B9%EC%85%98-6:-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)
  - [x] 컴포넌트 이해하기
- Vue CLI를 사용하여 더 나은 개발 설정 및 워크플로우로 전환하기
  - 개발 서버가 필요한 이유, 더 나은 개발자 경험이 필요한 이유 알아보기
  - Vue CLI 설치 및 사용하기
  - VS CODE에 "Vetur" 확장 프로그램 추가하기
  - 설정 대안 알아보기
    - Vue CLI 설치/사용 대신 `npm init vue` 사용
    - Vetur 대신 Volar 확장 프로그램 사용
- [컴포넌트 통신](https://github.com/twilight92/vue-perfect-guide/wiki/%EC%84%B9%EC%85%98-8:-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%86%B5%EC%8B%A0)
