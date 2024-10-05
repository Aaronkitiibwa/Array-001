//return an array of ages using the years array above

const years = [1993, 1994, 1995, 1996];

const ages = [];
for (i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);
