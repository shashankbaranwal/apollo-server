export default {
  getMyProfile: async (parent, args, context) => {
    const { dataSources: { userApi } } = context;
    const response = await userApi.getMe();
    const { data: [{ user }] } = response;
    return user;
  },
};
