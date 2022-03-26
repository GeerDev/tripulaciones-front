const ChallengeUser = ({ _id, title, description, imageChallenge }) => {
  
  return (
    <div key={_id}>
     
        <img
          src={`http://localhost:4000/images/Challenge/` + imageChallenge}
          alt="Imagen Challenge"
          width={320}
        />

        <h3>{title}</h3>

    </div>
  );
};

export default ChallengeUser;