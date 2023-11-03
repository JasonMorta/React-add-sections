import { useContext, useState } from 'react'

import './App.css'
import AddSectionModal from './components/AddSectionModal';
import { GlobalState } from './State';
import EditSection from './components/EditSection';


function App() {
  const global = useContext(GlobalState);
  const {sections} = global.state;


  //const [count, setCount] = useState(0)

  return (
    <main>
    
   
      <div className="card">
        <AddSectionModal />
        
      </div>
     <br/>
      <section>
        {sections?.length > 0 && sections.map((section, index) => {
        
       return <>
       {     
       
     <div className='section_item'>
         <EditSection item={section} />
     {    section.element}
     </div>
       
       }
    
       </>
          
        }
        )}
      </section>
    </main>
  )
}

export default App
