
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // act
      let result = new Rocket();
    
      // assert
      expect(result).toBeTruthy(); 
    });

    test("it should set the rocket's attributes (name, colour, status) if they are provided", () => {
    // arrange
    let name = 'Cancer V'
    let colour = 'crimson red'
    let flying = true 

    // act
    let result = new Rocket({name, colour, flying});

    // assert
      expect(result.name).toEqual(name); 
      expect(result.colour).toEqual(colour);
      expect(result.flying).toEqual(flying); 
    });
  });

  describe('liftOff', () => { 
    test('sets flying to true when initialized with default values', () =>{
      // initialize with default
      let rocket = new Rocket();

      // call method we are testing, when flying is false 
      rocket.liftOff(); 
      // assert expected result 
      expect(rocket.flying).toEqual(true); 

      //try calling method again, as it supposed to toggle result 
      rocket.liftOff(); 
      expect(rocket.flying).toEqual(true); 
  
      }); 

    test('returns false if the rocket has already lifted off', () => {

      let rocket = new Rocket ({flying : true});
  
      expect(rocket.liftOff()).toBe(false); 
  
    });
  });



  describe('sendCodedSignal', () => {

    test('add "boop" to signalInfo when the message code is undefined', () => {
      let rocket = new Rocket();

      // call the methof on the deault instance 
      let result = rocket.sendCodedSignal(); 

      expect(result).toEqual("boop")

    });

    test('add beep to signalInfo when the message code is less than 10', () => {
    let rocket = new Rocket();

    expect(rocket.sendCodedSignal(5)).toEqual("beep");
    expect(rocket.sendCodedSignal(7)).toEqual("beep");
    expect(rocket.sendCodedSignal(25)).not.toEqual("beep");
    });

    test('add beep to signalInfo when the message code is less than 10 and flying = true', () => {

      let flyingRocket = new Rocket ({ flying : true}); 

      expect(flyingRocket.sendCodedSignal(9)).toBe("beep beep"); 
    }); 

    test('add "boop boop boop" to signalInfo when the message code is >= 10 and flying = true', () => {

      let flyingRocket = new Rocket ({ flying : true}); 

      expect(flyingRocket.sendCodedSignal(10)).toBe("boop boop boop"); 
      expect(flyingRocket.sendCodedSignal(27)).toBe("boop boop boop");
      expect(flyingRocket.sendCodedSignal(4)).not.toBe("boop boop boop");
    }); 

    test('add "boop beep beep" to signalInfo when the message code is >= 10 and flying = false', () => {

      let flyingRocket = new Rocket ({ flying : false}); 

      expect(flyingRocket.sendCodedSignal(10)).toBe("boop beep beep"); 
      expect(flyingRocket.sendCodedSignal(27)).toBe("boop beep beep");
      expect(flyingRocket.sendCodedSignal(4)).not.toBe("boop beep beep");
    }); 
 
  });

});
