const size = process.argv.slice(2)
const Diamond = (size)=>{
    for(var i=1;i<=size;i++){
       for(let s=size-1;s>=i;s--){
          process.stdout.write(" ");
       }
       for(let j=1;j<=i;j++){
          process.stdout.write("* ")
       }
       console.log();
    }
    if(i ==size+1){
       for(let i=0;i<=size-1;i++){
          for(let s=1;s<=i;s++){
             process.stdout.write(" ");
          }
          for(j=i;j<=size-1;j++){
             process.stdout.write("* ");
          }
          console.log();
       }
    }
 }
 Diamond(parseInt(size));

