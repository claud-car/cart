// import { products } from "./mock";
// import {
//   createCardProduct,
//   createCartItem,
//   createCartCounter,
//   createTotal,
// } from "./utils/cart";
const products = [
  {
    id: 1,
    name: "Wine - Guy Sage Touraine",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 13.39,
    stock: 7,
  },
  {
    id: 2,
    name: "Table Cloth 90x90 Colour",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    price: 12.78,
    stock: 9,
  },
  {
    id: 3,
    name: "Silicone Parch. 16.3x24.3",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    price: 18.32,
    stock: 14,
  },
  {
    id: 4,
    name: "Beer - Blue Light",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 10.84,
    stock: 6,
  },
  {
    id: 5,
    name: "Initation Crab Meat",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    price: 8.55,
    stock: 8,
  },
  {
    id: 6,
    name: "Cheese Cloth No 60",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 16.22,
    stock: 0,
  },
  {
    id: 7,
    name: "Piping Jelly - All Colours",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 5.34,
    stock: 12,
  },
  {
    id: 8,
    name: "Fondant - Icing",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 11.65,
    stock: 5,
  },
  {
    id: 9,
    name: "Lemonade - Pineapple Passion",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 12.68,
    stock: 2,
  },
  {
    id: 10,
    name: "Wine - Red, Lurton Merlot De",
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    price: 6.31,
    stock: 9,
  },
  {
    id: 11,
    name: "Cod - Salted, Boneless",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 8.37,
    stock: 10,
  },
  {
    id: 12,
    name: "Passion Fruit",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 15.26,
    stock: 0,
  },
  {
    id: 13,
    name: "Truffle Cups Green",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 1.9,
    stock: 2,
  },
  {
    id: 14,
    name: "Beef - Tenderloin - Aa",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 12.27,
    stock: 2,
  },
  {
    id: 15,
    name: "Flower - Potmums",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 18.9,
    stock: 14,
  },
  {
    id: 16,
    name: "Stock - Beef, Brown",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 11.99,
    stock: 1,
  },
  {
    id: 17,
    name: "Iced Tea - Lemon, 340ml",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 7.21,
    stock: 12,
  },
  {
    id: 18,
    name: "Lentils - Red, Dry",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 5.12,
    stock: 6,
  },
  {
    id: 19,
    name: "Daikon Radish",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 11.46,
    stock: 5,
  },
  {
    id: 20,
    name: "Capers - Ox Eye Daisy",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    price: 9.28,
    stock: 5,
  },
  {
    id: 21,
    name: "Pasta - Detalini, White, Fresh",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 3.02,
    stock: 9,
  },
  {
    id: 22,
    name: "Cardamon Ground",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 5.05,
    stock: 9,
  },
  {
    id: 23,
    name: "Shrimp - 16/20, Peeled Deviened",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 4.37,
    stock: 7,
  },
  {
    id: 24,
    name: "Tart - Lemon",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    price: 2.64,
    stock: 10,
  },
  {
    id: 25,
    name: "Oysters - Smoked",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 17.06,
    stock: 9,
  },
  {
    id: 26,
    name: "Taro Leaves",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 3.71,
    stock: 10,
  },
  {
    id: 27,
    name: "Juice - Pineapple, 341 Ml",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 19.64,
    stock: 0,
  },
  {
    id: 28,
    name: "Vinegar - Balsamic, White",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 9.21,
    stock: 12,
  },
  {
    id: 29,
    name: "Turnip - White, Organic",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 7.96,
    stock: 5,
  },
  {
    id: 30,
    name: "Lamb - Whole, Fresh",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 16.87,
    stock: 11,
  },
  {
    id: 31,
    name: "Cheese - Pied De Vents",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 17.56,
    stock: 9,
  },
  {
    id: 32,
    name: "Squid - U - 10 Thailand",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 17.66,
    stock: 6,
  },
  {
    id: 33,
    name: "Tomatoes - Hot House",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    price: 13.14,
    stock: 14,
  },
  {
    id: 34,
    name: "Sauce - Fish 25 Ozf Bottle",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 13.76,
    stock: 12,
  },
  {
    id: 35,
    name: "Chicken - Livers",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 1.32,
    stock: 9,
  },
  {
    id: 36,
    name: "Syrup - Monin - Blue Curacao",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 3.53,
    stock: 2,
  },
  {
    id: 37,
    name: "Marzipan 50/50",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 16.1,
    stock: 9,
  },
  {
    id: 38,
    name: "Seedlings - Clamshell",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 12.17,
    stock: 7,
  },
  {
    id: 39,
    name: "Towel Multifold",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 13.99,
    stock: 1,
  },
  {
    id: 40,
    name: "Longos - Burritos",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    price: 1.79,
    stock: 11,
  },
  {
    id: 41,
    name: "Anisette - Mcguiness",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 16.19,
    stock: 6,
  },
  {
    id: 42,
    name: "Soup - Cream Of Potato / Leek",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 1.42,
    stock: 15,
  },
  {
    id: 43,
    name: "Easy Off Oven Cleaner",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 7.18,
    stock: 1,
  },
  {
    id: 44,
    name: "Barramundi",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 19.77,
    stock: 12,
  },
  {
    id: 45,
    name: "Tomatoes - Roma",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    price: 9.43,
    stock: 10,
  },
  {
    id: 46,
    name: "Tea - Darjeeling, Azzura",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 13.62,
    stock: 8,
  },
  {
    id: 47,
    name: "Wine - Red, Cabernet Sauvignon",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 7.42,
    stock: 11,
  },
  {
    id: 48,
    name: "Liners - Banana, Paper",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 8.87,
    stock: 6,
  },
  {
    id: 49,
    name: "Wine - Sicilia Igt Nero Avola",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    price: 11.36,
    stock: 2,
  },
  {
    id: 50,
    name: "Chicken - Leg / Back Attach",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 2.26,
    stock: 5,
  },
  {
    id: 51,
    name: "Broom Handle",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 3.13,
    stock: 14,
  },
  {
    id: 52,
    name: "Haggis",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 18.99,
    stock: 5,
  },
  {
    id: 53,
    name: "Island Oasis - Wildberry",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 8.63,
    stock: 1,
  },
  {
    id: 54,
    name: "Stock - Chicken, White",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 9.44,
    stock: 1,
  },
  {
    id: 55,
    name: "Veal - Ground",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 5.48,
    stock: 8,
  },
  {
    id: 56,
    name: "Chinese Foods - Pepper Beef",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 19.22,
    stock: 4,
  },
  {
    id: 57,
    name: "Flour - Cake",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 1.01,
    stock: 0,
  },
  {
    id: 58,
    name: "Tuna - Yellowfin",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 5.42,
    stock: 10,
  },
  {
    id: 59,
    name: "Broccoli - Fresh",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    price: 10.48,
    stock: 3,
  },
  {
    id: 60,
    name: "Cabbage - Nappa",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 4.69,
    stock: 10,
  },
  {
    id: 61,
    name: "Syrup - Monin, Amaretta",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 5.46,
    stock: 9,
  },
  {
    id: 62,
    name: "Gelatine Powder",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 19.91,
    stock: 0,
  },
  {
    id: 63,
    name: "Wine - Ruffino Chianti Classico",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 17.57,
    stock: 7,
  },
  {
    id: 64,
    name: "Juice - Orange, 341 Ml",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 7.87,
    stock: 5,
  },
  {
    id: 65,
    name: "Pork - Shoulder",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 16.2,
    stock: 7,
  },
  {
    id: 66,
    name: "Sparkling Wine - Rose, Freixenet",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 4.72,
    stock: 0,
  },
  {
    id: 67,
    name: "Cherries - Fresh",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 2.27,
    stock: 4,
  },
  {
    id: 68,
    name: "Smoked Paprika",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 17.54,
    stock: 14,
  },
  {
    id: 69,
    name: "Vinegar - Rice",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 16.83,
    stock: 1,
  },
  {
    id: 70,
    name: "Cookies - Assorted",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 10.27,
    stock: 12,
  },
  {
    id: 71,
    name: "Chips - Miss Vickies",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 19.39,
    stock: 6,
  },
  {
    id: 72,
    name: "Wine - Chianti Classica Docg",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    price: 16.79,
    stock: 13,
  },
  {
    id: 73,
    name: "Mushroom - Crimini",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 1.02,
    stock: 4,
  },
  {
    id: 74,
    name: "Turkey - Oven Roast Breast",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 8.13,
    stock: 4,
  },
  {
    id: 75,
    name: "Steampan - Foil",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 19.93,
    stock: 9,
  },
  {
    id: 76,
    name: "Bread - Ciabatta Buns",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 18.08,
    stock: 1,
  },
  {
    id: 77,
    name: "Jam - Marmalade, Orange",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 10.79,
    stock: 11,
  },
  {
    id: 78,
    name: "Appetizer - Cheese Bites",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 7.15,
    stock: 13,
  },
  {
    id: 79,
    name: "Bols Melon Liqueur",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 5.62,
    stock: 7,
  },
  {
    id: 80,
    name: "Nantucket - Pomegranate Pear",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 6.55,
    stock: 6,
  },
  {
    id: 81,
    name: "Swordfish Loin Portions",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 2.79,
    stock: 3,
  },
  {
    id: 82,
    name: "Sauce - Soya, Light",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 6.99,
    stock: 0,
  },
  {
    id: 83,
    name: "Mustard - Pommery",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 6.7,
    stock: 9,
  },
  {
    id: 84,
    name: "Clam Nectar",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 15.49,
    stock: 8,
  },
  {
    id: 85,
    name: "Lid - 10,12,16 Oz",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 2.0,
    stock: 11,
  },
  {
    id: 86,
    name: "Beans - Navy, Dry",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 8.49,
    stock: 6,
  },
  {
    id: 87,
    name: "Sobe - Tropical Energy",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 19.73,
    stock: 13,
  },
  {
    id: 88,
    name: "Coffee - Hazelnut Cream",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 6.44,
    stock: 7,
  },
  {
    id: 89,
    name: "Asparagus - Green, Fresh",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    price: 19.22,
    stock: 8,
  },
  {
    id: 90,
    name: "Pasta - Orzo, Dry",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    price: 16.34,
    stock: 14,
  },
  {
    id: 91,
    name: "Horseradish Root",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    price: 9.28,
    stock: 1,
  },
  {
    id: 92,
    name: "Wine - Dubouef Macon - Villages",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 12.43,
    stock: 12,
  },
  {
    id: 93,
    name: "Sauce - Soy Low Sodium - 3.87l",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 5.17,
    stock: 8,
  },
  {
    id: 94,
    name: "Vodka - Hot, Lnferno",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    price: 2.05,
    stock: 12,
  },
  {
    id: 95,
    name: "Pimento - Canned",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 14.81,
    stock: 5,
  },
  {
    id: 96,
    name: "Nantucket - Orange Mango Cktl",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 19.18,
    stock: 10,
  },
  {
    id: 97,
    name: "Oregano - Dry, Rubbed",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 5.85,
    stock: 4,
  },
  {
    id: 98,
    name: "Wine - Tribal Sauvignon",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 9.49,
    stock: 6,
  },
  {
    id: 99,
    name: "Grapefruit - White",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 3.71,
    stock: 7,
  },
  {
    id: 100,
    name: "Ecolab - Power Fusion",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 1.41,
    stock: 3,
  },
];

