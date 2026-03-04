import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",   // primary | secondary | ghost
  size = "md",           // sm | md | lg
  isLoading = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        isLoading ? styles.loading : "",
        className,
      ].join(" ")}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}