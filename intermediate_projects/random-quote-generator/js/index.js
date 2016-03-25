var quotelist = [
    { words: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', who: 'John Woods'},
    { words: "Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.", who: 'Waseem Latif' },
    { words: 'The most disastrous thing that you can ever learn is your first programming language.', who: 'Alan Kay' },
  { words: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', who: 'Brian W. Kernighan' },
  { words: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', who: 'Rick Cook' },
  { words: 'Being a good software engineer is 3% talent, 97% not being distracted by the internet.', who: 'Unknown' },
  { words: 'A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.', who: 'Bill Bryson' }
];

function generateQuote() {
  var random = Math.floor(Math.random() * quotelist.length); 

  $(".quote").html("<p>"  
  + '"' + quotelist[random].words + '"' + "</p>" + "<p>" + quotelist[random].who + "</p>");
}

generateQuote();

$("button").on('click', function() {
 $(".quote").empty();
  generateQuote();
});