import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.filterOptionsParent, className].join(" ")}>
      <div className={styles.filterOptions}>
        <div className={styles.filterTypes}>
          <div className={styles.jobDetailsFilters}>
            <nav className={styles.jobDetailTypes}>
              <div className={styles.filterButton}>
                <div className={styles.filterBtn}>
                  <img
                    className={styles.iconFeatherFilter}
                    loading="lazy"
                    alt=""
                    src="/icon-featherfilter.svg"
                  />
                </div>
                <div className={styles.filters}>{`FILTERS: `}</div>
              </div>
              <div className={styles.jobDetailName}>
                <div className={styles.jobTitle}>Job Title</div>
                <div className={styles.jobDetailIcon}>
                  <img
                    className={styles.path26853Icon}
                    alt=""
                    src="/path-26853.svg"
                  />
                </div>
              </div>
              <div className={styles.jobDetailName1}>
                <div className={styles.experience}>Experience</div>
                <div className={styles.path26854Wrapper}>
                  <img
                    className={styles.path26854Icon}
                    alt=""
                    src="/path-26853.svg"
                  />
                </div>
              </div>
            </nav>
            <div className={styles.showingProfiles}>
              <div className={styles.showing2Top}>Showing 2 Top Profiles</div>
            </div>
          </div>
          <div className={styles.filterNames}>
            <div className={styles.location}>Location</div>
            <div className={styles.path26855Wrapper}>
              <img
                className={styles.path26855Icon}
                alt=""
                src="/path-26853.svg"
              />
            </div>
          </div>
          <div className={styles.filterNames1}>
            <div className={styles.jobType}>Job Type</div>
            <div className={styles.path26856Wrapper}>
              <img
                className={styles.path26856Icon}
                alt=""
                src="/path-26853.svg"
              />
            </div>
          </div>
          <div className={styles.filterNames2}>
            <div className={styles.jobPreference}>Job Preference</div>
            <div className={styles.path26857Wrapper}>
              <img
                className={styles.path26857Icon}
                alt=""
                src="/path-26853.svg"
              />
            </div>
          </div>
          <div className={styles.filterNames3}>
            <div className={styles.skills}>Skills</div>
            <div className={styles.path26858Wrapper}>
              <img
                className={styles.path26858Icon}
                alt=""
                src="/path-26853.svg"
              />
            </div>
          </div>
          <div className={styles.filterNames4}>
            <div className={styles.certification}>Certification</div>
            <div className={styles.path26858Container}>
              <img
                className={styles.path26858Icon1}
                alt=""
                src="/path-26853.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/group-14442.svg"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
