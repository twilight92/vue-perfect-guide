const app = Vue.createApp({
  data() {
    return {
      freinds: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

/* 
    component 메서드는 두 개의 인수를 갖는다.
    
    첫 번째 인수는 식별자
    컴포넌트는 기본적으로 커스텀 HTML 요소(div와 같은)이다.
    커스텀 HTML 태그를 정의할 때는 항상 대시 기호를 포함한 식별자를 사용해야한다.
    (내장된 모든 HTML 요소는 한 단어로 되어있기 때문에 중복을 막기 위해)

    두 번째 인수는 createApp에 전달한 것과 같은 구성 객체이다.
    Vue 컴포넌트는 본질적으로 Vue 앱과 같다.
    말하자면 컴포넌트는 미니 앱이기 때문에 데이터나 메서드도 가질 수 있다.
*/
app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
