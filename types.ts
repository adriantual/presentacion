export interface SlideProps {
  isActive: boolean;
  subStep?: number; // For slides that have internal steps (like the Practices slide)
}

export enum SlideType {
  TITLE,
  AGENDA,
  INTRO,
  OBJECTIVES,
  TOOL,
  CASE_STUDY,
  PRACTICES,
  BEST_PRACTICES,
  PROBLEMS,
  CONCLUSION
}
