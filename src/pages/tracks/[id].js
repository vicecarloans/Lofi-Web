import React from "react";
import { useRouter } from "next/router";

export default function TrackById() {
    const router = useRouter();
    const { id } = router.query;

    return <div>{id}</div>;
}
