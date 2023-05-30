import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import {PageContactSection, PageContactSubTitle, PageContactTitle} from './PageContacts.styled';

function PageContacts() {
  return (
    <PageContactSection>
      <PageContactTitle>Contacts list</PageContactTitle>
      <PageContactSubTitle>Add contact</PageContactSubTitle>
      <ContactForm />

      <PageContactSubTitle>Contacts</PageContactSubTitle>
      <Filter />
      <ContactList />
    </PageContactSection>
  );
}

export default PageContacts;