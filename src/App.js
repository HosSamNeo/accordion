import React, { useState } from 'react';
import { useEffect } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions , getQuestions] = useState([]);


  useEffect(() => {
    getQuestions(data);
  }, [])


  return (
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })
        }
      </section>
    </div>

  );
}

export default App;
