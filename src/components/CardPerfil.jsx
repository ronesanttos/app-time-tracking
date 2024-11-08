const CardPerfil = ({handleDaily, handleWeekly,handleMonthly}) => {
  return (
    <div className="container-perfil">
      <div className="card-perfil">
        <div className="perfil-img">
          <img src="../../public/images/image-jeremy.png" alt="Avatart" />
        </div>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="btns">
          <button onClick={() => handleDaily()}>Daily</button>
          <button onClick={() => handleWeekly()}>Weekly</button>
          <button onClick={() => handleMonthly()}>Monthly</button>
      </div>
    </div>
  );
};

export default CardPerfil;
