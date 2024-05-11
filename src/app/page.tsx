"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <h2>{user?.name}</h2>
      <a href="/api/auth/login">Login</a>
    </>
  );
}
