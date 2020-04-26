import React, { useState } from 'react';
import Buttons from '../../components/goal/buttons';
import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Left from '../../components/goal/left';
import { theme } from '../../style/theme';
import KeyResult from '../../components/goal/keyResult';

const month = () => {
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

  const keyResults = [
    'Commodo culpa esse fugiat dolor sint proident laborum sint anim voluptate excepteur ut dolore elit.',
    'Veniam laborum deserunt nulla excepteur irure dolore cillum deserunt esse aliqua amet ea.',
    'Eu laboris eu qui et nostrud duis reprehenderit occaecat elit ad est anim.',
  ];

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
              <div className="row p-4 section">
                <h3>
                  How do you achieve the following Key Results of the first
                  quarter?
                </h3>
                {keyResults.map((result, index) => {
                  return (
                    <div className="row">
                      <div className="col-md-4">
                        <h5>
                          <span>{index + 1}. Key Result: </span>
                        </h5>
                      </div>
                      <div className="col-md-9">
                        <h5>{result}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row my-3">
                <KeyResult
                  keyResults={firstKeyResults}
                  setKeyResults={setFirstKeyResults}
                  number={1}
                  heading="Key results for the 1. month"
                  placeholder="What do I need to acompolish in the 1st month to achieve my goal?"
                />
                <hr />
                <KeyResult
                  keyResults={secondKeyResults}
                  setKeyResults={setSecondKeyResults}
                  number={2}
                  heading="Key results for the 2. month"
                  placeholder="What do I need to acompolish in the 2st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={thirdKeyResults}
                  setKeyResults={setThirdKeyResults}
                  number={3}
                  heading="Key results for the 3. month"
                  placeholder="What do I need to acompolish in the 3st month to achieve my goal?"
                />
                <KeyResult
                  keyResults={fourthKeyResults}
                  setKeyResults={setFourthKeyResults}
                  number={4}
                  heading="Key results for the 4. month"
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
