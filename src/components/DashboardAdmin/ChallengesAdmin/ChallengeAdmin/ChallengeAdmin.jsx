import "./challengesAdmin.scss";
const ChallengeAdmin = ({ _id, title, description, imageChallenge }) => {
  return (
    <div key={_id}>
      <img className="image-challenge"
        src={`http://localhost:4000/images/Challenge/` + imageChallenge}
        alt="Imagen Challenge"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ChallengeAdmin;
