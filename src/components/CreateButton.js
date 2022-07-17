const CreateButton = ({ handleValue }) => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <div key={i}>
        <button value={i} onClick={handleValue} key={i}>
          {i}
        </button>
      </div>
    );
  }
  return digits;
};

export default CreateButton;
