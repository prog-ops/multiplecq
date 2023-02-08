import {QuestionDifficultyOptions, QuestionNumberOptions, QuestionTypeOptions} from "../models/Game";

export const questionDiffSetting: { label: string, code: QuestionDifficultyOptions }[] = [
    {label: "Easy", code: "easy"},
    {label: "Medium", code: "medium"},
    {label: "Hard", code: "hard"}
];
export const questionNumberSetting: { label: string, code: QuestionNumberOptions }[] = [
    {label: "10", code: 10},
    {label: "15", code: 15},
    {label: "20", code: 20}
];
export const questionTypeSetting: { label: string, code: QuestionTypeOptions }[] = [
    {label: "Multiple choice", code: "multiple"}
];