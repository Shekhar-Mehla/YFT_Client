import { getUserProfile } from "../AxiousHelper/axious";

const token = localStorage.getItem("token");
export const autoLogin = async () => {
  try {
    if (token) {
      const { user } = await getUserProfile();

      if (user?._id) {
        return user;
      }
    }
  } catch (error) {
    console.log(error.message, "no token in the browser storage");
  }
};
