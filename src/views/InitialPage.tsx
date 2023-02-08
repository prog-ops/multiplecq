import React, {useEffect} from 'react';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';
import LoadingSpinner from '../components/LoadingSpinner';
import {questionDiffSetting, questionNumberSetting, questionTypeSetting} from '../constants/questionSettings';
import {constructCategories} from '../helpers/utils';
import {GameSettings} from '../models/Game';
import {useAppDispatch, useAppSelector} from '../store';
import {setDifficulty, setQuestionCategory, setQuestionNumber, setQuestionType} from '../store/features/game';
import {getQuestions} from '../store/features/quiz';

const InitialPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const {questionNumber, questionType, questionCategory, difficulty} = useAppSelector((state) => state.game);
    const {categories} = useAppSelector((state) => state.game);
    const {loading} = useAppSelector((state) => state.quiz);

    const LoadQuestions = React.useCallback(async () => {
        const payload: GameSettings = {
            questions: questionNumber,
            category: questionCategory,
            type: questionType,
            difficulty: difficulty
        };
        await dispatch(getQuestions(payload)).unwrap();
    }, [questionNumber, questionType, difficulty, questionCategory, dispatch]);

    useEffect(() => {
        setQuestionType('multiple')
    }, [])

    return (
        <React.Fragment>
            {loading && <LoadingSpinner/>}

            {!loading &&
                <div className="page-content">
                    <form className="forma">
                        <FormGroup
                            name={'Number of questions'}
                            id={'questionNumber'}
                            options={questionNumberSetting}
                            selected={questionNumber}
                            handler={(e: any) => dispatch(setQuestionNumber(e.target.value))}
                        />
                        <FormGroup
                            name={'Difficulty'}
                            id={'questionDifficulty'}
                            options={questionDiffSetting}
                            selected={difficulty}
                            handler={(e: any) => dispatch(setDifficulty(e.target.value))}
                        />
                        <FormGroup
                            name={'Category'}
                            id={'questionCategory'}
                            options={constructCategories(categories)}
                            selected={questionCategory}
                            handler={(e: any) => dispatch(setQuestionCategory(e.target.value))}
                        />
                    </form>
                    <Button onClick={LoadQuestions} className="btn-primary">Start Game</Button>
                </div>}
        </React.Fragment>
    )
}

export default InitialPage;