const createCardProduct = (name, description, price, stock, id) => {
  const isInStock = Boolean(stock);
  return `
    <div class="product__card">
    <div class="product__card-container">
      <div class="product__image-container">
        <img class="product__image" src="" alt="">
      </div>
      <h2 class= "product__name">${name}</h2>
      <p class="product__description">${description}</p>
      <p class="product__price">€ ${price}</p>
      <p class = "product__stock">Quantity:
        ${isInStock ? stock : "Out Of Stock"}
      </p>
    </div>
      <button class="product__button js-product-button" data-id="${id}">ADD TO CART</button>
    </div>
    `;
};

const createCartItem = (name, price, id) => {
  return `
      <div class="dropdown__item-card">
        <div class="dropdown__img-wrapper"></div>
        <div class="dropdown__item-wrapper">
          <p class="dropdown__item-name">${name}</p>
          <p class="dropdown__item-price">€ ${price}</p>
          <p>Quantity: 1</p>
        </div>
        <div class="dropdown__item-remove-container js-remove-from-cart" data-cart="${id}">
          <button class="dropdown__item-remove">X</button>
        </div>
      </div> 
  
    `;
};

const createCartCounter = (quantity) => {
  return `
      <div class="navbar__quantity-value">${quantity}</div>
    `;
};

