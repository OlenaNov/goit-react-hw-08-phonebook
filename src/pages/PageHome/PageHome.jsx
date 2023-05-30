import { useSelector } from 'react-redux';
import {PageHomeSection, PageHomeTitle, PageHomeText, PageHomeTitle2 } from './PageHome.styled';
import authSelectors from 'redux/auth/authSelectors';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <PageHomeSection>
            <PageHomeTitle>Phonebook</PageHomeTitle>
        <PageHomeTitle2>Add your first contact</PageHomeTitle2>
        {!isLoggedIn && (      
          
          <PageHomeText> Please, <b>Sign up</b> or <b>Log in</b></PageHomeText>
      )}
      </PageHomeSection>
      
    </>
  );
}

export default PageHome;