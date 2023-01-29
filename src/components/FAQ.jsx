import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


function FAQ({ question, answer }) {
    const [isAnswerShowing , setIsAnswerShowing] = useState (false) ;
    return (
        <article className="faq">
            <div>
                <h4>{question} </h4>
                <button className="faq__icon" onClick={ ()=> setIsAnswerShowing(prev => !prev)}>
                   {isAnswerShowing ? <AiOutlineMinus />: <AiOutlinePlus/>}
                </button>
            </div>
            {isAnswerShowing && <p>{answer} </p>}

        </article>
    )
}

export default FAQ