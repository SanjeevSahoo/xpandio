"use client";

import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

interface IProps {
  session: Session | null;
}

const LogoutTimer = (props: IProps) => {
  const { session } = props;
  // const { data: session, status } = useSession();
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const router = useRouter();
  useEffect(() => {
    if (session) {
      const interval = setInterval(() => {
        const time = Date.parse(session.expires) - Date.now();

        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        // if (time / 1000 / 60 >= 29.5) {
        //   console.log(minutes, "yes", time / 1000 / 60);
        // }

        setTimer({ minutes, seconds });
        if (time <= 0) {
          signOut({ redirect: false });
          router.replace("/");
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
