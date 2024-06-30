import PropTypes from "prop-types";
import styles from "./CandidatesHeader.module.css";

const CandidatesHeader = ({ className = "" }) => {
  return (
    <div className={[styles.candidatesHeader, className].join(" ")}>
      <div className={styles.headerItemsWrapper}>
        <div className={styles.headerItems}>
          <a className={styles.candidates}>Candidates</a>
          <div className={styles.filterStatus}>
            <div className={styles.newApplicant}>
              <a className={styles.new}>New</a>
              <div className={styles.newApplicantIcon}>
                <img
                  className={styles.path26852Icon}
                  alt=""
                  src="/path-26852.svg"
                />
              </div>
            </div>
            <a className={styles.qualified}>Qualified</a>
            <a className={styles.onHold}>On-Hold</a>
            <a className={styles.rejected}>Rejected</a>
          </div>
        </div>
      </div>
      <div className={styles.notifications}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.iconIonicIosNotificationsO}
            loading="lazy"
            alt=""
            src="/icon-ioniciosnotificationsoutline.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.userName}>
            <a className={styles.pushpak}>Pushpak</a>
          </div>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-14447@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

CandidatesHeader.propTypes = {
  className: PropTypes.string,
};

export default CandidatesHeader;
