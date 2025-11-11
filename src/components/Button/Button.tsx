import "./button.css";

interface IButtonProps {
  children: React.ReactNode;
  py?: string;
  px?: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  active?: boolean;
}

export const Button = ({
  children,
  py = "0.5rem",
  px = "1rem",
  color = "#ff007f",
  type = "button",
  onClick,
  disabled = false,
  active = false,
}: IButtonProps) => {
  return (
    <button
      className={`btn ${active && "active"}`}
      style={{
        padding: `${py} ${px}`,
        backgroundColor: active ? "var(--primary-purple)" : color,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
