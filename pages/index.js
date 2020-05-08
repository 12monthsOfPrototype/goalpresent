import Layout from '../components/Layout';
import Link from 'next/link';

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
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default index;
