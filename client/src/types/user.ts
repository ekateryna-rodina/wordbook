export type UserSignUpInput = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type UserLoginInput = {
  email: string;
  password: string;
};

export type UserBaseInfo = {
  id: string;
  email: string;
  name: string;
};

type UserAuth = {
  jwt: string;
};

export type UserSecure = UserBaseInfo & UserAuth;
