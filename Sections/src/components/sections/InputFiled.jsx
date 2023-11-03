import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputField({onchange}) {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={onchange}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default InputField;
