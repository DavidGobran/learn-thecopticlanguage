import React from 'react';

function TwoTwo() {
    return (
        <div id="main">
            <div className="top">
                <div className="title">Lesson 2: Articles</div>
                <div className="sub">
                    <div className="time">🕙 10 min</div>
                    <div className="difficulty">3</div>
                </div>
            </div>
            <div className="mbody">
                <div className="bodyText"><h2>Vocab for this lesson:</h2>
                    <coptic id="romy">rwmi</coptic> = 'man', masculine noun<br />
                    <coptic id="shahv">sau</coptic> = 'cat', feminine noun
                    <br /><br />Welcome to the fourth lesson! Here you will learn about articles in the Coptic language.
                    <h2>What is an article?</h2>
                    Articles in English are words like 'the' or 'a' that helps to clarify the identity of a noun. The 2 types of articles are definite and indefinite. A <vocab>definite article</vocab> is used when referring to a specific person, such as saying '<b>the</b> sun' referring to the sun we can see in the sky. An <vocab>indefinite article</vocab> is used when referring to something in general, such as saying '<b>a</b> sun' referring to suns in general, not necessarily the one in our solar system.
                    <h2>Articles in the Coptic language</h2>
                    Articles follow the same pattern of definite and indefinite in Coptic. If you remember the last lesson, we learned about how nouns have gender. Since the articles are going to be referring to the nouns, they also have to match the same gender. Articles are also known as <vocab>proclitic</vocab>, meaning that they attach to the front of a word (just like a prefix). Let's start with the first set of articles in Coptic. The definite articles in Coptic are <coptic id="pee">pi</coptic> (masculine, singular), <coptic id="tee">ti</coptic> (feminine, singular), and <coptic id="nee">ni</coptic> (plural). Just like the articles must match the gender of the noun, they also need to match the quantity (singular/plural). Now let's put it into practice! If you wanted to say 'the man' in Coptic, you would say <coptic id="pee romy">pirwmi</coptic>. If you wanted to say 'the cat' in Coptic, you would say <coptic id="tee shahv">tisau</coptic>. Indefinite articles work the same way, except they do not require a gender. They are <coptic id="oh">ou</coptic> (singular) and <coptic id="hahn">han</coptic> (plural). So, if you wanted to say 'a man' in Coptic, you would say <coptic id="oo romy">ourwmi</coptic>. Likewise, if you wanted to say 'some cats', you would say <coptic id="han shh hahv">hansau</coptic>.

                </div>
                <div className="bottom">
                    <a href="../quizzes/2-2.html"><button className="bQuiz">Start Quiz</button></a>
                </div>
            </div>
        </div>
    );
}

export default TwoTwo;
