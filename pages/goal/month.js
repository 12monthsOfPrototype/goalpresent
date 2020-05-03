import React, { useState, useContext } from 'react';
import Buttons from '../../components/goal/buttons';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';
import GoalsTop from '../../components/goal/goalsTop';

const month = () => {
  const {
    firstQuarterKeyResult,
    firstMonthKeyResults,
    setFirstMonthKeyResults,
    secondMonthKeyResults,
    setSecondMonthKeyResults,
    thirdMonthKeyResults,
    setThirdMonthKeyResults,
    fourthMonthKeyResults,
    setFourthMonthKeyResults,
  } = useContext(GoalContext);

  return (
    <>
      <Layout>
        <Card>
          <div className="row">
            <Left
              number="04"
              heading="What is your Goal for the first month?"
              progress={4}
            ></Left>
            <div className="col-sm-12 col-md-8">
              <GoalsTop>
                <div className="row my-3" id="dates">
                  <KeyResult
                    keyResults={firstMonthKeyResults}
                    setKeyResults={setFirstMonthKeyResults}
                    number={1}
                    time="Week"
                    placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                  />
                  <KeyResult
                    keyResults={secondMonthKeyResults}
                    setKeyResults={setSecondMonthKeyResults}
                    number={2}
                    time="Week"
                    placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                  />
                  <KeyResult
                    keyResults={thirdMonthKeyResults}
                    setKeyResults={setThirdMonthKeyResults}
                    number={3}
                    time="Week"
                    placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                  />
                  <KeyResult
                    keyResults={fourthMonthKeyResults}
                    setKeyResults={setFourthMonthKeyResults}
                    number={4}
                    time="Week"
                    placeholder="What do I need to acompolish in the 4st month to achieve my goal?"
                  />
                </div>
                <Buttons
                  nextLink="/goal/week#dates"
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

          .section {
            border-bottom: 1px solid white;
            width: 100%;
          }
          h5 > span {
            color: ${theme.color.primary};
          }
        `}
      </style>
    </>
  );
};

export default month;
