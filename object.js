 
 const checkValues = (obj, value) => {
    return Object.values(obj).includes(value);
  };
  
  checkValues({name:"ahmed",age:15},15) // => true
  checkValues({name:"ahmed",age:15},20) // => false
  
  const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
     return Object.keys(obj); 
  };
  
  getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']

  const empObj = 
  {
  "Grace Hopper": "222-303-5938",
  "Ada Lovelace": "222-349-9842",
  "Alan Turing": "222-853-5933"
  };
    const updateNumbers = (obj) => {
    const arr = [];
    for (const key in obj ) {
        arr.push(`${key} : ${empObj[key]}`);
    }
     return arr ; 
    };
       updateNumbers(empObj); 

  const PassedOrFailed = function (studentGrades) {
     //for in for object only 
     for(let sub in studentGrades)
     { 
     if (studentGrades[sub]["grade"] / studentGrades[sub]["total"] < 0.5 )
     {
         return "The student have failed";
     }
    }
    return "The student have passed";
  }; 
  
  const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
  };
  
  const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
  };
  
  PassedOrFailed(studentOne); // =>  "The student have passed"
  PassedOrFailed(studentTwo); // =>  "The student have failed" 

  const totalCharacters = (arr) => {
    let total = 0;
    arr.forEach((element) => {
        total += element.length;
    });
    return total; 
  };
   
//   totalCharacters(["abc","yz"]) // => 5

  const houseSize = (arr) => {
     let size = [];
     for (let i = 0 ; i < arr.length; i++)
     { 
         size.push({ house : arr[i], members : arr[i +1]});
     }
     return size ;
  }; 
  
//    houseSize(['Stark',7,'Arryn',3])  //[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]

const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name, dogBreed, furColor) {
     for(const dogname in uniqueDogs){
         if (dogname === name ){
             return " The dog isn't unique enough " ;
         }
     }
     uniqueDogs[name] = { breed :dogBreed , color: furColor };
     return "Added the dog successfully"; 
  };
  
  createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
  createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("
  
  
  
  

   
