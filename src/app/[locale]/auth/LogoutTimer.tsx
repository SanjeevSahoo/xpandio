"use client";

import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutTimer = () => {
  const { data: session, status } = useSession();
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const getSessionData = sessionStorage.getItem("xpandioapp");
      if (!getSessionData) {
        signOut({ redirect: false });
        router.replace("/");
        router.refresh();
        window.location.reload();
      }
      const interval = setInterval(() => {
        const time = Date.parse(session.expires) - Date.now();

        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);

        setTimer({ minutes, seconds });
        if (time <= 0) {
          sessionStorage.removeItem("xpandioapp");
          signOut({ redirect: false });
          router.replace("/");
          router.refresh();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [session]);
  return (
    <div>
      {timer.minutes}:{timer.seconds}
    </div>
  );
};

export default LogoutTimer;
