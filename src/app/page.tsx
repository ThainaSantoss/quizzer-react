"use client"

import { QuestionItem } from "@/components/QuestionItem"
import { Results } from "@/components/Results"
import { questions } from "@/data/questions"
import { useState } from "react"

const page = () => {


  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false);
  const title = 'Quiz de Perguntas'

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true);
    }
  }


  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          }
          {showResult &&
         <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
             `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}
             `}
             {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white cursor-pointer">Reiniciar Quiz</button>
            }

         
        </div>

      </div>
    </div>
  )
}


export default page