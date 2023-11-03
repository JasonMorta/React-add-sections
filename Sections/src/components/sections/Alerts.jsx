import Alert from "react-bootstrap/Alert";


export default function Alerts({ variant, alertText, classname }) {
  /* 
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
  */
 const styles = {
/*   margin: auto;
  width: 100%;
  height: 100%; */
  margin: 'auto',
  width: '100%',
  height: '100%',
 }


  return (
    <>
      {
        <>
          <Alert 
          style={styles}
          key={variant} 
          variant={variant}
          className={classname}>
            {alertText}
          </Alert>
         
        </>
      }
      <br />
    </>
  );
}
