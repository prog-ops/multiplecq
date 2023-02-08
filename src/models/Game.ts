import {Category} from "./Quiz";

export type Phase = 'INIT' | 'GAME' | 'END';
export type QuestionNumberOptions = 10 | 15 | 20;
export type QuestionDifficultyOptions = 'easy' | 'medium' | 'hard' | 'any';
export type QuestionTypeOptions = 'multiple' | 'all';

export interface GameSettings {
    questions: QuestionNumberOptions;
    difficulty: QuestionDifficultyOptions
    category: number
    type: QuestionTypeOptions
}

export interface GameState {
    stage: Phase;
    difficulty: QuestionDifficultyOptions;
    questionNumber: QuestionNumberOptions;
    questionType: QuestionTypeOptions;
    questionCategory: number;
    categories: Category[];
    categoriesLoading: boolean;
    categoriesInitialized: boolean;
}