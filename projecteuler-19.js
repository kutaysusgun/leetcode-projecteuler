// посчитать кол-во воскресений, которые выпадали на 1 число ЛЮБОГО месяца с 1901 по 2000 года

function go() {
    var year = 1900;
    var nweek = 0;
    var sundays = 0;
    while(year <= 2000) {
        for(var month=1; month<=12; month++) {
            nweek++;
            if(nweek % 7 == 0 && year>=1901) {sundays++;$('#dates').append('1.'+month+'.'+year+'<br>');}
            switch(month) {
                case 2:
                    nweek+=27;
                    if( (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year % 100 == 0)) nweek++;
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    nweek+=30; break;
                default: nweek+=29;
            }
        }
        year++;
    }
    $('#sundays').html('sundays: '+sundays);
}

go();