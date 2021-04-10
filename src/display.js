import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./App.css";
import Table from './table.js'
import "bootstrap/dist/css/bootstrap.css";

//Add car modal form 
const Add = ({ onSubmit }) => {
    const [Make, setMake] = useState("");
    const [Model, setModel] = useState("");
    const [Year, setYear] = useState("");
    const [Price, setPrice] = useState("");
    return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="addMake">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Make"
            value={Make}
            onChange={(e) => setMake(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="addModel">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Model"
            value={Model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="addYear">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Year"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="addPrice">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    );
  };

export default function Display({cars}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    //submit form closes modal 
    const addSubmit = (e) => {
      e.preventDefault();
      handleClose();
    };

    return (
      <>
         <div className="panels">
        <button>Inventory</button>
        <div className="panel-info">
          <button onClick={handleShow}>Add New Vehicle</button>
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="panel-positions">
              <Table cars={cars}/>
            </div>
        </div>
      </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Vehicle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Add onSubmit={addSubmit} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }