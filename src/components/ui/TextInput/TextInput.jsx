import styles from "./TextInput.module.css";

export default function TextInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  rightSlot, // örn: show/hide password butonu
  ...props
}) {
  return (
    <div className={styles.wrap}>
      {label ? <label className={styles.label} htmlFor={name}>{label}</label> : null}

      <div className={styles.inputRow}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={onChange}
          className={[styles.input, error ? styles.errorInput : ""].join(" ")}
          {...props}
        />
        {rightSlot ? <div className={styles.rightSlot}>{rightSlot}</div> : null}
      </div>

      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}