import Axios from "axios";

export async function getProfileService() {
    const data = await fetch("/api/me", {method: "POST"});
    const {userinfo} = await data.json();
    return userinfo;
}