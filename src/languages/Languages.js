class Languages {

    checkForSessionStorageNotUndefinied() {
        if (typeof (sessionStorage) != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    blabla() {
        if (this.checkForSessionStorageNotUndefinied() == true) {
            if(sessionStorage.getItem("lang") == "gb"){
                return "GB";
            } else{
                return "IT";
            }
        } else{
            return "IT";
        }
    }

    indexTitle1() {
        if (this.checkForSessionStorageNotUndefinied() == true) {
            if(sessionStorage.getItem("lang") == "gb"){
                return "GB";
            } 
        } else{
            return "IT";
        }
    }
}
module.exports.Languages = Languages;