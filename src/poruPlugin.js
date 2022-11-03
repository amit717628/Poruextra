const axios = require("axios");
const poru = require("poru");
class poruPlugin{


// I'm Using Rapid API to get data from the source , You can make 10 requests per minute 
// It may take some time to get your result, Api is slow
    async search(query,type){
        try {
          if(!type) throw new Error("You have to pass search type.");
   if(typeof type !== "string") throw new Error("Search Type Must Be In String.")
        const options = {
            method: 'GET',
            url: 'https://musicdetails.p.rapidapi.com/api',
            params: {query: `${query}`, type: `${type}`},
            headers: {
              'X-RapidAPI-Key': '7002b9fcfemsh1be2500d37fa41ap1e9bb0jsn61ba02c6a33d',
              'X-RapidAPI-Host': 'musicdetails.p.rapidapi.com'
            }
          };
          const ax = await axios.request(options)
          const result = await ax.data;
          return result;   
        } catch(error){
            let errors = "[501] Wrong Search Type Or Api Connection Issue"
        return errors
        }    
    }



        }
    


module.exports = poruPlugin;

/**
 * These Project is under development.
 * These is not the officical plugin.
 * These is only for private use.
 * More features will be updated soon.
 */