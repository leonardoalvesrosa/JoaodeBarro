import React, { Component } from 'react';

import { Campanha } from './styles';

function Campanhas({ data }) {
  // console.log('data ' + typeof(data));

  return (
    <>
      <Campanha>
        <div className="campanha">
          <div className="post">
            <img src={data.url} alt="feijoada" />
          </div>

          <div className="infoCampanha">
            <h2>{data.title}</h2>
            <p>
              {/* Participe da nossa feijoada beneficente para arrecadação de recursos.
                Vamos contribuir para que nossas famílias possam realizar o sonho
                de ter a casa própria! */}
              {data.description}
            </p>
            <button>Saiba mais</button>
          </div>
        </div>
      </Campanha>
    </>
  );
}

export default Campanhas;

// export default class Campanhas extends Component {

//   render() {
//     return (

//       <Container>
//         <Campanha>

//           <div className="campanha">
//             <div className="post">
//               <img src='/images/feijoada.jpg' alt="feijoada" />
//             </div>

//             <div className="infoCampanha">
//               <h2>Feijoada IJB</h2>
//               <p>
//                 Participe da nossa feijoada beneficente para arrecadação de recursos.
//                 Vamos contribuir para que nossas famílias possam realizar o sonho
//                 de ter a casa própria!
//               </p>
//               <button>Saiba mais</button>
//             </div>
//           </div>

//         </Campanha>
//       </Container>
//     );

//   }
// }
