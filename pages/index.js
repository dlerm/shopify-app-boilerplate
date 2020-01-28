import { Page, Layout, EmptyState } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
    <EmptyState
      heading="Sample Embedded App"
      action={{
        content: 'Do something',
        onAction: () => console.log('clicked'),
      }}
      image={img}
      >
      <p>This app will eventually have something to do!</p>
    </EmptyState>
    </Layout>
  </Page>
);

export default Index;