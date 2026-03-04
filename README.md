## React Component App

Bu proje React + Vite ile kurulmuş bir **UI component playground** uygulamasıdır.
Tekrar kullanılabilir **UI component kütüphanesi** (Button, Card, TextInput, Select, Checkbox) ve bu componentlerle **dinamik ekranlar** (LoginScreen) içerir.

## Kurulum

```bash
npm install
npm run dev
```

Build almak için:

```bash
npm run build
npm run preview
```

## Kullanılanlar

* **React 19 + Vite 7** (HMR / hızlı geliştirme)
* **Bootstrap 5** (layout ve grid)
* **CSS Modules** (component bazlı stil)

## Proje Yapısı

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
  App.css
  main.jsx
  App.jsx
```

## UI Kit Kullanımı

UI componentlerini tek yerden import edebilirsin:

```jsx
import { Button, Card, TextInput, Select, Checkbox } from "./components/ui";
```

## Dinamik Form Mantığı (LoginForm)

`LoginForm` componenti `fields` array'inden inputları dinamik üretir:

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
* `npm run preview` → build'i localde çalıştır
* `npm run lint` → ESLint ile kod kontrolü

## Notlar

* UI componentleri mümkün olduğunca **modüler** ve **yeniden kullanılabilir** tutulur.
* Her component kendi **CSS Module** dosyasına sahiptir (scoped stil).