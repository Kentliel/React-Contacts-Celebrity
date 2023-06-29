import './App.css';
import contactsList from '../src/contects.json';
import { useState } from 'react';


function App() {
  const celebrityFiveFirst = contactsList.slice(0,5);
  const [contacts, setContacts] = useState(celebrityFiveFirst)

  const addRandomContact = () => {
    const positionRandom = Math.floor(Math.random() * contactsList.length);
    const celebrityRandom = contactsList[positionRandom];

    contacts.map((contact) =>{
      let uploadContacts;

      if (celebrityRandom.id !== contact.id) {
        uploadContacts = [...contacts, celebrityRandom]
        setContacts(uploadContacts);
      }
    })
  };

  const deleteCelebrity = ActorID => {
   const deleteFilterCelebrity = contacts.filter(contact => {
      return contact.id !== ActorID;
   })
   setContacts(deleteFilterCelebrity);
  }

  const popularitySort = () => {
  const orderPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity);
  setContacts(orderPopularity)
  
  }

  const nameSort = () => {
    const ordenName = [...contacts].sort((a,b) => a.name > b.name ? 1 : -2,);
    setContacts(ordenName)
  }


  ;
  return (
    <div className="App">
      <div className='buttons'>
        {<button onClick={()=> addRandomContact(contacts.name) }>Add Random Contact</button>}
        {<button onClick={()=>popularitySort()}>Sort by Popularity</button>}
        {<button onClick={()=>nameSort()}>Sort by Name</button>}
      </div>

      <table className='tableMain'>
        <tbody>
          <tr className="tableHeader">
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity</th>
            <th> Won an Oscar </th>
            <th> Won an Emmy </th>
            <th> Actions </th>
          </tr>


          {contacts.map((contact) => {
            return (
              <tr className="output" key={contact.id}>
                <td> <img src={contact.pictureUrl} className="image" /></td>
                <td className="actorName">{contact.name}</td>
                <td className="actorPopularity">{contact.popularity}</td>
                <td className='oscar'>{contact.wonOscar == "true" ? <img src='https://www.freepnglogos.com/uploads/oscar-png/oscar-icon-27.png' className='image' /> : <img src='https://cdn-icons-png.flaticon.com/128/4337/4337065.png' className='image' />}</td>
                <td className='emmy'>{contact.wonEmmy == "true" ? <img src='https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/19075/square_thumb%402x.jpg' className='image' /> : <img src='https://static-00.iconduck.com/assets.00/no-entry-icon-256x256-isjv30og.png' className='image' />}</td>
                <td><button onClick={()=>deleteCelebrity(contact.id)}>Delete</button></td>
              </tr>
            )
          })
          }
        </tbody>
      </table>

    </div>
  );
}


export default App;
