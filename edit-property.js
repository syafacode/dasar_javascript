function myObject() {
    var smartPhone = {
        type: 'Samsunk Note10+',//type merupakan property, Samsunk Note10+ merupakan value dari type
        harga: 14000000,
        warna: 'jingga',
        tahun : [2006,2014,2020,2019]
    }
    //mengubah value ke typedata integer
    //dapat diubah dalam bentuk apapun
    smartPhone.type = 77;
    console.log(smartPhone);
}

myObject();