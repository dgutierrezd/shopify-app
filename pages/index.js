import { Page, Layout, EmptyState, TextStyle } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
    return (  
        <Page>
            <Layout>
                <EmptyState
                    heading="Discount your proucts temporarily"
                    action={{
                        content: 'Select products',
                        onAction: () => console.log('clicked!')
                    }}
                    // image={img}
                >
                    <p>Select products to change their price temprarily.</p>
                </EmptyState>
            </Layout>
        </Page>
    );
}
 
export default Index;