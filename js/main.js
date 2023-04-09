new TypeIt("#name", {
    strings: ["a developer", "a photographer", "a musician", "a gamer", "a "], 
    speed: 75,
    deleteSpeed: 50,
    loop: true,
    breakLines: false,
    cursorChar: '_',
  }).go();
  var multiple = new Multiple({
    selector: '.card',
    background: 'linear-gradient(126deg, rgba(255,0,0,0.78) 0%, rgba(255,183,63,0.78) 33%, rgba(255,254,0,0.78) 33%, rgba(15,235,27,0.78) 66%, rgba(71,255,251,0.78) 66%, rgba(34,8,174,0.78) 100%);'
  });
  