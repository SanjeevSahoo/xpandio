import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <Image
      src={"/images/logo/xpandio_logo_light.png"}
      alt="XPANDIO"
      width="80"
      height="80"
    />
  );
}

export default Logo;
