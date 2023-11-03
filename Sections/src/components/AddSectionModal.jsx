import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CSS from "./model.module.css";
import { GlobalState } from "../State";
import { produce } from "immer";
import Alerts from "./sections/Alerts";
import Accordion from "react-bootstrap/Accordion";
import InputField from "./sections/InputFiled";
import TextArea from "./sections/TextArea";
import Form from "react-bootstrap/Form";

function AddSectionModal() {
  const main = useContext(GlobalState);
  const { state, setState } = main;
  console.log("name", state.name);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Title section
  let title = "";
  const titleSection = (e) => {
    title = e.target.value;
  };

  //alert section
  let alert = "";
  let variant = "primary";
  const alertSection = (e) => {
    alert = e.target.value;
  };
  function handleSelect(e) {
    variant = e.target.value;
  }

  //Text area section
  let textArea = "";
  const textAreaSection = (e) => {
    textArea = e.target.value;
  };

  const handleInsert = (e) => {
    console.log(e);

    if (e === "alert") {
    
      setState(
        produce(state, (val) => {
          val.sections.push({
            element: <Alerts 
            alertText={alert} 
            variant={variant}
            classname={`alert-${alert}`}
             />,
           
          });
        })
      );
    } else if (e === "title") {
      setState(
        produce(state, (val) => {
          val.sections.push({
            element: <h1>{title}</h1>,
            className: `h1-${title.slice(0, 5)}`,
          });
        })
      );
    } else if (e === "textarea") {
      setState(
        produce(state, (val) => {
          val.sections.push({
            element: <pre>{textArea}</pre>,
            className: `ta-${textArea.slice(0, 5)}`,
          });
        })
      );
    }

    handleClose();
  }; // end of handleInsert

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add new section
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a section</Modal.Title>
        </Modal.Header>

        {/* Insert options */}
        <Modal.Body>
          <div className={CSS.sections}>
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Title</Accordion.Header>
                  <Accordion.Body>
                    <InputField onchange={titleSection} />
                    <Button
                      variant="success"
                      onClick={() => handleInsert("title")}
                    >
                      Insert
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Text Area</Accordion.Header>
                  <Accordion.Body>
                    <TextArea oninput={textAreaSection} />
                    <Button
                      variant="success"
                      onClick={() => handleInsert("textarea")}
                    >
                      Insert
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Alerts</Accordion.Header>
                  <Accordion.Body>
                    <InputField onchange={alertSection} />
                    <Form.Select size="sm" onChange={handleSelect}>
                      <option value="primary">Blue</option>
                      <option value="secondary">Gray</option>
                      <option value="success">Green</option>
                      <option value="danger">Red</option>
                      <option value="warning">Yellow</option>
                      <option value="info">Light Blue</option>
                      <option value="light">White</option>
                      <option value="dark">Black</option>
                    </Form.Select>
                    <br />
                    <Button
                      variant="success"
                      onClick={() => handleInsert("alert")}
                    >
                      Insert
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSectionModal;
