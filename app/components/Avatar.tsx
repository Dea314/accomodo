"use client";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full w-full h-auto"
      width="0"
      height="0"
      sizes="2rem"
      alt="avatar"
      src={src || "/images/placeholder.png"}
      priority
    />
  );
};

export default Avatar;
