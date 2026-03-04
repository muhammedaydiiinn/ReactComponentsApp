import styles from "./Select.module.css";

export default function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  className = "",
  ...props
}) {
  return (
    <div className={[styles.wrap, className].join(" ")}>
      {label ? <label className={styles.label} htmlFor={name}>{label}</label> : null}

      <select
        id={name}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        className={[styles.select, error ? styles.errorSelect : ""].join(" ")}
        {...props}
      >
        {options.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}