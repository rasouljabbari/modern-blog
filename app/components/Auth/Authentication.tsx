import { getServerSession } from "next-auth/next";

import LoginButton from "./LoginButton";
import { ProfileButton } from "./ProfileButton";

export async function Authentication() {
  
  const session = await getServerSession();
  

  return session?.user != null ? (
    <ProfileButton user={session.user!}/>
  ) : (
    <LoginButton />
  );
}
