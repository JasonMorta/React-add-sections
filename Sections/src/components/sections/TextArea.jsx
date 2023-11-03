import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TextArea({textArea, oninput}) {
  return (
    <>
      <InputGroup>
        <Form.Control
         placeholder='Insert text'
         as="textarea"
         onInput={oninput}></Form.Control>
         <br/>
      </InputGroup>
    </>
  );
}

export default TextArea;