import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

interface PageHeaderProps {
  title: string
}

const PageHeader: React.SFC<PageHeaderProps> = (props: PageHeaderProps) =>
  <Jumbotron>
    <h1>{props.title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>;

  export default PageHeader