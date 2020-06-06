function myObject() {
    var smartPhone = {
        type: 'Samsunk Note10+',//type merupakan property, Samsunk Note10+ merupakan nilai dari type
        harga: 14000000,
        warna: 'jingga',
        tahun : [2006,2014,2020,2019]
        //tidak ada property versi
    }
    smartPhone.harga = 1000000;
    //add property and value of the property
    smartPhone.versi = 'China'
    console.log(smartPhone);
    console.log(smartPhone.harga);
    
}

myObject();