import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: "이용약관 | 대림 아이제이팩",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
