export default function OfferCard(props: {
  title: string;
  price: string;
  description: string;
  href: string;
}) {
  const { title, price, description, href } = props;
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="text-gray-500">{price}</div>
      <p className="mt-3 text-gray-700">{description}</p>
      <a href={href} className="mt-5 inline-block rounded bg-black px-4 py-2 text-white">
        Book 15-min call
      </a>
    </div>
  );
}
