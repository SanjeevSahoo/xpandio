import { models, model, Schema } from "mongoose";
import { IProfile } from "@/_common/types/IProfile";

const profileSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = models.Profile || model<IProfile>("Profile", profileSchema);

export default Profile;
