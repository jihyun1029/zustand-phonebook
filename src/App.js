import logo from './logo.svg';
import './App.css';
import {Grid} from '@mui/material';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div>
      <h1 className="title">연락처 앱</h1>
        <Grid container spacing={2}>
            <Grid size={6} className="border-column">
                <ContactForm />
            </Grid>
            <Grid size={6}>
                <ContactList />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
