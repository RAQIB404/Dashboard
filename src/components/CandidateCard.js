import CandidateInfo from "./CandidateInfo";
import PropTypes from "prop-types";
import styles from "./CandidateCard.module.css";

const CandidateCard = ({ className = "" }) => {
  return (
    <div className={[styles.candidateCard, className].join(" ")}>
      <div className={styles.candidateContent}>
        <div className={styles.candidateContentChild} />
        <CandidateInfo
          avatarCircle="/ellipse-217-1@2x.png"
          aasheenKhan="Aasheen Khan"
          technicalLead="Technical Lead "
        />
        <div className={styles.candidateApplication}>
          <img className={styles.path26716Icon} alt="" src="/path-26716.svg" />
          <div className={styles.applicationDetails}>
            <div className={styles.appliedDetails}>
              <div className={styles.appliedInfo}>
                <div className={styles.appliedPosition}>
                  <div className={styles.positionTitle}>
                    <div className={styles.appliedForLead}>
                      Applied for: Lead Web developer
                    </div>
                    <div className={styles.experienceCTC}>
                      <div className={styles.experienceAssessment}>
                        <div className={styles.expCtc25}>Exp. CTC: 25 LPA</div>
                        <div className={styles.assessmentIcon}>
                          <div className={styles.assessmentCircle} />
                        </div>
                        <div className={styles.assessment90}>
                          Assessment: 90%
                        </div>
                      </div>
                      <div className={styles.matchPercentage}>
                        Match Percentage
                      </div>
                    </div>
                    <div className={styles.matchDetails}>
                      <div className={styles.matchBar}>
                        <div className={styles.matchBarChild} />
                        <div className={styles.matchValue}>100%</div>
                      </div>
                      <div className={styles.viewDetailsButton}>
                        <div className={styles.viewDetails}>
                          <span className={styles.viewDe}>View de</span>tails
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.candidateSkillsContentWrapper}>
                    <div className={styles.candidateSkillsContent}>
                      <div className={styles.candidateSkills}>
                        Candidate Skills
                      </div>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.skillItem}>
                          <img
                            className={styles.skillItemChild}
                            loading="lazy"
                            alt=""
                            src="/group-15367.svg"
                          />
                        </div>
                        <div className={styles.skillName}>
                          <div className={styles.javascript}>Javascript</div>
                        </div>
                        <div className={styles.skillRating}>
                          <div className={styles.ratingValue}>4</div>
                          <img
                            className={styles.iconMaterialStar}
                            alt=""
                            src="/icon-materialstar.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addNotesButtonParent}>
                <div className={styles.addNotesButton}>
                  <div className={styles.addNotesIcon}>
                    <div className={styles.addNotesLabel}>
                      <img
                        className={styles.iconAwesomeStickyNote}
                        alt=""
                        src="/icon-awesomestickynote.svg"
                      />
                    </div>
                    <div className={styles.viewNotes}>View Notes</div>
                  </div>
                </div>
                <div className={styles.otherSkillItemsParent}>
                  <div className={styles.otherSkillItems}>
                    <div className={styles.otherSkillItemsChild} />
                    <div className={styles.otherSkillNames}>
                      <div className={styles.angularJs}>Angular JS</div>
                    </div>
                    <div className={styles.otherSkillRatings}>
                      <div className={styles.otherRatingValues}>5</div>
                      <img
                        className={styles.iconMaterialStar1}
                        alt=""
                        src="/icon-materialstar-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.otherSkillItems1}>
                    <div className={styles.otherSkillItemsItem} />
                    <div className={styles.reactJsWrapper}>
                      <div className={styles.reactJs}>React JS</div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div}>3</div>
                      <img
                        className={styles.iconMaterialStar2}
                        alt=""
                        src="/icon-materialstar-2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.otherSkillPlaceholder}>
                    <div className={styles.otherSkillPlaceholderChild} />
                    <div className={styles.otherSkillInput}>+5</div>
                  </div>
                </div>
                <div className={styles.actionButtonsParent}>
                  <div className={styles.actionButtons}>
                    <div className={styles.actionButtonsChild} />
                    <div className={styles.qualify}>{`Qualify `}</div>
                  </div>
                  <div className={styles.actionButtons1}>
                    <div className={styles.actionButtonsItem} />
                    <div className={styles.reject}>Reject</div>
                  </div>
                  <div className={styles.actionButtons2}>
                    <div className={styles.actionButtonsInner} />
                    <div className={styles.onHold}>On-Hold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CandidateCard.propTypes = {
  className: PropTypes.string,
};

export default CandidateCard;
