# password-generator

* URL: https://samwise2980.github.io/password-generator
* GitHub URL: https://github.com/Samwise2980/password-generator

# Steps to Create Password Generator

* Created arrays for each character type selected.
* Promted the user to enter a password length. If they choose something smaller or greater than the required number, then it would prompt them again to input a valid number.
* Confirmed that the user would want each character selector: lowercase, uppercase, numeric, and special character.
* If the user did no select any of those options, then they would be alerted that the password could not generat. 
* It would then end the function and spit out text saying could not generate, please try again!
* If they did select atleast one, then the function would continue.
* Each of the selected options arrays would then be added to one main array.
* It would run a for loop as many times as the password required. Each time pulling a single string from the main array.
* Then it would add it to my empty password variable.
* Once done with the for loop, it would print the password.