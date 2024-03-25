import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <Image
      src={"/images/logo/xpandio_logo_light.png"}
      alt="XPANDIO"
      width="64"
      height="64"
    />
  );
}

export default Logo;
