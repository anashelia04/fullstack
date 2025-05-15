import React, { useEffect, useState } from 'react';

function AnswerPage() {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    fetch('http://56.228.22.173:3000/api/get-latest-answer')
      .then(res => res.json())
      .then(data => setAnswer(data.data))
      .catch(err => console.error('Error fetching answer:', err));
  }, []);

  return (
    <div>
      <h1>Latest Answer</h1>
      <span id="answer">{answer}</span>
    </div>
  );
}

export default AnswerPage;
