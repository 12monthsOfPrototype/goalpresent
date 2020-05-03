import { theme } from '../../style/theme';

const cardoption = ({ 
    cardtitle,
    cardtext,
    buttontext,
}) => {
  return (
    <>
        <div className="cardoption">
            <div className="card w-20">


            
            <div className="card-body">
                <h4 className="cardtitle">{cardtitle}</h4>
                <p className="cardtext">{cardtext}</p>
                <a href="https://todoist.com/de" class="btn btn-danger">{buttontext} <img src="/todoist.png" alt="" /></a>
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
                color: #B83834;
            }
            
          
      
            }
        
        `}
        </style>
    </>
  );
};

export default cardoption;