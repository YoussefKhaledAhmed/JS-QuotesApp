
/* Array of Quote objects */
var quotes = [
    // Quote object
    {quote : "Be yourself; everyone else is already taken." , writer : "-- Oscar Wilde" },
    
    // Quote object
    {quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." , writer : "-- Marilyn Monroe" },
    
    // Quote object
    {quote : "So many books, so little time." , writer : "-- Frank Zappa" },
    
    // Quote object
    {quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , writer : "-- Albert Einstein" },
    
    // Quote object
    {quote : "A room without books is like a body without a soul." , writer : "-- Marcus Tullius Cicero" },
    
    // Quote object
    {quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." , writer : "-- Bernard M. Baruch" },
    
    // Quote object
    {quote : `You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,Sing like there's nobody listening,
    And live like it's heaven on earth.` , writer : "-- William W. Purkey" },
    
    // Quote object
    {quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams." , writer : "-- Dr. Seuss" },
    
    // Quote object
    {quote : "You only live once, but if you do it right, once is enough." , writer : "-- Mae West" },
    
    // Quote object
    {quote : "Be the change that you wish to see in the world." , writer : "-- Mahatma Gandhi" },
    
    // Quote object
    {quote : "In three words I can sum up everything I've learned about life: it goes on." , writer : "-- Robert Frost" },
    
    // Quote object
    {quote : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals." , writer : "-- J.K. Rowling, Harry Potter and the Goblet of Fire" },
    
    // Quote object
    {quote : `Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead Walk beside me… just be my friend` , writer : "-- Albert Camus" },
    
    // Quote object
    {quote : `If you tell the truth, you don't have to remember anything.` , writer : "-- Mark Twain" },
    
    // Quote object
    {quote : `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.` , writer : "-- Maya Angelou" },
    
    // Quote object
    {quote : `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .` , writer : "-- C.S. Lewis, The Four Loves" },
    
    // Quote object
    {quote : "A friend is someone who knows all about you and still loves you." , writer : "-- Elbert Hubbard" },
    
    // Quote object
    {quote : "To live is the rarest thing in the world. Most people exist, that is all." , writer : "-- Oscar Wilde" },
    
    // Quote object
    {quote : "Always forgive your enemies; nothing annoys them so much." , writer : "-- Oscar Wilde" },
    
    // Quote object
    {quote : "Live as if you were to die tomorrow. Learn as if you were to live forever." , writer : "-- Mahatma Gandhi" }
];

/* Variable to hold the generated random number */
var randomNum;

/* function to print the quote: */
document.getElementById("button-id").onclick = function(){
    /* variable to hold the temp random number */
    var temp;
    do{
        /* Generating random number between 0 to 19       *
         * where:                                         *
         * Math.random() -> generates number between 0-1  *
         * Math.floor()  -> rounds down the number to the * 
         *                  nearest whole number.         */
        temp = Math.floor( Math.random() * quotes.length );

        /* prints the new and last number in the console. */
        console.log("random -> "+randomNum);
        console.log("temp -> "+temp);

     /* while new equal the old random number then generate *
      * new one.                                            */
    }while(randomNum == temp);

    /* assign the new random number to the old one for the *
     * next check.                                         */
    randomNum = temp;

    /* printing the quote and the writer in the console. */
    console.log(quotes[randomNum].quote);
    console.log(quotes[randomNum].writer);

    /* printing the quote and the writer in the <p></p> tag */
    document.getElementById("quote-id").innerHTML = quotes[randomNum].quote;
    document.getElementById("writer-id").innerHTML = quotes[randomNum].writer;
}