import { theme } from '../../style/theme';

const Hero = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container fade-in">
          <h1>
            <span>Goalpresent</span> - The easy <br />
            way to achieve your goals
          </h1>
          <div className="py-5">
            <button className="mr-4">Learn more</button>
            <button>Sign up</button>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          span {
            color: ${theme.color.primary};
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 45vh;
          }

          .container-fluid {
            background-image: url('/hero.jpg');
            min-height: 45vh;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
