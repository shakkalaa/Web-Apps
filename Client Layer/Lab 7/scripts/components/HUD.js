const HUD = (timer, score) => ( //Function for HTML component
    `<h1>Quiz Game</h1>
    <h2>
        <div id='time'> Time: ${timer} </div>
        <div id='score'> Score: ${score}</div>
    </h2>
    <hr>`
)
export default HUD; //Export HUD function