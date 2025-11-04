import "./button.css";

interface IButtonProps {
  children: React.ReactNode;
  py?: string;
  px?: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  py = "0.5rem",
  px = "1rem",
  color = "#ff007f",
  type = "button",
  onClick,
}: IButtonProps) => {
  return (
    <button
      className="btn-hero-contact"
      style={{
        padding: `${py} ${px}`,
        backgroundColor: color,
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
