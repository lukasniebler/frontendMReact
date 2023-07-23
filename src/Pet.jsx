const Pet = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.animal}</p>
      <p>{props.breed}</p>
    </>
  );
};

export default Pet;