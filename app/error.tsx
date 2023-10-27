"use client"

import ErrorComp from "@comp/ErrorComp";

export default function Error({
  error
}: {
  error: Error;
}) {

  return (
    <ErrorComp error={error}/>
  );
}
