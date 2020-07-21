import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { propagateUser } from "flux/user";

export const useAuth = (user) => {
  if (!user) return;
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.name) {
      dispatch(propagateUser(user));
    }
  }, [user]);
};
