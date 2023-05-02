function validatePassword(password) {
    /*g.test() is a regular expression method in JavaScript that searches a string for 
        a pattern and returns a Boolean indicating whether the pattern was found. 
    */
    if(password.length >=8 && /[a-zA-Z]/g.test(password) && /[0-9]/g.test(password)){
        return true
    }
    return false
}

module.exports = validatePassword;