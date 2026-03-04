## React Component App

Bu proje React + Vite ile kurulmuş bir **tasarım/animasyon playground** uygulamasıdır.  
Hedef: tekrar kullanılabilir **UI component kütüphanesi** (Button, Card, TextInput, Select, Checkbox vb.) ve bu componentlerle **dinamik ekranlar** (örn. Login) geliştirmek.

## Kurulum

```bash
npm install
npm run dev
````

Build almak için:

```bash
npm run build
npm run preview
```

## Kullanılanlar

* **React + Vite** (HMR / hızlı geliştirme)
* **Bootstrap** (hızlı layout ve grid)
* (Opsiyonel) **Framer Motion** (animasyonlar)

Bootstrap ekli değilse:

```bash
npm i bootstrap
```

`src/main.jsx` içinde:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

Framer Motion (opsiyonel):

```bash
npm i framer-motion
```

## Proje Yapısı (öneri)

```
src/
  components/
    ui/               # tekrar kullanılabilir UI kit
      Button/
      Card/
      TextInput/
      Select/
      Checkbox/
      index.js        # tek yerden export
    auth/             # auth ile ilgili componentler
      LoginForm/
        LoginForm.jsx
  screens/            # sayfa/screen componentleri
    LoginScreen.jsx
  index.css
  main.jsx
  App.jsx
```

## UI Kit Kullanımı

UI componentlerini tek yerden import edebilirsin:

```jsx
import { Button, Card, TextInput, Select, Checkbox } from "./components/ui";
```

## Dinamik Form Mantığı (LoginForm)

`LoginForm` componenti `fields` array’inden inputları dinamik üretir:

* `type: "text" | "email" | "password" | "checkbox" | "select"`
* `required`, `minLength`, `pattern`, `patternMessage`
* `inputProps`: ilgili input elementine ek props
* `wrapperClassName`: alan bazlı layout/stil

Örnek:

```jsx
const fields = [
  { name: "username", label: "Username", type: "text", required: true, inputProps: { autoComplete: "username" } },
  { name: "email", label: "E-mail", type: "email", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 },
  { name: "rememberMe", label: "Remember me", type: "checkbox" },
  { name: "gender", label: "Gender", type: "select", options: [
      { value: "", label: "Select gender" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ]
  },
];
```

## Scriptler

* `npm run dev` → geliştirme
* `npm run build` → production build
* `npm run preview` → build’i localde çalıştır

## Notlar

* UI componentleri mümkün olduğunca **modüler** ve **yeniden kullanılabilir** tutulur.
* Animasyonlar için Framer Motion kullanımı önerilir; ayrıca saf CSS animasyonları da uygulanabilir.

