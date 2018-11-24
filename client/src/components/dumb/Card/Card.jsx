import React from 'react';
import {Card, CardBody,} from 'reactstrap';
import Content from '../../smart/Content.jsx';
const card = (props) => {
  return (
    <div>
      {
        props.loggedIn ?
          <Card className="card">
            <CardBody>
              {/* <CardTitle>Card title</CardTitle> */}
              <Content />
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
          : ""
      }
    </div>


  );
};

export default card;