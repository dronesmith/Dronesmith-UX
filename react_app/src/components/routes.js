import React from 'react';
import App from './App/app';
import Registration from './Registration/registration';
import InfoForm from './InfoForm/infoform';
import LoginForm from './LogInForm/loginform';
import PasswordForm from './PasswordForm/passwordform';
import PhoneForm from './PhoneForm/phoneform';


export default (
    <Route>
      <Route path="/" component={App} />
        <Registration component={Registration} />
           <InfoForm component={InfoForm} >
           		<PhoneForm component={PhoneForm}/>
            </InfoForm>
           <LoginForm component={LoginForm} />
              <PasswordForm component={PasswordForm}/> 
    </Route>

);