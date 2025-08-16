export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};