"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="cursor-pointer hidden md:block"
        height={50}
        width={50}
        src="/images/logo.png"
      />
      <span className="ml-4 text-lg"> Accomodo</span>
    </div>
  );
};

export default Logo;
