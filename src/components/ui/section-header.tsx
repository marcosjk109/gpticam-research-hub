
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeader;
