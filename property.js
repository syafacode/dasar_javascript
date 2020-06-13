function myObject() {
    var smartPhone = {
        type: 'Samsunk Note10+',//type merupakan property, Samsunk Note10+ merupakan nilai dari type
        harga: 14000000,
        warna: 'jingga',
        tahun : [2006,2014,2020,2019]
    }
    //change value of harga
    smartPhone.harga = 1000000;
    console.log(smartPhone.harga);
    //in case text
    console.log(`Harga HP ${smartPhone.type} keluaran tahun ${smartPhone.tahun[2]} mencapai ${smartPhone.harga}
tersedia warna ${smartPhone.warna} saja.`);
}

myObject();