import mongoose, { Schema } from 'mongoose';

const SessionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Session', SessionSchema);
