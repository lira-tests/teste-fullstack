
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert(
        [
          { "name": "Taurus", "manufacturer": "Ford", "year": 2002, "description": "Pellentesque at nulla. Suspendisse potenti.", "sold": true },
          { "name": "E250", "manufacturer": "Ford", "year": 2006, "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "sold": false },
          { "name": "Corsica", "manufacturer": "Chevrolet", "year": 1993, "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.", "sold": false },
          { "name": "Aerio", "manufacturer": "Suzuki", "year": 2007, "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.", "sold": true },
          { "name": "RX", "manufacturer": "Lexus", "year": 2007, "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "sold": false }
        ]

      );
    });
};
