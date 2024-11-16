export default {
  registerCoach(context, data) {
    const coachData = {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    context.commit('registerCoach', coachData);
  },
};
