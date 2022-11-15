import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactClass = () => {

    const defaultContact = new Contact(
        'Fabricio','Martinez','fabricio@gmail.com',true)

    return (
        <div>
            <div>
                <h1>
                    Contacto:
                </h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactClass;
