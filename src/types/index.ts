export interface User {
  id: number;
  name: string;
  profileImage: string;
  role: string;
  evaluated: boolean; // 평가 완료 여부
}

export interface EvaluationCategory {
  id: number;
  label: string;
  key: string;
}

export type EvaluationStep = "star" | "slider" | "complete";