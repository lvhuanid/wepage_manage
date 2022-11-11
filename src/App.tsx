import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "antd-mobile";
import "./App.css";
import BottomTab from "./components/BottomTab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-black h-screen">
      <Button color="primary" fill="solid">
        Solid
      </Button>
      <div className="fixed bottom-0 w-screen">
        <BottomTab />
      </div>
    </div>
  );
}

export default App;
