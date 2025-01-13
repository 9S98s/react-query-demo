import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/user";

const useUser = (userId) => {
    return useQuery(['user', userId], () => fetchUser(userId));
};

export default useUser;