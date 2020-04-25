import { theme } from '../../style/theme';

const left = ({ heading, number, progress }) => {
  return (
    <>
      <div className="col-sm-12 col-md-5 left">
        <h1>{number}</h1>
        <h2>{heading}</h2>
        <div className="my-5">
          <ul>
            <li className={number === '01' && 'active'}>01</li>
            <li className={number === '02' && 'active'}>02</li>
            <li className={number === '03' && 'active'}>03</li>
            <li className={number === '04' && 'active'}>04</li>
            <li className={number === '05' && 'active'}>05</li>
          </ul>
          <div className="progress">
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .left {
          background-color: ${theme.color.background.tertiary};
          height: 100%;
          border-radius: ${theme.sizing.border.large};
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10rem 5rem;
        }

        h1 {
          color: ${theme.color.primary};
          font-size: 5rem;
          font-style: normal;
          font-weight: normal;
          padding-bottom: 2rem;
        }

        h2 {
          font-size: 3rem;
        }
        ul {
          color: ${theme.color.text};
          list-style: none;
          display: flex;
          width: 100%;
          justify-content: space-between;
          text-align: left;
        }

        li {
          color: ${theme.color.background.progress};
          font-size: 1.2rem;
          line-height: 31px;
          margin-left: -2rem;
        }

        .active {
          color: ${theme.color.primary};
        }
        .progress {
          width: 100%;
          height: 0.5rem;
          background-color: ${theme.color.background.progress};
        }

        .progress > div {
          height: 0.5rem;
          background-color: ${theme.color.primary};
          width: calc(100% / 5 * ${progress});
        }
      `}</style>
    </>
  );
};

export default left;
