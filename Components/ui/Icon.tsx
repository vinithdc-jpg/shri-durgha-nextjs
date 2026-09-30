export default function Icon({
  name,
  className = "",
  prefix = "fa-solid",
}: {
  name: string;
  className?: string;
  prefix?: "fa-solid" | "fa-regular" | "fa-brands";
}) {
  return <i className={`${prefix} ${name} ${className}`} aria-hidden="true" />;
}
