import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import GoalContext from './goalContext';
import { theme } from '../../style/theme';

const goalsTop = ({ children }) => {
  const {
    goal,
    firstKeyResults,
    secondKeyResults,
    thirdKeyResults,
    fourthKeyResults,
    firstQuarterKeyResult,
    firstMonthKeyResults,
    secondMonthKeyResults,
    thirdMonthKeyResults,
    fourthMonthKeyResults,
    secondQuarterKeyResult,
    thirdQuarterKeyResults,
  } = useContext(GoalContext);

  return (
    <>
      <div className="row section">
        <div className="col px-5">
          <div
            className="card mb-1 mt-3"
            onClick={() => {
              Router.push('/goal');
            }}
          >
            <h4 className="my-auto p-3">
              <strong className="color-primary">1 Year Goal: </strong> {goal}
            </h4>{' '}
          </div>
        </div>
      </div>
      {firstKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown">
              <div className="offset-1 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">1 Quarter Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {firstQuarterKeyResult.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown">
              <div className="offset-2 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/first-quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">1 Month Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {firstMonthKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown">
              <div className="offset-3 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/month');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">1 Week Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="my-4">{children}</div>
      {secondMonthKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-3 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/month');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">2 Week Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {thirdMonthKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-3 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/month');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">3 Week Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {fourthMonthKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-3 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/month');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">4 Week Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {secondQuarterKeyResult.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-2 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/first-quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">2 Month Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {thirdQuarterKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-2 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/first-quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">3 Month Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}

      {secondKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-1 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">2 Quarter Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {thirdKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-1 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">3 Quarter Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      {fourthKeyResults.map((result) => {
        if (result.text) {
          return (
            <div className="row fadeInDown mb-2 pb-2">
              <div className="offset-1 col  px-5">
                <div
                  className="card my-1"
                  onClick={() => {
                    Router.push('/goal/quarter');
                  }}
                >
                  <h5 className="my-auto p-3">
                    <strong className="color-primary">4 Quarter Goal: </strong>{' '}
                    {result.text}
                  </h5>{' '}
                </div>
              </div>
            </div>
          );
        }
      })}
      <style jsx>{`
        .card {
          background-color: ${theme.color.background.tertiary};
          box-shadow: ${theme.color.boxShadow};
          border-radius: ${theme.sizing.border.small};
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default goalsTop;
