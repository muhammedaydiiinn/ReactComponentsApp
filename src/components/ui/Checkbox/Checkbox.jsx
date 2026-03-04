import styles from "./Checkbox.module.css";

export default function Checkbox({ label, name, checked, onChange, error, className = "", ...props }) {
  return (
    <div className={[styles.wrap, className].join(" ")}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          name={name}
          checked={!!checked}
          onChange={onChange}
          {...props}
        />
        <span>{label}</span>
      </label>
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
}