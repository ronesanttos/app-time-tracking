

const CardMap = ({color, imgs, title, weeklyCurrent, weeklyPrevious}) => {
  return (
    <div className={`container-card-map ${color}`}>
      <div className="card-map-img">
        <img src={imgs} alt="icons" />
      </div>
      <div className="card-map">
        <div className="details-time">
          <p>{title}</p>
          <button>...</button>
        </div>
        <div className="timer">
          <h2>{weeklyCurrent}hrs</h2>
          <p>Last Week - {weeklyPrevious}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
