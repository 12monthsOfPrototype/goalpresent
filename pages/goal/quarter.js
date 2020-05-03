import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import Buttons from '../../components/goal/buttons';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';
import GoalsTop from '../../components/goal/goalsTop';

const quarter = () => {
  const {
    firstKeyResults,
    setFirstKeyResults,
    secondKeyResults,
    setSecondKeyResults,
    thirdKeyResults,
    setThirdKeyResults,
    fourthKeyResults,
    setFourthKeyResults,
  } = useContext(GoalContext);

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
              <GoalsTop>
                <div className="row" id="dates">
                  <KeyResult
                    keyResults={firstKeyResults}
                    setKeyResults={setFirstKeyResults}
                    number={1}
                    time="Quarter"
                  />

                  <KeyResult
                    keyResults={secondKeyResults}
                    setKeyResults={setSecondKeyResults}
                    number={2}
                    time="Quarter"
                  />
                  <KeyResult
                    keyResults={thirdKeyResults}
                    setKeyResults={setThirdKeyResults}
                    number={3}
                    time="Quarter"
                  />
                  <KeyResult
                    keyResults={fourthKeyResults}
                    setKeyResults={setFourthKeyResults}
                    number={4}
                    time="Quarter"
                  />
                </div>
                <Buttons
                  nextLink="/goal/first-quarter#dates"
                  hasBackButton={true}
                ></Buttons>
              </GoalsTop>
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
        `}
      </style>
    </>
  );
};

export default quarter;
