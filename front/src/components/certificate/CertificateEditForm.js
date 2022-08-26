import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateEditForm = ({
  index,
  certificate,
  onEditSubmit,
  onEditCancel,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [certifiedDate, setCertifiedDate] = useState(new Date());

  useEffect(() => {
    setTitle(certificate.title);
    setDescription(certificate.description);
    setCertifiedDate(certificate.date);
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="certificateEditTitle">
        <Form.Control
          type="text"
          placeholder="자격증 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="certificateEditDescription">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <DatePicker
        selected={certifiedDate}
        onChange={(date) => setCertifiedDate(date)}
      />
      <Row className="mb-5">
        <Col className="text-center">
          <Button
            className="me-3"
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onEditSubmit(index, { title, description, date: certifiedDate });
            }}
          >
            확인
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={(e) => {
              onEditCancel(index);
            }}
          >
            취소
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default CertificateEditForm;