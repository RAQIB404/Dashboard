import PropTypes from "prop-types";
import styles from "./CandidateMatch.module.css";

const CandidateMatch = ({ className = "" }) => {
  return (
    <div className={[styles.candidateMatch, className].join(" ")}>
      <img
        className={styles.path26716Icon}
        loading="lazy"
        alt=""
        src="/path-26716.svg"
      />
      <div className={styles.matchDetails}>
        <div className={styles.appliedMatch}>
          <div className={styles.appliedInfo}>
            <div className={styles.appliedForLead}>
              Applied for: Lead Web developer
            </div>
            <div className={styles.expCtc25}>Exp. CTC: 25 LPA</div>
          </div>
          <div className={styles.matchValue}>
            <div className={styles.matchPercentage}>Match Percentage</div>
            <div className={styles.matchProgress}>
              <div className={styles.percentageBar}>
                <div className={styles.percentageBarChild} />
                <div className={styles.matchNumber}>80%</div>
              </div>
              <div className={styles.matchView}>
                <div className={styles.viewDetails}>
                  <span className={styles.viewDe}>View de</span>tails
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CandidateMatch.propTypes = {
  className: PropTypes.string,
};

export default CandidateMatch;
