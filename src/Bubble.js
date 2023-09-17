import React, { forwardRef } from "react";
import { useEffect } from "react";
import { Button, Row, Col } from 'react-bootstrap';

const Bubble = ({ id, name, location, latency, speed, cost, count }) => {
    useEffect(() => {
        var dom = document.getElementsByClassName('card-container' + id)[0];
        
        // dom.classList.add('animate__animated');
        // dom.classList.add('animate__fadeIn');
        var op = 0.2;  // initial opacity
        dom.style.filter = 'alpha(opacity=' + op * 100 + ")";
        dom.style.opacity = op;
        var timer = setInterval(function () {
            if (op >= 0.9){
                clearInterval(timer);
                dom.style.display = 'block';
            }
            dom.style.opacity = op;
            dom.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.2;
        }, 30);
    }, [count]);
    return (
        <Col className={`card-container${id} col-md-4 p-2`} >
            <div className=" border border-success p-3 rounded card-item">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex w-100 justify-content-end">
                        {location}
                    </div>
                    <div className="my-5">
                        <h3>{name}</h3>
                    </div>
                    <Row className="d-flex align-items-center justify-content-center w-100">
                        <Col className="d-flex align-items-center justify-content-center">{latency} ms</Col>
                        <Col className="d-flex align-items-center justify-content-center">{speed} MB/s</Col>
                        <Col className="d-flex align-items-center justify-content-center">{cost} USD/GB</Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
};

export default Bubble;
