import { useMemo, useState } from "react";
import { Button, Card, TextInput, Checkbox, Select } from "../../ui";

export default function LoginForm({
  fields = [],
  onSubmit,
  title = "Login",
  submitText = "Sign in",
  initialValues = {},
}) {
  const defaultValues = useMemo(() => {
    const base = {};
    fields.forEach((f) => {
      const fallback = f.type === "checkbox" ? false : "";
      base[f.name] = initialValues[f.name] ?? f.defaultValue ?? fallback;
    });
    return base;
  }, [fields, initialValues]);

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    const nextValue = type === "checkbox" ? checked : value;

    setValues((v) => ({ ...v, [name]: nextValue }));
    setErrors((err) => ({ ...err, [name]: "" }));
  }

  function validate() {
    const next = {};

    fields.forEach((f) => {
      const raw = values[f.name];

      // checkbox required ise true olmalı
      if (f.type === "checkbox") {
        if (f.required && !raw) next[f.name] = f.requiredMessage || "Bu alan zorunlu";
        return;
      }

      const v = String(raw ?? "").trim();

      if (f.required && !v) next[f.name] = f.requiredMessage || "Bu alan zorunlu";
      if (f.minLength && v.length < f.minLength) next[f.name] = `En az ${f.minLength} karakter`;
      if (f.pattern && !f.pattern.test(v)) next[f.name] = f.patternMessage || "Geçersiz format";
    });

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await onSubmit?.(values);
    } finally {
      setLoading(false);
    }
  }

  function normalizeOptions(options = []) {
    return options.map((o) => ({
      ...o,
      // label içindeki aşırı boşlukları temizle
      label: typeof o.label === "string" ? o.label.trim() : o.label,
    }));
  }

  function renderField(f) {
    const wrapperClassName = f.wrapperClassName || "";
    const wrapperStyle = f.style || undefined;

    // inputProps: input/select/checkbox elementine aynen geçer
    const inputProps = f.inputProps || {};

    if (f.type === "select") {
      return (
        <div key={f.name} className={wrapperClassName} style={wrapperStyle}>
          <Select
            label={f.label}
            name={f.name}
            value={values[f.name]}
            onChange={handleChange}
            options={normalizeOptions(f.options)}
            error={errors[f.name]}
            {...inputProps}
          />
        </div>
      );
    }

    if (f.type === "checkbox") {
      return (
        <div key={f.name} className={wrapperClassName} style={wrapperStyle}>
          <Checkbox
            label={f.label}
            name={f.name}
            checked={values[f.name]}
            onChange={handleChange}
            error={errors[f.name]}
            {...inputProps}
          />
        </div>
      );
    }

    const isPassword = f.type === "password";
    const type = isPassword ? (showPass ? "text" : "password") : (f.type || "text");

    return (
      <div key={f.name} className={wrapperClassName} style={wrapperStyle}>
        <TextInput
          label={f.label}
          name={f.name}
          type={type}
          placeholder={f.placeholder}
          value={values[f.name]}
          onChange={handleChange}
          error={errors[f.name]}
          rightSlot={
            isPassword ? (
              <button
                type="button"
                className="btn btn-sm btn-light"
                onClick={() => setShowPass((s) => !s)}
              >
                {showPass ? "Hide" : "Show"}
              </button>
            ) : null
          }
          {...inputProps}
        />
      </div>
    );
  }

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit} className="d-grid gap-3">
        {fields.map(renderField)}

        <Button type="submit" isLoading={loading}>
          {submitText}
        </Button>
      </form>
    </Card>
  );
}