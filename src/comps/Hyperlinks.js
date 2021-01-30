import React from 'react';
import Row from './containers/Row';
import Column from './containers/Column';
import items from '../db/hyperlinks';

const Hyperlinks = () => {

  return ( 

    <Row>
      <Column column="col-md-12">
        <div className="card">
          <header className="card-header">links</header>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="10%">book</th>
                  <th width="10%">section</th>
                  <th width="40%">title</th>
                  <th width="40%">url</th>
                </tr>
              </thead>
              <tbody>

                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.book}</td>
                    <td>{item.section}</td>
                    <td>{item.title}</td>
                    <td>
                      <a href={item.url} target="_blank">{item.url}</a>
                    </td>

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
 
export default Hyperlinks;