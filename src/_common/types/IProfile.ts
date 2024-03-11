export type TProfile = {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
};

export interface IProfile extends TProfile, Document {}
