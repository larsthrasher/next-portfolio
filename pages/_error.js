import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error!">
    {statusCode ? `Could not load user data: Status Code ${statusCode}`
    : `Couldn't get that page sorry, guy.` }
    <p>Page not found, man.</p>
  </Layout>
);
