import styles from './App.module.scss';
import { Label } from './components/label/label';
import { Input } from './components/input/input';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.h1}>Contact Us</h1>
            <p className={styles.p}>
                To know more about the services we offer an for further inquires please contact us
                through the medium below{' '}
            </p>
            <form className={styles.form}>
                <FormRow>
                    <Label htmlfor="name">Name</Label>
                    <Input id={'name'} name={'name'} />
                </FormRow>
                <FormRow>
                    <Label htmlfor="email">Email</Label>
                    <Input id={'email'} name="email"></Input>
                </FormRow>
                <FormRow>
                    <Label htmlfor="message">Message</Label>
                    <Input id={'message'} name="message" />
                </FormRow>
                <FormRow>
                    <SubmitButton> Submit</SubmitButton>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
