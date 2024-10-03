let now : Date = new Date();

const todayIs : number = now.getDay();
switch(todayIs){
    case 0:
        console.log("Minggu");
        break
    case 1:
        console.log("Senin");
        break
    case 2:
        console.log("Selasa");
        break
    case 3:
        console.log("Rabu");
        break
    case 4:
        console.log("Kamis");
        break
    case 5:
        console.log("Jumat");
        break
    case 6:
        console.log("Sabtu");
        break;
}

