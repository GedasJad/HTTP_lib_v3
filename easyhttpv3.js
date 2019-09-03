/**
 * 
 * EasyHTTP lib
 * Lib for making HTTP requests
 * 
 * @version 3.0
 * @author Gediminas Jadkauskas
 * @license MIT
 * 
 */


 class easyHTTP{

  async get(url){

    const response = await fetch(url);
    
    const resData = await response.json();

    return resData;
  };

  async post(url, data){

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;

  };

  async delete(url){

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await 'Resource Deleted';

    return resData;
  };
 };