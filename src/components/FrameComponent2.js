import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.profilesContentWrapper, className].join(" ")}>
      <div className={styles.profilesContent}>
        <div className={styles.profilesContentChild} />
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img
              className={styles.profileImageChild}
              loading="lazy"
              alt=""
              src="/ellipse-217@2x.png"
            />
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.profileInfo}>
              <div className={styles.nameAndTitle}>
                <div className={styles.abhivyaktiSharma}>Abhivyakti Sharma</div>
                <div className={styles.verifiedIcon}>
                  <img
                    className={styles.verifiedIconChild}
                    loading="lazy"
                    alt=""
                    src="/group-15367.svg"
                  />
                </div>
              </div>
              <div className={styles.technicalLead}>{`Technical Lead `}</div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItems}>
                <div className={styles.contactIcons}>
                  <img
                    className={styles.iconFeatherMail}
                    alt=""
                    src="/icon-feathermail.svg"
                  />
                </div>
                <div className={styles.gmailcom}>**********@gmail.com</div>
              </div>
              <div className={styles.contactItems1}>
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
            </div>
            <div className={styles.viewResume}>View Resume</div>
          </div>
          <div className={styles.detailsDivider}>
            <img
              className={styles.path26716Icon}
              alt=""
              src="/path-26716.svg"
            />
          </div>
          <div className={styles.applicationDetails}>
            <div className={styles.appliedDetails}>
              <div className={styles.appliedInfo}>
                <div className={styles.appliedForLead}>
                  Applied for: Lead Web developer
                </div>
                <div className={styles.expCtcOpen}>Exp. CTC: Open</div>
              </div>
              <div className={styles.matchDetails}>
                <div className={styles.matchPercentage}>Match Percentage</div>
                <div className={styles.matchValue}>
                  <div className={styles.matchPercentage1}>
                    <div className={styles.matchPercentageChild} />
                    <div className={styles.div1}>100%</div>
                  </div>
                  <div className={styles.viewDetailsBtn}>
                    <div className={styles.viewDetails}>
                      <span className={styles.viewDe}>View de</span>tails
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
