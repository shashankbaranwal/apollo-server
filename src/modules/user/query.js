/* eslint-disable no-unused-vars */
// export default {
//   getMyProfile: () => ({
//     id: 1,
//     name: 'Shashank',
//     email: 'shashank.baranawal@successive.tech',
//     role: 'Trainee Engineer',
//   }),
// };
import user from '../../service/user';

export default {
  // getProfile: () => user.getAll(),
  getMe: async (parent, args, context) => {
    const { dataSources: { userApi } } = context;
    const response = await userApi.getMe();
    console.log(response);
    return response.data.user;
  },
};
