import { IUser } from "./IUser";

export type TProfile = {
  user: IUser["_id"];
  firstName: string;
  lastName: string;
  username: string;
};

export interface IProfile extends TProfile, Document {}
