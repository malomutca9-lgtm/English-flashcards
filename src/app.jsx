import { useState, useEffect } from 'react';
import './App.css';

const flashcards = [
  // === COLOURS ===
  { id: 1, category: 'Colours', word: 'Red', translation: 'Piros', img: 'https://images.unsplash.com/photo-1506905925346-5008b44e5c8b?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/red--us_1.mp3' },
  { id: 2, category: 'Colours', word: 'Blue', translation: 'Kék', img: 'https://images.unsplash.com/photo-1501436513145-52100d5d7b4f?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/blue--us_1.mp3' },
  { id: 3, category: 'Colours', word: 'Green', translation: 'Zöld', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/green--us_1.mp3' },
  { id: 4, category: 'Colours', word: 'Yellow', translation: 'Sárga', img: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/yellow--us_1.mp3' },
  { id: 5, category: 'Colours', word: 'Black', translation: 'Fekete', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/black--us_1.mp3' },

  // === ANIMALS ===
  { id: 6, category: 'Animals', word: 'Dog', translation: 'Kutya', img: 'https://images.unsplash.com/photo-1543466835-00a638f3e8e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/dog--us_1.mp3' },
  { id: 7, category: 'Animals', word: 'Cat', translation: 'Macska', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/cat--us_1.mp3' },
  { id: 8, category: 'Animals', word: 'Bird', translation: 'Madár', img: 'https://images.unsplash.com/photo-1549608276-5799e2d2c8c9?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/bird--us_1.mp3' },
  { id: 9, category: 'Animals', word: 'Fish', translation: 'Hal', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/fish--us_1.mp3' },
  { id: 10, category: 'Animals', word: 'Horse', translation: 'Ló', img: 'https://images.unsplash.com/photo-1504208434309-cb69f3fe52b9?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/horse--us_1.mp3' },

  // === SPORTS ===
  { id: 11, category: 'Sports', word: 'Football', translation: 'Futball', img: 'https://images.unsplash.com/photo-1508098680382-6a8b5b9f7d9e?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/football--us_1.mp3' },
  { id: 12, category: 'Sports', word: 'Basketball', translation: 'Kosárlabda', img: 'https://images.unsplash.com/photo-1519869499657-1d5fc32e5b3c?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/basketball--us_1.mp3' },
  { id: 13, category: 'Sports', word: 'Swimming', translation: 'Úszás', img: 'https://images.unsplash.com/photo-1530543360049-687dc6ed7e09?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/swimming--us_1.mp3' },
  { id: 14, category: 'Sports', word: 'Tennis', translation: 'Tenisz', img: 'https://images.unsplash.com/photo-1518611012118-696072a7e8d5?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/tennis--us_1.mp3' },

  // === FOOD ===
  { id: 15, category: 'Food', word: 'Apple', translation: 'Alma', img: 'https://images.unsplash.com/photo-1560806887-1f3c7b7d9d8f?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/apple--us_1.mp3' },
  { id: 16, category: 'Food', word: 'Bread', translation: 'Kenyér', img: 'https://images.unsplash.com/photo-1509440159596-024908b62d2f?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/bread--us_1.mp3' },
  { id: 17, category: 'Food', word: 'Milk', translation: 'Tej', img: 'https://images.unsplash.com/photo-1563636619-e9143e04d677?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/milk--us_1.mp3' },

  // === FAMILY ===
  { id: 18, category: 'Family', word: 'Mother', translation: 'Anya', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/mother--us_1.mp3' },
  { id: 19, category: 'Family', word: 'Father', translation: 'Apa', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/father--us_1.mp3' },
  { id: 20, category: 'Family', word: 'Brother', translation: 'Fiútestvér', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/brother--us_1.mp3' },

  // === NUMBERS (1–10) ===
  { id: 21, category: 'Numbers', word: 'One', translation: 'Egy', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/one--us_1.mp3' },
  { id: 22, category: 'Numbers', word: 'Two', translation: 'Kettő', img: 'https://images.unsplash.com/photo-1517423738875-5cedd72772e8?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/two--us_1.mp3' },
  { id: 23, category: 'Numbers', word: 'Three', translation: 'Három', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/three--us_1.mp3' },
  { id: 24, category: 'Numbers', word: 'Four', translation: 'Négy', img: 'https://images.unsplash.com/photo-1543007631-0a843a5dacd6?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/four--us_1.mp3' },
  { id: 25, category: 'Numbers', word: 'Five', translation: 'Öt', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/five--us_1.mp3' },
  { id: 26, category: 'Numbers', word: 'Six', translation: 'Hat', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/six--us_1.mp3' },
  { id: 27, category: 'Numbers', word: 'Seven', translation: 'Hét', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/seven--us_1.mp3' },
  { id: 28, category: 'Numbers', word: 'Eight', translation: 'Nyolc', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/eight--us_1.mp3' },
  { id: 29, category: 'Numbers', word: 'Nine', translation: 'Kilenc', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/nine--us_1.mp3' },
  { id: 30, category: 'Numbers', word: 'Ten', translation: 'Tíz', img: 'https://images.unsplash.com/photo-1502085671122-1d218cd434e7?w=200', audio: 'https://ssl.gstatic.com/dictionary/static/sounds/20240507/ten--us_1.mp3' },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mode, setMode] = useState('study');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const categories = ['All', ...new Set(flashcards.map(c => c.category))];
  const filtered = selectedCategory === 'All' 
    ? flashcards 
    : flashcards.filter(c => c.category === selectedCategory);

  const currentCard = filtered[currentIndex];

  const generateChoices = () => {
    const others = flashcards
      .filter(c => c.id !== currentCard.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return shuffle([currentCard, ...others]);
  };

  const [choices, setChoices] = useState(generateChoices());

  useEffect(() => {
    setChoices(generateChoices());
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentIndex, selectedCategory]);

  const playAudio = () => {
    const audio = new Audio(currentCard.audio);
    audio.play();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const handleAnswer = (choice) => {
    if (showResult) return;
    setSelectedAnswer(choice.id);
    setShowResult(true);
    setTotal(total + 1);
    if (choice.id === currentCard.id) {
      setScore(score + 1);
    }
    setTimeout(nextCard, 1500);
  };

  const resetQuiz = () => {
    setScore(0);
    setTotal(0);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-purple-800">
          English Flashcards for Beginners
        </h1>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => { setMode('study'); resetQuiz(); }}
            className={`px-5 py-2 rounded-full font-medium transition ${
              mode === 'study' ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border'
            }`}
          >
            Study Mode
          </button>
          <button
            onClick={() => { setMode('quiz'); resetQuiz(); }}
            className={`px-5 py-2 rounded-full font-medium transition ${
              mode === 'quiz' ? 'bg-green-600 text-white' : 'bg-white text-green-700 border'
            }`}
          >
            Quiz Mode
          </button>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                resetQuiz();
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 border border-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Score */}
        {mode === 'quiz' && total > 0 && (
          <div className="text-center mb-4 text-lg font-bold text-green-700">
            Score: {score} / {total} ({Math.round((score / total) * 100)}%)
          </div>
        )}

        {/* STUDY MODE */}
        {mode === 'study' && currentCard && (
          <>
            <div className="perspective-1000 mb-8">
              <div
                className={`relative w-full h-80 preserve-3d transition-transform duration-600 ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <img src={currentCard.img} alt={currentCard.word} className="w-32 h-32 object-cover rounded-xl mb-4" />
                  <h2 className="text-3xl font-bold text-purple-800">{currentCard.word}</h2>
                  <button
                    onClick={(e) => { e.stopPropagation(); playAudio(); }}
                    className="mt-3 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                  >
                    Listen
                  </button>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center rotate-y-180">
                  <p className="text-white text-2xl font-medium">Fordítás:</p>
                  <p className="text-white text-4xl font-bold mt-2">{currentCard.translation}</p>
                  <p className="text-white/80 text-sm mt-4">Kattints a lapozáshoz</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center max-w-md mx-auto">
              <button onClick={prevCard} className="px-6 py-3 bg-gray-200 rounded-full hover:bg-gray-300">
                ← Előző
              </button>
              <span className="text-sm text-gray-600">
                {currentIndex + 1} / {filtered.length}
              </span>
              <button onClick={nextCard} className="px-6 py-3 bg-gray-200 rounded-full hover:bg-gray-300">
                Következő →
              </button>
            </div>
          </>
        )}

        {/* QUIZ MODE */}
        {mode === 'quiz' && currentCard && (
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <img src={currentCard.img} alt="?" className="w-32 h-32 object-cover rounded-xl mx-auto mb-3" />
              <p className="text-lg text-gray-600">Mi ez angolul?</p>
              <button
                onClick={playAudio}
                className="mt-2 px-5 py-2 bg-blue-500 text-white rounded-full text-sm"
              >
                Hang lejátszása
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {choices.map(choice => (
                <button
                  key={choice.id}
                  onClick={() => handleAnswer(choice)}
                  disabled={showResult}
                  className={`p-4 rounded-xl font-medium transition ${
                    selectedAnswer === choice.id
                      ? choice.id === currentCard.id
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {choice.word}
                </button>
              ))}
            </div>

            {showResult && selectedAnswer === currentCard.id && (
              <p className="text-center text-green-600 font-bold mt-4">Helyes!</p>
            )}
            {showResult && selectedAnswer !== currentCard.id && (
              <p className="text-center text-red-600 font-bold mt-4">
                Helytelen! A helyes: <strong>{currentCard.word}</strong>
              </p>
            )}
          </div>
        )}

        <p className="text-center text-xs text-gray-500 mt-8">
          Készült ❤️ magyar tanulóknak | {mode === 'study' ? 'Kattints a kártyára' : 'Válaszd ki a helyes szót'}
        </p>
      </div>
    </div>
  );
}

export default App;
