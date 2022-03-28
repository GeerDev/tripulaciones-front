import './Challenge.scss'
const ChallengeUser = ({ _id, title, description, imageChallenge }) => {

  return (
    <div className="challenge">
        <div className="challenge-name" key={_id}>
          <h3>{title}</h3>
        </div>
        <div className='challenge-content'>
          <img
            src={`http://localhost:4000/images/Challenge/` + imageChallenge}
            alt="Imagen Challenge"
            width={320}
          />
        </div>
        <div className='toolbar'>
          <p>{description}</p>
        </div>
      </div>
  );
};

export default ChallengeUser;