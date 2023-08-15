import React from "react";
import photo from "../../Image/PhotoExample.png";
import ach from "../../Image/Achievment.png";
import { Col, Container, Image, Row } from "react-bootstrap";
const UserProfile = () => {
  return (
    <>
      <div style={{ background: "#0F0F0F", height: "100vh" }}>
        <Row>
          <Col className="picture-wrapper">
            <Image className="picture" src={photo} />
          </Col>
        </Row>
        <Row className="mt-2 label-block">
          <Col>
            <h3>Vladimir</h3>
            <h3 style={{ opacity: 0.44 }}>@GodObject</h3>
          </Col>
        </Row>
        <Row className="achivements">
          <h3 className="mt-3">Achivements</h3>
          <Col className="mt-1">
            <Image src={ach}></Image>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserProfile;
