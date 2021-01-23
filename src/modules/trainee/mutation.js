/* eslint-disable no-console */
import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args) => {
    const { id, email, role } = args;
    return userInstance.updateUser(id, email, role);
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    const del = userInstance.deleteUser(id);
    console.log(del, 'return');
    return del;
  },
};
