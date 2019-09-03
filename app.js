const http = new easyHTTP;

//get users
// http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));

// user data
const data = {
  name: 'ged',
  username: 'gedas259',
  email: 'ged@gmail.com'
}

//create post
http.post('https://jsonplaceholder.typicode.com/users', data).then(data => console.log(data)).catch(err => console.log(err));

// //update post
// http.put('https://jsonplaceholder.typicode.com/users/2',data).then(data => console.log(data)).catch(err => console.log(err));


//Delete post
// http.delete('https://jsonplaceholder.typicode.com/users/2',data).then(data => console.log(data)).catch(err => console.log(err));