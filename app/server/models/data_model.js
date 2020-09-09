class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        //return the object with the specified id if such an object exists
        let obj = this.data.find(obj => obj.id == id);
        if (obj === undefined) {
            return null;
        } else {
            return obj;
        }
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        // updates the properties of an object in the data array with the specified id
        let item = this.data.find(item => item.id == id);
        if (item === undefined) {
            //item is equal to undefined when it cannot be found
            return false;
        }
        else {
            //loop over found item and obj passed in method and update properties with same property name
            for (var x in item) {
                for (var y in obj) {
                    if (x === y){
                      item[x] = obj[y];
                    }
                    else {
                      continue;
                    }
                }
            }
            return true;
        }
    }

    delete(id) {
        //deletes the object with the specified id
        var index = this.data.map(function(item) { return item.id; }).indexOf(id);
        if (index > -1) {
            // remove object
            this.data.splice(index, 1);
            return true;
        } else if (index === -1) {
            return false;
        }
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;