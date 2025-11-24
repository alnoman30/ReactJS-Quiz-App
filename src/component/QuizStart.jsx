import { BookOpen } from 'lucide-react'
import React from 'react'

const QuizStart = () => {
  return (
    <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
            <div className='mb-8'>
                <div className='inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6'>
                    <BookOpen className='w-12 h-12'/>
                </div>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>React Knowledge Quiz</h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                  Test your knowledge on React, JavaScript and Web development. Answer multiple choice questions to see how well you know the fundamentals!
                </p>
                
            </div>

        </div>
      
    </div>
  )
}

export default QuizStart
