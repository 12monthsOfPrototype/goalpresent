import Layout from '../components/Layout';
import Stepps from '../components/landingpage/Stepps';
import Hero from '../components/landingpage/Hero';
import Numbers from '../components/landingpage/Numbers';
import { theme } from '../style/theme';

const landing = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Stepps />
        <Numbers />
      </Layout>
    </>
  );
};

export default landing;
