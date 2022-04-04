import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import BusinessOnlineSection from "./BusinessOnlineSection";
import WhereverSection from "./WhereverSection";
import EmpoweringSection from "./EmpoweringSection";
import QuotesSection from "./QuotesSection";
import SupportSection from "./SupportSection";
import FreeTrialSection from "./FreeTrialSection";
import Footer from "./Footer";
import styles from "./styles/AppStyles.module.css"



function App() {
  return (
    <div id="App" className="App">
      <Navbar />
      <main className={styles.mainContainer} >
        <IntroSection />
        <BusinessOnlineSection />
        <WhereverSection />
        <EmpoweringSection />
        <QuotesSection />
        <SupportSection />
        <FreeTrialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
