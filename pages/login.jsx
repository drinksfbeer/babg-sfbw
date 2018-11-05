import Head from 'next/head';
import { Field } from 'redux-form';
import PageLayout from '../components/mainLayout/pageLayout';
import SubHeader from '../components/mainLayout/subHeader';
import FormContainer from '../components/common/form/formContainer';
import { TextField } from '../components/common/form/inputs';
import { email, required } from '../components/common/form/validations';
import '../components/common/button/button.scss';

const Login = () => (
  <PageLayout>
    <Head>
      <title>Login | SF Beer Week 2019</title>
    </Head>
    <SubHeader title="Welcome Back, My Dude" />
    <FormContainer
      form="login"
      submit={async (results, actions, notifications) => {
        try {
          await actions.asyncAction('authorize', {
            email: results.email,
            password: results.password,
          });
          actions.router.replace('/'); // TODO: replace this with itinerary route?
        } catch (error) {
          switch (error.err) {
            case 'email_not_found': {
              notifications.error('Email was not found.');
              break;
            }

            case 'incorrect_password': {
              notifications.error('Password is incorrect.');
              break;
            }

            case 'unsupported_role': {
              notifications.error('This account type cannot access this system.');
              break;
            }

            default: {
              notifications.error('There was a problem logging you in. ' +
                'Please try again later.');
              break;
            }
          }
        }
      }}
      renderProps={() => (
        <div className="grid align-center padded">
          <Field
            name="email"
            label="Email Address"
            type="email"
            component={TextField}
            validate={[required, email]}
            containerClass="item centered size-4"
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={TextField}
            validate={[required]}
            containerClass="item centered size-4"
          />
          <div className="item centered size-4">
            <button type="submit" className="button">
              Log In
            </button>
          </div>
        </div>
      )}
    />
  </PageLayout>
);

export default Login;
