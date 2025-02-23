export interface User {
  id: number;
  name: string;
  profileImage: string;
  role: string;
}

export interface EvaluationCategory {
  id: number;
  label: string;
  key: string;
}

// Step 타입 확장
export type EvaluationStep =
  | "star"
  | "slider"
  | "complete1"
  | "complete2"
  | "complete3";