import Head from 'next/head';
import { Field } from 'redux-form';
import PageLayout from '../components/mainLayout/pageLayout';
import SubHeader from '../components/mainLayout/subHeader';
import FormContainer from '../components/common/form/formContainer';
import { TextField } from '../components/common/form/inputs';
import { email, required, minLength } from '../components/common/form/validations';
import '../components/common/button/button.scss';

const minPasswordLength = minLength(4);

const Register = () => (
  <PageLayout>
    <Head>
      <title>Register | SF Beer Week 2019</title>
    </Head>
    <SubHeader title="It's Lit" />
    <FormContainer
      form="register"
      submit={async (results, actions, notifications) => {
        const { email, password, confirmPassword } = results;

        if (password !== confirmPassword) {
          notifications.error('The passwords do not match.');
          return;
        }

        try {
          await actions.asyncAction('register', {
            email,
            password,
          });
          notifications.success('Welcome aboard!');
          actions.router.replace('/'); // TODO: replace this with itinerary route?
        } catch (error) {
          switch (error.err) {
            case 'email_in_use': {
              notifications.error('The email you have entered is already in use.');
              break;
            }

            default: {
              notifications.error('There was a problem signing you up. ' +
                'Please try again in a bit.');
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
            validate={[required, minPasswordLength]}
            containerClass="item centered size-4"
          />
          <Field
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            component={TextField}
            validate={[required, minPasswordLength]}
            containerClass="item centered size-4"
          />
          <div className="item centered size-4">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </div>
      )}
    />
  </PageLayout>
);

export default Register;
