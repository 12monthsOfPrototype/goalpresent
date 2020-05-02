import Layout from '../../components/Layout';
import Card from '../../components/goal/card';
import Numbers from '../../components/landingpage/numbers';

const success = () => {
  return (
    <Layout>
      <Card>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <svg
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72 144C111.765 144 144 111.765 144 72C144 32.2355 111.765 0 72 0C32.2355 0 0 32.2355 0 72C0 111.765 32.2355 144 72 144Z"
                  fill="#2EBE7C"
                />
                <path
                  d="M62.8009 111.53C60.4529 111.53 58.2324 110.431 56.8049 108.548L37.5251 83.0863C35.0175 79.7748 35.6704 75.0595 38.9819 72.5508C42.2987 70.0411 47.0106 70.6981 49.5194 74.0075L62.1999 90.7515L94.0921 39.544C96.2878 36.0211 100.924 34.9432 104.455 37.1356C107.981 39.3303 109.058 43.9701 106.861 47.4963L69.1865 107.985C67.8775 110.088 65.6182 111.411 63.144 111.523C63.0285 111.528 62.9153 111.53 62.8009 111.53Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="col-md-9">
              <h1>Well Done!</h1>
              <h3>You have planned your upcoming week!</h3>
            </div>
          </div>
        </div>
        <div className="container my-5 mx-5">
          <div className="row">
            <div className="col">
              <h3>
                Now you can export your tasks for the upcoming week to <img src="/todoist.png" alt="" />
              </h3>  
                <p>todoist is a great task managments tool and you can download it <a href="https://todoist.com/de"><u>here!</u> </a> <br/>
                 To export you tasks we offer you to options! Choose the one that you like the most!
                </p>
            </div>
          </div>
         
          
          
          <a class="card-option" href="">
            <div class="card-option">
              <h2> Export with CSV</h2>
              <br/>
              <p>Download your tasks in a CSV and import them in todoist. you can find a step by step guide <a href=""><u>here</u> </a></p>
              <div className="col">
                <button>
                 Export with CSV 
                </button>
              </div>

            </div>
          </a>
          <a class="card-option" href="">
            <div class="card-option">
              <h2> Export with CSV</h2>
              <br/>
              <p>Download your tasks in a CSV and import them in todoist. you can find a step by step guide <a href=""><u>here</u> </a></p>
              <div className="col">
                <button>
                 Export with API Key
                </button>
              </div>

            </div>
          </a>
          <div className="row">
            
          </div>
        </div>
        <div className="container my-5"></div>

       
        <cardoption 
          cardtitle="Hello"
          cardtext="hello"
          buttontext="export"
        />
        <Numbers
          title="Next Steps"
          stepOneTitle="Export your tasks"
          stepOneDescription="You can either export your tasks for the upcoming with a CSV or with an API Key"
          stepTwoTitle="Execute the tasks"
          stepTwoDescription="Once you have exported your tasks to todoist, complete the tasks you have set for yourself "
          stepThreeTitle="Plan your next week"
          stepThreeDescription="After you have finished your the tasks you have set for yourself, it's time to start planning the next week."
        />

        <div className="container my-5 mx-5">
          <div className="row">
            <div className="col">
              <h3>
              Give us Feedback
              </h3>  
                <p>We would love to get your feedback and would like to understand how we can improve this tool!
                </p>
                <div className="col">
                  <button>
                    Start Questionary
                  </button>
                </div>
            </div>
          </div>
        </div>

        
      </Card>
    </Layout>
  );
};

export default success;