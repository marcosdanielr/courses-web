"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(async function Products() {
  return <h2>user is authenticated</h2>;
});
