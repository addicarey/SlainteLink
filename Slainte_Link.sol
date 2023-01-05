// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Form {

    uint256 count = 0;
// structure person stores variables in the form AC
    struct Person{
        uint256 id;
        string name;
        uint8 age;
        uint256 phone;
         uint256 bmi;
         uint256 bp;
         uint256 height;
         string email;
         string dob;

        
        
    }
// allows you to look up a person by their id AC
     mapping (uint256 => Person) public Persons;
// stores all of the people added to the contract AC
     Person[] People;
// stores new person in the contract, takes the variables as inputs, created new person using the input data & stores it in the mapping and array, increments the count of the number of people stored AC
    function storePerson(string calldata name, uint8 age, uint256 phone, uint256 bmi, uint256 bp, uint256 height, string calldata email, string calldata dob) public {
        Person memory newPerson = Person(count,name,age, phone, bmi, bp, height, email, dob);
   
        Persons[count] = newPerson;
        
        count++;
        
        People.push(newPerson);

    }
// allows you to retrieve a person by their id, it takes as input an id and returns the person stored in the mapping with that id AC
    function getPersonById(uint256 id) public view returns (Person memory reqPerson){
        return Persons[id];
    }
// returns an array of all the people stored in the contract AC
    function getAllPersons()public view returns (Person[] memory reqPersons){
        return People;
    }

}
