import mongoose from 'mongoose';

export const menuItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
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

export const MenuItem = mongoose.model('menuItem', menuItemSchema);
