class visitor {
    constructor(id, firstName, lastName, address, city, state, postal, email, phone, comments) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.postal = postal;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
    }

    get fullName() {
        return this.lastName + ", " + this.firstName;
    }
    get fullAddress() {
        return this.address + " " + this.city + ", " + this.state + " " + this.postal;
    }
}

var visitors = [
    new visitor(1, "Bob", "Dole", "601 Pennsylvania Ave, N.W", "Washington", "DC", "2004", "bobdole@government.chair", "202-654-4848", "None"),
    new visitor(2, "Test", "McTest", "123 Fake Lane", "Pseudopolis", "IN", "47712", "test@ben310.com" , "505-505-5555", "none"),
    new visitor(3, "Naomi", "Priest", "963 W 670 S Unit 22", "Pleasant Grove", "UT", "84062", "notreal@trans?com", "812-682-1451", "none")
];


function modelAddVisitor(newVisitor) {
    visitors.push(newVisitor);
}
function modelDeleteVisitor(id) {
    let index = findVisitorIndex(id);
    visitors.splice(index, 1);
}
function findVisitor(id) {
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return visitors[i];
        } else {
            return -1;
        }
    } 
}
function findVisitorIndex(id) {
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return i;
        } else {
            return -1;
        }
    }
}
