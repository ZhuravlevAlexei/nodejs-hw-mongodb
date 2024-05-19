import { mongoose } from 'mongoose';
import { ContactsCollection } from '../db/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    console.log('Contact id is not valid for MongoDB', contactId);
    return null;
  }
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
