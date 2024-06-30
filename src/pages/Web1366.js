import CandidatesHeader from "../components/CandidatesHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import CandidateCard from "../components/CandidateCard";
import CandidateList from "../components/CandidateList";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Web1366.module.css";

const Web1366 = () => {
  return (
    <div className={styles.web1366117}>
      <main className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.union5Icon}
                      loading="lazy"
                      alt=""
                      src="/union-5.svg"
                    />
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-16020.svg"
                />
              </div>
            </div>
            <div className={styles.dashboardCandidatesJobsHiriParent}>
              <h3 className={styles.dashboardCandidatesJobsHiri}>
                <p className={styles.dashboard}>Dashboard</p>
                <p className={styles.candidates}>Candidates</p>
                <p className={styles.jobs}>Jobs</p>
                <p className={styles.hiringCalculator}>Hiring Calculator</p>
                <p className={styles.assessment}>Assessment</p>
                <p className={styles.administration}>Administration</p>
              </h3>
              <img
                className={styles.iconFeatherSettings}
                loading="lazy"
                alt=""
                src="/icon-feathersettings.svg"
              />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-14450.svg"
              />
              <div className={styles.frameParent1}>
                <button className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/group-14449.svg"
                  />
                </button>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-14448.svg"
                />
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent2}>
                    <img
                      className={styles.frameChild3}
                      loading="lazy"
                      alt=""
                      src="/group-14451.svg"
                    />
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild4} />
                      <div className={styles.recommended}>Recommended</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/group-14453.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <section className={styles.frameSection}>
          <div className={styles.frameChild6} />
          <CandidatesHeader />
          <FrameComponent1 />
          <FrameComponent2 />
          <CandidateCard />
          <CandidateList />
          <FrameComponent3 />
        </section>
      </main>
      <img className={styles.path26532Icon} alt="" src="/path-26532.svg" />
    </div>
  );
};

export default Web1366;
