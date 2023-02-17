import Button from '../components/button';
import { Banner } from '../presentation';

function ButtonPresentation() {
  
  return (
    <div className="viewer">
      <Banner title="Button" />
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
      </div>
  );
}

export default ButtonPresentation;
