function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function (cb) {
    let self = this;

    setTimeout(function () {
        self.initialComplete = true;
        if (cb){
            return cb();
        }
        
    }, 3);
    
}

