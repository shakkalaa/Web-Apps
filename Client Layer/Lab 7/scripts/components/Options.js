const BooleanOptions = () => ( //Function for HTML component
    `<div>
        <button onclick="checkAnswer('True')">True</button>
        <button onclick="checkAnswer('False')">False</button>
    </div>`
) //Return HTML text

const MultiOptions = (trivia) => { //Function for HTML component
    const options = [trivia.correct_answer, ...trivia.incorrect_answers]; //Array with all answers
    const [a, b, c, d] = options.sort( ); //Sort answers & destructure
    return (
        `<div>
            <button onclick='checkAnswer("${a}")'>${a}</button>
            <button onclick='checkAnswer("${b}")'>${b}</button>
            <button onclick='checkAnswer("${c}")'>${c}</button>
            <button onclick='checkAnswer("${d}")'>${d}</button>
        </div>`
    ) //Return HTML text
}
    
const Options = (trivia) => { //Function for HTML component
    switch(trivia.type){ //Switch Options based on type
        case "boolean": return BooleanOptions(trivia); //Return true/false type
        case "multiple": return MultiOptions(trivia); //Return multiple choice type
    }
}
export default Options; //Export the Options function
