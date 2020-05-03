import { useState } from 'react';
import { theme } from '../../style/theme';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Router } from 'next/router';

const keyResult = ({ keyResults, setKeyResults, number, time }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="offset-2 col-10 pr-5 mt-4">
        <div className="row">
          <div className="col-md-11">
            <p>
              <strong className="color-primary">
                {number ? `${number}. ${time}` : `${time}`}:
              </strong>{' '}
              What do I need to acomplish{' '}
              {number ? `in the ${number}st ${time}` : `on ${time}`} to achieve
              my 1 year goal?
            </p>
            <small>
              Eiusmod in mollit in ex nisi sint eu sunt ipsum voluptate dolore
              id anim. Eiusmod in mollit in ex nisi sint eu sunt ipsum voluptate
              dolore id anim.
            </small>
          </div>
        </div>
      </div>

      <div className=" offset-2 col-sm-12 col-md-10 fadeInDown">
        {keyResults.map((result, index) => {
          return (
            <div className="my-3 fadeInDown" key={index}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    name="key-result"
                    placeholder={`What do I need to acomplish ${
                      number ? `in the ${number}st ${time}` : `on ${time}`
                    } to achieve my 1 year goal?`}
                    defaultValue={result.text}
                    onChange={(e) => {
                      const stateCopy = keyResults;
                      stateCopy[index].text = e.target.value;
                      setKeyResults(stateCopy);
                    }}
                  />
                </div>
                <div className="col-2">
                  <RiDeleteBin6Line
                    color={theme.color.primary}
                    className={keyResults.length === 1 ? 'd-none' : 'mt-2 mr-4'}
                    onClick={() => {
                      if (keyResults.length > 1) {
                        const newKeyResults = [...keyResults];
                        if (index !== -1) {
                          newKeyResults.splice(index, 1);
                          setKeyResults(newKeyResults);
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <button
          onClick={() => {
            setKeyResults([
              ...keyResults,
              {
                text: '',
              },
            ]);
          }}
        >
          Add Key Result
        </button>
      </div>

      <style jsx>{`
        h3 {
          font-weight: bold;
          font-size: 27px;
        }

        label,
        h4 {
          color: ${theme.color.primary};
          font-weight: bold;
        }
        input {
          width: 100%;
          border: none;
          padding: 0.5rem;
          border-radius: ${theme.sizing.border.small};
        }

        .card {
          background-color: ${theme.color.background.tertiary};
          box-shadow: ${theme.color.boxShadow};
          border-radius: ${theme.sizing.border.small};
          cursor: pointer;
        }

        small {
          color: white;
        }

        .line {
          background-color: ${theme.color.primary};
          height: 0.1rem;
          cursor: pointer;
        }

        .line:first-child {
          transform: rotate(45deg);
        }

        .line:last-child {
          transform: rotate(-45deg) translateY(-1px);
        }
      `}</style>
    </>
  );
};

export default keyResult;
