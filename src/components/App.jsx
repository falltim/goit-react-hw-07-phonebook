import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
      <Filter />
      <h1>Contacts</h1>
      <ContactsList />
    </div>
  );
};

export default App;
