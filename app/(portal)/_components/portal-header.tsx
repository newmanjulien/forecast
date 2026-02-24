"use client";

import Image from "next/image";

export function PortalHeader() {
  return (
    <header className="h-full bg-transparent">
      <div className="flex h-full items-center justify-end pl-1 pr-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-edge/60 bg-sand/40">
            <Image
              src="/avatars/aditya.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
