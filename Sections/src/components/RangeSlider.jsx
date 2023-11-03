import Form from 'react-bootstrap/Form';

function RangeSlider() {

 

function handleSlider(e) {
    console.log(e.target.value);
    console.log();

}


  return (
    <>
      <Form.Label>Range</Form.Label>
      <Form.Range 

      onChange={handleSlider}
       />
    </>
  );
}

export default RangeSlider;