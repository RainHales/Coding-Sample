import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, Form } from "react-bootstrap";

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

const Display = ({cars}) => {
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

const Table = ({cars}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = ({index}) => setShow(true);

  //submit form closes modal 
  const onEdit = (e) => {
    e.preventDefault();
    handleClose();
  };

  var [Make, setMake] = useState("");
  var [Model, setModel] = useState("");
  var [Year, setYear] = useState("");
  var [Price, setPrice] = useState("");
  var [State, markSold] = useState(""); 


return (
<>
  <table className='vehicleTable'>
    <thead>
      <tr>
        <th>No.</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {(cars.length > 0) ? cars.map((cars, index) => {
          return(
              <tr key={index}>
                  <td>{cars.No}</td>
                  <td>{cars.Make}</td>
                  <td>{cars.Model}</td>
                  <td>{cars.Year}</td>
                  <td>{cars.Price}</td>
                  <td>{cars.Status}</td>
                  <td><button onClick={handleShow}>Edit</button></td>
              </tr>
              )
        }) : <tr><td colSpan="5">Loading...</td></tr> }
    </tbody>
  </table>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onEdit}>
      <Form.Group controlId="updateMake">
        <Form.Label>Make</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Make"
          value={Make}
          onChange={(e) => setMake(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="updateModel">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Model"
          value={Model}
          onChange={(e) => setModel(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="updateYear">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Year"
          value={Year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="updatePrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={markSold} block>
        Set As Sold
      </Button>
      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
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


class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      cars: []
    }

  }


  componentDidMount(){
    fetch("http://localhost:5000/cars")
      .then(res => res.json())
      .then(result => this.setState({cars: result}))

      console.log(this.state.cars);
  }

  render(){
    return(  
      <Display cars={this.state.cars}/>
      
    )
  }
}

export default App



