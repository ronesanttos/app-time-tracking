const CardPerfil = () => {
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
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
      </div>
    </div>
  );
};

export default CardPerfil;
