const CardPerfil = ({handleClick}) => {
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
          <button onClick={() => handleClick("daily")}>Daily</button>
          <button onClick={() => handleClick("weekly")}>Weekly</button>
          <button onClick={() => handleClick("monthly")}>Monthly</button>
      </div>
    </div>
  );
};

export default CardPerfil;
