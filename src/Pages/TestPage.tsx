import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const TestPage = () => {
  const [friends, setFriends] = useState([
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
  ]);
  return (
    <Container>
      <h1>Friends List</h1>
      <ListGroup>
        {friends.map((friend, index) => (
          <ListGroup.Item key={index}>{friend}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary">Add Friend</Button>
    </Container>
  );
};

export default TestPage;
