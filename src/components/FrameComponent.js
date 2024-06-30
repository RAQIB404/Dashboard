import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.skillsWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.skills}>
        <div className={styles.skillList}>
          <div className={styles.candidateSkills}>Candidate Skills</div>
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
        <div className={styles.addSkill}>
          <div className={styles.addSkillButton}>
            <div className={styles.addSkillIcon}>
              <div className={styles.addSkillLabel}>
                <img
                  className={styles.iconAwesomeStickyNote}
                  alt=""
                  src="/icon-awesomestickynote.svg"
                />
              </div>
              <div className={styles.addNotes}>Add Notes</div>
            </div>
          </div>
          <div className={styles.otherSkills}>
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
          <div className={styles.candidateActions}>
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
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent;
