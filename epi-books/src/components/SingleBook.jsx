import React, { useContext, useState } from "react";
import { Card, Col } from 'react-bootstrap'
import CommentArea from "./CommentArea";
import { ThemeContext } from '../modules/Contexts';

export default function SingleBook({ book }) {

    const  [selected, setSelected] = useState(false);
    let [themeCtx, setThemeCtx] = useContext(ThemeContext);

  return (
    <Col>
      <Card bg={themeCtx} data-bs-theme={themeCtx} style={{ width: "18rem", border: selected ? '2px solid red' : 'none' }} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </Col>
  );
}
