
//Final JavaScript
const generateQuote = function() {
    const quotes = [
    {
        quote: "Don't wish it was easier, wish you were better.",
        author: "- Jim Rohn"
    },
    {
        quote: "A man shall not have more than one priority at once.",
        author: " - Lovenson BEAUCICOT"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "- Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "- Luna Lovegood"
    },
    {
        quote: "Focus on yourself until the focus is on you.",
        author: "- Unknown Author"
    },
    {
        quote: "Your most important sale in life is to sell yourself to yourself.",
        author: "- Maxwell Maltz"
    },
    {
        quote: " As you start to walk on the way, the way appears.",
        author: "- Rumi"
    },
    {
        quote: "When you want something bad enough, all the universe conspires in helping you to achieve it",
        author: "- Paolo Coelho"
    },

    {
        quote: "Other people's opinion of you does not have to become your reality.",
        author: "- Les Brown"
    },


    {
        quote: "Learn to work harder on yourself than on your job.",
        author: "- Jim Rohn"
    },

    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author:"- Albert Einstein"

    },

    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author:"- W. Clement stone"
    },

    {
        quote: "In the absence of clearly defined goals, we become strangely loyal to performing daily trivia until ultimately we become enslaved by them.",
        author:"- Robert Heinlein"
    },

    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "- Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "- Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "- Albus Dfmbledore"
    },
    {
        quote: "Don't be victim of negative self-talk. Remember, you are listening",
        author: "- Unknown Author"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}

document.getElementById("generateNewQuote").addEventListener('click', event=>{generateQuote()});
