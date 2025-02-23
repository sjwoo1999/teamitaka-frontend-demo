import { User, EvaluationCategory } from "../types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "김재원",
    profileImage: "https://via.placeholder.com/50", // 회색 프로필 아이콘으로 대체 가능
    role: "팀원",
  },
  {
    id: 2,
    name: "박민수",
    profileImage: "https://via.placeholder.com/50",
    role: "팀원",
  },
];

export const evaluationCategories: EvaluationCategory[] = [
  { id: 1, label: "노력", key: "effort" },
  { id: 2, label: "의지", key: "willpower" },
  { id: 3, label: "성장", key: "growth" },
  { id: 4, label: "소통", key: "communication" },
];