const inventors = [
    { first: "Albert", last: "Einstein", year: "1878", passed: "1955" },
    { first: "Isaac", last: "Newton", year: "1643", passed: "1727" },
    { first: "Galileo", last: "Galilei", year: "1564", passed: "1642" },
    { first: "Marie", last: "Curie", year: "1867", passed: "1934" },
    { first: "Jahannes", last: "Kepler", year: "1571", passed: "1630" },
    { first: "Nicolaus", last: "Copernicus", year: "1473", passed: "1543" },
    { first: "Max", last: "Planck", year: "1858", passed: "1947" },
]

const people = ["James, Smith","Michael, Smith","Robert, Smith","Maria, Garcia","David, Smith","Maria, Rodriguez","Mary, Smith","Maria, Hernandez","Maria, Martinez","James, Johnson","Richa, Dwivedi","Naveen, Reddy","Lakshmi, Narayana","Uppalapati, Geetha","Adriana, Uria","Anna, Behrensmeyer","Blaise Pascal","Caroline, Herschel","Dorothy, Hodgkin","Edmond, Halley","Edwin, Hubble","Elizabeth, Blackburn","Enrico, Fermi","Erwin, Schroedinger","Flossie, Staal","Frieda, Robbins","Geraldine, Seydoux","Ingrid, Daubechies","Jane, Goodall","Jocelyn, Burnell","Lene, Hau","Lise, Meitner","Lord, Kelvin","Maria, Mitchell","Max, Born","Max, Planck","Melissa, Franklin","Michael, Faraday","Niels, Bohr","Patty, Watson","Polly, Matzinger","Richard, Feynman","Rita, Montalcini","Rosalind, Franklin","Ruzena, Bajcsy","Sarah, Boysen","Shannon, Lucid","Shirley, Jackson","Ernest, Rutherford","Stephen, Hawking","Werner,Heisenberg","Wilhelm, Roentgen","Wolfgang, Pauli"]

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's
const useFilter1 = inventors.filter(function(born){
    if(born.year>=1500 && born.year<=1599){
        return true; // keep it
    }
})

//reduced form

console.table(useFilter1);
const useFilter2 = inventors.filter(born => (born.year>=1500 && born.year<=1599))// keep it
console.table(useFilter2);

//Array.prototype.map()
//2. Give us an  array of the inventory first and last names
const fullName = inventors.map(names => `${names.first} ${names.last}`);
console.table(fullName)

//Array.prototype.sort()
//3. sort the inventors by birthdate, oldest to youngest
const orderedYOB = inventors.sort(function(firstPerson,secondPerson){
    if(firstPerson.year > secondPerson.year){
        return 1;
    }else{
        return -1;
    }
});
console.table(orderedYOB);
//reduced form 
const orderedBY = inventors.sort((firstP,secondP)=> firstP.year>secondP ? -1:1);
console.table(orderedBY);


//Array.prototype.reduce()
//4. How many years did all the inventor live?

const  totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year);
},0);

console.log(totalYears)

//5. Sort the inventors by years lived 
const oldest = inventors.sort(function(GuyA,GuyB){
    const lastGuy = GuyA.passed - GuyA.year;
    const nextGuy = GuyB.passed - GuyB.year;
    return lastGuy>nextGuy?-1:1;
})
console.table(oldest);
//6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
// .map(link => link.textContent)
// .filter(streetName => streetName.includes('de'));

//7. sort Exercise 
//sort the people alphabetically by last name;
const alpha = people.sort((lastOne,nextOne)=>{
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast>bLast ? 1: -1;
})
console.table(alpha)

//8. Reduce Exercise
//sum up the instances of each of these
const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck'];


const transportation = data.reduce((obj,item)=>{
 if(!obj[item]){
    obj[item]=0;
 }
 obj[item]++;
 return obj;
},{});
console.log(transportation);



