export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    // PUT(데이터가 존재하면 덮어쓰고 존재하지 않으면 생성) 요청과 달리 POST 요청은 항상 새 엔트리를 추가함
    // JSON.stringify(coachData): coachData 객체를 JSON 형식으로 변환해 전송 가능
    const response = await fetch(
      `https://vue-http-demo-8d506-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
