import React, { useState } from 'react';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import UploadPanel from './UploadPanel';
import QuestionsPanel from './QuestionsPanel';
import InterviewPanel from './InterviewPanel';
import Header from './Header';
import axios from 'axios';




export function MainApp(){
    const [resumeText, setResumeText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [questions, setQuestions] = useState([{id:0, text: '', category: '', difficulty: ''}]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showInterviewPanel, setShowInterviewPanel] = useState(false);
    const [interviewFeedback, setInterviewFeedback] = useState([]);
    const [activeTab, setActiveTab] = useState('upload');
    const [userResponses, setUserResponses] = useState({});

    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log('File selected:', file.name);
    setIsAnalyzing(true);

    // Prepare FormData for file upload
    const formData = new FormData();
    formData.append('file', file);

    // Send file to backend
    axios.post('http://localhost:4041/Genai/api/questions/generate', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {

        setQuestions(response.data|| []);
        console.log('Questions generated:', response.data);
        setResumeText(`${file.name} uploaded successfully`);
        setActiveTab('questions');
    })
    .catch(error => {
        console.error('Error uploading file:', error);
        setResumeText('Failed to upload resume');
    })
    .finally(() => {
        setIsAnalyzing(false);
    });
};

  

    const startInterview = () => {
        setShowInterviewPanel(true);
        setCurrentQuestionIndex(0);
        setInterviewFeedback([]);
        setUserResponses({});
        setActiveTab('interview');
    };

    const handleResponseSubmit = (questionId, response) => {
        setUserResponses(prev => ({ ...prev, [questionId]: response }));

        // Simulate AI feedback generation
        const feedback = {
        questionId,
        feedback: `Good response! Consider elaborating more on specific examples. ${Math.random().toString(36).substring(7)}`,
        rating: Math.floor(Math.random() * 3) + 3 // Random rating 3-5
        };

        setInterviewFeedback(prev => [...prev, feedback]);

        // Move to next question or show final feedback
        if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
        // Generate overall feedback once all questions are answered
        const comprehensiveFeedback = {
            questionId: 0,
            feedback: `Great job completing all questions! Overall, you showed ${questions.length > 3 ? 'strong' : 'good'} technical knowledge but could improve on behavioral examples. Your strongest area was ${questions[0].category}. Keep practicing!`,
            rating: Math.floor(Math.random() * 2) + 4 // Random rating 4-5
        };
        setInterviewFeedback(prev => [...prev, comprehensiveFeedback]);
        }
    };

    const resetInterview = () => {
        setActiveTab('questions');
        setShowInterviewPanel(false);
    };

    return (
    <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8 " >
        <div className="flex flex-col md:flex-row gap-8">

            {}
            <div className="md:w-1/4">
            <div className="bg-white rounded-xl p-6 card-shadow">
                <h2 className="text-xl font-semibold mb-4">Interview Preparation</h2>
                <div className="space-y-3">
                <button
                    onClick={() => setActiveTab('upload')}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'upload' ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'
                    
                    }`}
                    disabled={!!resumeText}
                >
                    Upload Resume
                </button>
                <button
                    onClick={() => setActiveTab('questions')}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'questions' ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'
                    }`}
                >
                    Generated Questions
                </button>
                {questions.length > 0 && (
                    <button
                    onClick={() => setActiveTab('interview')}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                        activeTab === 'interview' ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'
                    }`}
                    >
                    Practice Interview
                    </button>
                )}
                </div>
            </div>

            {/* Progress Card */}
            {questions.length > 0 && (
                <div className="bg-white rounded-xl p-6 mt-6 card-shadow">
                <h3 className="font-semibold mb-3">Your Progress</h3>
                <ProgressBar progress={(Object.keys(userResponses).length / questions.length) * 100} />
                <div className="mt-4">
                    <p className="text-sm text-gray-600">
                    Completed {Object.keys(userResponses).length} of {questions.length} questions
                    </p>
                </div>
                </div>
            )}
            </div>

            {/* Main Panel Area */}
            <div className="md:w-3/4">
            {activeTab === 'upload' && (
                <UploadPanel
                onFileUpload={handleFileUpload}
                resumeText={resumeText}
                isAnalyzing={isAnalyzing}
               
                />
            )}
            {activeTab === 'questions' && (
                <QuestionsPanel
                questions={questions}
                onStartInterview={startInterview}
                />
            )}
            {activeTab === 'interview' && showInterviewPanel && (
                <InterviewPanel
                 question={questions[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                onResponseSubmit={handleResponseSubmit}
                feedback={interviewFeedback}
                onReset={resetInterview}
                userResponses={userResponses}
                questions={questions} // <-- Add this line!
                setCurrentQuestionIndex={setCurrentQuestionIndex} // <-- If needed for navigation
                handleResponseSubmit={handleResponseSubmit} // <-- If needed for submit/next
                />
            )}
            </div>
        </div>
        </main>
        <Footer />
    </div>
    )
}