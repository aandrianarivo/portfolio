import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
  const words = ['Developer JavaScript', 'Backend lover!!', 'FullStack', "Web Mapping","Boy Scout"]; // Liste de mots
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0); // Suivre l'index du mot actuel
  const [currentWord, setCurrentWord] = useState(words[0]); // Mot actuellement affiché

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isDeleting) {
        // Effacement du texte
        setText((prevText) => prevText.slice(0, prevText.length - 1));
      } else {
        // Écriture du texte
        setText((prevText) => currentWord.slice(0, prevText.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        // Quand l'animation a terminé l'écriture, on commence à effacer
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        // Quand l'animation a terminé l'effacement, on passe au mot suivant
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Passe au mot suivant (avec boucle)
        setCurrentWord(words[wordIndex]);
      }
    }, 100); // Vitesse d'écriture et d'effacement

    return () => clearInterval(typingInterval);
  }, [words, text, currentWord, isDeleting, wordIndex]);

  return (
    <div className="text-4xl text-center">
      <span className='font-doto font-extrabold'>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
