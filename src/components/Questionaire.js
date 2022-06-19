import React,{useState} from 'react'
import StarRating from './StarRating';

function Questionaire({rating,handleAnswer,showAnswers,handleNextQuestion,completed,questionlength,categoryQuestion,currentQuestion, data:{question, correct_answer, answers}}) {
    const [ans,setAns]=useState('Sorry!');
    const [choose,setChoose]=useState(null);
    
    const fillerStyles = {
        height: '15px',
        width: `${completed}%`,
        backgroundColor: '#808080'
    }
    const handleAns = (answer) => {
        setChoose(answer)
        handleAnswer(answer)
        if(answer===correct_answer){
            setAns("Correct!");
        }else{
            setAns('Sorry!')
        }
    };
    return (
        <>
            <div className='topBar'>
                <div style={fillerStyles}></div>
            </div>
            <div className='headerDetails'>
                <h2>Question {currentQuestion+1} of {questionlength}</h2>
                <label>{categoryQuestion}</label>
            <StarRating rating={rating}/>
            </div>
            <div className="questionClass">
                <h3 dangerouslySetInnerHTML={{__html:question}} />
            </div>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    const specialClassName = showAnswers ? (
                        answer === choose ? "chooseButton": "disabled"
                    ) : "";
                    return(
                        <button className={`normal-button ${specialClassName}`} 
                        onClick = {() => handleAns(answer)}
                        dangerouslySetInnerHTML={{__html:answer}} />
                    )
                })}
            </div>
            {showAnswers && (
                
                <>
                    <h1 className='ansReveiw'>{ans}</h1>
                    <button onClick={handleNextQuestion} className="next-question">Next Question</button>
                </>
                
            )}
            <div className='bottomBar'>
                <div className='scoreMark'>
                    <label>Score: 63%</label>
                    <label>Max Score: 75%</label>
                </div>
                <div className='scoreBar'>
                    <div className='score'></div>
                    <div className='scoreMed'></div>
                    <div className='scoreMax'></div>
                    
                </div>
            </div>
        </>
    )
}

export default Questionaire;