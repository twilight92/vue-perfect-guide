export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    // PUT이 아닌 POST인 이유는 기존 데이터를 덮어쓰는 것이 아니라 새 요청을 추가할 것이기 때문
    // 전송된 모든 요청은 요청 목록에 추가될 완전히 새로운 요청으로 생각해야 한다.
    const response = await fetch(
      `https://vue-http-demo-8d506-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청 전송 실패');
      throw error;
    }

    // Firebase는 생성된 ID를 반환한다. 게시된 모든 항목에 대해 새로운 고유 ID를 자동으로 생성한다.
    // Firebase에서 가져온 responseData 객체에는 자동으로 생성된 ID를 가지는 name 필드가 생겼다.
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-http-demo-8d506-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청 수신 실패');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      requests.push(request);
    }

    context.commit('setRequest', requests);
  },
};
