import { theme } from '../../style/theme';

const card = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-custom fade-in">{children}</div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            min-height: calc(105vh - 5vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .card-custom {
            width: 100%;
            background-color: ${theme.color.background.secondary};
            border-radius: ${theme.sizing.border.large};
            border: none;
            min-height: 95vh;
          }
        `}
      </style>
    </>
  );
};

export default card;
