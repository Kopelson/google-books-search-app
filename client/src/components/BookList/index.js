import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const styles = {
  height: "50vh"
}
// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  id,
  title,
  subtitle,
  image,
  authors,
  description,
  link,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row style={styles} className="mt-3 mb-3">
          <Col className="col-lg-2 overflow-auto" style={styles}>
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
          </Col>
          <Col className="col-lg-2 overflow-auto" style={styles}><p>Author(s): {authors.join(", ")}</p></Col>
          <Col className="col-lg-2">
            <img src={image} alt={title} />
          </Col>
          <Col className="col-lg-4 overflow-auto" style={styles}>
            <p>{description}</p>
          </Col>
          <Col className="col-lg-2">
            <a className="btn btn-dark" href={link} target="_blank" rel="noopener noreferrer">Info</a>
            <Button className="btn-success ml-3" onClick={() => onClick(id, title, subtitle, authors, description, image, link)}>Save</Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
