import { theme } from '../../style/theme';

const Numbers = ({
  title,
  stepOneTitle,
  stepOneDescription,
  stepTwoTitle,
  stepTwoDescription,
  stepThreeTitle,
  stepThreeDescription,
  button,
}) => {
  return (
    <>
      <section className="container fade-in">
        <h2 className="pb-3">{title}</h2>
        <div className="row py-3">
          <div className="col-1">
            <h3>01</h3>
          </div>
          <div className="col-11">
            <h3>{stepOneTitle}</h3>
            <p>{stepOneDescription}</p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-1">
            <h3>02</h3>
          </div>
          <div className="col-11">
            <h3>{stepTwoTitle}</h3>
            <p>{stepTwoDescription}</p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-1">
            <h3>03</h3>
          </div>
          <div className="col-11">
            <h3>{stepThreeTitle}</h3>
            <p>{stepThreeDescription}</p>
          </div>
        </div>
        {button && <button className="my-5">Sign up</button>}
      </section>
      <style jsx>{`
        .col-1 > h3 {
          background: ${theme.color.primary};
          border-radius: 19px;
          text-align: center;
          padding: 0.5rem 0.1rem;
        }
      `}</style>
    </>
  );
};

export default Numbers;
