"use client";
import { useEffect } from 'react'
import { signOut } from "next-auth/react";
import Image from 'next/image'
import { useDispatch } from 'react-redux';

import { SecondaryButton } from "./SecondaryButton";
import LogoutIcon from "../svg/LogoutIcon";
import { updateUserSessions } from '../../redux/features/userSessionSlice';

export function ProfileButton({ user }: any) {
  const dispatch = useDispatch()
  const handleLogout = () => {
    void signOut();
    dispatch(updateUserSessions({}))
  };


  useEffect(() => {
    dispatch(updateUserSessions(user))
  }, [user, dispatch])

  return (
    <div className="flex gap-2">
      <SecondaryButton>
        <Image
          src={user?.image}
          width="32"
          height="32"
          className="h-8 w-8 rounded-full border border-white"
          alt={`${user?.name}'s avatar`}
        />
        <p className="hidden md:mr-2 md:block">{user?.name}</p>
      </SecondaryButton>
      <SecondaryButton
        className="flex items-center justify-center"
        onClick={handleLogout}
      >
        <LogoutIcon />
      </SecondaryButton>
    </div>
  );
}
