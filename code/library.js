let library = []

const addBook = (name,autor,pags,gender) => {
    const infos = {
        name: name,
        autor: autor,
        pags: pags,
        gender: gender
    };
    library.push(infos)
    console.log("Your book has been added sucessfully!!! ")
}

const removeBook = (name) => {
    const indice = library.findIndex(infos => infos.name === name)
    
    if(indice !== -1){
        library.splice(indice, 1);
        console.log("Book removed ")
    }else{
        console.log("Book not found ")
    }
}

const listBooks = () => {
    if(library.length === 0){
        console.log("You don't have any books available ")
    }else{
        console.log("Your books: ")
        library.forEach(infos => {
            console.log(`Name: ${infos.name}, Autor: ${infos.autor} the number of Pags: ${infos.pags}, Gender: ${infos.gender} `);
        });
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {

    console.log("-". repeat(15))
    console.log("THE LIBRARY")
    console.log("SEE THE OPTIONS")
    console.log("-". repeat(15))
    console.log("Digite [1] to add a book: ")
    console.log("Digite [2] to remove a book: ")
    console.log("[3] to list the books: ")
    console.log("[4] to exit")

    readline.question("Choose an option: ", option => {
        switch (option) {
            case "1":
                readline.question("Enter the name of the book: ", name =>{
                    readline.question("Enter the autor of the book: ", autor => {
                        readline.question("Enter the number of pages: ", pags => {
                            readline.question("enter the gender of the book: ", gender =>{
                                addBook(name,autor, pags, gender);
                                menu();
                                    })
                                })
                            })
                        })
                break;
            case "2":
                readline.question("Enter the name of book to be removed: ", name => {
                    removeBook(name);
                    menu()
                });
                break;
            case "3":
                listBooks();
                menu();
                break;
            case "4":
                readline.close();
                break;
            default:
                console.log("The option is invalid. try again ")
                menu();
                break;
        }
    })
}
menu();