export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-saffron-600">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-heading text-3xl font-bold text-maroon-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-gray-600 md:text-base">{description}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-saffron-500" />
    </div>
  );
}
