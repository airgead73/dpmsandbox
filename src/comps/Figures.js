import React from 'react';
import Row from './containers/Row';
import Column from './containers/Column';
import items from '../db/figures';

const Figures = () => {

  const urlBase = 'https://res.cloudinary.com/dpm/image/upload/v1612022979/eng121/old/';

  return ( 



    <Row>
      <Column column="col-md-12">
        <div className="card">
          <header className="card-header">figures</header>
          <div className="card-body">
            <img src="./images/Fig1.1.jpg" alt=""/>
            <table className="table">
              <thead>
                <tr>
                  <th width="10%">book</th>
                  <th width="10%">section</th>
                  <th width="10%">number</th>
                  <th width="30%">title</th>
                  <th width="40%">caption</th>
                </tr>
              </thead>
              <tbody>

                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.book}</td>
                    <td>section</td>                    
                    <td><a href={`${urlBase}${item.file}`} target="_blank">{item.number}</a></td>
                    <td>title</td>
                    <td>caption</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <footer className="card-footer">back to top</footer>
        </div>
      </Column>
    </Row>    

   );
}
 
export default Figures;