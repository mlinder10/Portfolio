import { ChangeEvent } from "react";
import styles from "./floatingtextarea.module.css";

type FloatingTextareaProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

export default function FloatingTextarea({
  placeholder,
  value,
  onChange,
  className,
}: FloatingTextareaProps) {
  return (
    <div className={styles.container}>
      <textarea
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      />
      <p
        className={`${styles.placeholder} ${
          value.length !== 0 ? styles.hidden : ""
        }`}
      >
        {placeholder}
      </p>
    </div>
  );
}
