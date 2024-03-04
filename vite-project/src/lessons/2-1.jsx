import React from 'react';

function TwoOne() {
    return (
        <div id="main">
            <div className="top">
                <div className="title">Lesson 1: Nouns and Gender</div>
                <div className="sub">
                    <div className="time">🕙 5 min</div>
                    <div className="difficulty">2</div>
                </div>
            </div>
            <div className="mbody">
                <div className="bodyText">Welcome to the third lesson! Here you will learn about nouns and gender in the Coptic language.
                    <h2>What is a Noun?</h2>
                    In English, you may have heard that a noun is a "person, place, or a thing". Nouns in Coptic are the same, as they are <vocab>names</vocab> for things people want to refer to (ie. church is a name for a place of worship). However, the Coptic langauge has something with nouns that the English language lacks: <vocab>gender</vocab>.
                    <h2>What is Gender and why is it used?</h2>
                    When you think of gender, your mind probably goes to the gender of human beings. While this is the full extent of gender in the English language, it is used much more widely in Coptic (and other languages too!). It is a way to group parts of a sentence together, and make sure that nouns and adjectives are not mixed up. <vocab>Adjectives</vocab> are words that are used to describe nouns (ie. the <b>blue</b> book, where 'blue' is an adjective and 'book' is a noun). Gender also allows Coptic sentence structure to have more variety, since there is more freedom to rearrange sentence order. While this may not be extremely practical for a spoken language, it is a good idea in theory.
                </div>
                <div className="bottom">
                    <a href="../quizzes/2-1.html"><button className="bQuiz">Start Quiz</button></a>
                </div>
            </div>
        </div>
    );
}

export default TwoOne;
