import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment"
import { propagateUser, profileSelector } from "flux/user";

export const useAuth = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector)
  useEffect(() => {
    async function refreshUser(){
      const lastUpdated = localStorage.getItem("profile_last_updated")
      
      const lastUpdatedDate = new Date(Number(lastUpdated || null))
      const lastUpdatedThreshold = moment(lastUpdatedDate).add(30, "m").toDate();
      
      if(!profile || !profile.name || !lastUpdated || Date.now() >= lastUpdatedThreshold.getTime()){
        dispatch(propagateUser());
        localStorage.setItem("profile_last_updated", Date.now());
      }
    }
    refreshUser();
  }, []);
};
