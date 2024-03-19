const bcrypt = require("bcrypt");

async function vasu() {
  const secure_password = await bcrypt.hash('vasu1232', 5);
  console.log(secure_password);
}

// Call the function
vasu();

// {
//   "_id": {
//     "$oid": "65f930fcb334445235b0c75d"
//   },
  // "name": "vasudev",
  // "email": "surya@gmail.com",
  // "password": "$2b$05$9rBoRTm9NT4jpkIf5oSABOilhh3p3fml1K6.8sgqIqMgoYj/LRdMe"
// }