import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((item, index) => (
        <button
          key={index}
          className={styles.buttons}
          onClick={() => onButtonClicked(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
