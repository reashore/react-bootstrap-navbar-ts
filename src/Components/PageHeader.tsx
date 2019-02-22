import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.SFC<IPageHeaderProps> = (props: IPageHeaderProps) =>
  <Jumbotron>
    <h1>{props.title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>;

export default PageHeader;
