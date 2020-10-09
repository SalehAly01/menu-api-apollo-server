import mongoose from 'mongoose';

export const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: 'https://via.placeholder.com/500',
    },
    type: {
      type: String,
      required: true,
      enum: ['MAIN_COURSE', 'SIDE'],
    },
  },
  { timestamps: true }
);

export const MenuItem = mongoose.model('menuItem', menuItemSchema);
