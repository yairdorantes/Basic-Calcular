const CreateButton = ({ handleValue }) => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <button value={i} onClick={handleValue} key={i}>
        {i}
      </button>
    );
  }
  return digits;
};

export default CreateButton;
