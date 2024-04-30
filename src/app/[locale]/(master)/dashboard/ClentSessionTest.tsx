"use client";

import { useSession } from "next-auth/react";
import React from "react";

function ClientSessionTest() {
  const session = useSession();
  return (
    <div>
      ClientSessionTest
      {session.data?.user?.name}
    </div>
  );
}

export default ClientSessionTest;
