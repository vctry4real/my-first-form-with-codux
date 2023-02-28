import styles from './App.module.scss';
import { Label } from './components/label/label';
import { Input } from './components/input/input';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlfor="name">Name</Label>
                <Input id={'name'} name={'name'} />
                <Label htmlfor="email">Email</Label>
                <Input id={'email'} name="email"></Input>
                <Label htmlfor="message">Message</Label>
                <Input id={'message'} name="message" />
                <SubmitButton> Submit</SubmitButton>
            </form>
        </div>
    );
}

export default App;
