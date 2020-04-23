import { theme } from '../../style/theme';

const Stepps = () => {
  return (
    <>
      <section className="container">
        <div className="row py-5 px-2 fade-in">
          <div className="col-md-5 py-5">
            <h2>First Step:</h2>
            <p>
              Amet qui nisi quis quis labore aliqua aliquip dolore commodo id
              nisi. Sunt ipsum nulla velit fugiat veniam mollit amet magna velit
              quis cupidatat. Sint aute ea velit culpa qui consectetur mollit ex
              in excepteur voluptate. Culpa aute qui cillum voluptate veniam
              sunt occaecat sunt et anim ex. Eu reprehenderit elit adipisicing
              ipsum dolore elit nulla magna reprehenderit occaecat eiusmod culpa
              est cillum.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/screens/one.jpg"
              alt="first screenshot"
              className="img"
            />
          </div>
          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
            <h1>
              <span>&rsaquo;</span>
            </h1>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 45vh;
        }
        .row {
          background-color: ${theme.color.background.secondary};
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default Stepps;
