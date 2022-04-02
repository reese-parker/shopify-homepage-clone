import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import BusinessOnlineSection from "./BusinessOnlineSection";
import styles from "./styles/AppStyles.module.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className={styles.mainContainer} >
        <IntroSection />
        <BusinessOnlineSection />
      </main>
    </div>
  );
}

export default App;
