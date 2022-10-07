function newUser(name, age, country){
    var name = name || 'Guillermo';
    var age = age || '22';
    var country = country || 'CR';
}
newUser();
newUser('Eduardo',20,'CR');

function newAdmin(name= 'Guillermo', age = 23, country= 'CR'){
    console.log(name,age,country)
}
newAdmin();
newAdmin('Giselle',45,'CR');