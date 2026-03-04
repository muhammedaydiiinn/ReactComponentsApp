import LoginForm from "../components/auth/LoginForm/LoginForm";

export default function LoginScreen() {
  const fields = [
    {
        name: "username",
        label: "Username",
        type: "text",
        placeholder: "Enter your username",
        required: true,
        wrapperClassName: "mt-1",
        inputProps: { autoComplete: "username" },
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "name@domain.com",
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternMessage: "Geçerli bir e-mail gir",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      required: true,
      minLength: 6,
    },
    {
      name: "rememberMe",
      label: "Remember me",
      type: "checkbox",
    },
    {
        name: "gender",
        label: "Gender",
        type: "select",
        options: [
            { value: "", label: "Select gender" },
            { value: "male", label: "           Male" },
            { value: "female", label: "                 Female" },
            { value: "other", label: "Other" },
        ],
    }

  ];

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <LoginForm
        title="Welcome back"
        fields={fields}
        submitText="Login"
        onSubmit={async (values) => {
          console.log("submit:", values);
          // burada API çağrısı vs.
          alert(`Login: ${values.email}`);
        }}
      />
    </div>
  );
}