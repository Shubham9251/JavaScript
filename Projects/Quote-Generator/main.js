// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"I do the very best I know how - the very best I can;
                    and I mean to keep on doing so until the end."`,
        person: `Abraham Lincoln`
    },
    {
        quote: `"If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn't matter a damn how you write."`,
        person: `Somerset Maugham`
    },
    {
        quote: `"It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous."`,
        person: `Ray Bradbury`
    },
    {
        quote: `"If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer."`,
        person: `David Brin`
    },
    {
        quote: `"My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying."`,
        person: `Anton Chekhov`
    },
    {
        quote: `"I have been successful probably because I have always realized that I knew nothing about writing and have merely tried to tell an interesting story entertainingly."`,
        person: `Edgar Rice Burroughs`
    },
    {
        quote: `"A writer without interest or sympathy for the foibles of his fellow man is not conceivable as a writer."`,
        person: `Joseph Conrad`
    },
    {
        quote: `"Science fiction writers, I am sorry to say, really do not know anything."`,
        person: `Philip K. Dick`
    },
    {
        quote: `"Half my life is an act of revision."`,
        person: `John Irving`
    },
    {
        quote: `"I went for years not finishing anything. Because, of course, when you finish something you can be judged."`,
        person: `Erica Jong`
    },
    {
        quote: `"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."`,
        person: `William Faulkner`
    }
]

btn.addEventListener('click', function() {
    
    let randem = Math.floor(Math.random() * quotes.length);

   // change quote
   quote.innerText = quotes[randem].quote;
   //change person 
   person.innerText = quotes[randem].person;
   
});