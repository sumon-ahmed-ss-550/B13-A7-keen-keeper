import React from "react";
import { useNavigate } from "react-router";

const UnexpectedError = () => {
  const handleBack = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-200 px-4">
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-gray-200 mb-2">404</h1>

        {/* Crying Emoji */}
        <div className="relative text-7xl mb-6 animate-bounce">
          😢
          {/* Left tear */}
          <span className="tear left-tear">💧</span>
          {/* Right tear */}
          <span className="tear right-tear">💧</span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 mb-6"></p>

        <button
          onClick={() => {
            handleBack(-1);
          }}
          className="px-6 py-3 rounded-xl bg-black text-white hover:scale-105 transition-all duration-300 shadow-md"
        >
          Go Back
        </button>
      </div>

      <style>
        {`
          .tear {
            position: absolute;
            font-size: 18px;
            animation: tearDrop 1.8s infinite ease-in-out;
          }

          .left-tear {
            left: 10px;
            top: 35px;
          }

          .right-tear {
            right: 10px;
            top: 35px;
            animation-delay: 0.8s;
          }

          @keyframes tearDrop {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(25px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UnexpectedError;
