export function PetsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <h2>{pet.breed}</h2>
          <h2>{pet.age}</h2>
          <img src={pet.image} alt="" />
        </div>
      ))}
    </div>
  );
}
