const fs=require('fs');
const path=require('path');
module.exports={
    async readFile(){
        // await fs.readFile(path.join(__dirname, "test.txt"),{ encoding: "utf-8" },function(err, byte) {
        //     if (err) throw err;
        //     const file = JSON.parse(byte);                 
        //     return file
        //   }      
        // )
        const res=await new Promise(function(resolve,reject){
            fs.readFile(path.join(__dirname, "test2.md"),{ encoding: "utf-8" },function(err, byte) {
                if (err) 
                    resolve('error')
                else
                    resolve(byte.toString());                                    
              }      
            )
        }).then(function(data){            
            return data;
        });
        return res;        
    }
}