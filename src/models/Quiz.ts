export interface Question {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    difficulty: 'hard' | 'medium' | 'easy';
    question: string;
    type: 'multiple';
}

export interface Answer {
    question: string;
    answer: string;
    correct_answer: string;
    is_correct: boolean;
}

export interface Category {
    id: number;
    name: string;
}

export interface QuizState {
    questions: Question[],
    score: number,
    currentQuestionIndex: number,
    currentQuestionDescription: string,
    answers: Answer[];
    availableAnswers: string[];
    loading: boolean;
}