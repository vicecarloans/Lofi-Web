import React from 'react'
import { useRouter } from "next/router";

export default function AlbumById() {
    const router = useRouter();
    const { id } = router.query;

    return <div>{id}</div>;
}
