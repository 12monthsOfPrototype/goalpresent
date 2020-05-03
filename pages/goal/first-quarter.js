import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import Buttons from '../../components/goal/buttons';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';
import GoalsTop from '../../components/goal/goalsTop';

const firstQuarter = () => {
  const {
    goal,
    firstKeyResults,
    firstQuarterKeyResult,
    setfirstQuarterKeyResult,
    secondQuarterKeyResult,
    setsecondQuarterKeyResult,
    thirdQuarterKeyResults,
    setThirdQuarterKeyResults,
  } = useContext(GoalContext);

  return (
    <>
      <Layout>
        <Card>
          <div className="row">
            <Left
              number="03"
              heading="What is your Goal for the first Quarter?"
              progress={3}
            ></Left>
            <div className="col-sm-12 col-md-8">
              <GoalsTop>
                <div className="row my-3 section-top">
                  <KeyResult
                    keyResults={firstQuarterKeyResult}
                    setKeyResults={setfirstQuarterKeyResult}
                    number={1}
                    time="Month"
                    placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                  />
                  <hr />
                  <KeyResult
                    keyResults={secondQuarterKeyResult}
                    setKeyResults={setsecondQuarterKeyResult}
                    number={2}
                    time="Month"
                    placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                  />
                  <KeyResult
                    keyResults={thirdQuarterKeyResults}
                    setKeyResults={setThirdQuarterKeyResults}
                    number={3}
                    time="Month"
                    placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                  />
                </div>
                <Buttons nextLink="/goal/month" hasBackButton={true}></Buttons>
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

          h5 > span {
            color: ${theme.color.primary};
          }
        `}
      </style>
    </>
  );
};

export default firstQuarter;
