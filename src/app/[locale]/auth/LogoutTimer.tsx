"use client";

import React, { useEffect, useState } from "react";
import { appStore } from "@/_common/store/appStore";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutTimer = () => {
  const appBase = appStore((state) => state.appBase);
  const { data: session, status } = useSession();
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const interval = setInterval(() => {
        const time = Date.parse(session.expires) - Date.now();
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        setTimer({ minutes, seconds });
        if (time <= 0) {
          signOut({ redirect: false });
          let signInBase = appBase || "/";
          signInBase = signInBase === "/" ? "/" : `${appBase}/signin`;
          router.replace(signInBase);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [session, status]);
  return (
    <div>
      {timer.minutes}:{timer.seconds}
    </div>
  );
};

export default LogoutTimer;
