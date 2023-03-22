const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

// console.log(candies); // prints all objects
// console.log(candies[1]['name']); // prints name for object with index 1
// console.log(candies[1]['price']); // prints value for object with index 1



function searchCandies(search_string, max_price) {
    result_list = []
    candies.forEach ((item) => {
        if (item['name'].toLowerCase().startsWith(search_string.toLowerCase()) && item['price'] < max_price) {
            result_list.push(item.name);
        }
    });
    return result_list;
};

// const search1 = searchCandies('P',7);
// console.log(search1);

module.exports = searchCandies;