interface InfiniteScrollProps {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: "slow" | "normal" | "fast";
  className?: string;
}

export function InfiniteScroll({
  children,
  direction,
  speed,
  className = "",
}: InfiniteScrollProps) {
  const speedClass = {
    slow: "animate-scroll-slow",
    normal: "animate-scroll-normal",
    fast: "animate-scroll-fast",
  }[speed];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${speedClass} ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } ${className}`}
      >
        {children}
        {children} {/* Duplicated for seamless scrolling */}
      </div>
    </div>
  );
}
