import { Schema, model } from 'mongoose';

export const menuItemSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
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
      required: false,
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

export const MenuItem = model('menuItem', menuItemSchema);
