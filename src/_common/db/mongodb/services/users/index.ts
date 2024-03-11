import { IProfile, TProfile } from "@/_common/types/IProfile";
import Profile from "@/_common/db/mongodb/models/Profile";
import User from "@/_common/db/mongodb/models/User";
import connectMongo from "@/_common/db/mongodb/connection";
import { TUser } from "@/_common/types/IUser";

const findUserList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    await connectMongo();

    const userFields: TUser = {
      base_loc: "1",
      createdBy: "",
      createdAt: "",
      designation: "",
      email: "",
      emp_id: "8338",
      emp_type: "Permanent",
      gender: "M",
      grade: "",
      mobile: "",
      name: "Sanjeev",
      password: "admin123",
      rfid: "",
      sap_status: "Active",
      separation_date: "",
      unique_no: "",
      updatedBy: "",
      updatedAt: "",
      username: "234234",
      allowed_domain_login: "0",
    };
    await User.create(userFields);
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
      userId: allUsers[0]._id,
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
