import { theme } from '../../style/theme';

const card = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card-custom fade-in">{children}</div>
        </div>
      </div>

      <style jsx>
        {`
          .container-fluid {
            min-height: calc(105vh - 5vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 85vw;
            margin-bottom: 5rem;
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
