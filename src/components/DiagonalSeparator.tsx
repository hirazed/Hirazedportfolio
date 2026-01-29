interface DiagonalSeparatorProps {
  flipped?: boolean;
}

const DiagonalSeparator = ({ flipped = false }: DiagonalSeparatorProps) => {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary ${
          flipped ? '-skew-y-2' : 'skew-y-2'
        }`}
        style={{
          transformOrigin: flipped ? 'top left' : 'bottom left',
        }}
      />
    </div>
  );
};

export default DiagonalSeparator;
