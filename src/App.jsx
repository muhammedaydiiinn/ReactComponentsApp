import { Button, Card } from "./components/ui";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="container py-5">
      <Card
        title="My Card"
        footer={<Button variant="secondary">Footer Action</Button>}
      >
        <p>İçerik burası.</p>
        <Button onClick={() => alert("clicked!")}>Click</Button>
        <Button variant="ghost" className="ms-2">Ghost</Button>
      </Card>


      <LoginScreen />
    </div>
  );
}

export default App
