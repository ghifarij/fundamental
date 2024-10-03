//Write a code to find area of triangle
//define variable and assign value to variable
    const panjang : number = 5;
    const lebar : number = 3;

//define variable to keep the result
    const luasPersegi : number = panjang * lebar;
    console.log(`Luas persegi = ${luasPersegi}`)

//Write a code to find perimeter of rectangle
    const kelilingPersegi : number = 2 * (panjang + lebar);
    console.log(`Keliling persegi = ${kelilingPersegi}`);

//Write a code to find diameter, circumference, and area of circle
    const radius : number = 5;

    //diameter = radius * 2
    const diameter : number = radius * 2;
    console.log(`Diameter lingkaran = ${diameter}`);

    //keliling = 3.14159 * diameter
    const kelilingLingkaran : number = 3.14159 * diameter;
    console.log(`Keliling lingkaran = ${kelilingLingkaran}`);

    //luas = 3.14159 * radius^2
    const luasLingkaran : number = 3.14159 * (radius ** 2);
    console.log(`Luas lingkaran = ${luasLingkaran}`);

//Write a code to find angles of triangle if two angles are given
    //Define angles of the triangle
    const angles1 : number = 80;
    const angles2 : number = 65;

    //find the third angle using built-in function JavaScript Math.sqrt()
    const angles3 : number = 180 - (angles1 + angles2);
    console.log(`Sudut segitiga = ${angles3}`);

//Write a code to convert days to years, months and days(notes 1 years : 365 days, 1 month 30 days)
    const totalHari : number = 366;
    const tahun : number = Math.floor(totalHari / 365);
    const bulan : number = Math.floor(totalHari % 365 / 30); //400 hari dikurangi 365 hari = 35 hari dibagi 1 bulan (30 hari)
    const hari : number = Math.floor(totalHari % 365 % 30);
  
   
    console.log(`${tahun} tahun, ${bulan} bulan, ${hari} hari`);

/*
    Instructor solution
    const n : number = 400;

    const sisa : number = n % 365;
    const sisa2 : number = sisa % 30;

    const tahun : number = (n - sisa) / 365;
    const bulan : number = (sisa - sisa2 ) / 30;
    const hari : number = sisa2;

    const result : string = (`${tahun} tahun, ${bulan} bulan, ${hari} hari`);
    console.log(result);
*/

//Write a code to get difference between dates in day
    const tanggal1 : Date = new Date("2022-01-20");
    const tanggal2 : Date = new Date("2022-01-22");

    //Ngubah waktu dari waktu awal (1970) sampai ke waktu yang dicari (2022-01-22 & 2022-01-20)
    const differenceTime : number = tanggal2.getTime() - tanggal1.getTime();

    const differenceDate : number = differenceTime / 1000 / 3600 / 24;
    console.log(`Beda waktu: ${differenceDate} Hari`);