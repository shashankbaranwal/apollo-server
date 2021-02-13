import instancePubSub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    const {
      user: {
        name, email, role, password,
      },
    } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.createTrainee({
      name, email, role, password,
    });
    instancePubSub.publish(constant.subscriptions.TRAINEE_ADDED,
      { traineeAdded: response.data.data });
    return response.data.data;
  },

  updateTrainee: async (parent, args, context) => {
    const { user: { id, name, email } } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.updateTrainee({ id, name, email });
    instancePubSub.publish(constant.subscriptions.TRAINEE_UPDATED,
      { traineeUpdated: response.data.Details });
    return response.data.Details;
  },

  deleteTrainee: async (parent, args, context) => {
    const { id } = args;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.deleteTrainee(id);
    instancePubSub.publish(constant.subscriptions.TRAINEE_DELETED,
      { traineeDeleted: response.data.id });
    return response.data.id;
  },
};
