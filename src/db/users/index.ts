import Profile from "../models/Profile";
import User from "../models/User";
import connectMongo from "../mongo";
import { IProfile, TProfile } from "../types/IProfile";

const findUserList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    await connectMongo();
    await User.create({
      email: "sks@sdsd.com",
      password: "234234234",
      avatar: "",
    });
    const users = await User.find({});
    retVal.data = { ...users };
  } catch (err) {
    console.log(err);
    retVal = { error: true, errorMessage: "Unknown DB Error", data: {} };
  }
  return retVal;
};

const findProfileList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    await connectMongo();
    const allUsers = await User.find({});

    const profileFields: TProfile = {
      user: allUsers[0]._id,
      firstName: "sanjeev",
      lastName: "sahoo",
      username: "sks.s",
    };
    const profile = new Profile(profileFields);
    await profile.save();
    const allProfiles: IProfile[] = await Profile.find().populate("user", [
      "avatar",
      "email",
    ]);
    retVal.data = { ...allProfiles };
  } catch (err) {
    console.log(err);
    retVal = { error: true, errorMessage: "Unknown DB Error", data: {} };
  }
  return retVal;
};

export { findUserList, findProfileList };
