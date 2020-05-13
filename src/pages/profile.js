import React from "react";

export default function Profile({ user }) {
  console.log(user);
  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

Profile.getInitialProps = ({ req }) => {
  const user = req ? req.userContext.userinfo : {};
  return { user };
};
