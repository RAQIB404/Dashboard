import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CandidateInfo.module.css";

const CandidateInfo = ({
  className = "",
  avatarCircle,
  aasheenKhan,
  technicalLead,
  propWidth,
  propMinWidth,
  propFlex,
}) => {
  const candidateInfoStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  return (
    <div
      className={[styles.candidateInfo, className].join(" ")}
      style={candidateInfoStyle}
    >
      <div className={styles.candidateHeader}>
        <div className={styles.candidateAvatar}>
          <img
            className={styles.avatarCircleIcon}
            loading="lazy"
            alt=""
            src={avatarCircle}
          />
        </div>
        <div className={styles.candidateDetails}>
          <div className={styles.candidateName}>
            <div className={styles.aasheenKhan}>{aasheenKhan}</div>
            <div className={styles.technicalLead}>{technicalLead}</div>
          </div>
          <div className={styles.candidateContact}>
            <div className={styles.contactDetails}>
              <div className={styles.contactIcons}>
                <img
                  className={styles.iconFeatherMail}
                  alt=""
                  src="/icon-feathermail.svg"
                />
              </div>
              <div className={styles.gmailcom}>**********@gmail.com</div>
            </div>
            <div className={styles.contactDetails1}>
              <div className={styles.iconFeatherPhoneWrapper}>
                <img
                  className={styles.iconFeatherPhone}
                  loading="lazy"
                  alt=""
                  src="/icon-featherphone.svg"
                />
              </div>
              <div className={styles.div}>******6655</div>
            </div>
            <div className={styles.viewResume}>View Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CandidateInfo.propTypes = {
  className: PropTypes.string,
  avatarCircle: PropTypes.string,
  aasheenKhan: PropTypes.string,
  technicalLead: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default CandidateInfo;
