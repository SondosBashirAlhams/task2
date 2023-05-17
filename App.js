const forecast = require ("./data1.js/forecast")
const request = require ("request")
const geocode = require ('./data1.js/geocode')


//  GET(latitude,longtitude)==> give (country ) ///////////

const latitude = process.argv[2]
const longtitude = process.argv[3]

forecast(latitude ,longtitude , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)
   
} )

/// OR ///////////////////////////////////////////////////
// const latitude = process.argv[2]
// const longtitude = process.argv[3]

// forecast(latitude ,longtitude , (error , data) => {
//     console.log("ERROR : " , error)
//     console.log("DATA  : " , data)

//     if (data) {
//         geocode (data.address , (error , data) => {
//             console.log("ERROR : " , error)
//             console.log("DATA  : " , data)   
//         } )
//     } else {
//         console.log("Data Entered have An Error")
//     } 
// } )



//  GET (country )==> give(latitude,longtitude) ////////////////////////////////////////////////////////////////////////////////////

// const country = process.argv[2]

// geocode ( country , (error , data) => {
//     console.log("ERROR : " , error)
//     console.log("DATA  : " , data)

//     if (data) {
//         forecast( data.latitude , data.longtitude , (error , data) => {
//             console.log("ERROR : " , error)
//             console.log("DATA  : " , data)
//        } )
//     } else {
//         console.log("Data Entered have An Error")
//     }
   
// } ) 




