import { Types } from 'mongoose';

import { MenuItem } from './menu-item.model';
import handleImageUpload from '../../helpers/upload-image';

const menuItem = (_, { id }) => {
  return MenuItem.findById(id).lean().exec();
};

const newMenuItem = (_, { input }) => {
  return MenuItem.create({ ...input, _id: new Types.ObjectId() });
};

const menuItems = () => {
  return MenuItem.find({}).lean().exec();
};

const updateMenuItem = (_, { id, input }) => {
  return MenuItem.findByIdAndUpdate(id, input, { new: true }).lean().exec();
};

const removeMenuItem = (_, { id }) => {
  return MenuItem.findByIdAndRemove(id).lean().exec();
};

const uploadImage = async (parent, { file }) => {
  const response = await handleImageUpload(file);
  return response;
};

export default {
  Query: {
    menuItems,
    menuItem,
  },
  Mutation: {
    newMenuItem,
    uploadImage,
    updateMenuItem,
    removeMenuItem,
  },
  MenuItem: {
    __resolveType: (item) => item.type,
  },
};
