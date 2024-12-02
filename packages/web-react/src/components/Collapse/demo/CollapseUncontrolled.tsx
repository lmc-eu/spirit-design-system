import React from 'react';
import { Button } from '../../Button';
import UncontrolledCollapse from '../UncontrolledCollapse';

const UncontrolledCollapseDemo = () => {
  const content = (
    <p>
      Condimentum odio, pulvinar et sollicitudin accumsan ac hendrerit vestibulum commodo, molestie laoreet dui sit
      amet. Molestie consectetur, sed ac felis scelerisque lectus accumsan purus id dolor sed vitae, praesent aliquam
      dolor quis ornare. Nulla sit amet, rhoncus at quis odio et iaculis lacinia suscipit vivamus sodales, nunc id
      condimentum felis. Consectetur nec commodo, praesent et elit magna purus molestie cursus molestie, libero ut
      venenatis erat id et nisi. Quam posuere, aliquam quam leo vitae tellus semper eget nunc, ultricies adipiscing sit
      amet accumsan. Lorem rutrum, porttitor ante mauris suspendisse ultricies consequat purus, congue a commodo magna
      et.
    </p>
  );

  return (
    <div>
      {content}
      <UncontrolledCollapse
        id="uncontrolled-collapse-id"
        renderTrigger={(props) => <Button {...props}>… more</Button>}
        isDisposable
      >
        {content}
      </UncontrolledCollapse>
    </div>
  );
};

export default UncontrolledCollapseDemo;
