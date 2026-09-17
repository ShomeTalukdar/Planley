import React, { useState } from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  Headphones, 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  Volume2, 
  RotateCcw,
  Trophy
} from 'lucide-react';
import { ARTICLES_DATA, QUIZ_QUESTIONS, AUDIO_PODS } from '../data/content';
import confetti from 'canvas-confetti';

export default function LearningHub({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('articles'); // 'articles', 'quiz', 'audio'
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Audio State
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    if (showExplanation) return;
    setSelectedOption(option);
    setShowExplanation(true);
    if (option.correct) {
      setQuizScore((prev) => prev + 100);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Completed
      setSelectedOption(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizScore(0);
  };

  const toggleAudioPlay = (id) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <section id="learning" className="py-20 bg-[#FFFDF7] border-b border-[#EBE5D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E4] border border-[#62A842]/20 text-[#3D7838] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#3D7838]" />
            <span>Financial Literacy Engine</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            Learn Finance <span className="doodle-underline text-[#3D7838]">Your Way</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            No boring academic jargon. Switch between byte-sized cards, gamified campus dilemmas, or short audio pods on your commute.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#FAF7EE] rounded-2xl border border-[#EBE5D3] shadow-inner">
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'articles'
                  ? 'bg-white text-[#3D7838] shadow-sm border border-[#EBE5D3]'
                  : 'text-[#53634B] hover:text-[#24331C]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#3D7838]" />
              <span>📖 Byte-Sized Articles</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-white text-[#3D7838] shadow-sm border border-[#EBE5D3]'
                  : 'text-[#53634B] hover:text-[#24331C]'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-[#E9B838]" />
              <span>🎮 Campus Challenges</span>
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'audio'
                  ? 'bg-white text-[#3D7838] shadow-sm border border-[#EBE5D3]'
                  : 'text-[#53634B] hover:text-[#24331C]'
              }`}
            >
              <Headphones className="w-4 h-4 text-[#62A842]" />
              <span>🎧 Audio Pods</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Byte-Sized Articles */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES_DATA.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-3xl p-6 border border-[#EBE5D3] shadow-md hover:border-[#3D7838] transition-all hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-[#3D7838] bg-[#E8F5E4] px-2.5 py-0.5 rounded-full">
                      {article.tag}
                    </span>
                    <span className="text-[#7E8D76] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#24331C] leading-snug mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#53634B] leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#FAF7EE]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7E8D76] block mb-1">
                      Key Takeaways:
                    </span>
                    {article.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#24331C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#62A842] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#EBE5D3] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#7E8D76] font-medium">{article.author}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-[#3D7838] font-bold hover:text-[#2C5728] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Summary</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Gamified Campus Challenges / Mini Quiz */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#EBE5D3] shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE5D3] mb-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#E9B838]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#53634B]">
                  Scenario {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#3D7838] bg-[#E8F5E4] px-3 py-1 rounded-full">
                  Score: {quizScore} XP
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-xs text-[#7E8D76] hover:text-[#24331C] p-1"
                  title="Restart Quiz"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <h3 className="font-extrabold text-xl text-[#24331C] leading-relaxed mb-6">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                let btnStyle = 'bg-[#FAF7EE] text-[#24331C] border-[#EBE5D3] hover:border-[#3D7838]';
                
                if (showExplanation) {
                  if (opt.correct) {
                    btnStyle = 'bg-[#E8F5E4] text-[#2C5728] border-[#62A842] font-bold';
                  } else if (isSelected && !opt.correct) {
                    btnStyle = 'bg-red-50 text-red-700 border-red-300';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={showExplanation}
                    onClick={() => handleOptionSelect(opt)}
                    className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition-all flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt.text}</span>
                    {showExplanation && opt.correct && (
                      <CheckCircle2 className="w-5 h-5 text-[#3D7838] shrink-0" />
                    )}
                    {showExplanation && isSelected && !opt.correct && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card */}
            {showExplanation && selectedOption && (
              <div className={`p-4 rounded-2xl border mb-6 animate-in fade-in duration-200 ${
                selectedOption.correct 
                  ? 'bg-[#E8F5E4]/80 border-[#62A842]/40 text-[#2C5728]' 
                  : 'bg-[#FDF6E2] border-[#E9B838] text-[#24331C]'
              }`}>
                <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                  <Sparkles className="w-4 h-4 text-[#E9B838]" />
                  <span>{selectedOption.correct ? "Excellent Decision! (+100 XP)" : "Behavioral Bias Detected!"}</span>
                </div>
                <p className="text-xs leading-relaxed font-medium">
                  {selectedOption.feedback}
                </p>
              </div>
            )}

            {showExplanation && (
              <div className="flex justify-end">
                {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-[#3D7838] hover:bg-[#2C5728] text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Next Dilemma</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenWaitlist}
                    className="px-6 py-2.5 rounded-xl bg-[#3D7838] hover:bg-[#2C5728] text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Claim Your Financial Fluency Badge</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Quick Audio Pods */}
        {activeTab === 'audio' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIO_PODS.map((pod) => {
              const isPlaying = playingAudioId === pod.id;
              return (
                <div
                  key={pod.id}
                  className="bg-white rounded-3xl p-6 border border-[#EBE5D3] shadow-md flex flex-col justify-between hover:border-[#62A842] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-bold text-[#3D7838] bg-[#E8F5E4] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Volume2 className="w-3 h-3" />
                        {pod.duration}
                      </span>
                      <span className="text-[11px] text-[#7E8D76]">{pod.listeners}</span>
                    </div>

                    <h4 className="font-bold text-base text-[#24331C] leading-snug mb-1">
                      {pod.title}
                    </h4>

                    <p className="text-xs text-[#62A842] font-semibold mb-3">
                      By {pod.speaker}
                    </p>

                    <p className="text-xs text-[#53634B] leading-relaxed mb-4">
                      {pod.topic}
                    </p>

                    {/* Simulated Waveform animation */}
                    <div className="h-8 bg-[#FAF7EE] rounded-xl p-2 flex items-center justify-center gap-1">
                      {[40, 70, 30, 90, 60, 80, 50, 95, 45, 65, 35, 75, 85, 40].map((h, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isPlaying ? 'bg-[#3D7838]' : 'bg-[#D8CCA8]'
                          }`}
                          style={{
                            height: isPlaying ? `${Math.max(20, (h * Math.random()).toFixed(0))}%` : `${h * 0.4}%`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EBE5D3] flex items-center justify-between">
                    <button
                      onClick={() => toggleAudioPlay(pod.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-[#3D7838] text-white shadow-md'
                          : 'bg-[#FAF7EE] hover:bg-[#E8F5E4] text-[#24331C]'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Playing Preview</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Play Audio (3 min)</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={onOpenWaitlist}
                      className="text-xs font-semibold text-[#7E8D76] hover:text-[#3D7838]"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Article Summary */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EBE5D3] shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE5D3] mb-4">
                <span className="text-xs font-bold text-[#3D7838] bg-[#E8F5E4] px-2.5 py-0.5 rounded-full">
                  {selectedArticle.tag}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold text-[#7E8D76] hover:text-[#24331C] px-2 py-1"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-xl font-bold text-[#24331C] mb-2">{selectedArticle.title}</h3>
              <p className="text-xs text-[#7E8D76] mb-4">Written by {selectedArticle.author} • {selectedArticle.readTime}</p>

              <div className="text-xs text-[#53634B] space-y-3 leading-relaxed mb-6">
                <p>{selectedArticle.excerpt}</p>
                <div className="bg-[#FAF7EE] p-4 rounded-2xl border border-[#EBE5D3]">
                  <h5 className="font-bold text-[#24331C] mb-2">Core Tactical Takeaways:</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    {selectedArticle.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenWaitlist();
                }}
                className="w-full py-3 bg-[#3D7838] hover:bg-[#2C5728] text-white rounded-xl text-xs font-bold"
              >
                Unlock Full Campus Financial Library
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
