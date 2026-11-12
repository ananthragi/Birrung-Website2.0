import Image from "next/image";
import { logo } from "@/lib/media";

export function LogoMark() {
  return <Image className="logo-mark" src={logo} alt="Birrung" priority width={120} height={48} sizes="120px" />;
}
