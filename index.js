const dreamHoliday = {
    destination: 'Cozumel',
    activity: 'Scuba Diving',
    accommodation: 'Cozumel Palace',
    companion: 'Stephania'
}

/* 
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add 
   extra properties or change the existing ones. 
2. Destructure the object and use the individual 
   variables to log out one or more sentences about 
   your dream holiday. 

E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/
const {destination, activity, accommodation, companion} = dreamHoliday

console.log(`I would love to go to ${destination} to go ${activity}. I'd stay at ${accommodation} and hang out with ${companion} all day`)