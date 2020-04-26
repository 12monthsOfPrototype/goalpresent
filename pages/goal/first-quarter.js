import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import Buttons from '../../components/goal/buttons';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';

const firstQuarter = () => {
  const {
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
              <div className="row p-4">
                <h3>
                  How do you achieve the following Key Results of the first
                  quarter?
                </h3>
              </div>
              {firstKeyResults.map((result, index) => {
                return (
                  <div className="row">
                    <div className="col-md-4">
                      <h5>
                        <span>{index + 1}. Key Result: </span>
                      </h5>
                    </div>
                    <div className="col-md-9">
                      <h5>{result.text}</h5>
                    </div>
                  </div>
                );
              })}

              <div className="row my-3 section-top">
                <KeyResult
                  keyResults={firstQuarterKeyResult}
                  setKeyResults={setfirstQuarterKeyResult}
                  number={1}
                  heading="Key results for the 1. Month"
                  placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                />
                <hr />
                <KeyResult
                  keyResults={secondQuarterKeyResult}
                  setKeyResults={setsecondQuarterKeyResult}
                  number={2}
                  heading="Key results for the 2. Month"
                  placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={thirdQuarterKeyResults}
                  setKeyResults={setThirdQuarterKeyResults}
                  number={3}
                  heading="Key results for the 3. Month"
                  placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                />
              </div>
              <Buttons nextLink="/goal/month" hasBackButton={true}></Buttons>
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

          .section {
            border-bottom: 1px solid white;
            width: 100%;
          }
          .section-top {
            border-top: 1px solid white;
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

export default firstQuarter;
