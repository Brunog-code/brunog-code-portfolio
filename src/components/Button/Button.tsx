import "./button.css";

interface IButtonProps {
  children: React.ReactNode;
  py?: string;
  px?: string;
  color?: string;
}

export const Button = ({
  children,
  py = "0.5rem",
  px = "1rem",
  color = "#ff007f",
}: IButtonProps) => {
  return (
    <button
      className="btn-hero-contact"
      style={{
        padding: `${py} ${px}`,
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  );
};
