import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import BusinessOnlineSection from "./BusinessOnlineSection";
import WhereverSection from "./WhereverSection";
import EmpoweringSection from "./EmpoweringSection";
import styles from "./styles/AppStyles.module.css"
import QuotesSection from "./QuotesSection";
import SupportSection from "./SupportSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className={styles.mainContainer} >
        <IntroSection />
        <BusinessOnlineSection />
        <WhereverSection />
        <EmpoweringSection />
        <QuotesSection />
        <SupportSection />
      </main>
    </div>
  );
}

export default App;
