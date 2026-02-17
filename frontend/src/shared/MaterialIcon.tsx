import React from "react";

type Size = "sm" | "md" | "lg";
type Variant = "filled" | "outlined";

interface MaterialIconProps {
  /** Nombre del icono (ej: "menu", "calendar_today", "search") */
  name: string;
  /** Tamaño: sm=20px, md=24px, lg=32px */
  size?: Size;
  /** "filled" usa Material Icons, "outlined" usa Material Symbols Outlined */
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  /** Para accesibilidad */
  ariaLabel?: string;
}

const sizeClass: Record<Size, string> = {
  sm: "--sm",
  md: "",
  lg: "--lg",
};

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  size = "md",
  variant = "filled",
  className = "",
  style,
  ariaLabel,
}) => {
  const baseClass =
    variant === "outlined" ? "material-symbols-outlined" : "material-icons";
  const sizeSuffix = sizeClass[size];
  const fullClassName = [baseClass, sizeSuffix, className].filter(Boolean).join(" ");

  return (
    <span
      className={fullClassName}
      style={style}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      {name}
    </span>
  );
};
