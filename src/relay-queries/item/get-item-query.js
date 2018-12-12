import { GraphQLID, GraphQLNonNull } from 'graphql';
import { resolveItem } from '../../relay-resolvers/item-resolver';
import { ItemType } from '../../relay-models/item-type';

export const getItem = {
  type: ItemType,
  args: {
    item_id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (obj, args, viewer, info) => resolveItem(obj, args, viewer, info)
};
