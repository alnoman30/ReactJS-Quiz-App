import { BookOpen, Clock, Trophy } from "lucide-react";
import React from "react";

const QuizStart = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
            <BookOpen className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React Knowledge Quiz
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your knowledge on React, JavaScript and Web development. Answer
            multiple choice questions to see how well you know the fundamentals!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to bg-blue-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-2">8</div>
            <div className="text-2xl font-medium">Questions</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to bg-purple-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-800 mb-2">5:00</div>
            <div className="text-2xl font-medium">Minutes</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to bg-green-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-green-800" />
            </div>
            <div className="text-2xl font-bold text-green-800 mb-2">100%</div>
            <div className="text-2xl font-medium">Max Score</div>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quiz Rules
          </h3>
          <div className="text-left bg-gray-50 p-6 rounded-xl max-w-2xl nx-auto">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  1
                </span>
                <span>Each question has multiple choice answer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
