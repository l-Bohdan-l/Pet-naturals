
const orderDate = document.getElementById('date');

const dateObj = new Date();

const getDate = function (date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let numDay = date.getDate();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if (day < 10) day = "0" + day;
   
    const resultDate = day + "." + month + "." + year;
   return resultDate
}

const finaltDate = getDate(dateObj);
export default orderDate.textContent = finaltDate;