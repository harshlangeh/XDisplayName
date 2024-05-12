import React, { useState } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if( firstName && lastName ){
      setFullName(`${firstName} ${lastName}`);
      setFirstNameError('');
      setLastNameError(''); 
    } else {
      if(!firstName){
        setFirstNameError('Please fill in first name.')
      } else {
        setFirstNameError('')
      }

      if(!lastName){
        setLastNameError('Please fill in last name.')
      } else {
        setFirstNameError('')
      }
    }

  }








  return (
    <div>
      <form>
        <div>
        <label htmlFor="firstname">First Name: </label>
        <input 
        type="text"
        id='firstname'
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        style={{borderColor: firstNameError && 'red'}}
         />
         {firstNameError && <p style={{color: 'red'}}>{firstNameError}</p>}
        </div>

        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input
          type='text'
          id='lastname'
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          style={{borderColor: lastNameError && 'red'}}
          />
          {lastNameError && <p style={{color: 'red'}}>{lastNameError}</p>}
        </div>

        <button type='submit' onClick={handleSubmit}>Submit</button>
       
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
    
  )


  
}

export default FullNameForm;

