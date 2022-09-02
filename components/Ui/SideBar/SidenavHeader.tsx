import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SidenavHeader = () => {
  return (
    <div className="bg-white flex flex-col pt-3 mb-6 pb-3 sticky cursor-pointer z-10">
      <Link href="/">
        <Image
          src="/gas-nieto.png"
          width={100}
          height={48}
          className="object-contain "
        />
      </Link>
    </div>
  );
};
