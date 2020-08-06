import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { propagateUser, profileSelector } from "flux/user";

export const useAuth = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector)
  useEffect(() => {
    async function refreshUser(){
      const lastUpdated = localStorage.getItem("profile_last_updated")
      const lastUpdatedDate = new Date(Number(lastUpdated || null))
      lastUpdatedDate.setMinutes(30);
      if(!profile?.name || !lastUpdated || Date.now() >= lastUpdatedDate.getTime()){
        dispatch(propagateUser());
        localStorage.setItem("profile_last_updated", Date.now());
      }
    }
    refreshUser();
  }, []);
};
