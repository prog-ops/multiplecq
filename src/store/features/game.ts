import {createAsyncThunk, createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import api from "../../api";
import {
    GameState,
    QuestionDifficultyOptions,
    QuestionNumberOptions,
    QuestionTypeOptions,
    Phase
} from "../../models/Game";
import {getQuestions} from "./quiz";

export const getCategories = createAsyncThunk(
    "quiz/categories",
    async (_, {rejectWithValue}) => {
        try {
            const response = await api.OpenTDBService.getCategories();
            return response.trivia_categories;
        } catch (rejected: any) {
            return rejectWithValue(rejected);
        }
    }
)

const initialState: GameState = {
    stage: 'INIT',
    difficulty: 'easy',
    questionNumber: 10,
    questionType: "multiple",
    questionCategory: 10,
    categories: [],
    categoriesLoading: false,
    categoriesInitialized: false
}

const gameSlice: Slice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setStage: (state, action: PayloadAction<Phase>) => {
            state.stage = action.payload;
        },
        setDifficulty: (state, action: PayloadAction<QuestionDifficultyOptions>) => {
            state.difficulty = action.payload;
        },
        setQuestionNumber: (state, action: PayloadAction<QuestionNumberOptions>) => {
            state.questionNumber = action.payload;
        },
        setQuestionType: (state, action: PayloadAction<QuestionTypeOptions>) => {
            state.questionType = action.payload;
        },
        setQuestionCategory: (state, action: PayloadAction<number>) => {
            state.questionCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.categoriesLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categoriesLoading = false;
                state.categoriesInitialized = true;
            })
            .addCase(getCategories.rejected, (state) => {
                state.categoriesLoading = false;
            })

            /* ---- EXTERNAL: ---- */
            .addCase(getQuestions.fulfilled, (state) => {
                state.stage = 'GAME';
            })
    }
});

export const {setStage, setDifficulty, setQuestionNumber, setQuestionType, setQuestionCategory} = gameSlice.actions;
export default gameSlice.reducer;