import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import Text from './components/type';
import Button from './components/button';

function App() {
  return (
    <Layout>
      <Text type={'title.medium.value'}>Buttons</Text>
      <br/>
      <div>
        <Button>Button</Button>
      </div>
      <br/>
      <div>
        <Button type="outline">Button</Button>
      </div>
      <br/>
      <div>
        <Button type="tertiary">Button</Button>
      </div>
      <br/>
      <div>
        <Button type="default" color="error">Button</Button>
      </div>
    </Layout>
  );
}

export default App;
