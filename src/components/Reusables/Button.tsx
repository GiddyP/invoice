interface ButtonProps {
    className?: string;
    text: string;
    type?: "button" | "submit" | "reset";
  }
  
  const Button = ({ className, text, type = "button" }: ButtonProps) => {
    return (
      <button type={type} className={className}>
        {text}
      </button>
    );
  };
  
  export default Button;
  