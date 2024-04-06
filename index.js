import { studentsArr } from '/studentsArr.js'
import { itemsBoughtArr } from './itemsBoughtArr.js'


function calculateTotalCost(itemsBoughtArr, discount=0){

        const total = itemsBoughtArr.reduce(function(total, item) {
            return total + item.priceUSD
        }, 0 )
        return total - discount
    }
    
console.log(calculateTotalCost(itemsBoughtArr))

