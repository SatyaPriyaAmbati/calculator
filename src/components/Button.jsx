// Button.js
import React from 'react';
import styles from "../App.module.css";

function Button({ setDisplayValue ,displayValue}) {
  const Buttonname = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".",'x'];

  const handleClick = (iterator) => {
    let value = `${iterator}`;

    // Handle different button clicks
    switch (value) {
      case 'C':
        setDisplayValue(''); // Reset the display value
        break;
      case '=':
        try {
          const result = eval(displayValue); // Evaluate the expression
          setDisplayValue(String(result)); // Set the display value to the result
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
        case 'x':
          setDisplayValue(previous => previous.slice(0, -1)); 
        break;
      default:
        setDisplayValue(previous => previous + value); // Concatenate the clicked value
    }
  };

  return (
    <div>
      <div className={styles.buttonContainer}>
        {Buttonname.map((iterator) => (
          <button className={styles.buttons} onClick={() => handleClick(iterator)} key={iterator}>
            {iterator}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
