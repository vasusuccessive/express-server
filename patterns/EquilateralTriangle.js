const size = process.argv.slice(2)

const Equilateral = (size)=>{
    for(var i=1;i<=size;i++){
       for(let s=size-1;s>=i;s--){
          process.stdout.write(" ");
       }
       for(let j=1;j<=i;j++){
          process.stdout.write("* ")
       }
       console.log();
    }
   }

   module.exports = Equilateral