const createTotal = (total) => {
  return `
      <div class="navbar__cart-total-wrapper" id="js-cart-total">
        <p>Totale: </p>
        <p class="navbar__cart-total">€ ${total}</p>
      </div>
    `;
};

const d = document;

const productCard = d.getElementById("js-product-card");
const productCart = d.querySelector(".js-product-cart");
let cart = [];

const removeItemCart = (idToRemove) => {
  cart = cart.filter((element) => {
    return element.id !== idToRemove;
  });
  emptyCart();
  updateCart();
};

// add method card DOM
// richiamare method con gli argomenti

products.forEach((product) => {
  const { name, description, price, stock, id } = product;
  const listProduct = createCardProduct(name, description, price, stock, id);

  productCard.innerHTML += listProduct;
});

const productButtons = d.querySelectorAll(".js-product-button");

const emptyCart = () => {
  while (productCart.firstChild) {
    productCart.removeChild(productCart.firstChild);
  }
};

const updateCartQuantity = (quantity) => {
  let counter;
  const cartQuantityContainer = d.querySelector(".navbar__quantity");
  const cartQuantity = d.querySelector(".navbar__quantity-value");

  if (quantity === 0 && cartQuantity) {
    cartQuantity.remove();
    return;
  }

  if (quantity === 1) {
    counter = createCartCounter(quantity);
    cartQuantityContainer.innerHTML = counter;
    return;
  }

  if (cartQuantity) {
    cartQuantity.innerHTML = quantity;
  }
};

const updateCartTotal = (total) => {
  const cartTotal = d.getElementById("js-cart-total");
  productCart.innerHTML += createTotal(total);

  if (total === 0 && cartTotal) {
    cartTotal.remove();
  }
};

const updateCart = () => {
  cart.forEach((product) => {
    const { name, price, id } = product;
    const listElement = createCartItem(name, price, id);
    productCart.innerHTML += listElement;
    console.dir(productCart.innerHTML);

    //setTimeout
    setTimeout(() => {
      console.log(d.querySelector(`[data-cart="${id}"]`));
      d.querySelector(`[data-cart="${id}"]`).addEventListener("click", () => {
        removeItemCart(id);
      });
    }, 100);
  });

  updateCartQuantity(cart.length);
  const total = cart.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  console.log(total.toFixed(2));
  updateCartTotal(total.toFixed(2));
};

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let product = products.find(
      (product) => product.id === Number(button.dataset.id)
    );
    cart.push(product);
    console.log(cart);
    emptyCart();

    updateCart();
  });
});

// aggiungere prodotti al carrello
