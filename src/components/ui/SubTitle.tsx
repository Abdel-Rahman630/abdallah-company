export default function SubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-[8px] uppercase text-[#D1A52A] text-[0.6875rem] font-medium tracking-[2.5px] ${className}`}
    >
      {children}
    </h3>
  );
}
