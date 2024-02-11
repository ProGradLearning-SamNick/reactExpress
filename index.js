// // let http = require('http');
// // http
// //   .createServer(function (req, res) {
// //     res.write('<h1>Hello World</h1>');
// //     res.end();
// //   })
// //   .listen(8080, () => {
// //     console.log('Server is running on port 8080');
// //   });

// const DOMDATA = `
// <input type="text" id="name" placeholder="Enter Name"/>
// <input type="text" id="age" placeholder="Enter Age"/>
// <button id="submit" onClick={fetch("localhost:8080/home",{
//     method: "POST",
//     body: JSON.stringify({
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then }>Submit</button>
// `;
// function responce() {
//   var name = document.getElementById('name').value;
//   var age = document.getElementById('age').value;
//   console.log(name, age);
// }
// app.get('/', function (req, res) {
//   let data = [
//     {
//       id: 1,
//       name: 'Nguyen Van A',
//       age: 20,
//     },
//     {
//       id: 2,
//       name: 'Nguyen Van B',
//       age: 21,
//     },
//     {
//       id: 3,
//       name: 'Nguyen Van C',
//       age: 22,
//     },
//   ];
//   //   res.json({ data, message: 'Fetch Complete' });
//   res.send({ data, Message: 'Fetch Complete' });
//   // res.send('<h1>Hello World!</h1>');
// });

// app.get('/home', function (req, res) {
//   res.send(DOMDATA);
// });

// app.post('/home', function (req, res) {
//   console.log(req.body);
//   res.send(req.body);
// });

// app.listen(8080, function () {
//   console.log('Server is running on port 8080');
// });

var experss = require('express');
var app = experss();
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

app.use = experss.json();
let dburl =
  'mongodb+srv://samnick:57489Raj@cluster0.cftjlbj.mongodb.net/?retryWrites=true&w=majority';

// app.get('/', async function (req, res) {
//   let connect = await MongoClient.connect(url);
//   try {
//     let db = await connect.db('sample_mflix');
//     let collection = await db.collection('comments');
//     res.json({
//       message: 'display all records',
//       collection,
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     connect.close();
//   }

app.get('/', async function (req, res) {
  const client = await mongoClient.connect(dburl);
  try {
    let db = await client.db('sample_mflix');
    let user = await db.collection('comments').find().toArray();
    res.json({
      message: 'Displaying all records',
      user,
    });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

app.get('/', async function (req, res) {
  const client = await mongoClient.connect(dburl);
  try {
    let db = await client.db('sample_mflix');
    let user = await db.collection('comments').find().toArray();
    res.json({
      message: 'Displaying all records',
      user,
    });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

app.listen(8080, function () {
  console.log('Server is running on port 8080');
});
