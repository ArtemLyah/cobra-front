import { RoadmapDifficultyEnum } from '../types/roadmapDifficulty.type';
import { Tag } from '../types/tag.type';
import { UserRoadmapState } from '../types/userRoadmapState.type';
import { ReviewsResponse } from './reviews.response';

export class RoadmapResponse {
  id: string;
  title: string;
  description: string;
  difficulty: RoadmapDifficultyEnum;
  rating: number;
  reviewsAmount: number;
  created_at: Date;
  tags: Tag[];
  reviews: ReviewsResponse[];
  userStates: UserRoadmapState[];
}

