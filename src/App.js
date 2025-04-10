import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Pytania i odpowiedzi dotyczące frontendu</h3>
      <section className="info">
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

export default App;
