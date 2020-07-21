import React, { useEffect } from "react";
import { profileSelector } from "flux/user";
import { useSelector } from "react-redux";
import ensureAuth from "utils/ensureAuth";
import { useAuth } from "utils/useAuth";
import api from "services/domain";
import Axios from "axios";

function Profile({ user }) {
  useAuth(user);

  const profile = useSelector(profileSelector);

  return (
    <div>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
}

export const getServerSideProps = ensureAuth();

export default Profile;
