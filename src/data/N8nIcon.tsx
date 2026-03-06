//Componente do ícone n8n
export const N8nIcon = ({
    size = 29,
    filterWhite = false,
    filterPurple = false,
  }: {
    size?: number;
    filterWhite?: boolean;
    filterPurple?: boolean;
  }) => {
    let filter =
      "invert(54%) sepia(88%) saturate(3750%) hue-rotate(346deg) brightness(101%) contrast(101%)";
  
    if (filterWhite) {
      filter = "invert(100%) brightness(200%) contrast(100%)";
    } else if (filterPurple) {
      // Aproximação fiel do #7f00ff
      filter =
        "invert(17%) sepia(96%) saturate(7476%) hue-rotate(268deg) brightness(96%) contrast(108%)";
    }
  
    return (
      <img
        src="https://logo.svgcdn.com/simple-icons/n8n-dark.svg"
        alt="n8n"
        width={size}
        height={size}
        style={{
          objectFit: "contain",
          display: "block",
          filter,
        }}
      />
    );
  };