import React from "react";
import { profileSelector } from "flux/user";
import { useSelector } from "react-redux";
import ensureAuth from "utils/ensureAuth";

function Profile() {
  
  const profile = useSelector(profileSelector);

  return (
    <div>
      <p>{JSON.stringify(profile || {})}</p>
    </div>
  );
}

export const getServerSideProps = ensureAuth();

export default Profile;
