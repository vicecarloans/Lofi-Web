import React, { useContext, useEffect } from "react";
import { AuthContext } from "utils/useAuth";
import { putData } from "services/base";
import api from "services/domain";

export default function Profile() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <p>{JSON.stringify(ctx.user)}</p>
    </div>
  );
}
