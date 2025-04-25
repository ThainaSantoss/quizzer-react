import { Questions } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Questions;
    count: number;
    onAnswer: (answer: number) => void;

}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
const [selectedAnswer, setSelectAnswer] = useState<number | null>(null);
const checkQuestion = (key: number) => {
if(selectedAnswer === null) {
    setSelectAnswer(key);

    setTimeout(() => {
        onAnswer(key);
        setSelectAnswer(null);
    },1000)


}
}

return (
    <div>
        <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
        <div>
            {question.options.map((item, key) => (
                <div 
                key={key}
                onClick={() => checkQuestion(key)}
                className= {`border px-3 py-3 rounded-md text-lg mb-4  bg-blue-100 border-blue-300 
                    
                    ${selectedAnswer !== null  ? 'cursor-auto hover:opacity-100' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer == key && 'bg-green-100 border-green-300'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer == key && 'bg-red-100 border-red-300'}
                    `}
                >{item}</div>
            ))}
        </div>
    </div>
);
}