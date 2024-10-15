function repeatString(n: number, s: string): string {
    // Your code here
    let result:string="";
    for (let index = 0; index < n; index++) {
        result +=s;        
    }
    return result ;

  }
  

  console.log(repeatString(3,"hello"))