import React from 'react';
import Row from './containers/Row';
import Column from './containers/Column';
import items from '../db/videos';

const Videos = () => {

  return ( 

    <Row>
      <Column column="col-md-12">
        <div className="card">
          <header className="card-header">videos</header>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="20%">book</th>
                  <th width="20%">section</th>
                  <th width="30%">title</th>
                </tr>
              </thead>
              <tbody>

                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.book}</td>
                    <td>{item.section}</td>
                    <td><a href={item.url} target="_blank">{item.title}</a></td>
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
 
export default Videos;