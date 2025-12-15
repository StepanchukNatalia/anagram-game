import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}) => {
  const baseStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "50px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    opacity: disabled ? 0.6 : 1,
    margin: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const variants = {
    primary: {
      background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
      color: "white",
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
    },

    outline: {
      background: "transparent",
      border: "2px solid #6366f1",
      color: "#6366f1",
      boxShadow: "none",
    },
  };

  const finalStyle = { ...baseStyle, ...variants[variant] };

  return (
    <button 
      type={type}
      style={finalStyle} 
      onClick={onClick} 
      disabled={disabled}
      // Додаємо невеликий ефект наведення і для outline
      onMouseEnter={(e) => {
         if (disabled) return;
         e.target.style.transform = 'translateY(-2px)';
         if (variant === 'outline') {
             e.target.style.background = 'rgba(99, 102, 241, 0.1)'; // Легкий фон при наведенні
         }
      }}
      onMouseLeave={(e) => {
         if (disabled) return;
         e.target.style.transform = 'translateY(0)';
         if (variant === 'outline') {
             e.target.style.background = 'transparent';
         }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
