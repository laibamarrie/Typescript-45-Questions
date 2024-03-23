"use strict";
// 2. Personal Message: Store a person's name in a variable, and print a message to that person. Your message 
//should be simple,such as,"Hello Eric,would you like to learn some python today?"
let personName = "Eric";
console.log(`Hello ${personName},would you like to learn some Python today`);
// 3. Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,
// uppercase, and titlecase.
let secondpersonName = "Laiba Marrie";
// in lowercase
console.log("lowercase:", secondpersonName.toLowerCase());
// in uppercase
console.log("uppercase:", secondpersonName.toUpperCase());
// titlecase
console.log("titlecase:", secondpersonName.replace(/\b\w/g, c => c.toUpperCase()));
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of it's author.
// Your output should look like something like the following, including the quotation marks:
// Albert Einstein once said ,"A person who never made a mistake never tried anything new."
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
// 5. Famous Quotes 2: Repeat exercise 4, but this time store the famous person's name in a variable called
// famous person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Albert Einstein";
let Message = `${famousPerson} once said, "${quote}"`;
console.log(Message);
// 6. Stripping Names: Store a person's name,and include some whitespace characters at the beginning and end of the 
// name. Make sure you use each character combination, "\t" and "\n",at least once.Print the name once,so the 
// whitespace around the name is displayed. Then print the name after striping the white spaces.
let otherpersonName = "\t\n   Laiba Marrie \n\t";
console.log("original:", otherpersonName);
console.log("stripped:", otherpersonName.trim());
// 7. Number Eight: Write addition,subtraction,multiplication,and division operations that each result in the number 8.
// Be sur to enclose your operations in print statements to see the results.
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Youe output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 9. Favorite Number: Store your favorite number in a variable.Then,using that variable,create a message
// that reveals your favorite numbe.Print that message.
let favoriteNumber = 16;
console.log(`My favorite number is ${favoriteNumber}.`);
// 10. Adding Comments: Choose two of the programs you've written,and add at least one comment to each.
// If you don't have anything specific to write beacause your programs are too simple at this point,just
// add your name and the current current date at the top of each program file.Then write one sentence
// describing what the program does.
//Author: [Laiba Marrie]
//date: [Thursday, February 29 , 2024]
//task 9: printing my favorite number.
let otherfavoriteNumber = 16;
//revealing my favorite number in a message formate.
console.log(`My favourite number is ${otherfavoriteNumber}.`);
// 11. Names: Store the names of a few friends in a array called names.Print each person's name
// by accessing each element in the list,one at a time.tsc
let names = ["Sara", "Areeba", "Ali", "Hamza"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// 12. Greetings: Start with the array you used in Exercise 11,but instead of just printing each person's name,
// print a message to them. The text of each message should be the same,but each message should be personalized 
// with the person's name.
let othernames = ["Sara", "Areeba", "Ali", "Hamza"];
let message = "Do you like to play football?";
console.log(othernames[0] + " " + message);
console.log(othernames[1] + " " + message);
console.log(othernames[2] + " " + message);
console.log(othernames[3] + " " + message);
// 13. Your Own Array: Think of your favorite mode of transportation,such as a motorcycle or a car,
// and make a list that stores several examples.Use your list to print a series of statements about
// these items,such as "I would like to own a Honda motorcycle."
let transportation = ["Honda Motorcycle", "Ford Mustang", "Volkswagen Taigun"];
transportation.map((items) => console.log(`I would like to own a ${items}`));
// 14. Guest List: If you could invite anyone,living or deceased,to dinner,who would you invite?Make a list 
// that includes at least three people you'd like to invite to dinner.Then use your list to print a message 
// to each person,inviting them to dinner.
let guestArr = ["Sara", "Areeba", "Ali"];
guestArr.map((items) => (console.log(`Dear ${items},You are invited to the dinner.`)));
// 15. Changing Guest List: You just heard that one of your guests can't make the dinner,so you need to
// send out a new set of Invitations.You'll have to think of someone else to invite.
// . Start with your program from Exercise 14.Add a print statement at the end of your program stating 
// the name of the guest who can't make it.
// . Modify your list,replacing the name of the guest who can't make it with the name of the new person 
// you are inviting.
// . Print a second set of invitation messages,one for each person who is still in your list.
let otherguestArr = ["Laiba", "Aria", "Nadia", "Adeel"];
let cannotAttend = "Laiba";
console.log(cannotAttend + " ", 'can not attend the dinner.');
let newGuest = "Alia";
otherguestArr[otherguestArr.indexOf(cannotAttend)] = newGuest;
console.log(otherguestArr);
otherguestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
// 16. More Guests: You just found a bigger dinner table, so now more space is available.Think of three more
// guests to invite to dinner.
// . Start with your program from Exercise 15.Add a print statement to the end of your program informing people
// that you found a bigger dinner table.
// . Add one new guest to the beginning of your array.
// . Add one new guest to the middle of your array.
// . Use append() to add one new guest to the end of your list.
// . Print a new set of invitation messages, one for each person in your list.
let secondguestArr = ["Alia", "Aria", "Nadia", "Adeel"];
let unabletoAttend = "Adeel";
let othernewGuest = "Hina";
secondguestArr[secondguestArr.indexOf(unabletoAttend)] = othernewGuest;
console.log(secondguestArr);
secondguestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so i am invited more people.`));
// Part 2
let guestBeg = "Maheen";
secondguestArr.unshift(guestBeg);
console.log(secondguestArr);
// Part 3
let middleGuest = "Riya";
let middleIndex = secondguestArr.length / 2;
secondguestArr.splice(middleIndex, 0, "Riya");
console.log(secondguestArr);
// Part 4
secondguestArr.push("Bilal");
console.log(secondguestArr);
// Part 5
secondguestArr.map((items) => console.log(`Dear ${items}, you are invited in the more people list on dinner.`));
// 17. Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner,
// and you have space for only two guests.
// . Start with your program from Exercise 16.Add a new line that prints a message saying that you can invite
// only two people for dinner.
// . Remove guests from your list one at a time until only two names remain in your list.Each time you pop a 
// name from your list,print a message to that person letting them know you're sorry you can't invite them to 
// dinner.
// . Print a message to each of the two people still on your list,letting them know they're still invited.
// . Remove the last two names from your list,so you have an empty list.Print your list to make sure you 
// actually have an empty list at the end of your program.
// Initial list of guests
let guests = ["Kathryn", "Bilal", "Harry", "Helly"];
// Informing that only two people can be invited
console.log("Due to limited space only two people can be invited for dinner");
// Removing guest until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}
;
// Remaining two guests
let remaingGuests = guests.slice(0, 2); //Get the first two element from the guests list
// Printing invitations to the remaining two guests
remaingGuests.forEach((remaingGuests) => {
    console.log(`Dear ${remaingGuests}, you're still invited to the dinner.`);
});
// Removing the last two names from the list
guests.pop();
guests.pop();
// Printing the final list to confirm it's empty
console.log("Final guest list:", guests);
// 18. Seeing The World: Think of at least five places in the world you'd like to visit.
// . Store the locations in a array.Make sure the array is not in alphabetical order.
// . Print your array in its original order.
// . Print your array in alphabetical order without modifying the actual list.
// . Show that your array is still in its original order by printing it.
// . Print your array in reverse alphabetical order without changing the order of the original list.
// . Show that your array is still in its original order by printing it again.
// . Reverse the order of your list.Print the array to show that its order has changed.
// . Reverse the order of your list again.Print the list to show it's back to its original order. 
// . Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
// . Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that its order has changed.
// Store the locations in an array
let placestoVisit = ["England", "Switzerland", "Turkey", "Maldives", "Croatia"];
// Print the array in it's original order
console.log("original order:", placestoVisit);
// Print the array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", [...placestoVisit].sort());
// Show that array is still in its original order
console.log("original order after sorting:", placestoVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", [...placestoVisit].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placestoVisit);
//  Reverse the order of your list.Print the array to show that its order has changed.
placestoVisit.reverse();
console.log("reverse order:", placestoVisit);
// Reverse the order of your list again.Print the list to show it's back to its original order.
placestoVisit.reverse();
console.log("back to original order:", placestoVisit);
//  Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
placestoVisit.sort();
console.log("sorted in alphabetical order:", placestoVisit);
// Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that its order has changed.
placestoVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placestoVisit);
// 19. Dinner Guests: Working with one of the programs from Exercise 14 through 18,print a message
// indicating the number of people you are inviting to dinner.
let invitations = ["Kathryn", "Bilal"];
let count_invitations = invitations.length;
console.log(`${count_invitations} people will come to the dinner.`);
// 20. Think of something you could store in a array:For Example,you could make a list of mountains,
// rivers,countries,cities,languages, or anything else you'd like.Write a program that creates a 
// list containing these items.
let mountains = ["Mount Everest", "Nanda Devi", "Rakaposhi", "Mount Elbrus", "K2"];
console.log("list of mountains");
console.log(mountains);
// 21. They think of something you could store in a Typescript Object.Write a program that creates Objects
// containing these items.
let person = { name: "Laiba Marrie", fname: "female", age: 23 };
console.log(person);
// 22. Intentional Error: If you haven't received an array index error in one of your programs yet,try to make one happen.
// Change an index in one of your programs to produce an index error.Make sure you correct the error before closing the 
// program.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days{7})
console.log(days[6]);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results for each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car =='subaru'? | predict True.")
// console.log(car =='subaru')
// . Look closely at your results,and make sure you understand why each line evaluates to True or False.
// . Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
console.log("Is car == 'subaru'? | predict True");
console.log(car == 'subaru');
console.log("Is car != ''honda city'? | predict True");
console.log(car != 'honda city');
console.log("Is car == 'Subaru'? | predict False");
console.log(car == 'Subaru');
console.log("Is car == 'SUBARU'? | predict False");
console.log(car == 'SUBARU');
console.log("Is car.length == 6? | predict True");
console.log(car.length == 6);
console.log("Is car.length != 10? | predict True");
console.log(car.length != 10);
console.log("Is 10 > 45 ? | predict False");
console.log(10 > 45);
console.log("Is 10 > 45 ? | predict False");
console.log(10 > 45);
console.log("Is 3 <= 2 ? | predict False");
console.log(3 <= 2);
console.log("Is 72 > 63 ? | predict False");
console.log(72 > 63);
// 24. More Conditional Tests: You don't have to limit the number of tests you create yo 10.If you want to try 
// more comparisons,write more tests.Have at least one True and one False result for each of the following:
// . Tests for equality and inequality with strings.
// . Tests using the lower case function.
// . Numerical tests involving equality and inequality,greater than and less than,greater than or equal to,and
//   less than or equal to.
// . Tests using "and" or "or" operators.
// . Tests whether an item is in a array.
// . Test whether an item is not in a array.
let name_1 = "laiba";
let name_2 = "laiba marrie";
let name_3 = "miss laiba marrie";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
let age_1 = 18;
let age_2 = 23;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 23) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less than
    console.log("younger");
}
if (age_2 >= age_1) { //greater than
    console.log("older");
}
if (age_1 == 18 && age_2 == 23) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 23) {
    console.log("person is not eligible for vote");
}
let rivers = ["Jhelum River", "Indus River", "Sutlej River", "Hingol River", "Neelum River"];
if (rivers.includes("Jhelum River")) {
    console.log("Jhelum River is in rivers lists");
}
if (!rivers.includes("Astor River")) {
    console.log("Astor River is not included in an array");
}
// 25. Alien Colors # 1: Imagine an alien was just shot down in a game.Create a variable called alien_color
// and assign it a value of 'green','yellow'or'red'.
// . Write an if statement to test whether the alien's color is green.If it is,print a meesage that the 
//   player just earned 5 points.
// . Write one version of this program that passes the if test and another that fails.(The version that fails
//   will have no output.)
let alien_color = "red";
if (alien_color == "red") {
    console.log("you earn 5 points");
}
let aliencolorInVersion2 = "Yellow";
if (aliencolorInVersion2 == "red") {
    console.log("no output");
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25,and write an if-else chain.
// . If the alien's color is green,print a statement that the player just earned 5 points for shooting 
//   the alien.
// . If the alien's color isn't green,print a statement that the player just earned 10 points.
// . Write one version of this program that runs the if block and another that runs the else block.
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("player just earned 5 points for shooting alien");
}
else {
    console.log("player just earned 10 points for shooting alien ");
}
let alienColor2 = "Yellow";
if (alienColor2 == "green") {
    console.log("player just earned 5 points for shooting alien");
}
else {
    console.log("player just earned 10 points for shooting alien ");
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// . If the alien is green,print a message that the player earned 5 points.
// . If the alien is yellow,print a message that the player earned 10 points.
// . If the alien is red,print a message that the player earned 15 points.
// . Write three versions of this program,making sure each message is printed for the
//   appropriate color alien.
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("the player earned 5 points!");
}
else if (alien_color3 === "yellow") {
    console.log("the player earned 10 points!");
}
else if (alien_color3 === "red") {
    console.log("the player earned 15 points!");
}
let aliencolorVersion2 = "yellow";
if (aliencolorVersion2 === "green") {
    console.log("the player earned 5 points!");
}
else if (aliencolorVersion2 === "yellow") {
    console.log("the player earned 10 points!");
}
else if (aliencolorVersion2 === "red") {
    console.log("the player earned 15 points!");
}
let aliencolorVersion3 = "red";
if (aliencolorVersion3 === "green") {
    console.log("the player earned 5 points!");
}
else if (aliencolorVersion3 === "yellow") {
    console.log("the player earned 10 points!");
}
else if (aliencolorVersion3 === "red") {
    console.log("the player earned 15 points!");
}
// 28. Stages Of Life: Write an if-else chain that determines a person's stage of life.Set a value
// for the variable age,and then:
// . If the person age is less than 2 years old,print a message that the person is a baby.
// . If the person age is at least 2 years old but less than 4,print a message that the person is a toddler.
// . If the person age is at least 4 years old but less than 13,print a message that the person is a kid.
// . If the person age is at least 13 years old but less than 20,print a message that the person is a teenager.
// . If the person age is at least 20 years old but less than 65,print a message that the person is an adult.
// . If the person is age 65 or older,print a message that the person is an elder.
let personAge = 1;
if (personAge < 2) {
    console.log("the person is a baby");
}
else if (personAge < 4) {
    console.log("the person is a toddler");
}
else if (personAge < 13) {
    console.log("the person is a kid");
}
else if (personAge < 20) {
    console.log("the person is a teenager");
}
else if (personAge < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge2 = 3;
if (personAge2 < 2) {
    console.log("the person is a baby");
}
else if (personAge2 < 4) {
    console.log("the person is a toddler");
}
else if (personAge2 < 13) {
    console.log("the person is a kid");
}
else if (personAge2 < 20) {
    console.log("the person is a teenager");
}
else if (personAge2 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge3 = 10;
if (personAge3 < 2) {
    console.log("the person is a baby");
}
else if (personAge3 < 4) {
    console.log("the person is a toddler");
}
else if (personAge3 < 13) {
    console.log("the person is a kid");
}
else if (personAge3 < 20) {
    console.log("the person is a teenager");
}
else if (personAge3 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge4 = 16;
if (personAge4 < 2) {
    console.log("the person is a baby");
}
else if (personAge4 < 4) {
    console.log("the person is a toddler");
}
else if (personAge4 < 13) {
    console.log("the person is a kid");
}
else if (personAge4 < 20) {
    console.log("the person is a teenager");
}
else if (personAge4 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge5 = 45;
if (personAge5 < 2) {
    console.log("the person is a baby");
}
else if (personAge5 < 4) {
    console.log("the person is a toddler");
}
else if (personAge5 < 13) {
    console.log("the person is a kid");
}
else if (personAge5 < 20) {
    console.log("the person is a teenager");
}
else if (personAge5 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge6 = 80;
if (personAge6 < 2) {
    console.log("the person is a baby");
}
else if (personAge6 < 4) {
    console.log("the person is a toddler");
}
else if (personAge6 < 13) {
    console.log("the person is a kid");
}
else if (personAge6 < 20) {
    console.log("the person is a teenager");
}
else if (personAge6 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
// 29. Favorite Fruit: Make a array of your favorite fruits,and then write a series of independent if statement 
// that check for certain fruits in your array.
// . Make a array of your three favorite fruits and call it favorite_fruits.
// . Write five if statements.Each should check whether a certain kind of fruit is in your array.If the fruit is
//   in your array,the if block should print a statement,such as You really like bananas!
let favorite_fruits = ["Strawberry", "Mango", "Peach"];
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like strawberry!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("Peach")) {
    console.log("You really like peach!");
}
if (favorite_fruits.includes("Apricot")) {
    console.log("You really like apricot!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like orange!");
}
// 30. Hello Admin: Make a array of five or more usernames,including the name 'admin'.Imagine you are writing code
// that will print a greeting to each user after they log in to a website,Loop through the array,and print a greeting 
// to each user:
// . If the username is 'admin',print a special greeting,such as Hello admin,would you like to see a status report?
// . Otherwise,print a generic greeting,such as Hello Eric,thank you for logging in again.
let usernames = ["admin", "laibamarrie", "jane", "Komal", "zaid"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username},thank you for logging in again`);
    }
}
// 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// . If the list is empty,print the message We need to find some users!
// . Remove all of the usernames from your array,and make sure the correct message is printed.
let users = ["admin", "laibamarrie", "jane", "Komal", "zaid"];
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello Admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user},thank you for logging in again`);
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
// 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has
// a unique username.
// . Make a list of five or more usernames called current_users.
// . Make another list of five usernames calles new_users.Make sure one or two of the new usernames are also in the 
//   current_users list.
// . Loop through the new_users list to see if each new username has already been used.If it has,print a meesage that
//   the person will need to enter a new username.If a username has not been used,print a message saying that the 
//   username is available.
// . Make sure your comparison is case insensitive.If 'John' has been used,'JOHN'should not accepted.
let current_users = ["Hina", "Ali", "Areeba", "Maria", "Lily"];
let new_users = ["Vivian", "Hina", "Areeba", "Hania", "Saiqa"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry,this username ${new_user},is already taken.You will have to enter a new username.`);
    }
    else {
        console.log(`Yes ${new_user}, is available`);
    }
}
// 33: Ordinal Numbers: Ordinal numbers indicate their position in a array,such as 1st or 2nd.Most ordinal numbers end 
// in th,except 1,2, and 3.
// . Store the numbers 1 through 9 in a array.
// . Loop through the array.
// . Use an if-else chain inside the loop to print the proper ordinal ending for each number.Your output should read
//   1st 2nd 3rd 4th 5th 6th 7th 8th 9th,and each result should be on a separate line.
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ordinalNumber of ordinalNumbers) {
    if (ordinalNumber === 1) {
        console.log(`${ordinalNumber}st`);
    }
    else if (ordinalNumber === 2) {
        console.log(`${ordinalNumber}nd`);
    }
    else if (ordinalNumber === 3) {
        console.log(`${ordinalNumber}rd`);
    }
    else {
        console.log(`${ordinalNumber}th`);
    }
}
// 34: Pizzas: Think of at least three kind of your favorite pizza.Store these pizza names in a array,and then use a
// for loop to print the name of each pizza.
// . Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the 
//   pizza.For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// . Add a line at the end of your program,outside the for loop,that states how much you like pizza.The output should
//   consists of three or more lines about the kinds of pizza you like and then an additional sentence,such as I really 
//   love pizza!.
let favorite_pizza = ["Cheese", "BBQ Chicken", "Veggie"];
for (let pizza of favorite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favorite_pizza) {
    console.log(`I really like ${pizza}pizza!`);
}
console.log("nI really love pizza");
// 35. Animals: Think of at least three different animals that have a common characteristic.Store the names of these 
// animals in a list,and then use a for loop to print out the name of each animal.
// . Modify your program to print a statement about each animal,such as A dog would make a great pet.
// . Add a line at the end of your program stating what these animals have in common.You could print a sentence such 
//   as Any of these animals would make a great pet!
let animals = ["cat", "dog", "monkey"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} is a great pet`);
}
console.log("\n all of these are great pet! but i love cats more");
// 36: T-Shirt: Write a function called make_shirt()that accepts a size and the text of a message that should be 
// printed on the shirt.The function should print a sentence summarizing the size of the shirt and the message
// printed on it.Call the function.
function makeShirt(size, text) {
    console.log(`you order a ${size}shirt that says ${text}`);
}
makeShirt('large', '" Believe in your dreams and follow your heart "');
makeShirt('medium', '" Sore Today , Strong Tomorrow "');
// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript.Make a large shirt and a medium shirt with the default message,and a shirt of any 
// size with a different message.
function make_shirt2(size = "large", text = "I Love Typescript") {
    console.log(`you have ordered a ${size}, shirt that says ${text}`);
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Kindness Matters");
// 38: Cities: Write a function called describe_city that accepts the name of a city and its country.The 
// function should print a simple sentence,such as Karachi is in Pakistan.Give the parameter for the country 
// a different value.Call your function of three different cities,at least one of which is not in the default
// country.
function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
}
describe_city("Athens", "Greece");
describe_city("Philadelphia", "Pennysylvania");
describe_city("Toronto", "Canada");
// 39: City Names:Write a function called city_country() that takes in the name of a city and its country.The
// function should return a string formatted like this:
// "Lahore,Pakistan"
// Call your function with at least three city-country pairs,and print the value that's returned.
function city_country(city, country) {
    return city + ", " + country;
}
let c1 = city_country("Copenhagen", "Denmark");
let c2 = city_country("Seoul", "South Korea");
let c3 = city_country("Karachi", "Pakistan");
console.log(c1);
console.log(c2);
console.log(c3);
// 40: Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,and it should return a Object 
// containing these two pieces of information.Use the function to make three dictionaries 
// representing different albums.Print each return value to show that Objects are storing the album 
// information correctly.Add an optional parameter to make album() that allows you to store the 
// number of tracks on an album.If the calling line includes a value for the number of tracks,add
// that value to the album's Object.Make at least one new function call that includes the number of 
// tracks on an album.
function makeAlbum(artist, title, tracks) {
    return {
        artist,
        title,
        tracks,
    };
}
const album1 = makeAlbum("Doja Cat", "Scarlet");
const album2 = makeAlbum("Selena Gomez", "Rare");
const album3 = makeAlbum("Billie Eilish", "Happier Than Ever", 16);
console.log(album1);
console.log(album2);
console.log(album3);
// 41: Magicians: Make a array of magician's names.Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
const magicians = ["Ricky Jay", "Harry Kellar", "Mac King", "David Blaine"];
show_magicians(magicians);
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
;
// 42: Great Magicians: Start with a copy of your program from Exercise 39.Write a function called make
// _great()that modifies the array of magicians by adding the phrase the Great to each magician's name.
// Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++)
        magicians[i] = magicians[i] + " the Great ";
}
const magicians2 = ["Ricky Jay", "Harry Kellar", "Mac King", "David Blaine"];
make_great(magicians);
show_magicians(magicians);
// 43: Unchanged Magicians: Start with your work from Exercise 40.Call the function make_great() with a
// copy of the array of magicians' names.Because the original array will be unchanged, return the new array 
// and store it in a separate array.Call show_magicians() with each array to show that you have one array
// of the original names and one array with the Great added to each magician's name.
const magicians3 = ["Ricky Jay", "Harry Kellar", "Mac King", "David Blaine"];
function show_magicians2(magicians3) {
    for (const magician of magicians3) {
        console.log(magician);
    }
}
;
function make_great2(magicians3) {
    const greatMagicians = [];
    for (let i = 0; i < magicians3.length; i++) {
        greatMagicians.push(magicians3[i] + " the Great ");
    }
    return greatMagicians;
}
const greatMagicians2 = make_great2(magicians3);
show_magicians2(magicians3);
show_magicians2(greatMagicians2);
// 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.The function 
// should have one parameter that collects as many items as the function call provides, and it should print
// a summary of the sandwich that is being ordered.Call the function three times,using a different number of 
// arguments each time.
function sandwich(...items) {
    console.log("Sandwich order:");
    let i = 0;
    while (i < items.length) {
        console.log(` - ${items[i]}`);
        i++;
    }
}
sandwich('cheese', 'tomato', 'basil');
sandwich('chicken', 'mayonnaise', 'celery');
sandwich('cream cheese', 'fried egg', 'cheddar cheese', 'hot sauce');
console.log("I hope you enjoy your sandwich, Laiba!");
// 45: Cars: Write a function that stores information about a car in a Object.The function should always
// receive a manufacturer and a model name.It should then accept an arbitary number of keyword arguments.Call
// the function with the required information and two other name-value pairs,such as a color or an optional 
// feature.Print the Object that's returned to make sure all the information was stored correctly.
function createCar(manufacturer, model, optional = {}) {
    const car = Object.assign({ manufacturer,
        model }, optional);
    return car;
}
const myCar = createCar("Ford", "Mustang", { color: "blue", year: 2022 });
console.log(myCar);
