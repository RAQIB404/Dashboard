import CandidateMatch from "./CandidateMatch";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./CandidateList.module.css";

const CandidateList = ({ className = "" }) => {
  return (
    <div className={[styles.candidateList, className].join(" ")}>
      <div className={styles.candidateCount}>
        <div className={styles.showing32Profiles}>Showing 32 Profiles</div>
      </div>
      <div className={styles.candidatesContainer}>
        <div className={styles.candidatesContainerChild} />
        <div className={styles.candidateRow}>
          <div className={styles.candidateCard}>
            <div className={styles.candidateContent}>
              <div className={styles.candidateInfo}>
                <div className={styles.candidateHeader}>
                  <img
                    className={styles.candidateAvatarIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-217-2@2x.png"
                  />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <h1 className={styles.rp}>RP</h1>
                  </div>
                </div>
              </div>
              <div className={styles.candidateInfo1}>
                <div className={styles.nameTitle}>
                  <div className={styles.rahulPatil}>Rahul Patil</div>
                  <div className={styles.softwareEngineer}>
                    Software Engineer
                  </div>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.email}>
                    <div className={styles.emailIcon}>
                      <img
                        className={styles.iconFeatherMail}
                        loading="lazy"
                        alt=""
                        src="/icon-feathermail.svg"
                      />
                    </div>
                    <div className={styles.gmailcom}>**********@gmail.com</div>
                  </div>
                  <div className={styles.phoneResume}>
                    <div className={styles.phoneNumber}>
                      <div className={styles.phoneIcon}>
                        <img
                          className={styles.iconFeatherPhone}
                          loading="lazy"
                          alt=""
                          src="/icon-featherphone-2.svg"
                        />
                      </div>
                      <div className={styles.contactNumber}>******6655</div>
                    </div>
                    <div className={styles.viewResume}>View Resume</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CandidateMatch />
        </div>
        <FrameComponent propPadding="3px 0px 0px" />
      </div>
    </div>
  );
};

CandidateList.propTypes = {
  className: PropTypes.string,
};

export default CandidateList;
