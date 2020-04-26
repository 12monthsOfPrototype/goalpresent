import React, { useState, useContext } from 'react';
import Buttons from '../../components/goal/buttons';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';

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
              <div className="row p-4">
                <h3>
                  How do you achieve the following Key Results of the first
                  quarter?
                </h3>
              </div>
              {firstQuarterKeyResult.map((result, index) => {
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

              <div className="row my-3">
                <KeyResult
                  keyResults={firstMonthKeyResults}
                  setKeyResults={setFirstMonthKeyResults}
                  number={1}
                  heading="Key results for the 1. week"
                  placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                />
                <hr />
                <KeyResult
                  keyResults={secondMonthKeyResults}
                  setKeyResults={setSecondMonthKeyResults}
                  number={2}
                  heading="Key results for the 2. week"
                  placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={thirdMonthKeyResults}
                  setKeyResults={setThirdMonthKeyResults}
                  number={3}
                  heading="Key results for the 3. week"
                  placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={fourthMonthKeyResults}
                  setKeyResults={setFourthMonthKeyResults}
                  number={4}
                  heading="Key results for the 4. week"
                  placeholder="What do I need to acompolish in the 4st month to achieve my goal?"
                />
              </div>
              <Buttons nextLink="/goal/week" hasBackButton={true}></Buttons>
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
