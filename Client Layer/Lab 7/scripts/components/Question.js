import Options from './Options.js' //Import Options function

const Question = (trivia) => ( //Function for HTML component
    `<h3>
        <div>Category - ${trivia.category}</div>
        <div>Difficulty - ${trivia.difficulty}</div>
    </h3>
    <h4>Question:</h4>
    <p>${trivia.question}</p>

    ${Options(trivia)}`

) //Return HTML text
export default Question; //Export Question function