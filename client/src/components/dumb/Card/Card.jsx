import React from 'react';
import {
  Card, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Content from '../../smart/Content.jsx';
const card = (props) => {
  return (
    <div>
      {
        props.loggedIn ?
          <Card className="card">
            <CardBody>
              {/* <CardTitle>Card title</CardTitle> */}
              <div><Content /></div>
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
          : ""
      }
    </div>

    
  );
};

export default card;