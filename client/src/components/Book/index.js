import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// This component exports a book component
//after api call is placed
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/*Displays the title*/}
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        {/*Displays who the book was written by */}
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/*Displays the books image */}
        <Col size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </Col>
        {/*Displays a short description of the book */}
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
