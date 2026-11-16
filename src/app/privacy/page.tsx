import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/data/legal";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 대림 아이제이팩",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
