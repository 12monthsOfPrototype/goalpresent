import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';

const index = () => {
  return (
    <>
      <Layout>
        <Card>
          <div className="row">
            <Left
              number="01"
              heading="What is your Goal for the next year?"
              progress={1}
            ></Left>
            <div className="col-sm-12 col-md-8 right">
              <textarea
                name="one-year-goal"
                id="one-year"
                cols="30"
                rows="10"
                placeholder="Enter your 1-year goal"
              ></textarea>
              <div>
                <Link href="/goal/quarter" className="link">
                  <a>Next Step</a>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Layout>
      <style jsx>
        {`
          .right {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            align-items: center;
            justify-content: center;
          }

          textarea {
            width: 80%;
            border: none;
            padding: 1rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: ${theme.sizing.border.small};
          }

          .right > div {
            width: 80%;
            margin-top: 10%;
            text-align: right;
          }

          a {
            color: white;
            font-size: 1.5rem;
          }

          a:after {
            content: '➡';
            background-color: ${theme.color.primary};
            margin-left: 0.5rem;
            border-radius: 33px;
            padding: 0.5rem 0.7rem;
          }

          a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default index;
