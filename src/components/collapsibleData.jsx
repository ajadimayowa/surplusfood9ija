import React, { useState } from "react";
import { Collapse, Col, Card } from "react-bootstrap";

const CollapsableData = ({ data }) => {
    const [on, setOn] = useState(false);
    const [onFirst, setOnFirst] = useState(false);
    return (
        <Card className="rounded rounded-0 shadow shadow-lg border border-1">
            <Card.Body>
                <div className="w-100" style={{ fontSize: '0.8em' }}>
                    <div className="w-100 d-flex">
                        <Col className="px-2 py-2" xs={8}>
                            <p className="p-0 px-2 m-0" style={{ fontWeight: '700' }}>{data?.title}</p>
                        </Col>
                        <Col className="text-end px-3 py-2">{on ? <i class="bi bi-caret-up" onClick={() => setOn(false)}></i> : <i className="bi bi-caret-down" onClick={() => setOn(true)}></i>}</Col>
                    </div>
                    <Collapse in={on}>
                        <div>
                        <div className="d-flex flex-column text-dark gap-4 px-3 py-3">
                            {
                                data?.links.map((link)=><a href='#' style={{textDecoration:'none'}}>{link}</a>)
                            }
                        </div>
                        </div>
                    </Collapse>
                </div>
            </Card.Body>
        </Card>
    );
};
export default CollapsableData;
