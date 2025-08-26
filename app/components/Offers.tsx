import OfferCard from "./OfferCard";

export default function Offers() {
  const cal = "https://calendly.com/YOUR_HANDLE/15min";
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <OfferCard
        title="Audit + Fix-2"
        price="$300"
        description="Fix two critical issues in 48 hours. You keep all deliverables."
        href={cal}
      />
      <OfferCard
        title="Lead Engine Upgrade"
        price="$900"
        description="Keep your site; I fix nav, CTAs, forms and analytics. 5-day delivery."
        href={cal}
      />
      <OfferCard
        title="Speed Rebuild"
        price="$1,200–1,500"
        description="One-page, conversion-first rebuild. 7 days."
        href={cal}
      />
    </section>
  );
}
