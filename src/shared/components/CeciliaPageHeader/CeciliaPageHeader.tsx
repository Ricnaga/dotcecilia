type CeciliaPageHeaderProps = {
  title?: string;
  children: React.ReactNode;
};

export function CeciliaPageHeader({ title, children }: CeciliaPageHeaderProps) {
  return (
    <div className="w-full mt-8">
      <p className="text-5xl font-bold mb-12">{title}</p>
      {children}
    </div>
  );
}
