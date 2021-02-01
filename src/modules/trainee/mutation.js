import userInstance from '../../service/user';
import pubsuObject from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    const newTrainee = userInstance.createUser(user);
    pubsuObject.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: newTrainee });
    return newTrainee;
  },
  updateTrainee: (parent, args) => {
    const { id, role, name } = args;
    const updateTrainee = userInstance.updateUser(id, role, name);
    pubsuObject.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateTrainee });
    return updateTrainee;
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    const deleteTrainee = userInstance.deleteUser(id);
    pubsuObject.publish(
      constant.subscriptions.TRAINEE_DELETED,
      { traineeDeleted: deleteTrainee.id },
    );
    return deleteTrainee;
  },
};
