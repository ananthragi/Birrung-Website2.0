import { PageFade } from "@/components/page-fade";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <PageFade>{children}</PageFade>;
}
