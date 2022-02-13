function drawTriangle(size) {

   // Your solution goes here

   for (let i=0; i < size; i++) {
      let str = "";
      for (let j=0; j <= i; j++) {
         str += "*";
      }
      console.log(str);
   }
}