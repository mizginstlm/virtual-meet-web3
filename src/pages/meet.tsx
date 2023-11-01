import BackToHub from "@/components/BackToHub";
import React from "react";
import styles from "@/styles/Home.module.css";
import Countdown from "react-countdown";
import { useBalances } from "./../hooks/useBalances";
// Inside your component or function:

function MeetingPage() {
  const { tokenBalances } = useBalances();
  console.log(tokenBalances);
  const numberOfTokens = tokenBalances.length;
  const isEligible = Number(numberOfTokens) > 0;
  const countdownDate = new Date("2023-12-31T23:59:59");

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <h1 className="my-8 text-center text-3xl font-bold  ">
            MEETING WILL START SOON!
          </h1>

          <Countdown date={countdownDate} className={styles.countdown} />

          <h2 className="my-8 text-center text-xl font-bold">
            <div className="my-4">
              only native token holders will be eligible to join
            </div>
            <div className="my-4">{`Your native balance is ${numberOfTokens}`}</div>
            <div className="my-4 ">
              {`YOU ARE ${isEligible ? "" : "NOT"} ELIGIBLE`}
            </div>
          </h2>

          <BackToHub />
        </div>
      </div>
    </main>
  );
}

export default MeetingPage;
