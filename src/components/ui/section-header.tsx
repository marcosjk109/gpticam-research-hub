
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-primary transition-all-slow hover:text-primary/80">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-muted-foreground transition-all-slow">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mx-auto mt-4 transition-all-slow hover:w-32"></div>
    </div>
  );
};

export default SectionHeader;
