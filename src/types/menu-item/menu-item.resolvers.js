import { Types } from 'mongoose';

import { MenuItem } from './menu-item.model';
import handleImageUpload from '../../helpers/upload-image';

const menuItem = (_, args) => {
  return MenuItem.findById(args.id).lean().exec();
};

const newMenuItem = (_, args) => {
  return MenuItem.create({ ...args.input, _id: new Types.ObjectId() });
};

const menuItems = () => {
  return MenuItem.find({}).lean().exec();
};

const updateMenuItem = (_, args) => {
  const update = args.input;
  return MenuItem.findByIdAndUpdate(args.id, update, { new: true })
    .lean()
    .exec();
};

const removeMenuItem = (_, args) => {
  return MenuItem.findByIdAndRemove(args.id).lean().exec();
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
