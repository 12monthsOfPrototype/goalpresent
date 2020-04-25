import { theme } from '../../style/theme';
import { RiDeleteBin6Line } from 'react-icons/ri';

const keyResult = ({
  keyResults,
  setKeyResults,
  number,
  heading,
  placeholder,
}) => {
  return (
    <>
      <div className="col-md-2">
        <p>{heading}:</p>
      </div>
      <div className="col-md-10">
        {keyResults.map((result, index) => {
          return (
            <div className="my-2 fade-in" key={index}>
              <label htmlFor="">{index + 1}. Key Result</label>
              <input
                type="text"
                name="key-result"
                id="key-result"
                placeholder={placeholder}
                defaultValue={result.text}
                onChange={(e) => {
                  const stateCopy = keyResults;
                  stateCopy[index].text = e.target.value;
                  setKeyResults(stateCopy);
                }}
              />
              <RiDeleteBin6Line
                color={theme.color.primary}
                className={keyResults.length === 1 ? 'd-none' : 'mx-3'}
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
          width: 90%;
          border: none;
          padding: 0.5rem;
          border-radius: ${theme.sizing.border.small};
        }
      `}</style>
    </>
  );
};

export default keyResult;
