import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <div>
            <Container>
                <h1>Hellooo Category</h1>
                <Row>
                    <Col md={3}>
                        <h2>Sports</h2>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;