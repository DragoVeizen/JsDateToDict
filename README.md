# JsDateToDict

This function takes in  a dictionary D where key is of form YYYY-MM-DD and its corresponding value is an integer t, returns a new dictionary D such that: </br>

1)Its key (type:string) is a Day :[Mon,..Sun]</br>

2)Its corressponding value (type:INT) is a sum of values on that day</br> 

3)If input dictionary doesnt have a particular day that the output dicitonary will have value of that day as the mean of the previous and next day 
do this in javascript</br>

#### With the condtions :</br>
1)Key is in for YYYY-MM-DD in string format</br>

2)Corresponding value for each key is random between -100000 to 100000</br>

3)There will be atleast one key where the date is a sunday and a monday</br>

4)Range of the key is 1970-01-01 to 2100-01-01</br>


------------------------------------------------------------------------------------------
### Prequisites
- Run on terminal : <code>npm i</code> </br>
### To run the function and test it
- Run the function : <code>node dataJs.js</code>
- Run the tests : <code>npm run test</code></br>
