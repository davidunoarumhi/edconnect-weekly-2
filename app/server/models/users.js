const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        var user = this.getByEmail(email);
        if (user != null) {
            if (user.password === password) {
                return true;
            }
            return false;
        }
        return false;
    }

    getByEmail(email) {
        let obj = this.data.find(obj => obj.email == email);
        if (obj === undefined) {
            return null;
        } else {
            return obj;
        }
    }

    getByMatricNumber(matricNumber) {
        let obj = this.data.find(obj => obj.matricNumber == matricNumber);
        if (obj === undefined) {
            return null;
        } else {
            return obj;
        }
    }

    validate(obj) {
        if (obj.firstname.length == 0 ||
             obj.lastname.length == 0 ||
              obj.email.length == 0 ||
               obj.password.length == 0 ||
                obj.matricNumber.length == 0 ||
                 obj.program.length == 0 ||
                  obj.graduationYear.length == 0
                  ) {
            return false;
        }
        if ((this.data.find(test => test.email == obj.email)) !== undefined) {
            return false;
        }
        if ((this.data.find(test => test.matricNumber == obj.matricNumber)) !== undefined) {
            return false;
        }
        if (obj.password.length < 7) {
            return false;
        }
        return true;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};