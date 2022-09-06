type CeciliaPageHeaderProps = {
  title?: string;
  children: React.ReactNode;
};

export function CeciliaPageHeader({ title, children }: CeciliaPageHeaderProps) {
  return (
    <div className="w-full">
      <p className="text-5xl font-bold my-6">{title}</p>
      {children}
    </div>
  );
}
