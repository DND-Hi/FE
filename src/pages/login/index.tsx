import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col gap-[4px]">
        <p>Sign in {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <div onClick={() => signIn()}>Login</div>;
}
