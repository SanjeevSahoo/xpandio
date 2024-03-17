const authenticateUser = () => {};
const getAuthUser = async (
  username: string,
  password: string
): Promise<any> => {
  return {
    id: 1,
    name: "test user",
    username: username,
    address: "some address",
  };
};

export { authenticateUser, getAuthUser };
