
  # assessmentedureka

# Introduction:

This is a Candidate Management Application developed with React. It helps in managing and viewing candidate profiles, their match percentage for a job, and their skills.

# Features :

View candidate profiles
Filter candidates by status
View detailed candidate information
Add and view notes for candidates
Qualify, reject, or put candidates on hold
Technologies Used
React
CSS Modules for styling
PropTypes for type-checking

# Installation

Install the dependencies:

"npm install"


# Project Structure

candidate-management-app
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── assets
│       ├── images
│       └── icons
├── src
│   ├── components
│   │   ├── CandidateCard.js
│   │   ├── CandidateCard.module.css
│   │   ├── CandidateInfo.js
│   │   ├── CandidateInfo.module.css
│   │   ├── CandidateList.js
│   │   ├── CandidateList.module.css
│   │   ├── CandidateMatch.js
│   │   ├── CandidateMatch.module.css
│   │   ├── CandidatesHeader.js
│   │   ├── CandidatesHeader.module.css
│   │   ├── FrameComponent.js
│   │   ├── FrameComponent.module.css
│   │   ├── FrameComponent1.js
│   │   ├── FrameComponent1.module.css
│   │   ├── FrameComponent2.js
│   │   ├── FrameComponent2.module.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md



# Components

# CandidateCard
Location: src/components/CandidateCard.js
Description: Renders the card for a candidate with detailed information including their skills, match percentage, and actions.

# CandidateInfo
Location: src/components/CandidateInfo.js
Description: Displays the candidate's basic information such as name, avatar, and contact details.

# CandidateList
Location: src/components/CandidateList.js
Description: Lists all the candidates, utilizing the CandidateCard and CandidateMatch components.

# CandidateMatch
Location: src/components/CandidateMatch.js
Description: Displays the match percentage and details for a candidate.

# CandidatesHeader
Location: src/components/CandidatesHeader.js
Description: Header component for the candidate list page, including filter options and notifications.

# FrameComponent
Location: src/components/FrameComponent.js
Description: A reusable component for displaying candidate skills and actions.

# FrameComponent1
Location: src/components/FrameComponent1.js
Description: A component for displaying filter options.

# FrameComponent2
Location: src/components/FrameComponent2.js
Description: Displays a list of profiles with detailed information.

# To start the application, run:

npm start

# The deployed link.

https://edurekadashboard.netlify.app/
This will launch the application in development mode. Open http://localhost:3000 to view it in the browser.

--------------------------------------------------Thankyou----------------------------------------------------------