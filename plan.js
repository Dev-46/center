const allTds = document.querySelectorAll(".cell2");
const allInputFields = document.querySelectorAll(".input-field");
const allSchoolsFields = document.querySelectorAll(".cell4");

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const montharabic = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
let month_days = 100;
const monthn = month + 3; //the exact code not trying one
const arabic_month_name = montharabic[month + 2]; // the exact code not try one

let daysNamesOrder = [];
let allMonthDaysNames = [];
let allMonthDaysNumbers = [];
let seials = [...Array(month_days).keys()];
////////////////////////////////////////////////////////////////////
// Calender 2026
//const monthn = 12; //try code .......................................................... ibrahim
//const arabic_month_name = "ديسمبر"; // try code ........................................ ibrahim

document.getElementById("month").innerHTML = arabic_month_name;
document.getElementById("year").innerHTML = year;

switch (year) {
  case 2026:
    switch (arabic_month_name) {
      case "مارس":
        daysNamesOrder = [
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22,
          23, 24, 25, 26, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أبريل":
        daysNamesOrder = [
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
        ];

        allMonthDaysNumbers = [
          1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
          23, 25, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "مايو":
        daysNamesOrder = [
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
        ];

        allMonthDaysNumbers = [
          2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23,
          24, 25, 26, 27, 28, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "يونيو":
        daysNamesOrder = [
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22,
          23, 24, 25, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "يوليو":
        daysNamesOrder = [
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
        ];

        allMonthDaysNumbers = [
          1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
          23, 25, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أغسطس":
        daysNamesOrder = [
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22,
          23, 24, 25, 26, 27, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "سبتمبر":
        daysNamesOrder = [
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22,
          23, 24, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أكتوبر":
        daysNamesOrder = [
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
        ];

        allMonthDaysNumbers = [
          1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22,
          24, 26, 27, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "نوفمبر":
        daysNamesOrder = [
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22,
          23, 24, 25, 26, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "ديسمبر":
        daysNamesOrder = [
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22,
          23, 24, 26, 27, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      default:
        break;
    }
    break;
  case 2027:
    switch (arabic_month_name) {
    }
    break;
  case 2028:
    switch (arabic_month_name) {
    }
    break;
  case 2029:
    switch (arabic_month_name) {
    }
    break;
  case 2030:
    switch (arabic_month_name) {
    }
    break;
  case 2031:
    switch (arabic_month_name) {
    }
    break;
  case 2032:
    switch (arabic_month_name) {
    }
    break;
  case 2033:
    switch (arabic_month_name) {
    }
    break;
  default:
    break;
}
//////////////////////////////////////////////////////////////////

let myplans = document.getElementById("plans");
let tabb = document.createElement("table");

tabb.id = "mytable";

document.getElementById("plans").appendChild(tabb);

const cells = [
  "cell1",
  "cell2",
  "cell3",
  "cell4",
  "cell5",
  "cell6",
  "cell7",
  "cell8",
  "cell9",
  "cell10",
  "cell11",
  "cell12",
  "cell13",
  "cell14",
  "cell15",
  "cell16",
  "cell17",
  "cell18",
  "cell19",
  "cell20",
  "cell21",
  "cell22",
  "cell23",
  "cell24",
  "cell25",
  "cell26",
  "cell27",
  "cell28",
  "cell29",
  "cell30",
  "cell31",
  "cell32",
  "cell33",
  "cell34",
  "cell35",
  "cell36",
];

for (let index = 0; index < month_days; index++) {
  let tr = document.createElement("tr");
  tr.setAttribute("id", "tr" + index);
  tr.className = "rows";
  let td1 = document.createElement("td");
  td1.setAttribute("id", "td1" + cells[index]);
  td1.setAttribute("class", "cell cell1");
  td1.innerHTML = index + 1;

  let td2 = document.createElement("td");
  td2.setAttribute("id", "td2" + cells[index]);
  td2.setAttribute("class", "cell cell2");
  td2.innerHTML = allMonthDaysNames[index];

  let td3 = document.createElement("td");
  td3.setAttribute("id", "td3" + cells[index]);
  td3.setAttribute("class", "cell cell3");
  td3.innerHTML = `${allMonthDaysNumbers[index]}-${monthn}-${year}`;

  let td4 = document.createElement("td");
  td4.setAttribute("id", "td4" + cells[index]);
  td4.setAttribute("class", "cell cell4");
  td4.innerHTML = "";

  ////////////////////////////////////////////
  let td5 = document.createElement("input");
  td5.setAttribute("id", "td5" + cells[index]);
  td5.setAttribute("class", "cell cell5 input-field");

  /////////////////////////////////////////////...................... appending cells............................
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  document.getElementById("mytable").appendChild(tr);

  ///////////////////////////////////////////................................

  //////////////////////////////////////////////.......................

  // You can iterate over the resulting NodeList using forEach, for...of, etc.
  allTds.forEach((cell, i) => {
    if (cell.innerHTML === "الثلاثاء") {
      allInputFields[i].value = "1001";
      allSchoolsFields[i].innerHTML = "ادارة";
    } else if (cell.innerHTML === "السبت" && index < 27) {
      //cell.style.color = "red";
      allInputFields[i].value = "1002";
      allSchoolsFields[i].innerHTML = "راحة";
    }
  });
  /////////////////////////////////////////////.......................
  td5.addEventListener("keyup", function () {
    let code = td5.value;
    switch (code) {
      case "1":
        td4.innerHTML = "رقم 1";
        break;
      case "2":
        td4.innerHTML = "رقم 2";
        break;
      case "3":
        td4.innerHTML = "رقم 3";
        break;
      case "4":
        td4.innerHTML = "رقم 4";
        break;

      case "5":
        td4.innerHTML = "الأربع عزب الجديدة الابتدائية";
        break;
      case "6":
        td4.innerHTML = "رقم 6";
        break;

      case "7":
        td4.innerHTML = "البدوية الابتدائية";
        break;
      case "8":
        td4.innerHTML = "رقم 8 ";
        break;

      case "9":
        td4.innerHTML = "البسلقون الابتدائية أ الصباحية ";
        break;

      case "10":
        td4.innerHTML = "رقم 10 ";
        break;

      case "11":
        td4.innerHTML = "البسلقون الابتدائية ب المسائية ";
        break;

      case "12":
        td4.innerHTML = "البسلقون الاعدادية ";
        break;

      case "13":
        td4.innerHTML = "رقم 13 ";
        break;

      case "14":
        td4.innerHTML = "رقم 14 ";
        break;
      case "15":
        td4.innerHTML = "رقم 15 ";
        break;
      case "16":
        td4.innerHTML = "رقم 16 ";
        break;
      case "17":
        td4.innerHTML = "رقم 17 ";
        break;
      case "18":
        td4.innerHTML = "رقم 18 ";
        break;
      case "19":
        td4.innerHTML = "رقم 19 ";
        break;
      case "20":
        td4.innerHTML = "رقم 20 ";
        break;
      case "21":
        td4.innerHTML = "رقم 21 ";
        break;
      case "22":
        td4.innerHTML = "رقم 22 ";
        break;
      case "23":
        td4.innerHTML = "رقم 23 ";
        break;
      case "24":
        td4.innerHTML = "رقم 24 ";
        break;
      case "25":
        td4.innerHTML = "رقم 25 ";
        break;
      case "26":
        td4.innerHTML = "رقم 26 ";
        break;
      case "27":
        td4.innerHTML = "رقم 27 ";
        break;
      case "28":
        td4.innerHTML = "رقم 28 ";
        break;
      case "29":
        td4.innerHTML = "رقم 29 ";
        break;
      case "30":
        td4.innerHTML = "رقم 30 ";
        break;
      case "31":
        td4.innerHTML = "رقم 31 ";
        break;
      case "32":
        td4.innerHTML = "رقم 32 ";
        break;
      case "33":
        td4.innerHTML = "رقم 33 ";
        break;
      case "34":
        td4.innerHTML = "رقم 34 ";
        break;
      case "35":
        td4.innerHTML = "رقم 35 ";
        break;
      case "36":
        td4.innerHTML = "رقم 36 ";
        break;

      case "37":
        td4.innerHTML = "الربعمائة تعليم أساسي - ابتدائي ";
        break;

      case "38":
        td4.innerHTML = "الربعمائة تعليم أساسي - إعدادي ";
        break;

      case "39":
        td4.innerHTML = "الروضة تعليم أساسي - ابتدائي ";
        break;

      case "40":
        td4.innerHTML = "الروضة تعليم أساسي - إعدادي ";
        break;

      case "41":
        td4.innerHTML = "رقم 41 ";
        break;
      case "42":
        td4.innerHTML = "رقم 42 ";
        break;
      case "43":
        td4.innerHTML = "رقم 43 ";
        break;
      case "44":
        td4.innerHTML = "رقم 44 ";
        break;
      case "45":
        td4.innerHTML = "رقم 45 ";
        break;
      case "46":
        td4.innerHTML = "رقم 46 ";
        break;
      case "47":
        td4.innerHTML = "رقم 47 ";
        break;
      case "48":
        td4.innerHTML = "رقم 48 ";
        break;
      case "49":
        td4.innerHTML = "رقم 49 ";
        break;
      case "50":
        td4.innerHTML = "رقم 50 ";
        break;
      case "51":
        td4.innerHTML = "رقم 51 ";
        break;
      case "52":
        td4.innerHTML = "رقم 52 ";
        break;
      case "53":
        td4.innerHTML = "رقم 53 ";
        break;
      case "54":
        td4.innerHTML = "رقم 54 ";
        break;
      case "55":
        td4.innerHTML = "رقم 55 ";
        break;
      case "56":
        td4.innerHTML = "رقم 56 ";
        break;
      case "57":
        td4.innerHTML = "رقم 57 ";
        break;

      case "58":
        td4.innerHTML = "الشعيرة الكبرى تعليم أساسي - ابتدائي ";
        break;

      case "59":
        td4.innerHTML = "الشعيرة الكبرى تعليم أساسي - إعدادي ";
        break;
      case "60":
        td4.innerHTML = "رقم 60 ";
        break;

      case "61":
        td4.innerHTML = "الشنديدي الجديدة الابتدائية ";
        break;
      case "62":
        td4.innerHTML = "رقم 62 ";
        break;
      case "63":
        td4.innerHTML = "رقم 63 ";
        break;

      case "64":
        td4.innerHTML = "الشهيد ابراهيم امبارك الابتدائية ";
        break;
      case "65":
        td4.innerHTML = "رقم 65 ";
        break;
      case "66":
        td4.innerHTML = "رقم 66 ";
        break;
      case "67":
        td4.innerHTML = "رقم 67 ";
        break;
      case "68":
        td4.innerHTML = "رقم 68 ";
        break;
      case "69":
        td4.innerHTML = "رقم 69 ";
        break;
      case "70":
        td4.innerHTML = "رقم 70 ";
        break;

      case "71":
        td4.innerHTML = "الشهيد شحاتة عبدالفتاح دسوقي الابتدائية ";
        break;
      case "72":
        td4.innerHTML = "رقم 72 ";
        break;
      case "73":
        td4.innerHTML = "رقم 73 ";
        break;
      case "74":
        td4.innerHTML = "رقم 74 ";
        break;
      case "75":
        td4.innerHTML = "رقم 75 ";
        break;
      case "76":
        td4.innerHTML = "رقم 76 ";
        break;
      case "77":
        td4.innerHTML = "رقم 77 ";
        break;
      case "78":
        td4.innerHTML = "رقم 78 ";
        break;
      case "79":
        td4.innerHTML = "رقم 79 ";
        break;
      case "80":
        td4.innerHTML = "الشهيد محمد سعد عبد الواحد تعليم أساسي - ابتدائي ";
        break;

      case "81":
        td4.innerHTML = "الشهيد محمد سعد عبد الواحد تعليم أساسي - إعدادي ";
        break;
      case "82":
        td4.innerHTML = "رقم 82 ";
        break;
      case "83":
        td4.innerHTML = "رقم 83 ";
        break;
      case "84":
        td4.innerHTML = "رقم 84 ";
        break;
      case "85":
        td4.innerHTML = "رقم 85 ";
        break;
      case "86":
        td4.innerHTML = "رقم 86 ";
        break;
      case "87":
        td4.innerHTML = "رقم 87 ";
        break;
      case "88":
        td4.innerHTML = "رقم 88 ";
        break;
      case "89":
        td4.innerHTML = "رقم 89 ";
        break;

      case "90":
        td4.innerHTML = "الطاهر الصافي الابتدائية ";
        break;
      case "91":
        td4.innerHTML = "رقم 91";
        break;

      case "92":
        td4.innerHTML = "الطاهر الصافي الإعدادية ";
        break;

      case "93":
        td4.innerHTML = "الطرح تعليم أساسي - ابتدائي ";
        break;

      case "94":
        td4.innerHTML = "الطرح تعليم أساسي - إعدادي ";
        break;
      case "95":
        td4.innerHTML = "رقم 95 ";
        break;
      case "96":
        td4.innerHTML = "رقم 96 ";
        break;
      case "97":
        td4.innerHTML = "رقم 97 ";
        break;
      case "98":
        td4.innerHTML = "رقم 98 ";
        break;
      case "99":
        td4.innerHTML = "رقم 99 ";
        break;
      case "100":
        td4.innerHTML = "رقم 100 ";
        break;

      case "1001":
        td4.innerHTML = "الادارة";
        break;

      case "1002":
        td4.innerHTML = "راحة";
        break;

      case "121":
        td4.innerHTML = "الملقة الابتدائية";
        break;
      case "122":
        td4.innerHTML = "الملقة الاعدادية";
        break;
      case "123":
        td4.innerHTML = "رقم 123";
        break;
      case "124":
        td4.innerHTML = "رقم 124";
        break;
      case "125":
        td4.innerHTML = "رقم 125";
        break;
      case "126":
        td4.innerHTML = "رقم 126";
        break;
      case "127":
        td4.innerHTML = "رقم 127";
        break;
      case "128":
        td4.innerHTML = "رقم 128";
        break;
      case "129":
        td4.innerHTML = "رقم 129";
        break;
      case "130":
        td4.innerHTML = "رقم 130";
        break;
      case "131":
        td4.innerHTML = "رقم 131";
        break;
      case "122":
        td4.innerHTML = "الملقة الاعدادية";
        break;

      case "133":
        td4.innerHTML = "الوكيل تعليم أساسي - ابتدائي";
        break;
      case "134":
        td4.innerHTML = "رقم 134";
        break;
      case "135":
        td4.innerHTML = "رقم 135";
        break;
      case "136":
        td4.innerHTML = "رقم 136";
        break;
      case "137":
        td4.innerHTML = "رقم 137";
        break;
      case "138":
        td4.innerHTML = "رقم 138";
        break;
      case "139":
        td4.innerHTML = "رقم 139";
        break;
      case "140":
        td4.innerHTML = "رقم 140 ";
        break;

      case "141":
        td4.innerHTML = "أبوزيد خليفة تعليم أساسي - ابتدائي";
        break;

      case "142":
        td4.innerHTML = "أبوزيد خليفة تعليم أساسي - إعدادي";
        break;
      case "143":
        td4.innerHTML = "رقم 143";
        break;
      case "144":
        td4.innerHTML = "رقم 144";
        break;
      case "145":
        td4.innerHTML = "رقم 145";
        break;
      case "146":
        td4.innerHTML = "رقم 146";
        break;
      case "147":
        td4.innerHTML = "رقم 147";
        break;
      case "148":
        td4.innerHTML = "رقم 148";
        break;
      case "149":
        td4.innerHTML = "رقم 149";
        break;
      case "150":
        td4.innerHTML = "رقم 150";
        break;
      case "151":
        td4.innerHTML = "رقم 151";
        break;
      case "152":
        td4.innerHTML = "رقم 152";
        break;
      case "153":
        td4.innerHTML = "رقم 153";
        break;
      case "154":
        td4.innerHTML = "رقم 154";
        break;
      case "155":
        td4.innerHTML = "رقم 155";
        break;
      case "156":
        td4.innerHTML = "رقم 156";
        break;
      case "157":
        td4.innerHTML = "رقم 157";
        break;
      case "158":
        td4.innerHTML = "رقم 158";
        break;
      case "159":
        td4.innerHTML = "رقم 159";
        break;
      case "160":
        td4.innerHTML = "رقم 160";
        break;
      case "161":
        td4.innerHTML = "رقم 161";
        break;
      case "162":
        td4.innerHTML = "رقم 162";
        break;
      case "163":
        td4.innerHTML = "رقم 163";
        break;
      case "164":
        td4.innerHTML = "رقم 164";
        break;
      case "165":
        td4.innerHTML = "رقم 165";
        break;

      case "166":
        td4.innerHTML = " بردلة الابتدائية";
        break;
      case "167":
        td4.innerHTML = "رقم 167";
        break;
      case "168":
        td4.innerHTML = "رقم 168";
        break;
      case "169":
        td4.innerHTML = "رقم 169";
        break;
      case "170":
        td4.innerHTML = "رقم 170";
        break;
      case "171":
        td4.innerHTML = "رقم 171";
        break;
      case "172":
        td4.innerHTML = "رقم 172";
        break;
      case "173":
        td4.innerHTML = "رقم 173";
        break;
      case "174":
        td4.innerHTML = "رقم 174";
        break;

      case "175":
        td4.innerHTML = " جاب الله تعليم أساسي - ابتدائي";
        break;

      case "176":
        td4.innerHTML = " جاب الله تعليم أساسي - إعدادي";
        break;
      case "177":
        td4.innerHTML = "رقم 177";
        break;
      case "178":
        td4.innerHTML = "رقم 178";
        break;
      case "179":
        td4.innerHTML = "رقم 179";
        break;
      case "180":
        td4.innerHTML = "رقم 180";
        break;
      case "181":
        td4.innerHTML = "رقم 181";
        break;
      case "182":
        td4.innerHTML = "رقم 182";
        break;
      case "183":
        td4.innerHTML = "رقم 183";
        break;
      case "184":
        td4.innerHTML = "رقم 184";
        break;
      case "185":
        td4.innerHTML = "رقم 185";
        break;
      case "186":
        td4.innerHTML = "رقم 186";
        break;
      case "187":
        td4.innerHTML = "رقم 187";
        break;
      case "188":
        td4.innerHTML = "رقم 188";
        break;

      case "189":
        td4.innerHTML = " حوض 7 تعليم أساسي - ابتدائي";
        break;

      case "190":
        td4.innerHTML = " حوض 7 تعليم أساسي - إعدادي";
        break;
      case "191":
        td4.innerHTML = "رقم 191";
        break;
      case "192":
        td4.innerHTML = "رقم 192";
        break;

      case "193":
        td4.innerHTML = "رقم 193";
        break;

      case "194":
        td4.innerHTML = "رقم 194";
        break;
      case "195":
        td4.innerHTML = "رقم 195";
        break;
      case "196":
        td4.innerHTML = "رقم 196";
        break;
      case "197":
        td4.innerHTML = "رقم 197";
        break;
      case "198":
        td4.innerHTML = "رقم 198";
        break;

      case "199":
        td4.innerHTML = " زكي الابراشي الابتدائية";
        break;
      case "200":
        td4.innerHTML = "رقم 200";
        break;

      case "201":
        td4.innerHTML = " زكي الابراشي الاعدادية";
        break;
      case "202":
        td4.innerHTML = "رقم 202";
        break;
      case "203":
        td4.innerHTML = "رقم 203";
        break;
      case "204":
        td4.innerHTML = "رقم 204";
        break;

      case "205":
        td4.innerHTML = " زهرة الابتدائية المشتركة";
        break;
      case "206":
        td4.innerHTML = "رقم 206";
        break;

      case "207":
        td4.innerHTML = " زهرة الإعدادية";
        break;
      case "208":
        td4.innerHTML = "رقم 208";
        break;
      case "209":
        td4.innerHTML = "رقم 209";
        break;
      case "210":
        td4.innerHTML = "رقم 210";
        break;
      case "211":
        td4.innerHTML = " سيدي غازي الثانوية ";
        break;

      case "212":
        td4.innerHTML = " سيدي غازي الثانوية ";
        break;
      case "213":
        td4.innerHTML = "رقم 213";
        break;
      case "214":
        td4.innerHTML = "رقم 214";
        break;
      case "215":
        td4.innerHTML = "رقم 215";
        break;
      case "216":
        td4.innerHTML = "رقم 216";
        break;

      case "217":
        td4.innerHTML = "شبل الابتدائية";
        break;
      case "218":
        td4.innerHTML = "رقم 218";
        break;

      case "119":
        td4.innerHTML = " شركة عواد تعليم أساسي - ابتدائي";
        break;

      case "220":
        td4.innerHTML = " شركة عواد تعليم أساسي - إعدادي";
        break;
      case "221":
        td4.innerHTML = "رقم 221";
        break;
      case "222":
        td4.innerHTML = "رقم 222";
        break;
      case "223":
        td4.innerHTML = "رقم 223";
        break;
      case "224":
        td4.innerHTML = "رقم 224";
        break;
      case "225":
        td4.innerHTML = "رقم 225";
        break;
      case "226":
        td4.innerHTML = "رقم 226";
        break;
      case "227":
        td4.innerHTML = "رقم 227";
        break;
      case "228":
        td4.innerHTML = "رقم 228";
        break;
      case "229":
        td4.innerHTML = "رقم 229";
        break;
      case "230":
        td4.innerHTML = "رقم 230";
        break;
      case "231":
        td4.innerHTML = "رقم 231";
        break;
      case "232":
        td4.innerHTML = "رقم 232";
        break;
      case "233":
        td4.innerHTML = "رقم 233";
        break;
      case "234":
        td4.innerHTML = "رقم 234";
        break;
      case "235":
        td4.innerHTML = "رقم 235";
        break;
      case "236":
        td4.innerHTML = "رقم 236";
        break;

      //////////////////////////////////////////////////////////////////////////

      case "237":
        td4.innerHTML = "ضيف الابتدائية ";
        break;
      case "238":
        td4.innerHTML = "رقم 238";
        break;
      case "239":
        td4.innerHTML = "رقم 239";
        break;
      case "240":
        td4.innerHTML = "رقم 240";
        break;
      case "241":
        td4.innerHTML = "رقم 241";
        break;

      case "242":
        td4.innerHTML = "عبد الصمد النمر المغازي الابتدائية - ابتدائ";
        break;
      case "243":
        td4.innerHTML = "عبد الصمد النمر المغازي  - إعدادي";
        break;
      case "244":
        td4.innerHTML = "رقم 244";
        break;
      case "245":
        td4.innerHTML = "رقم 245";
        break;
      case "246":
        td4.innerHTML = "رقم 246";
        break;
      case "247":
        td4.innerHTML = "رقم 247";
        break;

      case "248":
        td4.innerHTML = " عبد القادر خليف تعليم أساسي - إعدادي ";
        break;
      case "249":
        td4.innerHTML = " رقم 249 ";

      case "250":
        td4.innerHTML = "عزب نوبار الابتدائية المشتركة";
        break;
      case "251":
        td4.innerHTML = "رقم 251";
        break;
      case "252":
        td4.innerHTML = "رقم 252";
        break;
      case "253":
        td4.innerHTML = "رقم 253";
        break;

      case "254":
        td4.innerHTML = "رقم 254";
        break;
      case "255":
        td4.innerHTML = "رقم 255";
        break;
      case "256":
        td4.innerHTML = "رقم 256";
        break;
      case "257":
        td4.innerHTML = "رقم 257";
        break;
      case "258":
        td4.innerHTML = "رقم 258";
        break;
      case "259":
        td4.innerHTML = "رقم 259";
        break;
      case "260":
        td4.innerHTML = "رقم 260";
        break;

      case "261":
        td4.innerHTML = " فصول مرجان الإعدادية";
        break;
      case "262":
        td4.innerHTML = "رقم 262";
        break;
      case "263":
        td4.innerHTML = "رقم 263";
        break;

      case "264":
        td4.innerHTML = " قومبانية أبوقير الابتدائية";
        break;

      case "265":
        td4.innerHTML = " قومبانية أبوقير الاعدادية المشتركة";
        break;

      case "266":
        td4.innerHTML = " قومبانية لوقين الابتدائية";
        break;
      case "267":
        td4.innerHTML = "   رقم 267";
        break;

      case "268":
        td4.innerHTML = " قومبانية لوقين الإعدادية";
        break;

      /*/ مش مدارسي*/
      case "278":
        td4.innerHTML = "  كوم الطرفايةالإعدادية";
        break;

      case "296":
        td4.innerHTML = "مرجان الأبتدائية";
        break;

      case "298":
        td4.innerHTML = "معتوق تعليم أساسي - ابتدائي";
        break;

      case "299":
        td4.innerHTML = "معتوق تعليم أساسي - إعدادي";
        break;

      case "305":
        td4.innerHTML = "معمل القزاز الثانوية المشتركة";
        break;

      case "315":
        td4.innerHTML = "منشأة أبوقير تعليم أساسي - ابتدائي";
        break;

      case "316":
        td4.innerHTML = "منشأة أبوقير تعليم أساسي - إعدادي";
        break;

      case "325":
        td4.innerHTML = "منصور الشنديدي الابتدائية ";
        break;

      default:
        td4.innerHTML = "لم تكود بعد";
        break;
    }
  });
}

const recieverInput = [
  "td5cell1",
  "td5cell2",
  "td5cell3",
  "td5cell4",
  "td5cell5",
  "td5cell6",
  "td5cell7",
  "td5cell8",
  "td5cell9",
  "td5cell10",
  "td5cell11",
  "td5cell12",
  "td5cell13",
  "td5cell14",
  "td5cell15",
  "td5cell16",
  "td5cell17",
  "td5cell18",
  "td5cell19",
  "td5cell20",
  "td5cell21",
  "td5cell22",
  "td5cell23",
];

let myinput = document.getElementById("providerinput");

let currentInd = -1;
const inputs = document.querySelectorAll(".input-field");

function moveFocus(direction) {
  // حساب المؤشر الجديد (مع معالجة الأرقام السالبة للرجوع للخلف)
  currentInd = (currentInd + direction + inputs.length) % inputs.length;

  inputs[currentInd].focus();

  document.getElementById(recieverInput[currentInd]).style.backgroundColor =
    "rgba(49, 47, 47, 0.18)";
  document.getElementById(recieverInput[currentInd]).style.color =
    "rgba(253, 251, 251, 0.93)";
  document.getElementById(recieverInput[currentInd]).style.textShadow =
    "1px 2px 3px rgba(5, 5, 5, 0.93)";
}
