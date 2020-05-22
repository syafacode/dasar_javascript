function myObject() {
    var smartPhone = {
        type: 'Samsunk Note10+',
        harga: 14000000,
        warna: 'jingga',
        tahun : [2006,2014,2020,2019]
    }
    //show object
    console.log(smartPhone);
    //how to specific
    console.log(smartPhone.type);
    //show array using index
    console.log(smartPhone.tahun[0]);
    //in case text
    console.log(`Harga HP ${smartPhone.type} keluaran tahun ${smartPhone.tahun[2]} mencapai ${smartPhone.harga}
tersedia warna ${smartPhone.warna} saja.`);
}

myObject();