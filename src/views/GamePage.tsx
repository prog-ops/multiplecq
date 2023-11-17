import React from 'react';
import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../store';
import {setStage} from '../store/features/game';
import {answerQuestion, nextQuestion} from '../store/features/quiz';

const GamePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [timeLeft, setTimeLeft] = React.useState(60);
    const {
        currentQuestionIndex,
        currentQuestionDescription,
        questions,
        availableAnswers
    } = useAppSelector((state) => state.quiz);

    const handleAnswer = (answer: string): void => {
        dispatch(answerQuestion({answer}));
        if (currentQuestionIndex === questions.length - 1) {
            dispatch(setStage('END'));
        } else {
            dispatch(nextQuestion());
        }
    }

    const handleEndGame = () => dispatch(setStage('END'));

    // TODO: save timer to state
    React.useEffect(() => {
        const interval = setInterval(() => {
            timeLeft <= 0 ? dispatch(setStage('END')) : setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [timeLeft, dispatch]);

    return (
        <React.Fragment>
            <div className="page-content">
                {timeLeft <= 10 ? (
                    <p className="timer-container-10remain">{timeLeft}</p>) : (
                    <p className="timer-container">{timeLeft}</p>)
                }
                <p className="question-counter">{currentQuestionIndex + 1}{" / "}{questions.length} </p>

                <p className="correct-question-desc">{currentQuestionDescription}</p>

                <div className="action-container-boolean">
                    {availableAnswers.map((answer: string) => (
                        <Button key={answer} className="btn-primary" onClick={() => {
                            handleAnswer(answer);
                        }}>
                            {answer}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="quitgame">
                <Button className="btn-error" onClick={handleEndGame}>Quit game</Button>
            </div>

        </React.Fragment>
    )
}
export default GamePage
