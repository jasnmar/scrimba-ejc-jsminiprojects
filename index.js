import { studentsArr } from '/studentsArr.js'
import { itemsBoughtArr } from './itemsBoughtArr.js'


function calculateTotalCost(itemsBoughtArr){

        const total = itemsBoughtArr.reduce(function(total, item) {
            return total + item.priceUSD
        }, 0 )
        return total
    }
    
console.log(calculateTotalCost(itemsBoughtArr))

