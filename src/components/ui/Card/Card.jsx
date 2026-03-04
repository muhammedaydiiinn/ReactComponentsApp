import styles from "./Card.module.css";

export default function Card({
  title,
  children,
  footer,
  className = "",
}) {
  return (
    <div className={[styles.card, className].join(" ")}>
      {title ? <div className={styles.header}>{title}</div> : null}

      <div className={styles.body}>{children}</div>

      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  );
}