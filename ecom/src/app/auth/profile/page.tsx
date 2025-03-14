import { getSession } from "next-auth/react";

export default async function Profile() {
  const session = await getSession();

  if (!session) {
    return <p>Access Denied. Please login.</p>;
  }

  return <div>Welcome {session.user.name}!</div>;
}
