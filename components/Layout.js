import Head from 'next/head';
import { theme } from '../style/theme';
import CookieConsent from 'react-cookie-consent';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        />
      </Head>
      <main>{children}</main>
      <footer></footer>
      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="myAwesomeCookieName2"
        style={{ background: theme.color.background.secondary }}
        buttonStyle={{
          color: '#fff',
          fontSize: '13px',
          background: theme.color.primary,
          borderRadius: theme.sizing.border.small,
        }}
        declineButtonStyle={{
          color: '#fff',
          fontSize: '13px',
          background: theme.color.background.primary,
          borderRadius: theme.sizing.border.small,
        }}
        enableDeclineButton
        expires={150}
      >
        🍪 This website uses cookies to enhance the user experience.
      </CookieConsent>
      <style jsx global>
        {`
          body {
            background-color: ${theme.color.background.primary};
          }
          button {
            background-color: ${theme.color.primary};
            border: none;
            color: ${theme.color.text};
            border-radius: 5px;
            padding: 0.5rem 3rem;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          a {
            color: ${theme.color.text};
          }

          h1 {
            font-family: Helvetica;
            font-style: normal;
            font-weight: bold;
            font-size: 55px;
            line-height: 66px;
          }

          .color-primary {
            color: ${theme.color.primary};
          }

          .fade-in {
            animation: fadein 2s;
          }

          footer {
            background-color: ${theme.color.primary};
            height: 5vh;
          }

          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .fadeInDown {
            animation: fadeInDown 0.5s;
          }

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
