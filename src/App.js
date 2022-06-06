import "./styles.css";
import Button from "./Button";

export default function App() {
  const handleClick = () => {
    console.log("App Test");
  };
  return (
    <div className="App">
      <Button onClick={handleClick} text={"hello"} />
    </div>
  );
}
