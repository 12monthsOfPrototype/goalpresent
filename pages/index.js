import Layout from '../components/Layout';
import Stepps from '../components/landingpage/Stepps';
import Hero from '../components/landingpage/Hero';
import Numbers from '../components/landingpage/Numbers';

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Stepps />
        <Numbers
          title="How it works?"
          stepOneTitle="Set your goals and break them down"
          stepOneDescription="Excepteur consequat ea reprehenderit nulla excepteur nulla velit."
          stepTwoTitle="Set your goals and break them down"
          stepTwoDescription="Excepteur consequat ea reprehenderit nulla excepteur nulla velit."
          stepThreeTitle="Set your goals and break them down"
          stepThreeDescription="Excepteur consequat ea reprehenderit nulla excepteur nulla velit."
        />
      </Layout>
    </>
  );
};

export default index;
