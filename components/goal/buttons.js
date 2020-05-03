import Link from 'next/link';
import { theme } from '../../style/theme';
import Router from 'next/router';

const buttons = ({ nextLink, hasBackButton }) => {
  return (
    <>
      <div className="row m-5 px-4 w-75 d-flex align-items-center justify-content-center">
        <div className="col-md-6 w-50">
          {hasBackButton && (
            <a
              className="link-back"
              onClick={() => {
                Router.back();
              }}
            >
              <span className="d-none d-lg-inline-block">Step Back</span>
            </a>
          )}
        </div>

        <div className="col-md-6 text-right w-50">
          <Link href={nextLink}>
            <a className="link">
              <span className="d-none d-lg-inline-block">Next Step</span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        a {
          color: white !important;
          font-size: 1.5rem;
        }

        .link-back:before {
          content: '⬅';
          background-color: ${theme.color.primary};
          margin-right: 0.5rem;
          border-radius: 33px;
          padding: 0.5rem 0.7rem;
        }

        .link:after {
          content: '➡';
          background-color: ${theme.color.primary};
          margin-left: 0.5rem;
          border-radius: 33px;
          padding: 0.5rem 0.7rem;
        }

        a:hover {
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default buttons;
