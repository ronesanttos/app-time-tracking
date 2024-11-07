const CardMap = () => {
  return (
    <div className="container-card-map">
      <div className="card-map-img">
        <img src="../../public/images/icon-study.svg" alt="study" />
      </div>
      <div className="card-map">
        <div className="details-time">
          <p>Study</p>
          <button>...</button>
        </div>
        <div className="timer">
          <h2>4hrs</h2>
          <p>Last Week - 7hrs</p>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
