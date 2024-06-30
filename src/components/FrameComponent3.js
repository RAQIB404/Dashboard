import CandidateInfo from "./CandidateInfo";
import CandidateMatch from "./CandidateMatch";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <CandidateInfo
          avatarCircle="/ellipse-217-3@2x.png"
          aasheenKhan="Dipesh Parakh"
          technicalLead="Senior Software Engineer"
          propWidth="unset"
          propMinWidth="164px"
          propFlex="1"
        />
        <CandidateMatch />
      </div>
      <FrameComponent propPadding="5px 0px 0px" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
