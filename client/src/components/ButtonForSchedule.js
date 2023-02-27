import React from 'react'

function ButtonForSchedule() {
  return (
     <>
          <div className='container-md'>
               <div style={{maxWidth:'700px',widtj:'400px', gap:'1.7rem',display:'flex',justifyContent:'center',margin:'25px auto',alignItems:'center'}}>
                    <a href='/scheduleG1' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px', textDecoration:'none', color:'black'}}>1</a>
                    <a href='/scheduleG2' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px' , textDecoration:'none', color:'black'}}>2</a>
                    <a href='/scheduleG3' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px', textDecoration:'none', color:'black'}}>3</a>
                    <a href='/scheduleG4' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px', textDecoration:'none', color:'black'}}>4</a>
                    <a href='/scheduleG5' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px', textDecoration:'none', color:'black'}}>5</a>
                    <a href='/scheduleG6' style={{display:'inline-block',width:'45px',textAlign:'center',border:'1px solid #333', borderRadius:'5px', textDecoration:'none', color:'black'}}>6</a>
               </div>
          </div>
     </>
  )
}

export default ButtonForSchedule
