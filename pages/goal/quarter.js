import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Buttons from '../../components/goal/buttons';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';

const quarter = () => {
  const [firstKeyResults, setFirstKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [secondKeyResults, setSecondKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [thirdKeyResults, setThirdKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [fourthKeyResults, setFourthKeyResults] = useState([
    {
      text: '',
    },
  ]);

  return (
    <>
      <Layout>
        <Card>
          <div className="row">
            <Left
              number="02"
              heading="What do you need to achieve in the next 4 quarters?"
              progress={2}
            ></Left>
            <div className="col-sm-12 col-md-8">
              <div className="row p-4 section">
                <h3>
                  How do you achieve your Key Result in the first quarter?
                </h3>
                <div className="p-1 mt-3">
                  <h4>Goal</h4>
                  <p>
                    Consectetur cupidatat consectetur reprehenderit consectetur
                    incididunt laboris amet sunt cupidatat deserunt culpa. Ea
                    irure consectetur ut minim nostrud dolore proident enim
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="row my-3">
                <KeyResult
                  keyResults={firstKeyResults}
                  setKeyResults={setFirstKeyResults}
                  number={1}
                  heading="Key results for the 1. Quarter"
                  placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                />
                <hr />
                <KeyResult
                  keyResults={secondKeyResults}
                  setKeyResults={setSecondKeyResults}
                  number={2}
                  heading="Key results for the 2. Quarter"
                  placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={thirdKeyResults}
                  setKeyResults={setThirdKeyResults}
                  number={3}
                  heading="Key results for the 3. Quarter"
                  placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={fourthKeyResults}
                  setKeyResults={setFourthKeyResults}
                  number={4}
                  heading="Key results for the 4. Quarter"
                  placeholder="What do I need to acompolish in the 4st month to achieve my goal?"
                />
              </div>
              <Buttons
                nextLink="/goal/first-quarter"
                hasBackButton={true}
              ></Buttons>
            </div>
          </div>
        </Card>
      </Layout>
      <style jsx>
        {`
          .right {
            display: flex;
            flex-direction: column;
            height: 100%;
            align-items: center;
            justify-content: center;
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
          }

          .section {
            border-bottom: 1px solid white;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default quarter;
