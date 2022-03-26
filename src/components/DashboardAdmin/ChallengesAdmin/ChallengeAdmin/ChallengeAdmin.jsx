const ChallengeAdmin = ({ _id, title, description, imageChallenge }) => {
    console.log(imageChallenge);
  return (
    <div key={_id}>
     
        <img
          src={`http://localhost:4000/images/Challenge/` + imageChallenge}
          alt="Imagen Challenge"
          width={320}
        />

        <h3>{title}</h3>
        <p>{description}</p>

    </div>
  );
};

export default ChallengeAdmin;