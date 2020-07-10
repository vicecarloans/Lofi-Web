import React from "react";
import { profileSelector } from "flux/user";
import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector(profileSelector);

  return (
    <div>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
}
