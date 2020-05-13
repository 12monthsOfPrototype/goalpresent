import Layout from '../components/Layout';
import Link from 'next/link';
import {theme} from '../style/theme'

const index = () => {
  return (
    <>
      <Layout>
        <section className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 fade-in text-center">
              <h1 className="mb-3">
                Setting Goals <br />
                that <span className="color-primary">matter.</span>
              </h1>
              <p className="w-75 m-auto">
                Plan your goals in a smart system, break them down into small
                chuncks and export them to todoist.
              </p>
              <div className="d-inline-block mt-5">
                <button className="mr-4">Learn more</button>
                <button>
                  <Link href="/goal">Start planning</Link>
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/goalpresent.png"
                alt="goalpresent"
                className="img-fluid m-auto w-75"
              />
            </div>
          </div>
        </section>
        <section className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img 
                src="stepone.png" 
                alt="goalpresent" 
                className="img-fluid m-auto w-75"
              />
            </div>
            

            <div className="col-md-6">
              <h2 className="mb-3">
                Set a longterm Goal for <br/> the next year
              </h2>
              
              <div className="line"/>
              <p>
                What is a longterm goal, you always wanted to achieve? Write it down. 
                Be as specific as possible of what you want to achieve. Your Goal should be:
              </p>
              <ul>
                <li>Realistic - Is it realistic to achieve the goal in one year?</li>
                <li>Specific - How can you be more detailed about the goal?</li>
                <li>Actionable - Can you take action on the longterm goal?</li>
              </ul>
            </div> 
          </div>
        </section>
        <section className="container my-5 py-5">
          <div className="row">
            
            <div className="col-md-6">
              <h2 className="mb-3">
                Break them down into  <br/> small achievable Tasks
              </h2>
              
              <div className="line"/>
              <p>
                Once you have set a one year goal for yourself, start breaking them down into 
                smaller goals that lead to the longterm goal. Set goals for each quarter, month, 
                week and day. The system helps you focus on the small daily goals to lead to the 
                bigger goal. 
              </p>
              <ul>
                <li>From yearly goals into quarterly goals</li>
                <li>From quarterly goals into monthly goals</li>
                <li>From monthly goals into weekly goals</li>
                <li>From weekly goals into daily goals </li>
              </ul>
            </div> 
            <div className="col-md-6">
              <img 
                src="steptwo.png" 
                alt="goalpresent" 
                className="img-fluid m-auto w-75"
              />
            </div>
          </div>
        </section>

      </Layout>
      <style jsx>
        {`
        .line {
          background-color: ${theme.color.primary};
          width: 10%;
          height: 0.2rem;
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          margin-left: -2.8rem;

        }
        ul > li {
          background: url('Check.png') no-repeat left top;
          height: 40px;
          padding-left: 44px;
          padding-top: 3px;
        }
        `}
      </style>
    </>
  );
};

export default index;
