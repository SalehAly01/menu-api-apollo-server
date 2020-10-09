import { MenuItem } from './menu-item.model';

const menuItem = (_, args) => {
  return MenuItem.findById(args.id).lean().exec();
};

const newMenuItem = (_, args) => {
  return MenuItem.create(args.input);
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

export default {
  Query: {
    menuItems,
    menuItem,
  },
  Mutation: {
    newMenuItem,
    updateMenuItem,
    removeMenuItem,
  },
  MenuItem: {
    __resolveType: (item) => item.type,
  },
};
