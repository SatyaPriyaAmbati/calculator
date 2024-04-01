import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <center>
    <div className={styles.cal}>
      <Display displayValue={displayValue} />
      <Button displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
    </center>
  );
}
export default App;


