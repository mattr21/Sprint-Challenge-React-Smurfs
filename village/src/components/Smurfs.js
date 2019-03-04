import React from 'react';

// import Smurf from './Smurf';

const Smurfs = props => {
  const { smurfs } = props
  return (
    <div>
      {smurfs.map(smurf =>
      <div key={smurf.id}>
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <p><button onClick={e => props.deleteSmurf(e, smurf.id)}>X</button> <button onClick={e => props.setUpdateForm(e, smurf)}>Update</button></p>
      </div>
      )}
    </div>
  );
}

export default Smurfs;
