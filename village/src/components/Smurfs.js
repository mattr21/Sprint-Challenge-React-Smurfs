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
        <p><button onClick={e => props.deleteSmurf(e, smurf.id)}>X</button></p>
      </div>
      )}
    </div>
  );
}

// class Smurfs extends Component {


//   render() {
//     return (
//       <div className="Smurfs">
//         <h1>Smurf Village</h1>
//         <ul>
//           {this.props.smurfs.map(smurf => {
//             return (
//               <Smurf
//                 name={smurf.name}
//                 id={smurf.id}
//                 age={smurf.age}
//                 height={smurf.height}
//                 key={smurf.id}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Smurfs;
