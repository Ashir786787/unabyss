import type { Metadata } from "next";
import RestrictedJurisdictionsSection from "@/components/sections/RestrictedJurisdictionsSection";

export const metadata: Metadata = {
  title: "Restricted jurisdictions — Unabyss",
  description:
    "Jurisdictions subject to comprehensive sanctions or embargoes under EU, UN, US or UK law, as referenced in section 3.9 of the Unabyss Terms and Conditions.",
};

export default function RestrictedJurisdictionsPage() {
  return <RestrictedJurisdictionsSection />;
}
