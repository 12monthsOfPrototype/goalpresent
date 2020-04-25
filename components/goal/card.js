import { theme } from '../../style/theme';

const card = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card fade-in">{children}</div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            height: calc(100vh - 5vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .card {
            width: 100%;
            background-color: ${theme.color.background.secondary};
            border-radius: ${theme.sizing.border.large};
            border: none;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default card;
