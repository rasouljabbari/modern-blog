"use client";
import {useEffect} from 'react'
import { signOut } from "next-auth/react";
import Image from 'next/image'
import { SecondaryButton } from "./SecondaryButton";
import LogoutIcon from "./LogoutIcon";
import { useDispatch } from 'react-redux';
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
          width="40"
          height="40"
          className="h-10 w-10 rounded-full border border-white"
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
