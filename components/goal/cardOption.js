import { theme } from '../../style/theme';

const cardoption = ({ cardtitle, cardtext, buttontext, handleClick }) => {
  return (
    <>
      <div className="cardoption">
        <div className="card">
          <div className="card-body">
            <h4 className="cardtitle">{cardtitle}</h4>
            <p className="cardtext">{cardtext}</p>
            <button onClick={handleClick}>{buttontext} todoist</button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
            .card {
                background-color: ${theme.color.background.tertiary};
                display: flex;
                padding: 20px;
                display: inline-block;
                width: 350px;
                margin: 40px;
                max-width: 200vw;
                box-sizing: border-box;
                
            }
            .cardtitle {
                color: ${theme.color.primary};
            }
            }
        
        `}
      </style>
    </>
  );
};

export default cardoption;
