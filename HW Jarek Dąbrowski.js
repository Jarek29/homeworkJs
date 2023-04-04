//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------
//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
const areU= true;
    console.log(`Welcome I'm ${areU} nice too meet u`);
console.log(typeof true)
    const howMuch=6;
console.log("Welcome I'm number " + howMuch);
console.log(typeof 6)
    const word="Hello String";
console.log(word);
console.log(typeof word)
//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined
//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(2 + "21" + "wynik jest typu: NUMBER  i wynika to z ")
console.log(2 + 2 + "wynik jest typu:  NUMBER i wynika to z ")
console.log(2 * "2" + "wynik jest typu: NUMBER i wynika to z ")
console.log(2 * 2 + "wynik jest typu: NUMBER  i wynika to z")
console.log(1 == true)
console.log("wynik jest typu: boolean, wynika to użycia operatora równe ==,  sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
console.log(0 == false)
console.log("wynik jest typu: boolean, wynika to użycia operatora równe ==,  sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
console.log(0 == null)
console.log("wynik jest typu: boolean, wynika to użycia operatora równe ==,  sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
console.log(null == undefined)
console.log("wynik jest typu: boolean, wynika to użycia operatora równe ==,  sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
console.log("Operator : = jest to operator przypisania nazwy do parametru" )
console.log("Operator równe: == sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
console.log("Operator równa wartość i typ: === sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie biorąc pod uwagę ich typ")



//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log("referencja jest to nic innego jak łącze, miedzy zmienną a np. tablicą. W typie prostym , przekazanie wartości odbywa się poprzez wartość ")



//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)

console.log('-----------------------------------')
let val = 0
console.log(typeof !!val)
console.log(!!val)
let num =Math.round("2137")
console.log(typeof num)
console.log(num)
let str = toString(007)
console.log(typeof str)
console.log(str)

let und = undefined
console.log(typeof !!und)



//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

const arr = []
arr.push("Jarek", "Sebastian", "Rafał")
 console.log(arr)


//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

const obj = {
}
const obj1 = {
    ...obj,
    age: 33,
    name: 'Jarek',
    height: 186,
}
console.log(obj1)
//g)* opisz krótko czym dokładnie jest typ NaN
"Not-a-number - jest właściwością obiektu globalnego. Innymi słowy, jest to zmienna o zasięgu globalnym."

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log( '​Symbol jest wbudowanym obiektem, którego konstruktor zwraca prymityw symbolu — zwany także wartością symbolu lub po prostu symbolem')



//2. FUNKCJE & WARUNKI

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
function add(a, b, c) {
    const sum = a + b + c
    return sum
}
const sum = add(5, 5, 5)
console.log(sum)

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
function triangle(base, height) {
    const area = 1 / 2 * base * height
    return area
}
const area = triangle(10, 10)
console.log(area)
//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
function yourDays(age) {
    const days = age * 365 / 365 ;
    return days;
}

const days = yourDays(33); 
if (days<18) {
    console.log(" Wiek Mniejszy niż 18lat")
} else {
    console.log("Od narodzin minęły/ło " + days+"lat/a")
}

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X"
//  w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

const tablica = [{
    named: "Jarek"
},{
    surnamed: "Dąbrowski"
},{
    proffesiond: "Trener"
    }]
for (i = 0; i < tablica.length; i++);
    

function elment3(nam1) {
    let namFinal=nam1
    for (i = 0; i < nam1.length; i++){
        namFinal=nam1
    }
    return namFinal
}
let namFinal = elment3(tablica)
console.log(namFinal.length)
console.log(namFinal[2].proffesiond)
console.log(`Przekazana tablica ma ${namFinal.length} elementy, a elementem numer 3 jest element ${namFinal[2].proffesiond}`)

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
}
function eFinal(value) {
    const final = value
    return final
}
let final = eFinal(testPerson);
console.log(final)
console.log(`Pan ${final.name +' '+ final.surname} ma ${final.age} lat oraz ${final.height} cm wzrostu`)
//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
const testPerson2 = {
    name: "Jano",
    surname: "Kowal",
    age: 33,
    height: 186,
};

let secondChange = (testPerson2,weight) => {
    testPerson2.age=40,testPerson2.weight=90
}
secondChange(testPerson2)
console.log(testPerson2)

//g) napisz funkcję która przyjmie jeden parametr.
// Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli,
// że przyjmowany jest tylko typ number.Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"


function zedG(numbera) {
    if (numbera % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log("nie jest podzielna przez 3")
    }

    if (numbera % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log("nie jest podzielna przez 5")
    }

    if (numbera % 3/5 == 0) {
        console.log("FizzBuzz")
    } else {
        console.log("dalej")
    }
    return numbera
}

const cont = zedG(45);
console.log(cont)

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację.
// Użyj operatora trójargumentowego

const terr= (first) => (first%2===0? "Even" : "notEven")
const first = terr(11);
console.log(first);

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

const rand = () => (Math.floor(Math.random()*11))
const losowo = rand();
console.log(losowo)

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
const rand1 = (a,b) => (Math.floor(Math.random()*11))
const losowo1 = rand();
console.log(losowo1)
//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
const lic = 10;
for (i = 0; i < lic; i++){
    console.log(i)
}

// //b) napisz pętlę która odliczy od 9 do 1
const lic1 = 9;
for (i = 9; i >0; i--){
    console.log(i)
}
// //c) napisz pętlę która odliczy od 5 do 15
const fiv = 15;
for (i = 5; i <= fiv; i++){
    console.log(i)
}
//d) napisz pętlę która odliczy od 0 do -10
const zero = 0
for (i = 0; i >= -10; i--)
    console.log(i)

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
const dwa = 20
for (i = 0; i < dwa; i += 2)
    console.log(dwa)

// //f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
const dziubu = 10
for (i = 10; i >= -10; i-=4)
    console.log(i)

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
// //h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
// //i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
//
// //Uwaga! kolejne pętle trzeba napisać w funkcji
//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

function petlaOd(fiv) {
    for (i = 1; i <= fiv; i++) {
        console.log(i)
    }
}
petlaOd(18)

// //k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

function petla2(n) {
    for (i = 0; i <= 50; i +=n){
        console.log(i)
    }
}
petla2(10)

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
// const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]


function welcomeNames() {
    return ('Cześć ')
}

const aarrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]

    for (i = 0; i < aarrNames.length; i++){
        console.log(welcomeNames() +  aarrNames[i])
    }

// //ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
const arrObjects = [{
    brand: "Mustang",
    color: "niebieski "
}, {
    brand: "Tesla",
    color: "czarna "
}, {
    brand: "Polonez",
    color: "żółty "
}, {
    brand: "Toyota",
    color: "fioletowa "
    }]
function infoMust() {
    return ("Przed Tobą stoi ")
}

for (i = 0; i < arrObjects.length; i++) {
    const nameWe = arrObjects[i]
    console.log(infoMust() +nameWe.color + nameWe.brand)
}


// // //m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; i < arrNumbers.length; i++){

    if (arrNumbers[i] % 2 == 0) {
        console.log(arrNumbers[i])
    }
}


// //n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// // - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// // - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// // - za pomocą push umieści numery parzyste w tablicy arrEven
// // - na końcu zwróci obiekt z tymi trzema tablicami
//
// const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]
//
// const arrOther = []
// const arrNubers = []
// const arrEven = []
//
// //--------------------------
// // METODY
// //--------------------------
//
// //a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
//
const names = ["Seba", "Kari", "Mati", "Andżi"]
const welcome=names.map(function (names) {
    return "Cześć " + names
})
console.log(welcome)




// //b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
//
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newArray = array10.filter(function(item) {
return item % 2 === 0
})
console.log(newArray)

// //c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
// ​
const people = [{
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
}, {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
}, {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
}, {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
    }]


const filFill = people.filter((people) => people.gender === "female")
   console.log(filFill)

// //d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy.
// Ponad to posortuj wartości alfabetycznie.Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
const shopping = 'kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny'

const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const word2 = shopping.split(' ').map(capitalize)
console.log(word2)


// //e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const res1 = alphabet.reverse()
console.log(res1)

const join = res1.join(' ')
console.log(join)