"use client";

import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutTimer = () => {
  const { data: session, status } = useSession();
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const router = useRouter();

  // useEffect(() => {
  //   const handleTabClose = () => {
  //     signOut({ redirect: false });
  //     let signInBase = appBase || "/";
  //     signInBase = signInBase === "/" ? "/" : `${appBase}/signin`;
  //     router.replace(signInBase);
  //   };

  //   window.addEventListener("beforeunload", handleTabClose);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleTabClose);
  //   };
  // }, []);

  useEffect(() => {
    if (session) {
      const interval = setInterval(() => {
        const time = Date.parse(session.expires) - Date.now();
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        setTimer({ minutes, seconds });
        if (time <= 0) {
          signOut({ redirect: false });

          router.replace("/");
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
