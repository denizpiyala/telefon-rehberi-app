import {useEffect, useState} from 'react'
import './styles.css';

import {List} from './List'
import {Form} from './Form'

function Contacts() {

    const [Contacts,setContacts] = useState([
        {
            fullname: 'deniz'
            phone_number: '123123'
        },{
            fullname:'ayşe',
            phone_number: '456456'
        },{
            fullname: 'cemil',
            phone_number: '987987'
        }
    ]);

    useEffect(() => {
        console.log(Contacts);
     }, [Contacts])

    return (
        <div id="Container">
            <h1>Contacts</h1>
        <List Contacts={Contacts}/>
        <Form addContact ={setContacts} Contacts={Contacts}/>
        </div>
    );
}

export default Contacts;