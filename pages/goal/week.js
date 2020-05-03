import React, { useState, useContext } from 'react';
import Buttons from '../../components/goal/buttons';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';
import GoalContext from '../../components/goal/goalContext';
import GoalsTop from '../../components/goal/goalsTop';

const week = () => {
  const {
    monday,
    setMonday,
    tuesday,
    setTuesday,
    wednesday,
    setWednesday,
    thursday,
    setThursday,
    friday,
    setFriday,
    saturday,
    setSaturday,
    sunday,
    setSunday,
  } = useContext(GoalContext);

  return (
    <>
      <Layout>
        <Card>
          <div className="row">
            <Left
              number="05"
              heading="What tasks do you need to complete to achieve your Key Results for this week? "
              progress={5}
            ></Left>
            <div className="col-sm-12 col-md-8">
              <GoalsTop>
                <div className="row my-3" id="dates">
                  <KeyResult
                    keyResults={monday}
                    setKeyResults={setMonday}
                    time="Monday"
                    placeholder="What do I need to acomplish on Monday to achieve your key results for the week?"
                  />
                  <hr />
                  <KeyResult
                    keyResults={tuesday}
                    setKeyResults={setTuesday}
                    time="Tuesday"
                    placeholder="What do I need to acomplish on Tuesday to achieve your key results for the week?"
                  />
                  <KeyResult
                    keyResults={wednesday}
                    setKeyResults={setWednesday}
                    time="Wednesday"
                    placeholder="What do I need to acomplish on Wednesday  to achieve your key results for the week?"
                  />
                  <KeyResult
                    keyResults={thursday}
                    setKeyResults={setThursday}
                    time="Thursday"
                    placeholder="What do I need to acomplish on Thursday  to achieve your key results for the week?"
                  />
                  <KeyResult
                    keyResults={friday}
                    setKeyResults={setFriday}
                    time="Friday"
                    placeholder="What do I need to acomplish on Friday  to achieve your key results for the week?"
                  />
                  <KeyResult
                    keyResults={saturday}
                    setKeyResults={setSaturday}
                    time="Saturday"
                    placeholder="What do I need to acomplish on Saturday  to achieve your key results for the week?"
                  />
                  <KeyResult
                    keyResults={sunday}
                    setKeyResults={setSunday}
                    time="Sunday"
                    placeholder="What do I need to acomplish on Sunday  to achieve your key results for the week?"
                  />
                </div>

                <Buttons
                  nextLink="/goal/success"
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

export default week;
