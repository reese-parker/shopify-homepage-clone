import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import BusinessOnlineSection from "./BusinessOnlineSection";
import WhereverSection from "./WhereverSection";
import EmpoweringSection from "./EmpoweringSection";
import styles from "./styles/AppStyles.module.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className={styles.mainContainer} >
        <IntroSection />
        <BusinessOnlineSection />
        <WhereverSection />
        <EmpoweringSection />
      </main>
    </div>
  );
}

export default App;
