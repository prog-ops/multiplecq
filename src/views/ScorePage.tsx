import React from 'react';
import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../store';
import {setStage} from '../store/features/game';
import {Answer} from "../models/Quiz";

const ScorePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const {answers, score, questions} = useAppSelector((state) => state.quiz);

    const handleRestart = (): void => {
        dispatch(setStage('INIT'));
    };

    return (
        <div className="page-content-score">
            <div className="login-wrapper">
                <p className="score">Times up. Your score = <span style={{color: '#75d832'}}>{score * 10}</span></p>
                <Button className="btn-primary" onClick={handleRestart}>Restart game</Button>
            </div>
            {answers.length !== 0 && (
                <div className="scorepage">
                    {answers.map((answer: Answer) => (
                        <div key={answer.question} className="answer">
                            <p
                                className="score-question"
                                dangerouslySetInnerHTML={{__html: answer.question}}>
                            </p>
                            <p
                                className={`correct-incorrect-answer ${
                                    answer.correct_answer === answer.answer 
                                        ? 'correct-green' 
                                        : 'correct-red'}`}
                            >
                                {answer.answer}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default ScorePage
