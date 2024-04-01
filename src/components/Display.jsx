import styles from "../App.module.css";
function Display({ displayValue })
{
  return(
    <div>
      <input className={styles.display}  value={displayValue}  readOnly type="text"/>
    </div>
  );
}
export default Display;