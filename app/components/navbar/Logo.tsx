"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer"
    >
      <Image
        alt="Logo"
        className="cursor-pointer md:block"
        height={50}
        width={50}
        src="/images/logo.png"
      />
      <span className="ml-4 text-lg hidden lg:block underline">Accomodo</span>
    </div>
  );
};

export default Logo;
