import Card from "./components/card.jsx";
import Chart from "./components/chart.jsx";
import { Stack } from "@fluentui/react";
import Balance from "./components/balance.jsx";
import Totals from "./components/totals.jsx";
import { styles } from "./App.css.js";

function App() {
  return (
    <div className={styles.app}>
      <Stack>
        <Balance/>
        <Card>
          <Chart />
          <div className={styles.rect}/>
          <Totals/>
        </Card>
      </Stack>
    </div>
  );
}

export default App;
