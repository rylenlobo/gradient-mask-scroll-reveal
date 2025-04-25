import React from "react";

interface ShinyTextProps {
  children: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  disabled = false,
  speed = 3,
  className = ""
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#ebe2c44f] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 10%, rgba(235, 226, 196,1) 70%, rgba(255, 255, 255, 0) 30%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration
      }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
