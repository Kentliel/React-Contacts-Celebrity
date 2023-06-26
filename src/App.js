import './App.css';
import contactsList from '../src/contects.json';
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsList)
  const celebrityFiveFirst = contacts.slice(0, 5);



  return (
    <div className="App">
      <table className='tableMain'>
        <tr className="tableHeader">
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity</th>
          <th> Won an Oscar </th>
          <th> Won an Emmy </th>
        </tr>

        <tr className="artistsTable">
          {celebrityFiveFirst.map((contacts) => {
            return (
              <div className="output" key={contacts.id}>
                <td> <img src={contacts.pictureUrl} class="image" /></td>
                <td className="actorName">{contacts.name}</td>
                <td className="actorPopularity">{contacts.popularity}</td>
                <td className='oscar'>{contacts.wonOscar == "true" ? <img src='https://www.freepnglogos.com/uploads/oscar-png/oscar-icon-27.png' className='image'/> : <img src='https://cdn-icons-png.flaticon.com/128/4337/4337065.png' className='image'/>}</td>
                <td className='emmy'>{contacts.wonEmmy == "true" ? <img src='https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/19075/square_thumb%402x.jpg' className='image'/> : <img src='https://static-00.iconduck.com/assets.00/no-entry-icon-256x256-isjv30og.png' className='image'/> }</td>
              </div>
            )
          })
          }
        </tr>
      </table>

    </div>
  );
}


export default App;
