
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert(
        [
          {
            "vehicle": "Integra GS 1.8",
            "manufacturer": "Acura",
            "fipe_code": "038003-2",
            "sold": false
          },
          {
            "vehicle": "Legend 3.2/3.5",
            "manufacturer": "Acura",
            "fipe_code": "038002-4",
            "sold": false
          },
          {
            "vehicle": "NSX 3.0",
            "manufacturer": "Acura",
            "fipe_code": "038001-6",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ 2.8 12V 132cv TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060001-6",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 100 2.8  CS TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060003-2",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 100 2.8 CD TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060004-0",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 150 2.8  CS TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060005-9",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 150 2.8 CD TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060006-7",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 200 2.8  CD TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060008-3",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 200 2.8 CS TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060007-5",
            "sold": false
          },
          {
            "vehicle": "MARRUÁ AM 50 2.8 140CV TDI Diesel",
            "manufacturer": "Agrale",
            "fipe_code": "060002-4",
            "sold": false
          },
          {
            "vehicle": "145 Elegant 1.7/1.8 16V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006009-7",
            "sold": false
          },
          {
            "vehicle": "145 Elegant 2.0 16V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006001-1",
            "sold": false
          },
          {
            "vehicle": "145 Quadrifoglio 2.0",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006002-0",
            "sold": false
          },
          {
            "vehicle": "145 QV",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006008-9",
            "sold": false
          },
          {
            "vehicle": "147 2.0 16V 148cv 4p Semi-Aut.",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006017-8",
            "sold": false
          },
          {
            "vehicle": "155",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006003-8",
            "sold": false
          },
          {
            "vehicle": "155 Super",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006004-6",
            "sold": false
          },
          {
            "vehicle": "156 2.5 V6 24V 190cv 4p Aut.",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006015-1",
            "sold": false
          },
          {
            "vehicle": "156 Sport Wagon 2.0 16V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006014-3",
            "sold": false
          },
          {
            "vehicle": "156 SportWagon 2.5 V6 24V 190cv 4p Aut.",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006016-0",
            "sold": false
          },
          {
            "vehicle": "156 TS/Sport/Elegant 2.0 16V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006010-0",
            "sold": false
          },
          {
            "vehicle": "164 3.0 V6",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006005-4",
            "sold": false
          },
          {
            "vehicle": "164 Super V6 24V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006006-2",
            "sold": false
          },
          {
            "vehicle": "166 3.0 V6 24V",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006011-9",
            "sold": false
          },
          {
            "vehicle": "2300 TI/TI-4",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006013-5",
            "sold": false
          },
          {
            "vehicle": "Spider 2.0/3.0",
            "manufacturer": "Alfa Romeo",
            "fipe_code": "006007-0",
            "sold": false
          },
          {
            "vehicle": "Hummer Hard-Top 6.5 4x4 Diesel TB",
            "manufacturer": "AM Gen",
            "fipe_code": "037001-0",
            "sold": false
          },
          {
            "vehicle": "Hummer Open-Top 6.5 4x4 Diesel TB",
            "manufacturer": "AM Gen",
            "fipe_code": "037002-9",
            "sold": false
          },
          {
            "vehicle": "Hummer Wagon 6.5 4x4 Diesel TB",
            "manufacturer": "AM Gen",
            "fipe_code": "037003-7",
            "sold": false
          },
          {
            "vehicle": "AM-825 Luxo 4.0 Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007018-1",
            "sold": false
          },
          {
            "vehicle": "AM-825 Super Luxo 4.0 Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007019-0",
            "sold": false
          },
          {
            "vehicle": "Hi-Topic SLX/SDX/DLX Full Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007001-7",
            "sold": false
          },
          {
            "vehicle": "Hi-Topic STD Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007002-5",
            "sold": false
          },
          {
            "vehicle": "Hi-Topic Van 2.7 Diesel (furgão)",
            "manufacturer": "Asia Motors",
            "fipe_code": "007017-3",
            "sold": false
          },
          {
            "vehicle": "Jipe Rocsta GT 4x4 2.2 Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007020-3",
            "sold": false
          },
          {
            "vehicle": "Topic Carga 2.7 Diesel (furgão)",
            "manufacturer": "Asia Motors",
            "fipe_code": "007016-5",
            "sold": false
          },
          {
            "vehicle": "Topic Luxo Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007014-9",
            "sold": false
          },
          {
            "vehicle": "Topic Super Luxo Diesel",
            "manufacturer": "Asia Motors",
            "fipe_code": "007015-7",
            "sold": false
          },
          {
            "vehicle": "Towner Coach Full",
            "manufacturer": "Asia Motors",
            "fipe_code": "007003-3",
            "sold": false
          },
          {
            "vehicle": "Towner Furgão",
            "manufacturer": "Asia Motors",
            "fipe_code": "007009-2",
            "sold": false
          },
          {
            "vehicle": "Towner Glass Van",
            "manufacturer": "Asia Motors",
            "fipe_code": "007004-1",
            "sold": false
          },
          {
            "vehicle": "Towner Luxo",
            "manufacturer": "Asia Motors",
            "fipe_code": "007012-2",
            "sold": false
          },
          {
            "vehicle": "Towner Multiuso 5p",
            "manufacturer": "Asia Motors",
            "fipe_code": "007011-4",
            "sold": false
          },
          {
            "vehicle": "Towner Panel Van",
            "manufacturer": "Asia Motors",
            "fipe_code": "007005-0",
            "sold": false
          },
          {
            "vehicle": "Towner Pick-Up",
            "manufacturer": "Asia Motors",
            "fipe_code": "007008-4",
            "sold": false
          },
          {
            "vehicle": "Towner SDX / DLX/ STD",
            "manufacturer": "Asia Motors",
            "fipe_code": "007006-8",
            "sold": false
          },
          {
            "vehicle": "Towner Super Luxo",
            "manufacturer": "Asia Motors",
            "fipe_code": "007013-0",
            "sold": false
          },
          {
            "vehicle": "Towner Truck",
            "manufacturer": "Asia Motors",
            "fipe_code": "007007-6",
            "sold": false
          },
          {
            "vehicle": "DB9 Coupe 6.0 V12 510cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085011-0",
            "sold": false
          },
          {
            "vehicle": "DB9 Volante 6.0 V12 470cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085006-3",
            "sold": false
          },
          {
            "vehicle": "Rapide 6.0 V12 477cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085007-1",
            "sold": false
          },
          {
            "vehicle": "Rapide S 6.0 V12 550cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085009-8",
            "sold": false
          },
          {
            "vehicle": "Vanquish V12 6.0 565cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085010-1",
            "sold": false
          },
          {
            "vehicle": "Vantage 6.0 V12 510cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085004-7",
            "sold": false
          },
          {
            "vehicle": "Vantage Coupe 4.7 V8 425cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085002-0",
            "sold": false
          },
          {
            "vehicle": "Vantage Roadster 4.7 V8 420cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085003-9",
            "sold": false
          },
          {
            "vehicle": "Vantage S 6.0 V12 565cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085008-0",
            "sold": false
          },
          {
            "vehicle": "Vantage S Coupe 4.7 V8 430cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085001-2",
            "sold": false
          },
          {
            "vehicle": "Virage Coupe 6.0 V12 490cv",
            "manufacturer": "ASTON MARTIN",
            "fipe_code": "085005-5",
            "sold": false
          },
          {
            "vehicle": "100 2.8 V6",
            "manufacturer": "Audi",
            "fipe_code": "008030-6",
            "sold": false
          },
          {
            "vehicle": "100 2.8 V6 Avant",
            "manufacturer": "Audi",
            "fipe_code": "008076-4",
            "sold": false
          },
          {
            "vehicle": "100 S-4 2.2 Avant Turbo",
            "manufacturer": "Audi",
            "fipe_code": "008031-4",
            "sold": false
          },
          {
            "vehicle": "80 2.0",
            "manufacturer": "Audi",
            "fipe_code": "008001-2",
            "sold": false
          },
          {
            "vehicle": "80 2.0 Avant",
            "manufacturer": "Audi",
            "fipe_code": "008077-2",
            "sold": false
          },
          {
            "vehicle": "80 2.6/ 2.8",
            "manufacturer": "Audi",
            "fipe_code": "008080-2",
            "sold": false
          },
          {
            "vehicle": "80 2.6/2.8 Avant",
            "manufacturer": "Audi",
            "fipe_code": "008002-0",
            "sold": false
          },
          {
            "vehicle": "80 2.8 Cabriolet",
            "manufacturer": "Audi",
            "fipe_code": "008003-9",
            "sold": false
          },
          {
            "vehicle": "80 S2 Avant",
            "manufacturer": "Audi",
            "fipe_code": "008004-7",
            "sold": false
          },
          {
            "vehicle": "A1 1.4 TFSI 122cv S-tronic 3p",
            "manufacturer": "Audi",
            "fipe_code": "008153-1",
            "sold": false
          },
          {
            "vehicle": "A1 2.0 TFSI Quattro 256cv 3p",
            "manufacturer": "Audi",
            "fipe_code": "008177-9",
            "sold": false
          },
          {
            "vehicle": "A1 Sport 1.4 TFSI 185cv 3p S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008172-8",
            "sold": false
          },
          {
            "vehicle": "A1 Sport. S Edition 1.4 TFSI 5p S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008210-4",
            "sold": false
          },
          {
            "vehicle": "A1 Sportback 1.4 TFSI 185cv 5p S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008174-4",
            "sold": false
          },
          {
            "vehicle": "A1 Sportback 1.4 TFSI 5p S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008173-6",
            "sold": false
          },
          {
            "vehicle": "A1 Sportback 1.8 TFSI 192cv 5p S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008204-0",
            "sold": false
          },
          {
            "vehicle": "A3 1.6 3p",
            "manufacturer": "Audi",
            "fipe_code": "008032-2",
            "sold": false
          },
          {
            "vehicle": "A3 1.6 3p Aut",
            "manufacturer": "Audi",
            "fipe_code": "008056-0",
            "sold": false
          },
          {
            "vehicle": "A3 1.6 5p",
            "manufacturer": "Audi",
            "fipe_code": "008040-3",
            "sold": false
          },
          {
            "vehicle": "A3 1.6 5p Aut",
            "manufacturer": "Audi",
            "fipe_code": "008057-8",
            "sold": false
          },
          {
            "vehicle": "A3 1.6 8V 102cv 3p",
            "manufacturer": "Audi",
            "fipe_code": "008116-7",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 3p",
            "manufacturer": "Audi",
            "fipe_code": "008005-5",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 3p Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008043-8",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 5p Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008042-0",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 5p Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008041-1",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 180cv 3p Aut./ Tip.",
            "manufacturer": "Audi",
            "fipe_code": "008073-0",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 180cv 3p Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008074-8",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 180cv 5p Aut./ Tip.",
            "manufacturer": "Audi",
            "fipe_code": "008071-3",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 180cv 5p Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008072-1",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 3p Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008046-2",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 3p Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008006-3",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 5p Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008045-4",
            "sold": false
          },
          {
            "vehicle": "A3 1.8 Turbo 5p Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008044-6",
            "sold": false
          },
          {
            "vehicle": "A3 Cabriolet 1.8 16V TFSI 180cv S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008195-7",
            "sold": false
          },
          {
            "vehicle": "A3 Sed. Ambition 2.0 TSFI 220cv S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008205-8",
            "sold": false
          },
          {
            "vehicle": "A3 Sed.1.8/1.8 Ambit.16V TB FSI S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008190-6",
            "sold": false
          },
          {
            "vehicle": "A3 Sedan 1.4 TFSI Flex Tiptronic 4p ",
            "manufacturer": "Audi",
            "fipe_code": "008203-1",
            "sold": false
          },
          {
            "vehicle": "A3 Sedan 1.4/ Attra. 16V TB FSI S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008192-2",
            "sold": false
          },
          {
            "vehicle": "A3 Sport 1.8 16V TFSI S-Tronic 3p",
            "manufacturer": "Audi",
            "fipe_code": "008181-7",
            "sold": false
          },
          {
            "vehicle": "A3 Sport 2.0 16V TFSI S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008138-8",
            "sold": false
          },
          {
            "vehicle": "A3 Sportback 1.4 TFSI S-Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008184-1",
            "sold": false
          },
          {
            "vehicle": "A3 Sportback 1.6 8V 102cv 5p",
            "manufacturer": "Audi",
            "fipe_code": "008117-5",
            "sold": false
          },
          {
            "vehicle": "A3 Sportback 1.8 16V TFSI S-Tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008185-0",
            "sold": false
          },
          {
            "vehicle": "A3 Sportback 2.0 16V TFSI Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008118-3",
            "sold": false
          },
          {
            "vehicle": "A3 Sportback 2.0 16V TFSI S-Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008119-1",
            "sold": false
          },
          {
            "vehicle": "A4 1.8  Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008047-0",
            "sold": false
          },
          {
            "vehicle": "A4 1.8  Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008007-1",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Avant Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008048-9",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Avant Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008009-8",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Avant Turbo Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008010-1",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Avant Turbo Tip./ Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008049-7",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Tip./ Multitronic Turbo",
            "manufacturer": "Audi",
            "fipe_code": "008008-0",
            "sold": false
          },
          {
            "vehicle": "A4 1.8 Turbo",
            "manufacturer": "Audi",
            "fipe_code": "008070-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 16V TFSI 183/180cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008132-9",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 16V TFSI 200/ 214cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008120-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 16V TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008170-1",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 20V 130cv Multitronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008101-9",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 Avant 16V TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008171-0",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 Avant Ambi. 2.0 16V TFSi S tronic",
            "manufacturer": "Audi",
            "fipe_code": "008211-2",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 Avant TFSI 183/180cv Multitroni",
            "manufacturer": "Audi",
            "fipe_code": "008133-7",
            "sold": false
          },
          {
            "vehicle": "A4 2.0 Avant TFSI 200/214cv Multitron.",
            "manufacturer": "Audi",
            "fipe_code": "008121-3",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 30V Avant Mec",
            "manufacturer": "Audi",
            "fipe_code": "008020-9",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 30V Avant Tip./Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008021-7",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 30V Mec",
            "manufacturer": "Audi",
            "fipe_code": "008018-7",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 30V Tip./Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008019-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 Avant V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008081-0",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 Avant V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008082-9",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008083-7",
            "sold": false
          },
          {
            "vehicle": "A4 2.4 V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008084-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.8",
            "manufacturer": "Audi",
            "fipe_code": "008011-0",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 30V  Tiptronic/ Aut.",
            "manufacturer": "Audi",
            "fipe_code": "008023-3",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 30V Mec",
            "manufacturer": "Audi",
            "fipe_code": "008022-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 Avant V6 12V",
            "manufacturer": "Audi",
            "fipe_code": "008036-5",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 Avant V6 30V Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008037-3",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 Avant V6 30V Quattro Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008087-0",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 Avant V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008088-8",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 Avant V6 30V Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008055-1",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 V6 30V  Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008085-3",
            "sold": false
          },
          {
            "vehicle": "A4 2.8 V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008086-1",
            "sold": false
          },
          {
            "vehicle": "A4 3.0 30V 218cv Multitronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008102-7",
            "sold": false
          },
          {
            "vehicle": "A4 3.0 30V 218cv Quattro Tiptron./Aut 4p",
            "manufacturer": "Audi",
            "fipe_code": "008109-4",
            "sold": false
          },
          {
            "vehicle": "A4 3.0 Avant 30V 218cv Multitronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008107-8",
            "sold": false
          },
          {
            "vehicle": "A4 3.0 Avant 30V 218cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008110-8",
            "sold": false
          },
          {
            "vehicle": "A4 3.0 Cabriolet 30V 218cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008108-6",
            "sold": false
          },
          {
            "vehicle": "A4 3.2 FSI 24V 255cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008123-0",
            "sold": false
          },
          {
            "vehicle": "A4 3.2 FSI 24V 269cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008130-2",
            "sold": false
          },
          {
            "vehicle": "A4 3.2 FSI Avant 24V 255cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008124-8",
            "sold": false
          },
          {
            "vehicle": "A4 3.2 FSI Avant 24V Quattro S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008135-3",
            "sold": false
          },
          {
            "vehicle": "A4 3.2 FSI Cabriolet 24V 255cv Multitron",
            "manufacturer": "Audi",
            "fipe_code": "008125-6",
            "sold": false
          },
          {
            "vehicle": "A4 Ambiente 2.0 TFSI 190cv S tronic",
            "manufacturer": "Audi",
            "fipe_code": "008209-0",
            "sold": false
          },
          {
            "vehicle": "A4 Attraction 2.0 TFSI 190cv S tronic",
            "manufacturer": "Audi",
            "fipe_code": "008208-2",
            "sold": false
          },
          {
            "vehicle": "A4 Launch Edition 2.0 TFSI 190cv S troni",
            "manufacturer": "Audi",
            "fipe_code": "008207-4",
            "sold": false
          },
          {
            "vehicle": "A5 3.2 FSI 24V 269cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008131-0",
            "sold": false
          },
          {
            "vehicle": "A5 3.2 FSI V6 24V 269cv Quattro Tiptroni",
            "manufacturer": "Audi",
            "fipe_code": "008139-6",
            "sold": false
          },
          {
            "vehicle": "A5 Cabriolet 2.0 TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008165-5",
            "sold": false
          },
          {
            "vehicle": "A5 Coupê 2.0 TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008164-7",
            "sold": false
          },
          {
            "vehicle": "A5 Sportb. 2.0 16V TFSI Quat. S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008169-8",
            "sold": false
          },
          {
            "vehicle": "A5 Sportback 1.8 TFSI 170cv Multi.",
            "manufacturer": "Audi",
            "fipe_code": "008197-3",
            "sold": false
          },
          {
            "vehicle": "A5 Sportback 2.0 16V TFSI 180cv Multi.",
            "manufacturer": "Audi",
            "fipe_code": "008161-2",
            "sold": false
          },
          {
            "vehicle": "A5 Sportback 2.0 16V TFSI 211cv Multi.",
            "manufacturer": "Audi",
            "fipe_code": "008145-0",
            "sold": false
          },
          {
            "vehicle": "A6 2.0 TFSI 252cv S tronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008200-7",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 30V Mec",
            "manufacturer": "Audi",
            "fipe_code": "008024-1",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 30V Tip./Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008025-0",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 Avant 30V Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008051-9",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 Avant 30V Tip./ Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008052-7",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 Avant V6 30V Quattro Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008091-8",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 Avant V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008092-6",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008089-6",
            "sold": false
          },
          {
            "vehicle": "A6 2.4 V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008090-0",
            "sold": false
          },
          {
            "vehicle": "A6 2.7 30V Avant Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008059-4",
            "sold": false
          },
          {
            "vehicle": "A6 2.7 30V Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008058-6",
            "sold": false
          },
          {
            "vehicle": "A6 2.7 Avant Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008068-3",
            "sold": false
          },
          {
            "vehicle": "A6 2.7 Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008067-5",
            "sold": false
          },
          {
            "vehicle": "A6 2.8",
            "manufacturer": "Audi",
            "fipe_code": "008012-8",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 30V Mec",
            "manufacturer": "Audi",
            "fipe_code": "008026-8",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 30V Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008027-6",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 Avant",
            "manufacturer": "Audi",
            "fipe_code": "008013-6",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 Avant 30V Mec",
            "manufacturer": "Audi",
            "fipe_code": "008053-5",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 Avant 30V Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008054-3",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 Avant V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008095-0",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 Avant V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008096-9",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 V6 30V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008093-4",
            "sold": false
          },
          {
            "vehicle": "A6 2.8 V6 30V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008094-2",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 Avant V6 30V 218cv Multitronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008105-1",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 Avant. TB FSI V6 Quattro Tip. 5p",
            "manufacturer": "Audi",
            "fipe_code": "008150-7",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 Avant.TFSI V6 Quattro S tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008179-5",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 TB FSI V6 Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008136-1",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 TFSI V6 Quattro S tronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008178-7",
            "sold": false
          },
          {
            "vehicle": "A6 3.0 V6 30V 218cv Multitronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008103-5",
            "sold": false
          },
          {
            "vehicle": "A6 3.2 FSI 24V 255cv Multitronic",
            "manufacturer": "Audi",
            "fipe_code": "008128-0",
            "sold": false
          },
          {
            "vehicle": "A6 4.2 Avant Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008061-6",
            "sold": false
          },
          {
            "vehicle": "A6 4.2 Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008060-8",
            "sold": false
          },
          {
            "vehicle": "A6 Allroad 3.0 TFSI V6 Quattro S tronic",
            "manufacturer": "Audi",
            "fipe_code": "008180-9",
            "sold": false
          },
          {
            "vehicle": "A7 Sportback 2.0 TFSI S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008206-6",
            "sold": false
          },
          {
            "vehicle": "A7 Sportback 3.0 TFSI Quattro S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008154-0",
            "sold": false
          },
          {
            "vehicle": "A8 3.0 TFSI 310cv Quattro Tiptronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008199-0",
            "sold": false
          },
          {
            "vehicle": "A8 4.0 TFSI Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008187-6",
            "sold": false
          },
          {
            "vehicle": "A8 4.2 Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008062-4",
            "sold": false
          },
          {
            "vehicle": "A8 4.2 V8 32V Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008014-4",
            "sold": false
          },
          {
            "vehicle": "A8 6.0 W12 48V 450cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008115-9",
            "sold": false
          },
          {
            "vehicle": "A8 6.3 W12 48V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008156-6",
            "sold": false
          },
          {
            "vehicle": "Allroad 2.7 30V Quattro Turbo Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008079-9",
            "sold": false
          },
          {
            "vehicle": "Avant RS2",
            "manufacturer": "Audi",
            "fipe_code": "008015-2",
            "sold": false
          },
          {
            "vehicle": "Q3 1.4 TFSI 150cv S-tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008201-5",
            "sold": false
          },
          {
            "vehicle": "Q3 2.0 TFSI Quat. 170/180cv S-tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008159-0",
            "sold": false
          },
          {
            "vehicle": "Q3 2.0 TFSI Quat. 211/220cv S-tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008160-4",
            "sold": false
          },
          {
            "vehicle": "Q5 2.0 16V TFSI 225cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008186-8",
            "sold": false
          },
          {
            "vehicle": "Q5 2.0 16V TFSI Quattro S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008134-5",
            "sold": false
          },
          {
            "vehicle": "Q5 3.0 V6 TFSI 272cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008182-5",
            "sold": false
          },
          {
            "vehicle": "Q5 3.2 FSI V6 Quattro S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008137-0",
            "sold": false
          },
          {
            "vehicle": "Q7 3.0 V6 TFSI 333cv Quattro Tip. 5p",
            "manufacturer": "Audi",
            "fipe_code": "008152-3",
            "sold": false
          },
          {
            "vehicle": "Q7 3.6 V6 284cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008129-9",
            "sold": false
          },
          {
            "vehicle": "Q7 4.2 V8 40V 350cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008122-1",
            "sold": false
          },
          {
            "vehicle": "R8 4.2 V8 426cv QUATTRO R-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008147-7",
            "sold": false
          },
          {
            "vehicle": "R8 5.2 V10 QUATTRO R-tronic/S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008146-9",
            "sold": false
          },
          {
            "vehicle": "R8 GT 5.2 V10 560cv QUATTRO R-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008158-2",
            "sold": false
          },
          {
            "vehicle": "R8 Spyder 5.2 QUATTRO R-tronic/S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008155-8",
            "sold": false
          },
          {
            "vehicle": "RS Q3 2.5 TFSI Quattro S-tronic 5p",
            "manufacturer": "Audi",
            "fipe_code": "008193-0",
            "sold": false
          },
          {
            "vehicle": "RS3 Sportback 2.5 TFSI Quattro S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008157-4",
            "sold": false
          },
          {
            "vehicle": "RS4 2.7 Avant V6 30V BI-TB Quattro 380cv",
            "manufacturer": "Audi",
            "fipe_code": "008100-0",
            "sold": false
          },
          {
            "vehicle": "RS4 4.2 Avant 32V FSI Quattro S-tronic ",
            "manufacturer": "Audi",
            "fipe_code": "008183-3",
            "sold": false
          },
          {
            "vehicle": "RS5 4.2 FSI V8 450cv Quattro S-Tron. 2p",
            "manufacturer": "Audi",
            "fipe_code": "008151-5",
            "sold": false
          },
          {
            "vehicle": "RS6 4.0 Avant FSI BI-TB Quattro Tip. 5p",
            "manufacturer": "Audi",
            "fipe_code": "008189-2",
            "sold": false
          },
          {
            "vehicle": "RS6 4.2 450cv BI-TB Quattro Tiptronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008112-4",
            "sold": false
          },
          {
            "vehicle": "RS6 4.2 Avant  BI-TB Quattro Tiptron. 5p",
            "manufacturer": "Audi",
            "fipe_code": "008111-6",
            "sold": false
          },
          {
            "vehicle": "RS6 5.0 Avant.FSI V10 Bi-TB Quattro Tip.",
            "manufacturer": "Audi",
            "fipe_code": "008149-3",
            "sold": false
          },
          {
            "vehicle": "RS6 5.0 FSI V10 Bi-TB Quattro Tip.",
            "manufacturer": "Audi",
            "fipe_code": "008148-5",
            "sold": false
          },
          {
            "vehicle": "RS7 Sportback 4.0 TFSI Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008194-9",
            "sold": false
          },
          {
            "vehicle": "S Q5 3.0 V6 TFSI 354cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008191-4",
            "sold": false
          },
          {
            "vehicle": "S3 1.8 225cv Turbo Quattro",
            "manufacturer": "Audi",
            "fipe_code": "008066-7",
            "sold": false
          },
          {
            "vehicle": "S3 Sedan 2.0 TFSI Quattro 286cv S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008196-5",
            "sold": false
          },
          {
            "vehicle": "S3 Sportback 2.0 TFSI Quattro S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008140-0",
            "sold": false
          },
          {
            "vehicle": "S4 2.7 Avant Turbo Quattro",
            "manufacturer": "Audi",
            "fipe_code": "008069-1",
            "sold": false
          },
          {
            "vehicle": "S4 2.7 Turbo Quattro Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008063-2",
            "sold": false
          },
          {
            "vehicle": "S4 3.0 Avant TFSI V6 24V Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008163-9",
            "sold": false
          },
          {
            "vehicle": "S4 3.0 TFSI V6 24V Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008162-0",
            "sold": false
          },
          {
            "vehicle": "S4 4.2 Avant V8 40V 344cv Quattro Tipt.",
            "manufacturer": "Audi",
            "fipe_code": "008114-0",
            "sold": false
          },
          {
            "vehicle": "S4 4.2 V8 40V 344cv Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008113-2",
            "sold": false
          },
          {
            "vehicle": "S5 Cabriolet 3.0 TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008168-0",
            "sold": false
          },
          {
            "vehicle": "S5 Coupê 3.0 TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008167-1",
            "sold": false
          },
          {
            "vehicle": "S5 Sportback 3.0 TFSI Quattro Stronic",
            "manufacturer": "Audi",
            "fipe_code": "008166-3",
            "sold": false
          },
          {
            "vehicle": "S6 2.2 20V TB",
            "manufacturer": "Audi",
            "fipe_code": "008038-1",
            "sold": false
          },
          {
            "vehicle": "S6 2.2 Avant 20V TB",
            "manufacturer": "Audi",
            "fipe_code": "008078-0",
            "sold": false
          },
          {
            "vehicle": "S6 4.0 TFSI Quattro S-Tronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008202-3",
            "sold": false
          },
          {
            "vehicle": "S6 4.2 Avant V8 40V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008097-7",
            "sold": false
          },
          {
            "vehicle": "S6 4.2 V8 40V Quattro Mec",
            "manufacturer": "Audi",
            "fipe_code": "008099-3",
            "sold": false
          },
          {
            "vehicle": "S6 4.2 V8 40V Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008098-5",
            "sold": false
          },
          {
            "vehicle": "S6 5.2 Avant FSI V10 435cv QUATTRO Tiptr",
            "manufacturer": "Audi",
            "fipe_code": "008144-2",
            "sold": false
          },
          {
            "vehicle": "S6 5.2 FSI V10 435cv QUATTRO Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008143-4",
            "sold": false
          },
          {
            "vehicle": "S6 Plus 4.2 Avant V8 32V",
            "manufacturer": "Audi",
            "fipe_code": "008016-0",
            "sold": false
          },
          {
            "vehicle": "S6 Plus 4.2 V8 32V",
            "manufacturer": "Audi",
            "fipe_code": "008039-0",
            "sold": false
          },
          {
            "vehicle": "S7 4.0 TFSI 420/450cv Quattro S-tronic",
            "manufacturer": "Audi",
            "fipe_code": "008188-4",
            "sold": false
          },
          {
            "vehicle": "S8 4.0 TFSI 520cv Quattro Tiptronic 4p",
            "manufacturer": "Audi",
            "fipe_code": "008198-1",
            "sold": false
          },
          {
            "vehicle": "S8 4.2 Mec",
            "manufacturer": "Audi",
            "fipe_code": "008028-4",
            "sold": false
          },
          {
            "vehicle": "S8 4.2 Quattro Mec.",
            "manufacturer": "Audi",
            "fipe_code": "008064-0",
            "sold": false
          },
          {
            "vehicle": "S8 4.2 Quattro Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008065-9",
            "sold": false
          },
          {
            "vehicle": "S8 4.2 Tiptronic",
            "manufacturer": "Audi",
            "fipe_code": "008029-2",
            "sold": false
          },
          {
            "vehicle": "TT 1.8 TB 180cv",
            "manufacturer": "Audi",
            "fipe_code": "008034-9",
            "sold": false
          },
          {
            "vehicle": "TT 1.8 TB QUATTRO 225cv",
            "manufacturer": "Audi",
            "fipe_code": "008035-7",
            "sold": false
          },
          {
            "vehicle": "TT 2.0 16v TFSI S-Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008126-4",
            "sold": false
          },
          {
            "vehicle": "TT Roadster 1.8 TB QUATTRO 225cv (Conv.)",
            "manufacturer": "Audi",
            "fipe_code": "008075-6",
            "sold": false
          },
          {
            "vehicle": "TT Roadster 2.0 16v TFSI S-Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008127-2",
            "sold": false
          },
          {
            "vehicle": "TTRS 2.5 TB FSI QUATTRO S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008176-0",
            "sold": false
          },
          {
            "vehicle": "TTRS Roadster 2.5 TB FSI QUATTRO STronic",
            "manufacturer": "Audi",
            "fipe_code": "008175-2",
            "sold": false
          },
          {
            "vehicle": "TTS 2.0 TFSI QUATTRO S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008141-8",
            "sold": false
          },
          {
            "vehicle": "TTS Roadster 2.0 TB FSI QUATTRO S Tronic",
            "manufacturer": "Audi",
            "fipe_code": "008142-6",
            "sold": false
          },
          {
            "vehicle": "116iA 1.6 TB 16V 136cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009171-5",
            "sold": false
          },
          {
            "vehicle": "118iA 2.0 16V 136cv 3p",
            "manufacturer": "BMW",
            "fipe_code": "009152-9",
            "sold": false
          },
          {
            "vehicle": "118iA 2.0 16V 136cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009136-7",
            "sold": false
          },
          {
            "vehicle": "118iA Full 1.6 TB 16V 170cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009169-3",
            "sold": false
          },
          {
            "vehicle": "118iA/ Urban/Sport 1.6 TB 16V 170cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009159-6",
            "sold": false
          },
          {
            "vehicle": "120i 2.0 16V 150cv/ 156cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009106-5",
            "sold": false
          },
          {
            "vehicle": "120iA 2.0 16V 150cv/ 156cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009105-7",
            "sold": false
          },
          {
            "vehicle": "120iA 2.0 16V 156cv 3p",
            "manufacturer": "BMW",
            "fipe_code": "009129-4",
            "sold": false
          },
          {
            "vehicle": "120iA Cabrio 2.0 16V 156cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009130-8",
            "sold": false
          },
          {
            "vehicle": "120iA Sport 2.0 ActiveFlex 16V Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009212-6",
            "sold": false
          },
          {
            "vehicle": "125i M Sport/Active Flex 2.0 TB Aut. 5p",
            "manufacturer": "BMW",
            "fipe_code": "009176-6",
            "sold": false
          },
          {
            "vehicle": "130i 3.0 24V 265cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009109-0",
            "sold": false
          },
          {
            "vehicle": "130iA 3.0 24V 265cv 3p",
            "manufacturer": "BMW",
            "fipe_code": "009126-0",
            "sold": false
          },
          {
            "vehicle": "130iA 3.0 24V 265cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009117-0",
            "sold": false
          },
          {
            "vehicle": "135iA Coupé 3.0 24V 306cv",
            "manufacturer": "BMW",
            "fipe_code": "009135-9",
            "sold": false
          },
          {
            "vehicle": "220iTourer Active Flex 2.0 TB Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009217-7",
            "sold": false
          },
          {
            "vehicle": "225i Active Tourer Sport 2.0 TB Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009208-8",
            "sold": false
          },
          {
            "vehicle": "316 (todas)",
            "manufacturer": "BMW",
            "fipe_code": "009059-0",
            "sold": false
          },
          {
            "vehicle": "316i 1.6 TB 16V 136cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009189-8",
            "sold": false
          },
          {
            "vehicle": "318i Cabrio 1.8 16V",
            "manufacturer": "BMW",
            "fipe_code": "009062-0",
            "sold": false
          },
          {
            "vehicle": "318i/iA 1.8 16V",
            "manufacturer": "BMW",
            "fipe_code": "009001-8",
            "sold": false
          },
          {
            "vehicle": "318i/iA Compact 1.8 16V",
            "manufacturer": "BMW",
            "fipe_code": "009061-1",
            "sold": false
          },
          {
            "vehicle": "318iA 2.0 16V 136cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009155-3",
            "sold": false
          },
          {
            "vehicle": "318iS/ISA 1.9 16V",
            "manufacturer": "BMW",
            "fipe_code": "009002-6",
            "sold": false
          },
          {
            "vehicle": "318Ti Compact Mec",
            "manufacturer": "BMW",
            "fipe_code": "009003-4",
            "sold": false
          },
          {
            "vehicle": "318Ti/TiA Compact 1.9 16V",
            "manufacturer": "BMW",
            "fipe_code": "009060-3",
            "sold": false
          },
          {
            "vehicle": "320i",
            "manufacturer": "BMW",
            "fipe_code": "009038-7",
            "sold": false
          },
          {
            "vehicle": "320iA",
            "manufacturer": "BMW",
            "fipe_code": "009039-5",
            "sold": false
          },
          {
            "vehicle": "320iA 2.0 TB M Sport ActiveFlex 16V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009213-4",
            "sold": false
          },
          {
            "vehicle": "320iA 2.0 Turbo/ActiveFlex 16V 184cv  4p",
            "manufacturer": "BMW",
            "fipe_code": "009164-2",
            "sold": false
          },
          {
            "vehicle": "320iA GT Sport 2.0 Turbo 16V 184cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009185-5",
            "sold": false
          },
          {
            "vehicle": "320iA Modern/Sport TB 2.0/A.Flex 16V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009165-0",
            "sold": false
          },
          {
            "vehicle": "323Ci Coupê",
            "manufacturer": "BMW",
            "fipe_code": "009057-3",
            "sold": false
          },
          {
            "vehicle": "323CiA Coupê",
            "manufacturer": "BMW",
            "fipe_code": "009058-1",
            "sold": false
          },
          {
            "vehicle": "323i 2.5 24V",
            "manufacturer": "BMW",
            "fipe_code": "009063-8",
            "sold": false
          },
          {
            "vehicle": "323i Confort",
            "manufacturer": "BMW",
            "fipe_code": "009040-9",
            "sold": false
          },
          {
            "vehicle": "323i Sport",
            "manufacturer": "BMW",
            "fipe_code": "009083-2",
            "sold": false
          },
          {
            "vehicle": "323i Touring",
            "manufacturer": "BMW",
            "fipe_code": "009030-1",
            "sold": false
          },
          {
            "vehicle": "323i/iA Exclusive",
            "manufacturer": "BMW",
            "fipe_code": "009042-5",
            "sold": false
          },
          {
            "vehicle": "323iA 2.5 24V",
            "manufacturer": "BMW",
            "fipe_code": "009064-6",
            "sold": false
          },
          {
            "vehicle": "323iA Confort",
            "manufacturer": "BMW",
            "fipe_code": "009041-7",
            "sold": false
          },
          {
            "vehicle": "323iA Entry Sedan",
            "manufacturer": "BMW",
            "fipe_code": "009054-9",
            "sold": false
          },
          {
            "vehicle": "323iA Sport",
            "manufacturer": "BMW",
            "fipe_code": "009043-3",
            "sold": false
          },
          {
            "vehicle": "323iA Top Sedan",
            "manufacturer": "BMW",
            "fipe_code": "009056-5",
            "sold": false
          },
          {
            "vehicle": "323iA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009044-1",
            "sold": false
          },
          {
            "vehicle": "323Ti Compact",
            "manufacturer": "BMW",
            "fipe_code": "009031-0",
            "sold": false
          },
          {
            "vehicle": "323Ti Compact Sport",
            "manufacturer": "BMW",
            "fipe_code": "009032-8",
            "sold": false
          },
          {
            "vehicle": "323TiA Compact Top",
            "manufacturer": "BMW",
            "fipe_code": "009033-6",
            "sold": false
          },
          {
            "vehicle": "325i",
            "manufacturer": "BMW",
            "fipe_code": "009004-2",
            "sold": false
          },
          {
            "vehicle": "325i/iA Cabrio",
            "manufacturer": "BMW",
            "fipe_code": "009005-0",
            "sold": false
          },
          {
            "vehicle": "325iA",
            "manufacturer": "BMW",
            "fipe_code": "009036-0",
            "sold": false
          },
          {
            "vehicle": "325iA 2.5 24V Protection",
            "manufacturer": "BMW",
            "fipe_code": "009094-8",
            "sold": false
          },
          {
            "vehicle": "325iA Coupé 2.5 24V 2p",
            "manufacturer": "BMW",
            "fipe_code": "009091-3",
            "sold": false
          },
          {
            "vehicle": "325iA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009112-0",
            "sold": false
          },
          {
            "vehicle": "328i Exclusive 2.8 24V",
            "manufacturer": "BMW",
            "fipe_code": "009066-2",
            "sold": false
          },
          {
            "vehicle": "328i Touring/Sport",
            "manufacturer": "BMW",
            "fipe_code": "009034-4",
            "sold": false
          },
          {
            "vehicle": "328i/iA   ( modelo antigo )",
            "manufacturer": "BMW",
            "fipe_code": "009006-9",
            "sold": false
          },
          {
            "vehicle": "328i/iA (novo modelo)",
            "manufacturer": "BMW",
            "fipe_code": "009086-7",
            "sold": false
          },
          {
            "vehicle": "328i/iA Cabrio",
            "manufacturer": "BMW",
            "fipe_code": "009022-0",
            "sold": false
          },
          {
            "vehicle": "328iA 2.0 TB/2.0 TB Flex 16V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009160-0",
            "sold": false
          },
          {
            "vehicle": "328iA Exclusive 2.8 24V",
            "manufacturer": "BMW",
            "fipe_code": "009067-0",
            "sold": false
          },
          {
            "vehicle": "328iA GT M Sport 2.0 Turbo 16V 245cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009187-1",
            "sold": false
          },
          {
            "vehicle": "328iA Luxury/Modern 2.0 TB 16V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009161-8",
            "sold": false
          },
          {
            "vehicle": "328iA M Sport 2.0 16V Flex 4p",
            "manufacturer": "BMW",
            "fipe_code": "009215-0",
            "sold": false
          },
          {
            "vehicle": "328iA Plus 2.0 TB 16V 245cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009163-4",
            "sold": false
          },
          {
            "vehicle": "328iA Sport 2.0 16V/2.0 16V Flex 4p",
            "manufacturer": "BMW",
            "fipe_code": "009162-6",
            "sold": false
          },
          {
            "vehicle": "328iA Touring/Sport",
            "manufacturer": "BMW",
            "fipe_code": "009065-4",
            "sold": false
          },
          {
            "vehicle": "330Ci Cabriolet",
            "manufacturer": "BMW",
            "fipe_code": "009093-0",
            "sold": false
          },
          {
            "vehicle": "330CiA Cabriolet",
            "manufacturer": "BMW",
            "fipe_code": "009087-5",
            "sold": false
          },
          {
            "vehicle": "330i MotorSport 3.0 24V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009092-1",
            "sold": false
          },
          {
            "vehicle": "330iA Exclusive 3.0 24V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009113-8",
            "sold": false
          },
          {
            "vehicle": "330iA MotorSport 4p",
            "manufacturer": "BMW",
            "fipe_code": "009088-3",
            "sold": false
          },
          {
            "vehicle": "330iA Top 4p",
            "manufacturer": "BMW",
            "fipe_code": "009089-1",
            "sold": false
          },
          {
            "vehicle": "335i 3.0 ActiveHybrid 3",
            "manufacturer": "BMW",
            "fipe_code": "009182-0",
            "sold": false
          },
          {
            "vehicle": "335iA 3.0 24V 306cv",
            "manufacturer": "BMW",
            "fipe_code": "009122-7",
            "sold": false
          },
          {
            "vehicle": "335iA Cabriolet 3.0 24V 306cv",
            "manufacturer": "BMW",
            "fipe_code": "009124-3",
            "sold": false
          },
          {
            "vehicle": "335iA M Sport 3.0 24V 306cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009184-7",
            "sold": false
          },
          {
            "vehicle": "335iA Sport 3.0 24V 306cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009170-7",
            "sold": false
          },
          {
            "vehicle": "420i Cabriolet Sport 2.0 TB 184cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009203-7",
            "sold": false
          },
          {
            "vehicle": "428i Cabriolet Sport 2.0 TB 245cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009194-4",
            "sold": false
          },
          {
            "vehicle": "428i Gran Coupe M Sport 2.0 TB 245cv",
            "manufacturer": "BMW",
            "fipe_code": "009201-0",
            "sold": false
          },
          {
            "vehicle": "428i Gran Coupe Sport 2.0 TB 245cv",
            "manufacturer": "BMW",
            "fipe_code": "009202-9",
            "sold": false
          },
          {
            "vehicle": "430i Cab. Sport Limited Ed.2.0 TB 2p",
            "manufacturer": "BMW",
            "fipe_code": "009220-7",
            "sold": false
          },
          {
            "vehicle": "430i Cabriolet Sport 2.0 TB 252cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009224-0",
            "sold": false
          },
          {
            "vehicle": "430i Gran Coupé M Sport TB 5p",
            "manufacturer": "BMW",
            "fipe_code": "009221-5",
            "sold": false
          },
          {
            "vehicle": "435iA M Sport Coupe 3.0 24V 306cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009190-1",
            "sold": false
          },
          {
            "vehicle": "520i 2.0 16V",
            "manufacturer": "BMW",
            "fipe_code": "009047-6",
            "sold": false
          },
          {
            "vehicle": "525i/iA",
            "manufacturer": "BMW",
            "fipe_code": "009007-7",
            "sold": false
          },
          {
            "vehicle": "525i/iA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009068-9",
            "sold": false
          },
          {
            "vehicle": "528i/iA",
            "manufacturer": "BMW",
            "fipe_code": "009008-5",
            "sold": false
          },
          {
            "vehicle": "528iA 2.0 Turbo 16V 245cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009168-5",
            "sold": false
          },
          {
            "vehicle": "528IA High",
            "manufacturer": "BMW",
            "fipe_code": "009023-9",
            "sold": false
          },
          {
            "vehicle": "528iA M Sport 2.0 Turbo 16V 245cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009183-9",
            "sold": false
          },
          {
            "vehicle": "528IA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009024-7",
            "sold": false
          },
          {
            "vehicle": "530i/iA",
            "manufacturer": "BMW",
            "fipe_code": "009009-3",
            "sold": false
          },
          {
            "vehicle": "530i/iA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009069-7",
            "sold": false
          },
          {
            "vehicle": "535i/iA 3.5 24V",
            "manufacturer": "BMW",
            "fipe_code": "009037-9",
            "sold": false
          },
          {
            "vehicle": "535iA 3.0 24V 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009146-4",
            "sold": false
          },
          {
            "vehicle": "535iA GT 3.0 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009148-0",
            "sold": false
          },
          {
            "vehicle": "535iA M Sport 3.0 24V 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009179-0",
            "sold": false
          },
          {
            "vehicle": "540i",
            "manufacturer": "BMW",
            "fipe_code": "009010-7",
            "sold": false
          },
          {
            "vehicle": "540i/iA Touring",
            "manufacturer": "BMW",
            "fipe_code": "009017-4",
            "sold": false
          },
          {
            "vehicle": "540iA",
            "manufacturer": "BMW",
            "fipe_code": "009025-5",
            "sold": false
          },
          {
            "vehicle": "540iA MotorSport",
            "manufacturer": "BMW",
            "fipe_code": "009084-0",
            "sold": false
          },
          {
            "vehicle": "540iA Protection",
            "manufacturer": "BMW",
            "fipe_code": "009026-3",
            "sold": false
          },
          {
            "vehicle": "540iTA",
            "manufacturer": "BMW",
            "fipe_code": "009052-2",
            "sold": false
          },
          {
            "vehicle": "545iA 4.4 32V V8 333cv",
            "manufacturer": "BMW",
            "fipe_code": "009102-2",
            "sold": false
          },
          {
            "vehicle": "550iA 4.4 32V 407cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009147-2",
            "sold": false
          },
          {
            "vehicle": "550iA 4.8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009110-3",
            "sold": false
          },
          {
            "vehicle": "550iA Limited Sport Edition 4.8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009137-5",
            "sold": false
          },
          {
            "vehicle": "550iA Security 4.8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009125-1",
            "sold": false
          },
          {
            "vehicle": "640i Gran Coupe 3.0 320cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009177-4",
            "sold": false
          },
          {
            "vehicle": "645Ci Cabriolet 4.4 V8 32V 333cv",
            "manufacturer": "BMW",
            "fipe_code": "009111-1",
            "sold": false
          },
          {
            "vehicle": "645iA 4.4 V8 32V 333cv",
            "manufacturer": "BMW",
            "fipe_code": "009103-0",
            "sold": false
          },
          {
            "vehicle": "650Ci Cabriolet 4.4 407cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009158-8",
            "sold": false
          },
          {
            "vehicle": "650Ci Cabriolet 4.8 V8 32V 360cv",
            "manufacturer": "BMW",
            "fipe_code": "009115-4",
            "sold": false
          },
          {
            "vehicle": "650i Gran Coupe 4.4 V8 450cv 4p",
            "manufacturer": "BMW",
            "fipe_code": "009188-0",
            "sold": false
          },
          {
            "vehicle": "650iA 4.4 407cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009166-9",
            "sold": false
          },
          {
            "vehicle": "650iA 4.8 V8 32V 360cv",
            "manufacturer": "BMW",
            "fipe_code": "009114-6",
            "sold": false
          },
          {
            "vehicle": "650iA Limited Sport  Edition 4.8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009141-3",
            "sold": false
          },
          {
            "vehicle": "730i 3.0 32V",
            "manufacturer": "BMW",
            "fipe_code": "009048-4",
            "sold": false
          },
          {
            "vehicle": "730iA 3.0 32V",
            "manufacturer": "BMW",
            "fipe_code": "009049-2",
            "sold": false
          },
          {
            "vehicle": "735i/iA 3.5 32V",
            "manufacturer": "BMW",
            "fipe_code": "009070-0",
            "sold": false
          },
          {
            "vehicle": "740i",
            "manufacturer": "BMW",
            "fipe_code": "009011-5",
            "sold": false
          },
          {
            "vehicle": "740iA",
            "manufacturer": "BMW",
            "fipe_code": "009027-1",
            "sold": false
          },
          {
            "vehicle": "740iL/iLA Highline 4.4 32V",
            "manufacturer": "BMW",
            "fipe_code": "009072-7",
            "sold": false
          },
          {
            "vehicle": "740iLA Protection",
            "manufacturer": "BMW",
            "fipe_code": "009053-0",
            "sold": false
          },
          {
            "vehicle": "745iA 4.4 V8 32V 333cv",
            "manufacturer": "BMW",
            "fipe_code": "009096-4",
            "sold": false
          },
          {
            "vehicle": "750i",
            "manufacturer": "BMW",
            "fipe_code": "009012-3",
            "sold": false
          },
          {
            "vehicle": "750i M Sport Sedan 4.4 V8 450cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009211-8",
            "sold": false
          },
          {
            "vehicle": "750iA",
            "manufacturer": "BMW",
            "fipe_code": "009028-0",
            "sold": false
          },
          {
            "vehicle": "750iL Highline 5.4 24V",
            "manufacturer": "BMW",
            "fipe_code": "009071-9",
            "sold": false
          },
          {
            "vehicle": "750iL M Sport Sedan 4.4 V8 450cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009219-3",
            "sold": false
          },
          {
            "vehicle": "750iLA 4.4 ActiveHybrid 7",
            "manufacturer": "BMW",
            "fipe_code": "009154-5",
            "sold": false
          },
          {
            "vehicle": "760iL 6.0 V12 445cv/544cv",
            "manufacturer": "BMW",
            "fipe_code": "009099-9",
            "sold": false
          },
          {
            "vehicle": "840Ci",
            "manufacturer": "BMW",
            "fipe_code": "009050-6",
            "sold": false
          },
          {
            "vehicle": "840CiA",
            "manufacturer": "BMW",
            "fipe_code": "009051-4",
            "sold": false
          },
          {
            "vehicle": "850Ci/CiA 5.0 24V",
            "manufacturer": "BMW",
            "fipe_code": "009077-8",
            "sold": false
          },
          {
            "vehicle": "850Ci/CiA 5.4 24V",
            "manufacturer": "BMW",
            "fipe_code": "009078-6",
            "sold": false
          },
          {
            "vehicle": "850CSi 5.6 24V",
            "manufacturer": "BMW",
            "fipe_code": "009076-0",
            "sold": false
          },
          {
            "vehicle": "850i 5.0 24V",
            "manufacturer": "BMW",
            "fipe_code": "009013-1",
            "sold": false
          },
          {
            "vehicle": "i3 Rex E Drive 170cv Aut.(Elétrico)",
            "manufacturer": "BMW",
            "fipe_code": "009196-0",
            "sold": false
          },
          {
            "vehicle": "i3 Rex E Drive Full 170cv Aut.(Elétrico)",
            "manufacturer": "BMW",
            "fipe_code": "009195-2",
            "sold": false
          },
          {
            "vehicle": "i8 e-Drive 1.5 TB 12V 362cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009197-9",
            "sold": false
          },
          {
            "vehicle": "M 135i 3.0 24V 320cv",
            "manufacturer": "BMW",
            "fipe_code": "009178-2",
            "sold": false
          },
          {
            "vehicle": "M 235i Coupe 3.0 24V 326cv",
            "manufacturer": "BMW",
            "fipe_code": "009193-6",
            "sold": false
          },
          {
            "vehicle": "M 240i Coupe 3.0 24V 340cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009223-1",
            "sold": false
          },
          {
            "vehicle": "M Roadster",
            "manufacturer": "BMW",
            "fipe_code": "009079-4",
            "sold": false
          },
          {
            "vehicle": "M1 Coupê 3.0 24V 340cv",
            "manufacturer": "BMW",
            "fipe_code": "009157-0",
            "sold": false
          },
          {
            "vehicle": "M140i 3.0  24v 340cv 5p",
            "manufacturer": "BMW",
            "fipe_code": "009222-3",
            "sold": false
          },
          {
            "vehicle": "M2 Coupe 3.0 Turbo 24V 370cv",
            "manufacturer": "BMW",
            "fipe_code": "009218-5",
            "sold": false
          },
          {
            "vehicle": "M3 3.2 24V",
            "manufacturer": "BMW",
            "fipe_code": "009073-5",
            "sold": false
          },
          {
            "vehicle": "M3 Cabrio 3.0 24V",
            "manufacturer": "BMW",
            "fipe_code": "009074-3",
            "sold": false
          },
          {
            "vehicle": "M3 Cabrio 4.0 32V",
            "manufacturer": "BMW",
            "fipe_code": "009134-0",
            "sold": false
          },
          {
            "vehicle": "M3 Coupê 3.0 24V 255cv",
            "manufacturer": "BMW",
            "fipe_code": "009014-0",
            "sold": false
          },
          {
            "vehicle": "M3 Coupê 3.0 V6 24V 282cv",
            "manufacturer": "BMW",
            "fipe_code": "009029-8",
            "sold": false
          },
          {
            "vehicle": "M3 Coupê 4.0 32V",
            "manufacturer": "BMW",
            "fipe_code": "009127-8",
            "sold": false
          },
          {
            "vehicle": "M3 Sedan 3.0 Bi-Turbo 24V 4p",
            "manufacturer": "BMW",
            "fipe_code": "009209-6",
            "sold": false
          },
          {
            "vehicle": "M3 Sedan 4.0 32V",
            "manufacturer": "BMW",
            "fipe_code": "009133-2",
            "sold": false
          },
          {
            "vehicle": "M4 Cabriolet 3.0 Bi-Turbo 24V 431cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009210-0",
            "sold": false
          },
          {
            "vehicle": "M4 Coupe 3.0 Bi-Turbo 24V 431cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009206-1",
            "sold": false
          },
          {
            "vehicle": "M5 3.8/Touring 3.8 24V",
            "manufacturer": "BMW",
            "fipe_code": "009015-8",
            "sold": false
          },
          {
            "vehicle": "M5 4.4 560cv Bi-Turbo Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009173-1",
            "sold": false
          },
          {
            "vehicle": "M5 5.0 32V/ 40V",
            "manufacturer": "BMW",
            "fipe_code": "009075-1",
            "sold": false
          },
          {
            "vehicle": "M6 5.0 V10 40V 507cv",
            "manufacturer": "BMW",
            "fipe_code": "009108-1",
            "sold": false
          },
          {
            "vehicle": "M6 Coupe 4.4 Bi-Turbo V8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009181-2",
            "sold": false
          },
          {
            "vehicle": "M6 Gran Coupe 4.4 Bi-Turbo V8 32V 560cv",
            "manufacturer": "BMW",
            "fipe_code": "009186-3",
            "sold": false
          },
          {
            "vehicle": "X1 SDRIVE 18i 2.0 16V 4x2 Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009145-6",
            "sold": false
          },
          {
            "vehicle": "X1 SDRIVE 20i 2.0/2.0 TB Acti.Flex Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009172-3",
            "sold": false
          },
          {
            "vehicle": "X1 XDRIVE 25i Sport 2.0/2.0 Flex Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009216-9",
            "sold": false
          },
          {
            "vehicle": "X1 XDRIVE 28i 2.0 Turbo 16V 4x4 Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009167-7",
            "sold": false
          },
          {
            "vehicle": "X1 XDRIVE 28i 3.0 24V 4x4 Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009142-1",
            "sold": false
          },
          {
            "vehicle": "X1 XDRIVE 28i Sport 2.0 ActiveFlex Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009200-2",
            "sold": false
          },
          {
            "vehicle": "X3 Family 2.5 24V 192cv/ 218cv",
            "manufacturer": "BMW",
            "fipe_code": "009104-9",
            "sold": false
          },
          {
            "vehicle": "X3 Family 3.0 24V 231cv",
            "manufacturer": "BMW",
            "fipe_code": "009101-4",
            "sold": false
          },
          {
            "vehicle": "X3 Sport 2.5 24V 192cv/ 218cv",
            "manufacturer": "BMW",
            "fipe_code": "009118-9",
            "sold": false
          },
          {
            "vehicle": "X3 Sport 3.0 24V 231cv",
            "manufacturer": "BMW",
            "fipe_code": "009100-6",
            "sold": false
          },
          {
            "vehicle": "X3 XDRIVE 20i 2.0/X-Line Bi-TB Flex Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009180-4",
            "sold": false
          },
          {
            "vehicle": "X3 XDRIVE 28i 2.0 Turbo 245cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009175-8",
            "sold": false
          },
          {
            "vehicle": "X3 XDRIVE 28i 3.0 258cv",
            "manufacturer": "BMW",
            "fipe_code": "009156-1",
            "sold": false
          },
          {
            "vehicle": "X3 XDRIVE 35i/M-Sport 3.0 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009151-0",
            "sold": false
          },
          {
            "vehicle": "X4 XDRIVE 28i X-Line 2.0 Turbo 245cv Aut",
            "manufacturer": "BMW",
            "fipe_code": "009198-7",
            "sold": false
          },
          {
            "vehicle": "X4 XDRIVE 35i M-Sport 3.0 TB 306cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009199-5",
            "sold": false
          },
          {
            "vehicle": "X5 3.0 4x4",
            "manufacturer": "BMW",
            "fipe_code": "009081-6",
            "sold": false
          },
          {
            "vehicle": "X5 4.4 4x4",
            "manufacturer": "BMW",
            "fipe_code": "009082-4",
            "sold": false
          },
          {
            "vehicle": "X5 4.8 4x4 V8 32V 360cv",
            "manufacturer": "BMW",
            "fipe_code": "009107-3",
            "sold": false
          },
          {
            "vehicle": "X5 Endurance 4.8is 4x4 V8 32V 355cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009128-6",
            "sold": false
          },
          {
            "vehicle": "X5 M 4.4 4x4 V8 32V 555cv Bi-Turbo Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009143-0",
            "sold": false
          },
          {
            "vehicle": "X5 Security 4.4 4x4 V8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009119-7",
            "sold": false
          },
          {
            "vehicle": "X5 Security 4.8is 4x4 V8 32V 355cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009140-5",
            "sold": false
          },
          {
            "vehicle": "X5 Sport 4.4 4x4 V8 32V",
            "manufacturer": "BMW",
            "fipe_code": "009095-6",
            "sold": false
          },
          {
            "vehicle": "X5 Sport 4.8 4x4 V8 32V 355cv",
            "manufacturer": "BMW",
            "fipe_code": "009123-5",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 30d 3.0 258cv Diesel",
            "manufacturer": "BMW",
            "fipe_code": "009214-2",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 30d Full 3.0 258cv Diesel",
            "manufacturer": "BMW",
            "fipe_code": "009205-3",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 35i 3.0 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009149-9",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 35i Full 3.0 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009192-8",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 50i 4.4  Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009150-2",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 50i M Sport 4.4 Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009191-0",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE 50i Security 4.4 Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009153-7",
            "sold": false
          },
          {
            "vehicle": "X5 XDRIVE M50d 3.0 381cv Diesel",
            "manufacturer": "BMW",
            "fipe_code": "009207-0",
            "sold": false
          },
          {
            "vehicle": "X6 M 4.4 4x4 V8 32V Bi-Turbo Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009144-8",
            "sold": false
          },
          {
            "vehicle": "X6 XDRIVE 35i 3.0 306cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009131-6",
            "sold": false
          },
          {
            "vehicle": "X6 XDRIVE 50i 4.4 407cv Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009132-4",
            "sold": false
          },
          {
            "vehicle": "X6 XDRIVE 50i M Sport 4.4 Bi-Turbo",
            "manufacturer": "BMW",
            "fipe_code": "009204-5",
            "sold": false
          },
          {
            "vehicle": "Z3 2.8 Aut",
            "manufacturer": "BMW",
            "fipe_code": "009020-4",
            "sold": false
          },
          {
            "vehicle": "Z3 2.8 Mec",
            "manufacturer": "BMW",
            "fipe_code": "009019-0",
            "sold": false
          },
          {
            "vehicle": "Z3 3.0 24V Roadster 2p",
            "manufacturer": "BMW",
            "fipe_code": "009085-9",
            "sold": false
          },
          {
            "vehicle": "Z3 Roadster 1.9 Mec",
            "manufacturer": "BMW",
            "fipe_code": "009016-6",
            "sold": false
          },
          {
            "vehicle": "Z3 Roadster 2.8",
            "manufacturer": "BMW",
            "fipe_code": "009021-2",
            "sold": false
          },
          {
            "vehicle": "Z3 Roadster M 3.2",
            "manufacturer": "BMW",
            "fipe_code": "009018-2",
            "sold": false
          },
          {
            "vehicle": "Z4 Coupé M 3.2 V6 24V 343cv",
            "manufacturer": "BMW",
            "fipe_code": "009121-9",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster 2.0 150cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009116-2",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster 3.0 V6 24V Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009097-2",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster M 3.2 V6 24V 343cv",
            "manufacturer": "BMW",
            "fipe_code": "009120-0",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster sDRIVE 20i 2.0 16V 2p Aut",
            "manufacturer": "BMW",
            "fipe_code": "009174-0",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster sDRIVE 23i 2.5 24V 204cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009138-3",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster sDRIVE 35i 3.0 24V 306cv 2p",
            "manufacturer": "BMW",
            "fipe_code": "009139-1",
            "sold": false
          },
          {
            "vehicle": "Z4 Roadster Sport 3.0 24V 231cv Aut.",
            "manufacturer": "BMW",
            "fipe_code": "009098-0",
            "sold": false
          },
          {
            "vehicle": "Z8 5.0 V8",
            "manufacturer": "BMW",
            "fipe_code": "009090-5",
            "sold": false
          },
          {
            "vehicle": "Buggy W. Turing/Luxo/M-11 Absolut 1.6 8V",
            "manufacturer": "BRM",
            "fipe_code": "039002-0",
            "sold": false
          },
          {
            "vehicle": "Buggy/M-8/M-8 Long 1.6",
            "manufacturer": "BRM",
            "fipe_code": "039001-1",
            "sold": false
          },
          {
            "vehicle": "Buggy 1.6 2-Lug.",
            "manufacturer": "Buggy",
            "fipe_code": "040001-7",
            "sold": false
          },
          {
            "vehicle": "Buggy 1.6/ TST/ RS 1.6 4-Lug.",
            "manufacturer": "Buggy",
            "fipe_code": "040002-5",
            "sold": false
          },
          {
            "vehicle": "Buggy IV e V",
            "manufacturer": "Bugre",
            "fipe_code": "062001-7",
            "sold": false
          },
          {
            "vehicle": "Buggy VII/VII BIG",
            "manufacturer": "Bugre",
            "fipe_code": "062002-5",
            "sold": false
          },
          {
            "vehicle": "Deville/Eldorado 4.9",
            "manufacturer": "Cadillac",
            "fipe_code": "041001-2",
            "sold": false
          },
          {
            "vehicle": "Seville 4.6",
            "manufacturer": "Cadillac",
            "fipe_code": "041002-0",
            "sold": false
          },
          {
            "vehicle": "Javali 3.0 4x4 Diesel",
            "manufacturer": "CBT Jipe",
            "fipe_code": "042001-8",
            "sold": false
          },
          {
            "vehicle": "Cargo 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANA",
            "fipe_code": "064002-6",
            "sold": false
          },
          {
            "vehicle": "Cargo CD 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANA",
            "fipe_code": "064004-2",
            "sold": false
          },
          {
            "vehicle": "Cargo CE 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANA",
            "fipe_code": "064003-4",
            "sold": false
          },
          {
            "vehicle": "Family 1.0 8V 53cv (Perua)",
            "manufacturer": "CHANA",
            "fipe_code": "064001-8",
            "sold": false
          },
          {
            "vehicle": "Utility 1.0 8V 53cv  (Furgão)",
            "manufacturer": "CHANA",
            "fipe_code": "064005-0",
            "sold": false
          },
          {
            "vehicle": "MINI STAR CD 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081004-5",
            "sold": false
          },
          {
            "vehicle": "MINI STAR CE 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081003-7",
            "sold": false
          },
          {
            "vehicle": "MINI STAR CS 1.0 8V 53cv (Pick-Up)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081001-0",
            "sold": false
          },
          {
            "vehicle": "MINI STAR CSB 1.0 8V 53cv (Pick-Up Báu)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081002-9",
            "sold": false
          },
          {
            "vehicle": "MINI STAR Family 1.0 8V 53cv (MiniVan)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081006-1",
            "sold": false
          },
          {
            "vehicle": "MINI STAR Utility 1.0 8V 53cv (Furgão)",
            "manufacturer": "CHANGAN",
            "fipe_code": "081005-3",
            "sold": false
          },
          {
            "vehicle": "Celer Hatch 1.5 16V Flex 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073007-6",
            "sold": false
          },
          {
            "vehicle": "Celer Hatch ACT 1.5 16V Flex 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073012-2",
            "sold": false
          },
          {
            "vehicle": "Celer Sedan 1.5 16V Flex 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073008-4",
            "sold": false
          },
          {
            "vehicle": "Celer Sedan ACT 1.5 16V Flex 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073013-0",
            "sold": false
          },
          {
            "vehicle": "CIELO 1.6 16V 119cv  5p",
            "manufacturer": "CHERY",
            "fipe_code": "073003-3",
            "sold": false
          },
          {
            "vehicle": "CIELO Sedan 1.6 16V 119cv  4p",
            "manufacturer": "CHERY",
            "fipe_code": "073004-1",
            "sold": false
          },
          {
            "vehicle": "Face 1.3 16V/1.3 16v Flex.Mec ",
            "manufacturer": "CHERY",
            "fipe_code": "073002-5",
            "sold": false
          },
          {
            "vehicle": "QQ 1.0 ACT 12V 69cv 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073010-6",
            "sold": false
          },
          {
            "vehicle": "QQ 1.0 ACT FL 12V 69cv 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073014-9",
            "sold": false
          },
          {
            "vehicle": "QQ 1.0 Look FL 12V 69cv 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073011-4",
            "sold": false
          },
          {
            "vehicle": "QQ 1.1/1.0 12V 69cv 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073005-0",
            "sold": false
          },
          {
            "vehicle": "S-18 1.3 16V Flex Mec. 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073006-8",
            "sold": false
          },
          {
            "vehicle": "Tiggo 2.0 16V Aut. 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073009-2",
            "sold": false
          },
          {
            "vehicle": "Tiggo 2.0 16V Mec. 5p",
            "manufacturer": "CHERY",
            "fipe_code": "073001-7",
            "sold": false
          },
          {
            "vehicle": "300 C 3.5 V6 249cv",
            "manufacturer": "Chrysler",
            "fipe_code": "010029-3",
            "sold": false
          },
          {
            "vehicle": "300 C 3.6 V6 Aut.",
            "manufacturer": "Chrysler",
            "fipe_code": "010033-1",
            "sold": false
          },
          {
            "vehicle": "300 C 5.7 V8 16V 340cv Aut.",
            "manufacturer": "Chrysler",
            "fipe_code": "010024-2",
            "sold": false
          },
          {
            "vehicle": "300 C SRT8 6.1 V8 16V 431cv Aut",
            "manufacturer": "Chrysler",
            "fipe_code": "010027-7",
            "sold": false
          },
          {
            "vehicle": "300 C Touring 5.7 V8 16V 340cv Aut.",
            "manufacturer": "Chrysler",
            "fipe_code": "010026-9",
            "sold": false
          },
          {
            "vehicle": "300 M 3.5",
            "manufacturer": "Chrysler",
            "fipe_code": "010014-5",
            "sold": false
          },
          {
            "vehicle": "Caravan LE  3.3",
            "manufacturer": "Chrysler",
            "fipe_code": "010008-0",
            "sold": false
          },
          {
            "vehicle": "Caravan LX 3.3 V6 182cv",
            "manufacturer": "Chrysler",
            "fipe_code": "010023-4",
            "sold": false
          },
          {
            "vehicle": "Caravan LX 3.8",
            "manufacturer": "Chrysler",
            "fipe_code": "010009-9",
            "sold": false
          },
          {
            "vehicle": "Caravan SE 2.4/3.3",
            "manufacturer": "Chrysler",
            "fipe_code": "010001-3",
            "sold": false
          },
          {
            "vehicle": "Cirrus LXi 2.5 V6 24V",
            "manufacturer": "Chrysler",
            "fipe_code": "010015-3",
            "sold": false
          },
          {
            "vehicle": "Gran Caravan SE 3.3 V6",
            "manufacturer": "Chrysler",
            "fipe_code": "010016-1",
            "sold": false
          },
          {
            "vehicle": "Grand Caravan LE 3.3 Aut",
            "manufacturer": "Chrysler",
            "fipe_code": "010007-2",
            "sold": false
          },
          {
            "vehicle": "Grand Caravan Limited 3.3 V6 12V 182cv",
            "manufacturer": "Chrysler",
            "fipe_code": "010021-8",
            "sold": false
          },
          {
            "vehicle": "Grand Caravan LX 3.8",
            "manufacturer": "Chrysler",
            "fipe_code": "010010-2",
            "sold": false
          },
          {
            "vehicle": "LE Baron 3.0 V6",
            "manufacturer": "Chrysler",
            "fipe_code": "010017-0",
            "sold": false
          },
          {
            "vehicle": "LE Baron 3.0 V6 Conv.",
            "manufacturer": "Chrysler",
            "fipe_code": "010018-8",
            "sold": false
          },
          {
            "vehicle": "Neon LE 1.8",
            "manufacturer": "Chrysler",
            "fipe_code": "010011-0",
            "sold": false
          },
          {
            "vehicle": "Neon LE/Highline 2.0",
            "manufacturer": "Chrysler",
            "fipe_code": "010002-1",
            "sold": false
          },
          {
            "vehicle": "Neon Sport 1.8/2.0",
            "manufacturer": "Chrysler",
            "fipe_code": "010012-9",
            "sold": false
          },
          {
            "vehicle": "PT Cruiser Cabrio 2.4 16V 143cv 2p",
            "manufacturer": "Chrysler",
            "fipe_code": "010028-5",
            "sold": false
          },
          {
            "vehicle": "PT Cruiser Classic 2.4 16V 143cv 4p",
            "manufacturer": "Chrysler",
            "fipe_code": "010025-0",
            "sold": false
          },
          {
            "vehicle": "PT Cruiser Limited 2.0 16V 4p",
            "manufacturer": "Chrysler",
            "fipe_code": "010019-6",
            "sold": false
          },
          {
            "vehicle": "PT Cruiser Limited 2.4 16V 143cv 4p",
            "manufacturer": "Chrysler",
            "fipe_code": "010022-6",
            "sold": false
          },
          {
            "vehicle": "PT Cruiser Touring DEC. EDITION 2.4 16V",
            "manufacturer": "Chrysler",
            "fipe_code": "010031-5",
            "sold": false
          },
          {
            "vehicle": "Sebring LX 2.7 V6 24V 204cv",
            "manufacturer": "Chrysler",
            "fipe_code": "010020-0",
            "sold": false
          },
          {
            "vehicle": "Stratus LE 2.0",
            "manufacturer": "Chrysler",
            "fipe_code": "010003-0",
            "sold": false
          },
          {
            "vehicle": "Stratus LX 2.0 Mec",
            "manufacturer": "Chrysler",
            "fipe_code": "010004-8",
            "sold": false
          },
          {
            "vehicle": "Stratus LX 2.5 Aut",
            "manufacturer": "Chrysler",
            "fipe_code": "010005-6",
            "sold": false
          },
          {
            "vehicle": "Stratus LX 2.5 Conversível Aut",
            "manufacturer": "Chrysler",
            "fipe_code": "010006-4",
            "sold": false
          },
          {
            "vehicle": "TOWN & COUNTRY Limited 3.8 /3.6 V6 Aut.",
            "manufacturer": "Chrysler",
            "fipe_code": "010030-7",
            "sold": false
          },
          {
            "vehicle": "TOWN & COUNTRY Touring 3.6 V6 Aut.",
            "manufacturer": "Chrysler",
            "fipe_code": "010032-3",
            "sold": false
          },
          {
            "vehicle": "Vision 3.5 24V",
            "manufacturer": "Chrysler",
            "fipe_code": "010013-7",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Exc. ATACA. 1.6 Flex 16V 5p Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011126-0",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Exc. ATACA. 1.6 Flex 16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011122-8",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Exclusive 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011109-0",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Exclusive 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011103-1",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Feel 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011164-3",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Feel 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011165-1",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS GL 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011101-5",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS GLX 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011108-2",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS GLX 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011102-3",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS GLX ATACAMA 1.6 Flex 16V 5p Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011124-4",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS GLX ATACAMA 1.6 Flex 16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011123-6",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Live 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011162-7",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Live 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011163-5",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS SALOMON EXCLUSIVE 1.6 Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011153-8",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS SALOMON EXCLUSIVE 1.6 Flex Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011152-0",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS SALOMON TENDANCE 1.6 Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011150-3",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS SALOMON TENDANCE 1.6 Flex Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011151-1",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Shine 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011166-0",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS Star 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011161-9",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS TENDANCE 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011143-0",
            "sold": false
          },
          {
            "vehicle": "AIRCROSS TENDANCE 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011144-9",
            "sold": false
          },
          {
            "vehicle": "AX GTi",
            "manufacturer": "Citroën",
            "fipe_code": "011001-9",
            "sold": false
          },
          {
            "vehicle": "Berlingo MultSpace GLX 1.6 16V 110cv 4p",
            "manufacturer": "Citroën",
            "fipe_code": "011078-7",
            "sold": false
          },
          {
            "vehicle": "Berlingo MultSpace GLX 1.8i 3p",
            "manufacturer": "Citroën",
            "fipe_code": "011026-4",
            "sold": false
          },
          {
            "vehicle": "Berlingo MultSpace GLX 1.8i 4p",
            "manufacturer": "Citroën",
            "fipe_code": "011033-7",
            "sold": false
          },
          {
            "vehicle": "BX 1.6S 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011002-7",
            "sold": false
          },
          {
            "vehicle": "BX GTi 1.9",
            "manufacturer": "Citroën",
            "fipe_code": "011039-6",
            "sold": false
          },
          {
            "vehicle": "C3 Attra/Origine Pack 1.5 Flex 8V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011145-7",
            "sold": false
          },
          {
            "vehicle": "C3 Attraction Pure Tech 1.2 Flex 12V Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011170-8",
            "sold": false
          },
          {
            "vehicle": "C3 Excl. 1.6 VTi Flex Start 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011119-8",
            "sold": false
          },
          {
            "vehicle": "C3 Excl. 1.6 VTi Flex Start 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011118-0",
            "sold": false
          },
          {
            "vehicle": "C3 Excl./Excl.Solar./Sonora 1.6 Flex Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011091-4",
            "sold": false
          },
          {
            "vehicle": "C3 Exclus./Excl.Solaris 1.6 Flex 16V Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011071-0",
            "sold": false
          },
          {
            "vehicle": "C3 Exclusive 1.4 Flex 8V 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011083-3",
            "sold": false
          },
          {
            "vehicle": "C3 Exclusive 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011142-2",
            "sold": false
          },
          {
            "vehicle": "C3 GLX 1.4/ GLX Sonora 1.4 Flex 8V 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011072-8",
            "sold": false
          },
          {
            "vehicle": "C3 GLX 1.6 Flex 16V 5p  Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011090-6",
            "sold": false
          },
          {
            "vehicle": "C3 GLX 1.6/ 1.6 Flex 16V 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011070-1",
            "sold": false
          },
          {
            "vehicle": "C3 Ocimar Versolato 1.6 16V 110cv 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011076-0",
            "sold": false
          },
          {
            "vehicle": "C3 Origine 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011116-3",
            "sold": false
          },
          {
            "vehicle": "C3 Origine Pure Tech 1.2 Flex 12V Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011171-6",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso Excl. 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011111-2",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso Exclusive 1.6 Flex 16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011107-4",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso GL 1.5 Flex 8V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011114-7",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso GL 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011105-8",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso GLX 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011115-5",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso GLX 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011110-4",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso GLX 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011106-6",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso Origine 1.5 Flex 8V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011141-4",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso Tendance 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011140-6",
            "sold": false
          },
          {
            "vehicle": "C3 Picasso Tendance 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011139-2",
            "sold": false
          },
          {
            "vehicle": "C3 Style Ed. Pure Tech 1.2 Flex 12V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011175-9",
            "sold": false
          },
          {
            "vehicle": "C3 Style Edition 1.6 Flex 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011176-7",
            "sold": false
          },
          {
            "vehicle": "C3 Tendance 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011117-1",
            "sold": false
          },
          {
            "vehicle": "C3 Tendance 1.6 VTi Flex Start 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011138-4",
            "sold": false
          },
          {
            "vehicle": "C3 Tendance Pure Tech 1.2 Flex 12V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011169-4",
            "sold": false
          },
          {
            "vehicle": "C3 X-BOX ONE 1.6 VTi Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011137-6",
            "sold": false
          },
          {
            "vehicle": "C3 XTR 1.4 Flex 8V 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011082-5",
            "sold": false
          },
          {
            "vehicle": "C3 XTR 1.6 Flex 16V 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011080-9",
            "sold": false
          },
          {
            "vehicle": "C4 Competition 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011133-3",
            "sold": false
          },
          {
            "vehicle": "C4 Competition 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011127-9",
            "sold": false
          },
          {
            "vehicle": "C4 Excl./Excl. Solar. 2.0 Flex 16V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011097-3",
            "sold": false
          },
          {
            "vehicle": "C4 Excl.2.0/2.0 Solaris Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011095-7",
            "sold": false
          },
          {
            "vehicle": "C4 GLX 1.6 Flex 16V 5p mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011093-0",
            "sold": false
          },
          {
            "vehicle": "C4 GLX 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011094-9",
            "sold": false
          },
          {
            "vehicle": "C4 GLX 2.0 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011096-5",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Exclusive 1.6 Turbo 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011132-5",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Exclusive 1.6 Turbo Flex Aut. ",
            "manufacturer": "Citroën",
            "fipe_code": "011156-2",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Exclusive 2.0 Flex 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011131-7",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Orig.Business 1.6 TB Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011172-4",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Origine 1.6 Turbo Flex  Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011173-2",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Origine 1.6 Turbo Flex Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011174-0",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Origine 2.0 Flex 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011158-9",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Origine 2.0 Flex 4p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011128-7",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE S 1.6 Turbo Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011177-5",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Tendance 1.6 Turbo 4p Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011146-5",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Tendance 1.6 Turbo Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011157-0",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Tendance 2.0 Flex 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011130-9",
            "sold": false
          },
          {
            "vehicle": "C4 LOUNGE Tendance 2.0 Flex 4p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011129-5",
            "sold": false
          },
          {
            "vehicle": "C4 PAL.Excl/Excl(Tech.) 2.0/2.0 Flex Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011088-4",
            "sold": false
          },
          {
            "vehicle": "C4 PALLAS Exclusive 2.0/2.0 Flex 16V Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011087-6",
            "sold": false
          },
          {
            "vehicle": "C4 PALLAS GLX 2.0/ 2.0 Flex Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011086-8",
            "sold": false
          },
          {
            "vehicle": "C4 PALLAS GLX 2.0/2.0 Flex 16V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011085-0",
            "sold": false
          },
          {
            "vehicle": "C4 Picasso Grand 2.0 16V 143cv Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011089-2",
            "sold": false
          },
          {
            "vehicle": "C4 Picasso Intensive 1.6 Turbo 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011160-0",
            "sold": false
          },
          {
            "vehicle": "C4 Picasso Seduction 1.6 Turbo 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011159-7",
            "sold": false
          },
          {
            "vehicle": "C4 Picasso/Pic. La Luna 2.0 16V  Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011092-2",
            "sold": false
          },
          {
            "vehicle": "C4 rockyou 1.6 Flex 16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011134-1",
            "sold": false
          },
          {
            "vehicle": "C4 Tendance 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011135-0",
            "sold": false
          },
          {
            "vehicle": "C4 Tendance 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011136-8",
            "sold": false
          },
          {
            "vehicle": "C4 VTR 2.0 16V 143cv",
            "manufacturer": "Citroën",
            "fipe_code": "011081-7",
            "sold": false
          },
          {
            "vehicle": "C5 3.0 24V 210cv 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011067-1",
            "sold": false
          },
          {
            "vehicle": "C5 Exclusive 2.0 16V 138cv 4p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011065-5",
            "sold": false
          },
          {
            "vehicle": "C5 Exclusive 2.0 16V 4p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011066-3",
            "sold": false
          },
          {
            "vehicle": "C5 Exclusive Break 2.0 16V 138cv 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011068-0",
            "sold": false
          },
          {
            "vehicle": "C5 Exclusive Break 2.0 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011069-8",
            "sold": false
          },
          {
            "vehicle": "C5 Tourer Exclusive 2.0 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011098-1",
            "sold": false
          },
          {
            "vehicle": "C6 Exclusive 3.0 V6 24V 215cv Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011084-1",
            "sold": false
          },
          {
            "vehicle": "C8 Exclusive 2.0 16V 138cv 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011073-6",
            "sold": false
          },
          {
            "vehicle": "DS3 1.6 Turbo 16V 3p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011113-9",
            "sold": false
          },
          {
            "vehicle": "DS3 Sport Chic 1.6 TB 16V 3p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011149-0",
            "sold": false
          },
          {
            "vehicle": "DS4 1.6 Chic Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011147-3",
            "sold": false
          },
          {
            "vehicle": "DS4 1.6 So Chic Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011148-1",
            "sold": false
          },
          {
            "vehicle": "DS4 1.6 Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011121-0",
            "sold": false
          },
          {
            "vehicle": "DS5 1.6 Be Chic Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011155-4",
            "sold": false
          },
          {
            "vehicle": "DS5 1.6 So Chic Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011154-6",
            "sold": false
          },
          {
            "vehicle": "DS5 1.6 Turbo 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011120-1",
            "sold": false
          },
          {
            "vehicle": "Evasion  GLX 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011027-2",
            "sold": false
          },
          {
            "vehicle": "Evasion VSX Turbo",
            "manufacturer": "Citroën",
            "fipe_code": "011003-5",
            "sold": false
          },
          {
            "vehicle": "Grand C4 Picasso Intensive 1.6 TB Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011168-6",
            "sold": false
          },
          {
            "vehicle": "Grand C4 Picasso Seduction 1.6 TB Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011167-8",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.3 15/16Lug. TB Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011099-0",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.3 Furgão TB Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011100-7",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.3 Vetrato Exec. 16Lug. TB Dies.  ",
            "manufacturer": "Citroën",
            "fipe_code": "011112-0",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.3 Vetrato TB Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011104-0",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.5 Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011028-0",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.8 16Lug.  Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011050-7",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.8 Furgão 35C Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011052-3",
            "sold": false
          },
          {
            "vehicle": "Jumper 2.8 Furgão 35MH Diesel",
            "manufacturer": "Citroën",
            "fipe_code": "011051-5",
            "sold": false
          },
          {
            "vehicle": "Xantia 2.0  16V",
            "manufacturer": "Citroën",
            "fipe_code": "011043-4",
            "sold": false
          },
          {
            "vehicle": "Xantia Activa 2.0",
            "manufacturer": "Citroën",
            "fipe_code": "011044-2",
            "sold": false
          },
          {
            "vehicle": "Xantia Activa 2.0 TB",
            "manufacturer": "Citroën",
            "fipe_code": "011045-0",
            "sold": false
          },
          {
            "vehicle": "Xantia Activa 3.0 V6 Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011014-0",
            "sold": false
          },
          {
            "vehicle": "Xantia Break 2.0 8V/GLX 2.0 16V Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011015-9",
            "sold": false
          },
          {
            "vehicle": "Xantia Break GLX 2.0 16V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011049-3",
            "sold": false
          },
          {
            "vehicle": "Xantia Exclusive 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011042-6",
            "sold": false
          },
          {
            "vehicle": "Xantia Exclusive 3.0 V6",
            "manufacturer": "Citroën",
            "fipe_code": "011034-5",
            "sold": false
          },
          {
            "vehicle": "Xantia GLX 2.0 16V Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011047-7",
            "sold": false
          },
          {
            "vehicle": "Xantia GLX 2.0 16V Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011029-9",
            "sold": false
          },
          {
            "vehicle": "Xantia SX 1.8",
            "manufacturer": "Citroën",
            "fipe_code": "011016-7",
            "sold": false
          },
          {
            "vehicle": "Xantia SX 2.0 8V/16V Mec/ Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011004-3",
            "sold": false
          },
          {
            "vehicle": "Xantia VSX 2.0",
            "manufacturer": "Citroën",
            "fipe_code": "011005-1",
            "sold": false
          },
          {
            "vehicle": "Xantia VSX 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011048-5",
            "sold": false
          },
          {
            "vehicle": "XM Exclusive 12v",
            "manufacturer": "Citroën",
            "fipe_code": "011007-8",
            "sold": false
          },
          {
            "vehicle": "XM Exclusive 24V",
            "manufacturer": "Citroën",
            "fipe_code": "011040-0",
            "sold": false
          },
          {
            "vehicle": "XM Exclusive Break",
            "manufacturer": "Citroën",
            "fipe_code": "011006-0",
            "sold": false
          },
          {
            "vehicle": "XM Sensation 2.0 TB",
            "manufacturer": "Citroën",
            "fipe_code": "011041-8",
            "sold": false
          },
          {
            "vehicle": "Xsara Break Exclusive 1.6 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011061-2",
            "sold": false
          },
          {
            "vehicle": "Xsara Break Exclusive 1.6 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011060-4",
            "sold": false
          },
          {
            "vehicle": "Xsara Break Exclusive 1.8 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011021-3",
            "sold": false
          },
          {
            "vehicle": "Xsara Break Exclusive 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011036-1",
            "sold": false
          },
          {
            "vehicle": "Xsara Break GLX 1.6 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011062-0",
            "sold": false
          },
          {
            "vehicle": "Xsara Break GLX 1.6 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011059-0",
            "sold": false
          },
          {
            "vehicle": "Xsara Break GLX 1.8 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011020-5",
            "sold": false
          },
          {
            "vehicle": "Xsara Break GLX/ Paris 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011035-3",
            "sold": false
          },
          {
            "vehicle": "Xsara Exclusive 1.6 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011057-4",
            "sold": false
          },
          {
            "vehicle": "Xsara Exclusive 1.6 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011056-6",
            "sold": false
          },
          {
            "vehicle": "Xsara Exclusive 1.8 8V/16V 5p Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011019-1",
            "sold": false
          },
          {
            "vehicle": "Xsara Exclusive 1.8 8V/16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011018-3",
            "sold": false
          },
          {
            "vehicle": "Xsara Exclusive 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011037-0",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.6 16V 3p",
            "manufacturer": "Citroën",
            "fipe_code": "011053-1",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.6 16V 5p Aut.",
            "manufacturer": "Citroën",
            "fipe_code": "011055-8",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.6 16V 5p Mec.",
            "manufacturer": "Citroën",
            "fipe_code": "011054-0",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.8 16V 5p Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011024-8",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.8 16V Cupê Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011022-1",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.8 8V 5p Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011025-6",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX 1.8 8V Cupê Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011023-0",
            "sold": false
          },
          {
            "vehicle": "Xsara GLX/ Paris 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011046-9",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso Exc./Etoile 2.0 16v  Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011063-9",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso Exclus. 1.6/ 1.6 Flex 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011079-5",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso Exclusive 2.0 16V  Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011074-4",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso GLX /Brasil/Etoile 2.0 Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011064-7",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso GLX 1.6/ 1.6 Flex 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011077-9",
            "sold": false
          },
          {
            "vehicle": "Xsara Picasso GLX 2.0 16V  Aut",
            "manufacturer": "Citroën",
            "fipe_code": "011075-2",
            "sold": false
          },
          {
            "vehicle": "Xsara VTS 1.6 16V 3p",
            "manufacturer": "Citroën",
            "fipe_code": "011058-2",
            "sold": false
          },
          {
            "vehicle": "Xsara VTS 1.8 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011038-8",
            "sold": false
          },
          {
            "vehicle": "Xsara VTS 2.0  16V Cupê Mec",
            "manufacturer": "Citroën",
            "fipe_code": "011017-5",
            "sold": false
          },
          {
            "vehicle": "ZX Cupê 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011008-6",
            "sold": false
          },
          {
            "vehicle": "ZX Dakar 2.0 16V",
            "manufacturer": "Citroën",
            "fipe_code": "011032-9",
            "sold": false
          },
          {
            "vehicle": "ZX Furio",
            "manufacturer": "Citroën",
            "fipe_code": "011009-4",
            "sold": false
          },
          {
            "vehicle": "ZX Paris 1.8",
            "manufacturer": "Citroën",
            "fipe_code": "011031-0",
            "sold": false
          },
          {
            "vehicle": "ZX Volcane 3p e 5p",
            "manufacturer": "Citroën",
            "fipe_code": "011010-8",
            "sold": false
          },
          {
            "vehicle": "CL-244 2.8 132cv 4x4 TB Int. Diesel",
            "manufacturer": "Cross Lander",
            "fipe_code": "059001-0",
            "sold": false
          },
          {
            "vehicle": "CL-330 2.8 132cv 4x4 TB Int. Diesel",
            "manufacturer": "Cross Lander",
            "fipe_code": "059002-9",
            "sold": false
          },
          {
            "vehicle": "Espero 2.0",
            "manufacturer": "Daewoo",
            "fipe_code": "030017-9",
            "sold": false
          },
          {
            "vehicle": "Espero CD / DLX 2.0",
            "manufacturer": "Daewoo",
            "fipe_code": "030001-2",
            "sold": false
          },
          {
            "vehicle": "Lanos Hatch SX 1.6 16V",
            "manufacturer": "Daewoo",
            "fipe_code": "030010-1",
            "sold": false
          },
          {
            "vehicle": "Lanos SX 1.6 16V",
            "manufacturer": "Daewoo",
            "fipe_code": "030005-5",
            "sold": false
          },
          {
            "vehicle": "Lanos SX 1.6 16V Aut",
            "manufacturer": "Daewoo",
            "fipe_code": "030009-8",
            "sold": false
          },
          {
            "vehicle": "Leganza CDX 2.0 16V Aut.",
            "manufacturer": "Daewoo",
            "fipe_code": "030012-8",
            "sold": false
          },
          {
            "vehicle": "Leganza CDX 2.0 16V Mec.",
            "manufacturer": "Daewoo",
            "fipe_code": "030006-3",
            "sold": false
          },
          {
            "vehicle": "Nubira CDX 2.0 16V Aut.",
            "manufacturer": "Daewoo",
            "fipe_code": "030013-6",
            "sold": false
          },
          {
            "vehicle": "Nubira CDX 2.0 16V Mec.",
            "manufacturer": "Daewoo",
            "fipe_code": "030007-1",
            "sold": false
          },
          {
            "vehicle": "Nubira SW CDX 2.0 16V Aut.",
            "manufacturer": "Daewoo",
            "fipe_code": "030014-4",
            "sold": false
          },
          {
            "vehicle": "Nubira SW CDX 2.0 16V Mec.",
            "manufacturer": "Daewoo",
            "fipe_code": "030008-0",
            "sold": false
          },
          {
            "vehicle": "Prince Ace 2.0",
            "manufacturer": "Daewoo",
            "fipe_code": "030002-0",
            "sold": false
          },
          {
            "vehicle": "Racer GTi 1.5 16V",
            "manufacturer": "Daewoo",
            "fipe_code": "030011-0",
            "sold": false
          },
          {
            "vehicle": "Super Salon Ace",
            "manufacturer": "Daewoo",
            "fipe_code": "030004-7",
            "sold": false
          },
          {
            "vehicle": "Tico",
            "manufacturer": "Daewoo",
            "fipe_code": "030003-9",
            "sold": false
          },
          {
            "vehicle": "Applause 1.6 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012012-0",
            "sold": false
          },
          {
            "vehicle": "Applause DLX 1.6 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012011-1",
            "sold": false
          },
          {
            "vehicle": "Charade CX/TS 1.0",
            "manufacturer": "Daihatsu",
            "fipe_code": "012015-4",
            "sold": false
          },
          {
            "vehicle": "Charade Sd 1.5/DLX 1.3",
            "manufacturer": "Daihatsu",
            "fipe_code": "012001-4",
            "sold": false
          },
          {
            "vehicle": "Charade Sedan 1.3i 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012006-5",
            "sold": false
          },
          {
            "vehicle": "Charade TS/TSi 1.3/LSi 1.5 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012002-2",
            "sold": false
          },
          {
            "vehicle": "Charade TX 1.3 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012010-3",
            "sold": false
          },
          {
            "vehicle": "Cuore 0/TS0 85i",
            "manufacturer": "Daihatsu",
            "fipe_code": "012013-8",
            "sold": false
          },
          {
            "vehicle": "Cuore CS/CSL",
            "manufacturer": "Daihatsu",
            "fipe_code": "012003-0",
            "sold": false
          },
          {
            "vehicle": "Cuore TS/TSL",
            "manufacturer": "Daihatsu",
            "fipe_code": "012004-9",
            "sold": false
          },
          {
            "vehicle": "Feroza DX 1.6 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012009-0",
            "sold": false
          },
          {
            "vehicle": "Feroza SX 1.6i 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012005-7",
            "sold": false
          },
          {
            "vehicle": "Gran Move 1.5/1.6 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012007-3",
            "sold": false
          },
          {
            "vehicle": "Move Van",
            "manufacturer": "Daihatsu",
            "fipe_code": "012014-6",
            "sold": false
          },
          {
            "vehicle": "Terios 1.3 16V",
            "manufacturer": "Daihatsu",
            "fipe_code": "012008-1",
            "sold": false
          },
          {
            "vehicle": "Avenger ES 2.0/2.5 16V",
            "manufacturer": "Dodge",
            "fipe_code": "013010-9",
            "sold": false
          },
          {
            "vehicle": "Dakota 2.5",
            "manufacturer": "Dodge",
            "fipe_code": "013004-4",
            "sold": false
          },
          {
            "vehicle": "Dakota Club 2.5",
            "manufacturer": "Dodge",
            "fipe_code": "013013-3",
            "sold": false
          },
          {
            "vehicle": "Dakota Durango 5.9 4x4 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013015-0",
            "sold": false
          },
          {
            "vehicle": "Dakota Durango SLT 5.2 4x4 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013016-8",
            "sold": false
          },
          {
            "vehicle": "Dakota Intrepid 3.3 V6",
            "manufacturer": "Dodge",
            "fipe_code": "013017-6",
            "sold": false
          },
          {
            "vehicle": "Dakota RT 5.2 Aut",
            "manufacturer": "Dodge",
            "fipe_code": "013018-4",
            "sold": false
          },
          {
            "vehicle": "Dakota RT 5.2 CE Aut",
            "manufacturer": "Dodge",
            "fipe_code": "013019-2",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 2.5 4x4",
            "manufacturer": "Dodge",
            "fipe_code": "013014-1",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 2.5 CD Diesel",
            "manufacturer": "Dodge",
            "fipe_code": "013022-2",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 2.5 Diesel",
            "manufacturer": "Dodge",
            "fipe_code": "013006-0",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 3.9 V6",
            "manufacturer": "Dodge",
            "fipe_code": "013005-2",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 3.9 V6 CD Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013021-4",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 3.9 V6 CD Mec.",
            "manufacturer": "Dodge",
            "fipe_code": "013020-6",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 5.2 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013011-7",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport 5.2 V8 CD Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013023-0",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport CE 2.5 Diesel",
            "manufacturer": "Dodge",
            "fipe_code": "013008-7",
            "sold": false
          },
          {
            "vehicle": "Dakota Sport CE 3.9 V6",
            "manufacturer": "Dodge",
            "fipe_code": "013007-9",
            "sold": false
          },
          {
            "vehicle": "Durango Citadel 3.6 24V 4x4 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013034-6",
            "sold": false
          },
          {
            "vehicle": "Durango Crew 3.6 24V 4x4 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013035-4",
            "sold": false
          },
          {
            "vehicle": "Durango Limited 3.6 24V 4x4 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013038-9",
            "sold": false
          },
          {
            "vehicle": "JOURNEY Crossroad 3.6 V6 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013037-0",
            "sold": false
          },
          {
            "vehicle": "JOURNEY RT  3.6 V6 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013031-1",
            "sold": false
          },
          {
            "vehicle": "JOURNEY RT 2.7 V6 185cv Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013029-0",
            "sold": false
          },
          {
            "vehicle": "JOURNEY RT 3.6 AWD V6 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013036-2",
            "sold": false
          },
          {
            "vehicle": "JOURNEY SE 2.7 V6 185cv Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013030-3",
            "sold": false
          },
          {
            "vehicle": "JOURNEY SXT 2.7 V6 185cv Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013027-3",
            "sold": false
          },
          {
            "vehicle": "JOURNEY SXT 3.6 V6 Aut.",
            "manufacturer": "Dodge",
            "fipe_code": "013032-0",
            "sold": false
          },
          {
            "vehicle": "Ram 2500 H.DUTY 5.9 SLT 24V CD 4x4 Dies.",
            "manufacturer": "Dodge",
            "fipe_code": "013024-9",
            "sold": false
          },
          {
            "vehicle": "Ram 2500 H.DUTY 5.9 SLT TDI CS 4x4 Dies.",
            "manufacturer": "Dodge",
            "fipe_code": "013025-7",
            "sold": false
          },
          {
            "vehicle": "Ram 2500 LARAMIE 6.7 TDI CD 4x4 Dies",
            "manufacturer": "Dodge",
            "fipe_code": "013033-8",
            "sold": false
          },
          {
            "vehicle": "Ram 2500 TROPIVAN 5.9 SLT Exec.TDI Dies.",
            "manufacturer": "Dodge",
            "fipe_code": "013028-1",
            "sold": false
          },
          {
            "vehicle": "Ram 2500 TROPIVAN 5.9 SLT TDI 4x4 Dies.",
            "manufacturer": "Dodge",
            "fipe_code": "013026-5",
            "sold": false
          },
          {
            "vehicle": "Ram Laramie 5.9 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013003-6",
            "sold": false
          },
          {
            "vehicle": "Ram Laramie/SLT 5.2 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013002-8",
            "sold": false
          },
          {
            "vehicle": "Ram Sport 5.9 V8",
            "manufacturer": "Dodge",
            "fipe_code": "013001-0",
            "sold": false
          },
          {
            "vehicle": "Stealth 3.0 MPI",
            "manufacturer": "Dodge",
            "fipe_code": "013009-5",
            "sold": false
          },
          {
            "vehicle": "K01 Pick-up CS 1.0 8V 2p",
            "manufacturer": "EFFA",
            "fipe_code": "066012-4",
            "sold": false
          },
          {
            "vehicle": "K02 Pick-up CD 1.0 8V 4p",
            "manufacturer": "EFFA",
            "fipe_code": "066013-2",
            "sold": false
          },
          {
            "vehicle": "M-100 1.0 8v 5p",
            "manufacturer": "EFFA",
            "fipe_code": "066001-9",
            "sold": false
          },
          {
            "vehicle": "Plutus 3.2 8V 4x2 CD Turbo Diesel      ",
            "manufacturer": "EFFA",
            "fipe_code": "066011-6",
            "sold": false
          },
          {
            "vehicle": "Start Picape CD 1.0 8V 5p      ",
            "manufacturer": "EFFA",
            "fipe_code": "066010-8",
            "sold": false
          },
          {
            "vehicle": "Start Picape L 1.0 8V 2p        ",
            "manufacturer": "EFFA",
            "fipe_code": "066008-6",
            "sold": false
          },
          {
            "vehicle": "Start Van 1.0 8V 4p       ",
            "manufacturer": "EFFA",
            "fipe_code": "066009-4",
            "sold": false
          },
          {
            "vehicle": "ULC FURGÃO 1.0 8V 5p",
            "manufacturer": "EFFA",
            "fipe_code": "066002-7",
            "sold": false
          },
          {
            "vehicle": "ULC PICAPE 1.0 8V 2p",
            "manufacturer": "EFFA",
            "fipe_code": "066004-3",
            "sold": false
          },
          {
            "vehicle": "ULC PICAPE CD 1.0 8V 4p",
            "manufacturer": "EFFA",
            "fipe_code": "066007-8",
            "sold": false
          },
          {
            "vehicle": "ULC PICAPE Longa 1.0 8V 2p",
            "manufacturer": "EFFA",
            "fipe_code": "066006-0",
            "sold": false
          },
          {
            "vehicle": "ULC PICAPE Longa Bau 1.0 8V 2p",
            "manufacturer": "EFFA",
            "fipe_code": "066005-1",
            "sold": false
          },
          {
            "vehicle": "ULC VAN 1.0 8V 5p",
            "manufacturer": "EFFA",
            "fipe_code": "066003-5",
            "sold": false
          },
          {
            "vehicle": "V21 Pick-up CS 1.3 16V 2p",
            "manufacturer": "EFFA",
            "fipe_code": "066014-0",
            "sold": false
          },
          {
            "vehicle": "V22 Pick-up CD 1.3 16V 4p",
            "manufacturer": "EFFA",
            "fipe_code": "066015-9",
            "sold": false
          },
          {
            "vehicle": "Engesa 4x4 2.5/4.1",
            "manufacturer": "Engesa",
            "fipe_code": "043001-3",
            "sold": false
          },
          {
            "vehicle": "Engesa 4x4 4.0 Diesel",
            "manufacturer": "Engesa",
            "fipe_code": "043002-1",
            "sold": false
          },
          {
            "vehicle": "Camper 2.5/GL/GLS/Master 4.1",
            "manufacturer": "Envemo",
            "fipe_code": "044001-9",
            "sold": false
          },
          {
            "vehicle": "Camper 4x4 2.5 Diesel",
            "manufacturer": "Envemo",
            "fipe_code": "044003-5",
            "sold": false
          },
          {
            "vehicle": "Camper GL/GLS 4x4 4.0 Diesel",
            "manufacturer": "Envemo",
            "fipe_code": "044002-7",
            "sold": false
          },
          {
            "vehicle": "Master 4.0 Diesel",
            "manufacturer": "Envemo",
            "fipe_code": "044004-3",
            "sold": false
          },
          {
            "vehicle": "348 GTS 3.4",
            "manufacturer": "Ferrari",
            "fipe_code": "031014-0",
            "sold": false
          },
          {
            "vehicle": "348 Spider 3.4",
            "manufacturer": "Ferrari",
            "fipe_code": "031013-1",
            "sold": false
          },
          {
            "vehicle": "348 TS/TB 3.4",
            "manufacturer": "Ferrari",
            "fipe_code": "031008-5",
            "sold": false
          },
          {
            "vehicle": "355 Berlinetta",
            "manufacturer": "Ferrari",
            "fipe_code": "031001-8",
            "sold": false
          },
          {
            "vehicle": "355 Berlinetta F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031002-6",
            "sold": false
          },
          {
            "vehicle": "355 GTS",
            "manufacturer": "Ferrari",
            "fipe_code": "031009-3",
            "sold": false
          },
          {
            "vehicle": "355 GTS F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031010-7",
            "sold": false
          },
          {
            "vehicle": "355 GTS Spider",
            "manufacturer": "Ferrari",
            "fipe_code": "031015-8",
            "sold": false
          },
          {
            "vehicle": "355 GTS Targa",
            "manufacturer": "Ferrari",
            "fipe_code": "031016-6",
            "sold": false
          },
          {
            "vehicle": "355 Spider F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031004-2",
            "sold": false
          },
          {
            "vehicle": "360 Challenge Stradale",
            "manufacturer": "Ferrari",
            "fipe_code": "031024-7",
            "sold": false
          },
          {
            "vehicle": "360 Modena",
            "manufacturer": "Ferrari",
            "fipe_code": "031011-5",
            "sold": false
          },
          {
            "vehicle": "360 Modena F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031012-3",
            "sold": false
          },
          {
            "vehicle": "360 Spider 400cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031021-2",
            "sold": false
          },
          {
            "vehicle": "360 Spider F1 400cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031022-0",
            "sold": false
          },
          {
            "vehicle": "456 GT",
            "manufacturer": "Ferrari",
            "fipe_code": "031005-0",
            "sold": false
          },
          {
            "vehicle": "456 GTA",
            "manufacturer": "Ferrari",
            "fipe_code": "031006-9",
            "sold": false
          },
          {
            "vehicle": "456 M-GT 5.5 V12",
            "manufacturer": "Ferrari",
            "fipe_code": "031019-0",
            "sold": false
          },
          {
            "vehicle": "488 GTB 3.9 V8 670cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031037-9",
            "sold": false
          },
          {
            "vehicle": "488 Spyder 3.9 V8 670cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031039-5",
            "sold": false
          },
          {
            "vehicle": "550 Maranello",
            "manufacturer": "Ferrari",
            "fipe_code": "031007-7",
            "sold": false
          },
          {
            "vehicle": "575M Maranello F1 V12 515cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031023-9",
            "sold": false
          },
          {
            "vehicle": "612 Scaglietti F1 V12 540cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031026-3",
            "sold": false
          },
          {
            "vehicle": "California 3.9 Turbo F1 V8 560cv ",
            "manufacturer": "Ferrari",
            "fipe_code": "031036-0",
            "sold": false
          },
          {
            "vehicle": "California F1 V8 460cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031030-1",
            "sold": false
          },
          {
            "vehicle": "F12 Berlinetta 740cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031034-4",
            "sold": false
          },
          {
            "vehicle": "F12 TDF 780cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031038-7",
            "sold": false
          },
          {
            "vehicle": "F430 F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031025-5",
            "sold": false
          },
          {
            "vehicle": "F430 SCUDERIA F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031029-8",
            "sold": false
          },
          {
            "vehicle": "F430 Spider F1",
            "manufacturer": "Ferrari",
            "fipe_code": "031027-1",
            "sold": false
          },
          {
            "vehicle": "F458 Italia F1 4.5 V8 570cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031031-0",
            "sold": false
          },
          {
            "vehicle": "F458 Speciale F1 4.5 V8",
            "manufacturer": "Ferrari",
            "fipe_code": "031035-2",
            "sold": false
          },
          {
            "vehicle": "F458 Spider F1 4.5 V8 570cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031033-6",
            "sold": false
          },
          {
            "vehicle": "F599 GTB Fiorano F1 6.0 V12 620cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031028-0",
            "sold": false
          },
          {
            "vehicle": "FF F1 6.3 V12 660cv",
            "manufacturer": "Ferrari",
            "fipe_code": "031032-8",
            "sold": false
          },
          {
            "vehicle": "147 C/ CL",
            "manufacturer": "Fiat",
            "fipe_code": "001124-0",
            "sold": false
          },
          {
            "vehicle": "147 Furgão (todos)",
            "manufacturer": "Fiat",
            "fipe_code": "001138-0",
            "sold": false
          },
          {
            "vehicle": "147 Pick-Up (todas )",
            "manufacturer": "Fiat",
            "fipe_code": "001123-1",
            "sold": false
          },
          {
            "vehicle": "500 ABARTH MULTIAIR 1.4 TB 16V 3p",
            "manufacturer": "Fiat",
            "fipe_code": "001429-0",
            "sold": false
          },
          {
            "vehicle": "500 Cabrio Dualogic Flex 1.4 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001420-6",
            "sold": false
          },
          {
            "vehicle": "500 Cabrio Flex 1.4 8V Mec",
            "manufacturer": "Fiat",
            "fipe_code": "001421-4",
            "sold": false
          },
          {
            "vehicle": "500 Cabrio/500 Coupe GUCCI/Flex 1.4 Aut",
            "manufacturer": "Fiat",
            "fipe_code": "001392-7",
            "sold": false
          },
          {
            "vehicle": "500 Cult 1.4 Flex 8V EVO Dualogic  ",
            "manufacturer": "Fiat",
            "fipe_code": "001362-5",
            "sold": false
          },
          {
            "vehicle": "500 Cult 1.4 Flex 8V EVO Mec. ",
            "manufacturer": "Fiat",
            "fipe_code": "001361-7",
            "sold": false
          },
          {
            "vehicle": "500 LOUNGE 1.4 16V 100cv  Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001296-3",
            "sold": false
          },
          {
            "vehicle": "500 LOUNGE 1.4 16V 100cv Dualogic",
            "manufacturer": "Fiat",
            "fipe_code": "001297-1",
            "sold": false
          },
          {
            "vehicle": "500 Lounge Air 1.4/ 1.4 Flex 16V Aut. ",
            "manufacturer": "Fiat",
            "fipe_code": "001360-9",
            "sold": false
          },
          {
            "vehicle": "500 SPORT 1.4 16V 100cv  Dualogic",
            "manufacturer": "Fiat",
            "fipe_code": "001295-5",
            "sold": false
          },
          {
            "vehicle": "500 SPORT 1.4 16V 100cv Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001290-4",
            "sold": false
          },
          {
            "vehicle": "500 Sport Air 1.4 16V/1.4 Flex 16V Aut. ",
            "manufacturer": "Fiat",
            "fipe_code": "001359-5",
            "sold": false
          },
          {
            "vehicle": "500 Sport Air 1.4 16V/1.4 Flex Mec.  ",
            "manufacturer": "Fiat",
            "fipe_code": "001358-7",
            "sold": false
          },
          {
            "vehicle": "Brava ELX  1.6 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001110-0",
            "sold": false
          },
          {
            "vehicle": "Brava HGT 1.8 mpi 16V  4p",
            "manufacturer": "Fiat",
            "fipe_code": "001140-1",
            "sold": false
          },
          {
            "vehicle": "Brava SX 1.6 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001109-6",
            "sold": false
          },
          {
            "vehicle": "Bravo ABSOLUTE 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001339-0",
            "sold": false
          },
          {
            "vehicle": "Bravo ABSOLUTE Dualogic 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001340-4",
            "sold": false
          },
          {
            "vehicle": "Bravo BlackMotion 1.8 Dualogic Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001435-4",
            "sold": false
          },
          {
            "vehicle": "Bravo BlackMotion 1.8 Flex 16v 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001434-6",
            "sold": false
          },
          {
            "vehicle": "Bravo ESSENCE 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001337-4",
            "sold": false
          },
          {
            "vehicle": "Bravo ESSENCE Dualogic 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001338-2",
            "sold": false
          },
          {
            "vehicle": "Bravo SPORTING 1.8 Dualogic Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001385-4",
            "sold": false
          },
          {
            "vehicle": "Bravo SPORTING 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001384-6",
            "sold": false
          },
          {
            "vehicle": "Bravo SX 1.6",
            "manufacturer": "Fiat",
            "fipe_code": "001127-4",
            "sold": false
          },
          {
            "vehicle": "Bravo T-JET 1.4 16V Turbo 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001356-0",
            "sold": false
          },
          {
            "vehicle": "Bravo WOLVERINE 1.8 Dualogic Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001403-6",
            "sold": false
          },
          {
            "vehicle": "Bravo WOLVERINE 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001402-8",
            "sold": false
          },
          {
            "vehicle": "Cinquecento 0.7",
            "manufacturer": "Fiat",
            "fipe_code": "001128-2",
            "sold": false
          },
          {
            "vehicle": "Coupe 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001057-0",
            "sold": false
          },
          {
            "vehicle": "Doblo  1.4 mpi Fire Flex  8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001300-5",
            "sold": false
          },
          {
            "vehicle": "Doblo  Cargo 1.4 mpi Fire Flex 8V 3p",
            "manufacturer": "Fiat",
            "fipe_code": "001302-1",
            "sold": false
          },
          {
            "vehicle": "Doblo Adv. XINGU 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001382-0",
            "sold": false
          },
          {
            "vehicle": "Doblo Adv. XINGU LOCKER 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001383-8",
            "sold": false
          },
          {
            "vehicle": "Doblo Adv.Ext./Adv.Ext.Loc. 1.8 16V Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001456-7",
            "sold": false
          },
          {
            "vehicle": "Doblo Adv/Adv TRYON/LOCKER 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001234-3",
            "sold": false
          },
          {
            "vehicle": "Doblo Adventure/ Adv.ER 1.8 mpi 8V 103cv",
            "manufacturer": "Fiat",
            "fipe_code": "001204-1",
            "sold": false
          },
          {
            "vehicle": "Doblo ATTRACTIVE 1.4 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001353-6",
            "sold": false
          },
          {
            "vehicle": "Doblo Cargo 1.3 Fire 16V 4/5p",
            "manufacturer": "Fiat",
            "fipe_code": "001170-3",
            "sold": false
          },
          {
            "vehicle": "Doblo Cargo 1.6 16V 4/5p",
            "manufacturer": "Fiat",
            "fipe_code": "001169-0",
            "sold": false
          },
          {
            "vehicle": "Doblo Cargo 1.8 mpi 8V 103cv",
            "manufacturer": "Fiat",
            "fipe_code": "001206-8",
            "sold": false
          },
          {
            "vehicle": "Doblo Cargo 1.8 mpi Fire Flex 8V/16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001235-1",
            "sold": false
          },
          {
            "vehicle": "Doblo ELX 1.4 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001301-3",
            "sold": false
          },
          {
            "vehicle": "Doblo ELX 1.6 16V 4/5p",
            "manufacturer": "Fiat",
            "fipe_code": "001168-1",
            "sold": false
          },
          {
            "vehicle": "Doblo ELX 1.8 mpi 8V 103cv",
            "manufacturer": "Fiat",
            "fipe_code": "001205-0",
            "sold": false
          },
          {
            "vehicle": "Doblo ELX 1.8 mpi 8V Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001236-0",
            "sold": false
          },
          {
            "vehicle": "Doblo ESSENCE 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001352-8",
            "sold": false
          },
          {
            "vehicle": "Doblo EX 1.3 Fire 16V 80cv 4/5p",
            "manufacturer": "Fiat",
            "fipe_code": "001167-3",
            "sold": false
          },
          {
            "vehicle": "Doblo HLX 1.8 mpi Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001240-8",
            "sold": false
          },
          {
            "vehicle": "Ducato Cargo 2.8 Curto/Longo TB Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001190-8",
            "sold": false
          },
          {
            "vehicle": "Ducato Cargo Curto 2.3 ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001282-3",
            "sold": false
          },
          {
            "vehicle": "Ducato Cargo Longo 2.3 ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001283-1",
            "sold": false
          },
          {
            "vehicle": "Ducato Combinato 2.3 ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001284-0",
            "sold": false
          },
          {
            "vehicle": "Ducato Combinato 2.8 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001098-7",
            "sold": false
          },
          {
            "vehicle": "Ducato Combinato 2.8 Turbo Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001106-1",
            "sold": false
          },
          {
            "vehicle": "Ducato Furgão Maxi 2.8 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001096-0",
            "sold": false
          },
          {
            "vehicle": "Ducato Maxi. Curta 2.3 T.Alto ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001288-2",
            "sold": false
          },
          {
            "vehicle": "Ducato Maxi. Long. 2.3 T.Alto ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001289-0",
            "sold": false
          },
          {
            "vehicle": "Ducato MaxiCargo/Furgão Maxi 2.8 TB Dies",
            "manufacturer": "Fiat",
            "fipe_code": "001107-0",
            "sold": false
          },
          {
            "vehicle": "Ducato Minibus 2.3 ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001285-8",
            "sold": false
          },
          {
            "vehicle": "Ducato Minibus 2.3 T.Alto ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001286-6",
            "sold": false
          },
          {
            "vehicle": "Ducato Minibus 2.8 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001100-2",
            "sold": false
          },
          {
            "vehicle": "Ducato Minibus 2.8 Turbo Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001108-8",
            "sold": false
          },
          {
            "vehicle": "Ducato Mult/ Vetrato 2.8 T.Alto TB Dies.",
            "manufacturer": "Fiat",
            "fipe_code": "001159-2",
            "sold": false
          },
          {
            "vehicle": "Ducato Mult/ Vetrato 2.8 T.Baixo TB Dies",
            "manufacturer": "Fiat",
            "fipe_code": "001160-6",
            "sold": false
          },
          {
            "vehicle": "Ducato Multi Long. 2.3 T.Alto ME Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001287-4",
            "sold": false
          },
          {
            "vehicle": "Ducato Van 2.5  Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001132-0",
            "sold": false
          },
          {
            "vehicle": "Ducato-10 Furgão 2.5 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001130-4",
            "sold": false
          },
          {
            "vehicle": "Ducato-15 2.8 Furgão TB Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001134-7",
            "sold": false
          },
          {
            "vehicle": "Ducato-15 Furgão 2.8 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001095-2",
            "sold": false
          },
          {
            "vehicle": "Ducato-8 Furgão 2.5 Diesel",
            "manufacturer": "Fiat",
            "fipe_code": "001131-2",
            "sold": false
          },
          {
            "vehicle": "Duna 1.6ie",
            "manufacturer": "Fiat",
            "fipe_code": "001129-0",
            "sold": false
          },
          {
            "vehicle": "Elba 1.6i.e/Top/CSL/ 1.6i.e/1.5 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001025-1",
            "sold": false
          },
          {
            "vehicle": "Elba CS 1.6 / 1.5 /1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001023-5",
            "sold": false
          },
          {
            "vehicle": "Elba S 1.6/ 1.5ie / 1.5 / 1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001022-7",
            "sold": false
          },
          {
            "vehicle": "Elba Weekend 1.5 i.e. 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001024-3",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furg.1.5/1.3/1.3 Fire/1.3 F.Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001027-8",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furgão 1.0",
            "manufacturer": "Fiat",
            "fipe_code": "001026-0",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furgão 1.5 mpi / i.e.",
            "manufacturer": "Fiat",
            "fipe_code": "001001-4",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furgão Celeb. EVO 1.4 Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001414-1",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furgão EVO 1.4 Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001413-3",
            "sold": false
          },
          {
            "vehicle": "Fiorino Furgão Work. HARD 1.4 Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001477-0",
            "sold": false
          },
          {
            "vehicle": "Fiorino Pick-Up 1.0",
            "manufacturer": "Fiat",
            "fipe_code": "001028-6",
            "sold": false
          },
          {
            "vehicle": "Fiorino Pick-Up 1.5 i.e. / 1.3/1.5 /HD/",
            "manufacturer": "Fiat",
            "fipe_code": "001029-4",
            "sold": false
          },
          {
            "vehicle": "Fiorino Pick-Up LX ( todas)",
            "manufacturer": "Fiat",
            "fipe_code": "001030-8",
            "sold": false
          },
          {
            "vehicle": "Fiorino Pick-Up Trekking 1.5 mpi / i.e.",
            "manufacturer": "Fiat",
            "fipe_code": "001003-0",
            "sold": false
          },
          {
            "vehicle": "Fiorino Pick-Up Working 1.5 mpi / i.e.",
            "manufacturer": "Fiat",
            "fipe_code": "001002-2",
            "sold": false
          },
          {
            "vehicle": "FREEMONT 2.4 16V 5p Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001365-0",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ATTRAC. 1.4 EVO F.Flex 8V ",
            "manufacturer": "Fiat",
            "fipe_code": "001378-1",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ATTRACTIVE 1.0 Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001481-8",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSEN. ITALIA Dual. 1.6 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001423-0",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSEN.SUBLIME 1.6 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001399-4",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSEN.SUBLIME Dual. 1.6 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001400-1",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSENCE 1.6 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001379-0",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSENCE Dual. 1.6 Flex 16V ",
            "manufacturer": "Fiat",
            "fipe_code": "001380-3",
            "sold": false
          },
          {
            "vehicle": "Grand Siena ESSENCE ITALIA 1.6 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001422-2",
            "sold": false
          },
          {
            "vehicle": "Grand Siena TETRAFUEL 1.4 Evo F. Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001381-1",
            "sold": false
          },
          {
            "vehicle": "Idea A.Ext./A..Ext.Loc.Dual. 1.8 Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001454-0",
            "sold": false
          },
          {
            "vehicle": "Idea Adv./ Adv.LOCK.Dualogic 1.8 Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001281-5",
            "sold": false
          },
          {
            "vehicle": "Idea Adv.Ext./Adv.Ext. Loc. 1.8 Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001455-9",
            "sold": false
          },
          {
            "vehicle": "Idea Advent./ Adv.LOCKER 1.8 mpi Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001242-4",
            "sold": false
          },
          {
            "vehicle": "Idea ATTRACTIVE 1.4 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001328-5",
            "sold": false
          },
          {
            "vehicle": "Idea ELX 1.4 mpi Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001228-9",
            "sold": false
          },
          {
            "vehicle": "Idea ELX 1.8 mpi Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001276-9",
            "sold": false
          },
          {
            "vehicle": "Idea ESSENCE 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001326-9",
            "sold": false
          },
          {
            "vehicle": "Idea ESSENCE Dualogic 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001327-7",
            "sold": false
          },
          {
            "vehicle": "Idea ESSENCE SUBLIME 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001416-8",
            "sold": false
          },
          {
            "vehicle": "Idea ESSENCE SUBLIME Dual.1.6 Flex16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001417-6",
            "sold": false
          },
          {
            "vehicle": "Idea HLX 1.8 mpi Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001229-7",
            "sold": false
          },
          {
            "vehicle": "Idea SPORTING 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001329-3",
            "sold": false
          },
          {
            "vehicle": "Idea SPORTING Dualogic 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001330-7",
            "sold": false
          },
          {
            "vehicle": "LINEA 1.9/ HLX 1.9/ 1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001258-0",
            "sold": false
          },
          {
            "vehicle": "LINEA 1.9/ HLX 1.9/1.8 Flex  Dualogic 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001259-9",
            "sold": false
          },
          {
            "vehicle": "LINEA ABSOLUTE 1.9/1.8 Flex Dualogic 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001260-2",
            "sold": false
          },
          {
            "vehicle": "LINEA ESSEN.SUBLIME 1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001409-5",
            "sold": false
          },
          {
            "vehicle": "LINEA ESSEN.SUBLIME Dual.1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001410-9",
            "sold": false
          },
          {
            "vehicle": "LINEA ESSENCE 1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001354-4",
            "sold": false
          },
          {
            "vehicle": "LINEA ESSENCE Dualogic 1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001355-2",
            "sold": false
          },
          {
            "vehicle": "LINEA LX 1.9/ 1.8 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001274-2",
            "sold": false
          },
          {
            "vehicle": "LINEA LX 1.9/ 1.8 Flex 16V Dualogic 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001275-0",
            "sold": false
          },
          {
            "vehicle": "LINEA T-JET 1.4 16V Turbo 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001261-0",
            "sold": false
          },
          {
            "vehicle": "Marea City",
            "manufacturer": "Fiat",
            "fipe_code": "001079-0",
            "sold": false
          },
          {
            "vehicle": "Marea ELX 1.8 mpi 16V 132cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001185-1",
            "sold": false
          },
          {
            "vehicle": "Marea ELX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001081-2",
            "sold": false
          },
          {
            "vehicle": "Marea ELX 2.4 mpi 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001144-4",
            "sold": false
          },
          {
            "vehicle": "Marea HLX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001082-0",
            "sold": false
          },
          {
            "vehicle": "Marea HLX 2.4 mpi 20V 4p Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001173-8",
            "sold": false
          },
          {
            "vehicle": "Marea HLX 2.4 mpi 20V 4p Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001145-2",
            "sold": false
          },
          {
            "vehicle": "Marea SX 1.6 mpi 16V 106cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001226-2",
            "sold": false
          },
          {
            "vehicle": "Marea SX 1.8 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001114-2",
            "sold": false
          },
          {
            "vehicle": "Marea SX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001080-4",
            "sold": false
          },
          {
            "vehicle": "Marea Turbo 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001083-9",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend City 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001084-7",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend ELX 1.8 mpi 16V 132cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001186-0",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend ELX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001086-3",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend ELX 2.4 mpi 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001146-0",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend HLX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001087-1",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend HLX 2.4 mpi 20V 4p Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001174-6",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend HLX 2.4 mpi 20V 4p Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001147-9",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend SX 1.6 mpi 16V 106cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001227-0",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend SX 1.8 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001133-9",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend SX 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001085-5",
            "sold": false
          },
          {
            "vehicle": "Marea Weekend Turbo 2.0 20V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001088-0",
            "sold": false
          },
          {
            "vehicle": "MOBI DRIVE 1.0 Flex 6V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001480-0",
            "sold": false
          },
          {
            "vehicle": "MOBI Easy 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001463-0",
            "sold": false
          },
          {
            "vehicle": "MOBI Easy on 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001464-8",
            "sold": false
          },
          {
            "vehicle": "MOBI Like 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001461-3",
            "sold": false
          },
          {
            "vehicle": "MOBI Like on 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001462-1",
            "sold": false
          },
          {
            "vehicle": "MOBI WAY 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001466-4",
            "sold": false
          },
          {
            "vehicle": "MOBI WAY on 1.0 Fire Flex 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001465-6",
            "sold": false
          },
          {
            "vehicle": "Oggi",
            "manufacturer": "Fiat",
            "fipe_code": "001105-3",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0 Cel. ECON./ITALIA F.Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001269-6",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001268-8",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0 ECONOMY Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001266-1",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001267-0",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001176-2",
            "sold": false
          },
          {
            "vehicle": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001177-0",
            "sold": false
          },
          {
            "vehicle": "Palio 1.5 mpi 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001200-9",
            "sold": false
          },
          {
            "vehicle": "Palio 1.5 mpi 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001201-7",
            "sold": false
          },
          {
            "vehicle": "Palio 1.6 mpi 16V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001009-0",
            "sold": false
          },
          {
            "vehicle": "Palio 1.6 mpi 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001070-7",
            "sold": false
          },
          {
            "vehicle": "Palio 1.8R mpi Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001244-0",
            "sold": false
          },
          {
            "vehicle": "Palio 1.8R mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001231-9",
            "sold": false
          },
          {
            "vehicle": "Palio ATTRA. Best Seller 1.0 EVO Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001439-7",
            "sold": false
          },
          {
            "vehicle": "Palio ATTRA. Best Seller 1.4 EVO Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001438-9",
            "sold": false
          },
          {
            "vehicle": "Palio ATTRACTIVE 1.0 EVO Fire Flex 8v 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001372-2",
            "sold": false
          },
          {
            "vehicle": "Palio ATTRACTIVE 1.4 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001314-5",
            "sold": false
          },
          {
            "vehicle": "Palio Celebration 1.0 Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001237-8",
            "sold": false
          },
          {
            "vehicle": "Palio Celebration 1.0 Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001238-6",
            "sold": false
          },
          {
            "vehicle": "Palio City 1.0 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001067-7",
            "sold": false
          },
          {
            "vehicle": "Palio City 1.5/1.6 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001069-3",
            "sold": false
          },
          {
            "vehicle": "Palio CityMatic 1.0 mpi",
            "manufacturer": "Fiat",
            "fipe_code": "001115-0",
            "sold": false
          },
          {
            "vehicle": "Palio ED 1.0 mpi 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001006-5",
            "sold": false
          },
          {
            "vehicle": "Palio EDX 1.0 mpi 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001007-3",
            "sold": false
          },
          {
            "vehicle": "Palio EDX 1.0 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001008-1",
            "sold": false
          },
          {
            "vehicle": "Palio EL 1.5 mpi 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001031-6",
            "sold": false
          },
          {
            "vehicle": "Palio EL 1.6 spi 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001063-4",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.0 Fire/30 Anos F. Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001207-6",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.0 mpi Fire 16v 4p (25 anos)",
            "manufacturer": "Fiat",
            "fipe_code": "001151-7",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.0/ 1.0 Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001066-9",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.3 mpi  Fire 16v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001142-8",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.3 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001208-4",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.4 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001223-8",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.5 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001071-5",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.6 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001068-5",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.6 mpi 16v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001152-5",
            "sold": false
          },
          {
            "vehicle": "Palio ELX 1.8/ 1.8 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001196-7",
            "sold": false
          },
          {
            "vehicle": "Palio ELX Dualogic 1.8 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001278-5",
            "sold": false
          },
          {
            "vehicle": "Palio ELX/ 500 1.0 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001065-0",
            "sold": false
          },
          {
            "vehicle": "Palio ESSENCE 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001324-2",
            "sold": false
          },
          {
            "vehicle": "Palio ESSENCE Dualogic 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001325-0",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.0 mpi 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001004-9",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.0 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001005-7",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.0 mpi Fire 8v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001154-1",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.0 mpi Fire/ Fire Flex 8v 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001153-3",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.3 mpi Fire 8V 67cv 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001178-9",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.3 mpi Fire 8V 67cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001179-7",
            "sold": false
          },
          {
            "vehicle": "Palio EX 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001195-9",
            "sold": false
          },
          {
            "vehicle": "Palio EX Century 1.0 mpi Fire 16v 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001171-1",
            "sold": false
          },
          {
            "vehicle": "Palio EX Century 1.0 mpi Fire 16v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001172-0",
            "sold": false
          },
          {
            "vehicle": "Palio HLX 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001209-2",
            "sold": false
          },
          {
            "vehicle": "Palio HLX 1.8 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001210-6",
            "sold": false
          },
          {
            "vehicle": "Palio Rua 1.0 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001426-5",
            "sold": false
          },
          {
            "vehicle": "Palio SPORT.INTERLAGOS 1.6 Flex 16V ",
            "manufacturer": "Fiat",
            "fipe_code": "001397-8",
            "sold": false
          },
          {
            "vehicle": "Palio SPORT.INTERLAGOS Dual.1.6 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001398-6",
            "sold": false
          },
          {
            "vehicle": "Palio SPORTING 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001370-6",
            "sold": false
          },
          {
            "vehicle": "Palio SPORTING B.Edit. 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001467-2",
            "sold": false
          },
          {
            "vehicle": "Palio SPORTING Dual. B.Edit. 1.6 Flex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001468-0",
            "sold": false
          },
          {
            "vehicle": "Palio SPORTING Dualogic 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001371-4",
            "sold": false
          },
          {
            "vehicle": "Palio Stile 1.6 mpi 16v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001155-0",
            "sold": false
          },
          {
            "vehicle": "Palio W.Adv. LOC. ITAL.Dual.1.8 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001376-5",
            "sold": false
          },
          {
            "vehicle": "Palio W.ADV. LOCK. ITALIA 1.8 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001374-9",
            "sold": false
          },
          {
            "vehicle": "Palio Way 1.0 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001418-4",
            "sold": false
          },
          {
            "vehicle": "Palio Way Celebration 1.0 F. Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001419-2",
            "sold": false
          },
          {
            "vehicle": "Palio Week. Adv. Dualogic 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001357-9",
            "sold": false
          },
          {
            "vehicle": "Palio Week. Adv. ITALIA 1.8 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001373-0",
            "sold": false
          },
          {
            "vehicle": "Palio Week. Adv/Adv TRYON 1.8 mpi Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001216-5",
            "sold": false
          },
          {
            "vehicle": "Palio Week. ATTRACTIVE 1.4 Fire Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001315-3",
            "sold": false
          },
          {
            "vehicle": "Palio Week.Adv. ITAL. Dual. 1.8 Flex 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001375-7",
            "sold": false
          },
          {
            "vehicle": "Palio Week.Adv.LOCK.Dualogic 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001280-7",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend 1.0 6-marchas",
            "manufacturer": "Fiat",
            "fipe_code": "001104-5",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend 1.5 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001010-3",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend 1.6 mpi 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001011-1",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adv. Ext. 1.8 Dual. Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001459-1",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adv. Ext. 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001457-5",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adv. Loc.Ext.1.8 Dual.Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001460-5",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adv. LOCKER Ext. 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001458-3",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adventure 1.6 8v/16v",
            "manufacturer": "Fiat",
            "fipe_code": "001111-8",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adventure 1.8 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001194-0",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Adventure LOCKER 1.8 Flex",
            "manufacturer": "Fiat",
            "fipe_code": "001255-6",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend City 1.5/ 1.6 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001136-3",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.0 mpi Fire 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001156-8",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.3 mpi  Fire 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001143-6",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.3 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001214-9",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.4 mpi Fire Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001225-4",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.5 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001075-8",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend ELX 1.6 mpi",
            "manufacturer": "Fiat",
            "fipe_code": "001073-1",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend EX 1.3 mpi Fire 8V 67cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001191-6",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend EX 1.5 mpi",
            "manufacturer": "Fiat",
            "fipe_code": "001074-0",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend EX 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001192-4",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend HLX 1.8 mpi Flex 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001215-7",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Sport 1.6 mpi 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001013-8",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Stile 1.6 mpi 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001012-0",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Stile 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001193-2",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Trekking 1.4 Fire Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001256-4",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Trekking 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001336-6",
            "sold": false
          },
          {
            "vehicle": "Palio Weekend Trekking 1.8 mpi Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001294-7",
            "sold": false
          },
          {
            "vehicle": "Palio Young 1.0 mpi 8v 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001149-5",
            "sold": false
          },
          {
            "vehicle": "Palio Young 1.0 mpi 8v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001150-9",
            "sold": false
          },
          {
            "vehicle": "Palio Young 1.0 mpi Fire 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001165-7",
            "sold": false
          },
          {
            "vehicle": "Palio Young 1.0 mpi Fire 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001166-5",
            "sold": false
          },
          {
            "vehicle": "Panorama C/CL",
            "manufacturer": "Fiat",
            "fipe_code": "001116-9",
            "sold": false
          },
          {
            "vehicle": "Premio CS 1.5 i.e. 2p/ SL 1.6/1.5/1.3 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001034-0",
            "sold": false
          },
          {
            "vehicle": "Premio CS 1.6/ 1.5/ 1.3 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001033-2",
            "sold": false
          },
          {
            "vehicle": "Premio CSL 1.6 i.e./ 1.5 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001036-7",
            "sold": false
          },
          {
            "vehicle": "Premio CSL 1.6/ 1.5",
            "manufacturer": "Fiat",
            "fipe_code": "001035-9",
            "sold": false
          },
          {
            "vehicle": "Premio S 1.5 i.e./ 1.5 / 1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001032-4",
            "sold": false
          },
          {
            "vehicle": "Punto  ELX 1.4 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001249-1",
            "sold": false
          },
          {
            "vehicle": "Punto 1.4 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001248-3",
            "sold": false
          },
          {
            "vehicle": "Punto ATTRACTIVE 1.4 Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001313-7",
            "sold": false
          },
          {
            "vehicle": "Punto ATTRACTIVE ITALIA 1.4 F.Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001377-3",
            "sold": false
          },
          {
            "vehicle": "Punto BLACKMOTION 1.8 Flex 16V 5p.",
            "manufacturer": "Fiat",
            "fipe_code": "001407-9",
            "sold": false
          },
          {
            "vehicle": "Punto BLACKMOTION Dual. 1.8 Flex 16v 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001408-7",
            "sold": false
          },
          {
            "vehicle": "Punto Cabrio",
            "manufacturer": "Fiat",
            "fipe_code": "001120-7",
            "sold": false
          },
          {
            "vehicle": "Punto EL/ELX",
            "manufacturer": "Fiat",
            "fipe_code": "001117-7",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001316-1",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001317-0",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE Dualogic 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001342-0",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE Dualogic 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001318-8",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE SP 1.6 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001437-0",
            "sold": false
          },
          {
            "vehicle": "Punto ESSENCE SP Dualogic 1.6 Flex 16V ",
            "manufacturer": "Fiat",
            "fipe_code": "001442-7",
            "sold": false
          },
          {
            "vehicle": "Punto HLX 1.8 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001250-5",
            "sold": false
          },
          {
            "vehicle": "Punto S",
            "manufacturer": "Fiat",
            "fipe_code": "001118-5",
            "sold": false
          },
          {
            "vehicle": "Punto Sporting 1.8 Flex 8V / 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001251-3",
            "sold": false
          },
          {
            "vehicle": "Punto Sporting Dualogic 1.8 Flex 16V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001319-6",
            "sold": false
          },
          {
            "vehicle": "Punto SX",
            "manufacturer": "Fiat",
            "fipe_code": "001119-3",
            "sold": false
          },
          {
            "vehicle": "Punto T-JET 1.4 16V Turbo 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001271-8",
            "sold": false
          },
          {
            "vehicle": "Siena 1.0 mpi/ 500 1.0 mpi",
            "manufacturer": "Fiat",
            "fipe_code": "001078-2",
            "sold": false
          },
          {
            "vehicle": "Siena 1.0/ EX 1.0 mpi Fire/ Fire Flex 8v",
            "manufacturer": "Fiat",
            "fipe_code": "001175-4",
            "sold": false
          },
          {
            "vehicle": "Siena 1.5 mpi 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001202-5",
            "sold": false
          },
          {
            "vehicle": "Siena ATTRACTIVE 1.0 Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001320-0",
            "sold": false
          },
          {
            "vehicle": "Siena ATTRACTIVE 1.4 Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001321-8",
            "sold": false
          },
          {
            "vehicle": "Siena Celebration 1.0 Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001239-4",
            "sold": false
          },
          {
            "vehicle": "Siena City 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001076-6",
            "sold": false
          },
          {
            "vehicle": "Siena EL 1.0 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001272-6",
            "sold": false
          },
          {
            "vehicle": "Siena EL 1.4 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001331-5",
            "sold": false
          },
          {
            "vehicle": "Siena EL 1.6 mpi 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001015-4",
            "sold": false
          },
          {
            "vehicle": "Siena EL 1.6 spi",
            "manufacturer": "Fiat",
            "fipe_code": "001014-6",
            "sold": false
          },
          {
            "vehicle": "Siena EL Celeb. 1.0 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001273-4",
            "sold": false
          },
          {
            "vehicle": "Siena EL Celeb. 1.4 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001332-3",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.0 mpi Fire 16v 4p (25 anos)",
            "manufacturer": "Fiat",
            "fipe_code": "001158-4",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.0 mpi Fire/Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001211-4",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.3 mpi Fire 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001141-0",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.3 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001212-2",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.4 mpi Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001224-6",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.5 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001112-6",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.6 mpi 8V/16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001077-4",
            "sold": false
          },
          {
            "vehicle": "Siena ELX 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001199-1",
            "sold": false
          },
          {
            "vehicle": "Siena ESSENCE 1.6 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001322-6",
            "sold": false
          },
          {
            "vehicle": "Siena ESSENCE Dualogic 1.6 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001323-4",
            "sold": false
          },
          {
            "vehicle": "Siena EX 1.0 mpi Fire 16v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001157-6",
            "sold": false
          },
          {
            "vehicle": "Siena EX 1.3 mpi Fire 8V 67cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001198-3",
            "sold": false
          },
          {
            "vehicle": "Siena EX 1.8 mpi 8V 103cv 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001197-5",
            "sold": false
          },
          {
            "vehicle": "Siena HL 1.6 mpi 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001016-2",
            "sold": false
          },
          {
            "vehicle": "Siena HLX 1.8 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001213-0",
            "sold": false
          },
          {
            "vehicle": "Siena HLX Dualogic 1.8 mpi Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001279-3",
            "sold": false
          },
          {
            "vehicle": "Siena Sporting 1.6 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001333-1",
            "sold": false
          },
          {
            "vehicle": "Siena Sporting Dualogic 1.6 Flex 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001334-0",
            "sold": false
          },
          {
            "vehicle": "Siena Stile/Sport MTV 1.6 mpi 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001017-0",
            "sold": false
          },
          {
            "vehicle": "Siena TETRAFUEL 1.4 mpi Fire Flex 8v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001241-6",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8 ATTRACTIVE Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001298-0",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8 MS Lim.Edit./ MS Season 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001220-3",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8 SP Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001243-2",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8 Sporting Flex 8V 5P",
            "manufacturer": "Fiat",
            "fipe_code": "001247-5",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8/ 1.8 Connect 8V 103cv 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001180-0",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8/ 1.8 Connect Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001230-0",
            "sold": false
          },
          {
            "vehicle": "Stilo 1.8/ 1.8 SP/ Connect 16V 122cv 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001181-9",
            "sold": false
          },
          {
            "vehicle": "Stilo 2.4 Abarth 20V 167cv 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001182-7",
            "sold": false
          },
          {
            "vehicle": "Stilo Dualogic 1.8 BlackMotion Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001270-0",
            "sold": false
          },
          {
            "vehicle": "Stilo Dualogic 1.8 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001252-1",
            "sold": false
          },
          {
            "vehicle": "Stilo Dualogic 1.8 SP Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001253-0",
            "sold": false
          },
          {
            "vehicle": "Stilo Dualogic 1.8 Sporting Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001254-8",
            "sold": false
          },
          {
            "vehicle": "Stilo Duologic 1.8 ATTRACTIVE Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001299-8",
            "sold": false
          },
          {
            "vehicle": "Strada 1.3 mpi Fire 8V 67cv CE",
            "manufacturer": "Fiat",
            "fipe_code": "001184-3",
            "sold": false
          },
          {
            "vehicle": "Strada 1.3 mpi Fire 8V 67cv CS",
            "manufacturer": "Fiat",
            "fipe_code": "001183-5",
            "sold": false
          },
          {
            "vehicle": "Strada 1.4 mpi Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001222-0",
            "sold": false
          },
          {
            "vehicle": "Strada 1.4 mpi Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001221-1",
            "sold": false
          },
          {
            "vehicle": "Strada Adv. Ext. 1.8 LOCKER Dual.Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001446-0",
            "sold": false
          },
          {
            "vehicle": "Strada Adv. Ext./ Ext.1.8 LOCKER Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001448-6",
            "sold": false
          },
          {
            "vehicle": "Strada Adv. Extreme 1.8 Dual. Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001447-8",
            "sold": false
          },
          {
            "vehicle": "Strada Adv. M. March. 1.8 Flex 16V CD",
            "manufacturer": "Fiat",
            "fipe_code": "001404-4",
            "sold": false
          },
          {
            "vehicle": "Strada Adv. M. March.1.8 Dual. Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001405-2",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.1.8 16V  LOCKER Dual. Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001412-5",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.1.8 16V Dualogic Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001363-3",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.1.8 16V Dualogic Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001411-7",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.1.8 16V LOCKER Dualo. Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001364-1",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.Ext. 1.8 LOCKER Dual. Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001443-5",
            "sold": false
          },
          {
            "vehicle": "Strada Adv.Ext./ Ext. 1.8 LOCKER Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001445-1",
            "sold": false
          },
          {
            "vehicle": "Strada Adv/Adv TRYON 1.8 mpi Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001219-0",
            "sold": false
          },
          {
            "vehicle": "Strada Adventure 1.6 mpi 16V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001163-0",
            "sold": false
          },
          {
            "vehicle": "Strada Adventure 1.8 mpi 8V 103cv CE",
            "manufacturer": "Fiat",
            "fipe_code": "001189-4",
            "sold": false
          },
          {
            "vehicle": "Strada Adventure 1.8/ 1.8 LOCKER Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001257-2",
            "sold": false
          },
          {
            "vehicle": "Strada Adventure Ext. 1.8  Dual. Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001444-3",
            "sold": false
          },
          {
            "vehicle": "Strada Adventure1.8/ 1.8 LOCKER Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001277-7",
            "sold": false
          },
          {
            "vehicle": "Strada Celeb. 1.4 mpi Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001312-9",
            "sold": false
          },
          {
            "vehicle": "Strada Celeb. 1.4 mpi Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001311-0",
            "sold": false
          },
          {
            "vehicle": "Strada LX 1.6 16V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001113-4",
            "sold": false
          },
          {
            "vehicle": "Strada LX 1.6 mpi 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001091-0",
            "sold": false
          },
          {
            "vehicle": "Strada Sporting 1.8 Flex 16V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001335-8",
            "sold": false
          },
          {
            "vehicle": "Strada Trek. M. March. 1.6 Flex 16V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001406-0",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.4 mpi Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001233-5",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.4 mpi Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001232-7",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.6 16V Flex CD",
            "manufacturer": "Fiat",
            "fipe_code": "001388-9",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.6 16V Flex CE",
            "manufacturer": "Fiat",
            "fipe_code": "001387-0",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.6 16V Flex CS",
            "manufacturer": "Fiat",
            "fipe_code": "001386-2",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.6 16V LOCKER Flex  CD",
            "manufacturer": "Fiat",
            "fipe_code": "001441-9",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.6 mpi",
            "manufacturer": "Fiat",
            "fipe_code": "001090-1",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.8 mpi Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001218-1",
            "sold": false
          },
          {
            "vehicle": "Strada Trekking 1.8 mpi Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001217-3",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.4 mpi Fire Flex 8V CD",
            "manufacturer": "Fiat",
            "fipe_code": "001293-9",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.4 mpi Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001292-0",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.4 mpi Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001291-2",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.6 mpi 16V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001148-7",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.6 mpi 16V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001164-9",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.8 mpi 8v 103cv CE",
            "manufacturer": "Fiat",
            "fipe_code": "001188-6",
            "sold": false
          },
          {
            "vehicle": "Strada Working 1.8 mpi 8V 103cv CS",
            "manufacturer": "Fiat",
            "fipe_code": "001187-8",
            "sold": false
          },
          {
            "vehicle": "Strada Working Celeb.1.4 Fire Flex 8V CD",
            "manufacturer": "Fiat",
            "fipe_code": "001391-9",
            "sold": false
          },
          {
            "vehicle": "Strada Working Celeb.1.4 Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001390-0",
            "sold": false
          },
          {
            "vehicle": "Strada Working Celeb.1.4 Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001389-7",
            "sold": false
          },
          {
            "vehicle": "Strada Working HARD 1.4 Fire Flex 8V CD",
            "manufacturer": "Fiat",
            "fipe_code": "001431-1",
            "sold": false
          },
          {
            "vehicle": "Strada Working HARD 1.4 Fire Flex 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001432-0",
            "sold": false
          },
          {
            "vehicle": "Strada Working HARD 1.4 Fire Flex 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001433-8",
            "sold": false
          },
          {
            "vehicle": "Strada Working Plus 1.4 8V Flex CS",
            "manufacturer": "Fiat",
            "fipe_code": "001478-8",
            "sold": false
          },
          {
            "vehicle": "Strada/ Strada Working 1.5 mpi 8V CE",
            "manufacturer": "Fiat",
            "fipe_code": "001122-3",
            "sold": false
          },
          {
            "vehicle": "Strada/ Strada Working 1.5 mpi 8V CS",
            "manufacturer": "Fiat",
            "fipe_code": "001089-8",
            "sold": false
          },
          {
            "vehicle": "Tempra 2.0 i.e 16V 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001037-5",
            "sold": false
          },
          {
            "vehicle": "Tempra 2.0 i.e. 8V 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001092-8",
            "sold": false
          },
          {
            "vehicle": "Tempra 2.0 mpi 16V",
            "manufacturer": "Fiat",
            "fipe_code": "001093-6",
            "sold": false
          },
          {
            "vehicle": "Tempra 8V/ City 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001102-9",
            "sold": false
          },
          {
            "vehicle": "Tempra HLX 2.0 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001042-1",
            "sold": false
          },
          {
            "vehicle": "Tempra Ouro 16V 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001040-5",
            "sold": false
          },
          {
            "vehicle": "Tempra Ouro/Prata 2.0 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001038-3",
            "sold": false
          },
          {
            "vehicle": "Tempra Stile 2.0 i.e. Turbo 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001044-8",
            "sold": false
          },
          {
            "vehicle": "Tempra SW SLX 2.0 i.e.",
            "manufacturer": "Fiat",
            "fipe_code": "001058-8",
            "sold": false
          },
          {
            "vehicle": "Tempra SX 2.0 16V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001041-3",
            "sold": false
          },
          {
            "vehicle": "Tempra SX 2.0 i.e. 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001039-1",
            "sold": false
          },
          {
            "vehicle": "Tempra Turbo 2.0 i.e. 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001043-0",
            "sold": false
          },
          {
            "vehicle": "Tipo 1.6 i.e. 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001059-6",
            "sold": false
          },
          {
            "vehicle": "Tipo 1.6 mpi 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001045-6",
            "sold": false
          },
          {
            "vehicle": "Tipo 2.0 16V 2p/4p",
            "manufacturer": "Fiat",
            "fipe_code": "001061-8",
            "sold": false
          },
          {
            "vehicle": "Tipo 2.0 SLX 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001062-6",
            "sold": false
          },
          {
            "vehicle": "Toro Freedom 1.8 16V Flex Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001449-4",
            "sold": false
          },
          {
            "vehicle": "Toro Freedom 2.0 16V 4x2 TB Diesel Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001451-6",
            "sold": false
          },
          {
            "vehicle": "Toro Freedom 2.0 16V 4x4 TB Diesel Mec.",
            "manufacturer": "Fiat",
            "fipe_code": "001452-4",
            "sold": false
          },
          {
            "vehicle": "Toro Freedom 2.4 16V Flex Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001479-6",
            "sold": false
          },
          {
            "vehicle": "Toro Opening Edition 1.8 16V Flex Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001450-8",
            "sold": false
          },
          {
            "vehicle": "Toro Volcano 2.0 16V 4x4 TB Diesel Aut.",
            "manufacturer": "Fiat",
            "fipe_code": "001453-2",
            "sold": false
          },
          {
            "vehicle": "Uno 1.6 mpi 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001054-5",
            "sold": false
          },
          {
            "vehicle": "Uno 1.6R mpi / 1.6R / 1.5R",
            "manufacturer": "Fiat",
            "fipe_code": "001055-3",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTI. Celeb.1.4 EVO F.Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001348-0",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTI. Celeb.1.4 EVO F.Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001308-0",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTIVE 1.0 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001424-9",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTIVE 1.0 Flex 6V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001475-3",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTIVE 1.4 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001347-1",
            "sold": false
          },
          {
            "vehicle": "UNO ATTRACTIVE 1.4 EVO Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001304-8",
            "sold": false
          },
          {
            "vehicle": "Uno City / Smart City 1.0 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001094-4",
            "sold": false
          },
          {
            "vehicle": "Uno CS/Top/Sport 1.5 i.e. / 1.5 /1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001051-0",
            "sold": false
          },
          {
            "vehicle": "Uno CS/Top/Sport 1.5 i.e. / 1.5 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001052-9",
            "sold": false
          },
          {
            "vehicle": "Uno CSL 1.6 4p (Argentino)",
            "manufacturer": "Fiat",
            "fipe_code": "001053-7",
            "sold": false
          },
          {
            "vehicle": "UNO ECONOMY 1.4 EVO Fire Flex 8V 2p  ",
            "manufacturer": "Fiat",
            "fipe_code": "001366-8",
            "sold": false
          },
          {
            "vehicle": "UNO ECONOMY 1.4 EVO Fire Flex 8V 4p      ",
            "manufacturer": "Fiat",
            "fipe_code": "001367-6",
            "sold": false
          },
          {
            "vehicle": "UNO ECONOMY Celeb. 1.4 EVO F. Flex 8V 2p  ",
            "manufacturer": "Fiat",
            "fipe_code": "001368-4",
            "sold": false
          },
          {
            "vehicle": "UNO ECONOMY Celeb. 1.4 EVO F. Flex 8V 4p          ",
            "manufacturer": "Fiat",
            "fipe_code": "001369-2",
            "sold": false
          },
          {
            "vehicle": "UNO EVOLUTION 1.4 Fire Flex 8V 5p ",
            "manufacturer": "Fiat",
            "fipe_code": "001425-7",
            "sold": false
          },
          {
            "vehicle": "UNO Furgão 1.0 Fire Flex 8V 3p",
            "manufacturer": "Fiat",
            "fipe_code": "001430-3",
            "sold": false
          },
          {
            "vehicle": "Uno Furgão 1.3 mpi Fire/ Fire Flex 8V",
            "manufacturer": "Fiat",
            "fipe_code": "001203-3",
            "sold": false
          },
          {
            "vehicle": "Uno Furgão 1.5 mpi/i.e.",
            "manufacturer": "Fiat",
            "fipe_code": "001021-9",
            "sold": false
          },
          {
            "vehicle": "Uno Furgão 1.5/ 1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001049-9",
            "sold": false
          },
          {
            "vehicle": "Uno Mille  ELX  2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001048-0",
            "sold": false
          },
          {
            "vehicle": "Uno Mille 1.0 Electronic 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001047-2",
            "sold": false
          },
          {
            "vehicle": "Uno Mille 1.0 Fire/ F.Flex/ ECONOMY 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001161-4",
            "sold": false
          },
          {
            "vehicle": "Uno Mille 1.0 Fire/ F.Flex/ ECONOMY 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001162-2",
            "sold": false
          },
          {
            "vehicle": "Uno Mille 1.0/ i.e./ Electronic/  Brio",
            "manufacturer": "Fiat",
            "fipe_code": "001046-4",
            "sold": false
          },
          {
            "vehicle": "Uno Mille Celeb. WAY ECON. 1.0 F.Flex 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001264-5",
            "sold": false
          },
          {
            "vehicle": "Uno Mille Celeb. WAY ECON. 1.0 F.Flex 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001265-3",
            "sold": false
          },
          {
            "vehicle": "Uno Mille Celeb/Celeb.ECON 1.0 F.Flex 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001245-9",
            "sold": false
          },
          {
            "vehicle": "Uno Mille Celeb/Celeb.ECON 1.0 F.Flex 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001246-7",
            "sold": false
          },
          {
            "vehicle": "Uno Mille EP 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001064-2",
            "sold": false
          },
          {
            "vehicle": "Uno Mille Grazie 1.0 Fire Flex 8v 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001415-0",
            "sold": false
          },
          {
            "vehicle": "Uno Mille SX 2p e 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001020-0",
            "sold": false
          },
          {
            "vehicle": "Uno Mille SX Young 1.0 IE",
            "manufacturer": "Fiat",
            "fipe_code": "001103-7",
            "sold": false
          },
          {
            "vehicle": "UNO MILLE WAY ECO.XINGU 1.0 F.Flex 8v 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001393-5",
            "sold": false
          },
          {
            "vehicle": "Uno Mille WAY ECONOMY 1.0 F.Flex 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001262-9",
            "sold": false
          },
          {
            "vehicle": "Uno Mille WAY ECONOMY 1.0 F.Flex 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001263-7",
            "sold": false
          },
          {
            "vehicle": "Uno Mille/ Mille EX/ Smart 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001018-9",
            "sold": false
          },
          {
            "vehicle": "Uno Mille/ Mille EX/ Smart 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001137-1",
            "sold": false
          },
          {
            "vehicle": "Uno S 1.5 i.e. / 1.5 / 1.3/ SX 1.3",
            "manufacturer": "Fiat",
            "fipe_code": "001050-2",
            "sold": false
          },
          {
            "vehicle": "UNO SPORT. Dual. 1.4 B.Edit. Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001469-9",
            "sold": false
          },
          {
            "vehicle": "UNO SPORT.INTERLAGOS 1.4 EVO F.Flex 8v  ",
            "manufacturer": "Fiat",
            "fipe_code": "001396-0",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING 1.3 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001471-0",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING 1.4 B.Edit. Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001470-2",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING 1.4 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001351-0",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING 1.4 EVO Fire Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001341-2",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING Dualogic 1.3 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001472-9",
            "sold": false
          },
          {
            "vehicle": "UNO SPORTING Dualogic 1.4 EVO Flex 8V 4p",
            "manufacturer": "Fiat",
            "fipe_code": "001428-1",
            "sold": false
          },
          {
            "vehicle": "Uno Turbo 1.4 i.e. 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001056-1",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE 1.0 EVO Fire Flex 8V 3p",
            "manufacturer": "Fiat",
            "fipe_code": "001343-9",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE Celeb. 1.0 EVO F. Flex 8V 3p",
            "manufacturer": "Fiat",
            "fipe_code": "001344-7",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE Celeb. 1.0 EVO F.Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001307-2",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE College 1.0 EVO FireFlex 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001401-0",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE ITALIA 1.0 EVO F. Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001436-2",
            "sold": false
          },
          {
            "vehicle": "UNO VIVACE/RUA 1.0 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001303-0",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.0 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001345-5",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.0 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001305-6",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.0 Flex 6V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001474-5",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.3 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001473-7",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.4 EVO Dualogic Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001427-3",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.4 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001349-8",
            "sold": false
          },
          {
            "vehicle": "UNO WAY 1.4 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001306-4",
            "sold": false
          },
          {
            "vehicle": "UNO WAY Celeb. 1.0 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001346-3",
            "sold": false
          },
          {
            "vehicle": "UNO WAY Celeb. 1.0 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001309-9",
            "sold": false
          },
          {
            "vehicle": "UNO WAY Celeb. 1.4 EVO Fire Flex 8V 2p",
            "manufacturer": "Fiat",
            "fipe_code": "001350-1",
            "sold": false
          },
          {
            "vehicle": "UNO WAY Celeb. 1.4 EVO Fire Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001310-2",
            "sold": false
          },
          {
            "vehicle": "UNO WAY Dualogic 1.3 Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001476-1",
            "sold": false
          },
          {
            "vehicle": "UNO WAY RIO 450 1.0 EVO Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001440-0",
            "sold": false
          },
          {
            "vehicle": "UNO WAY XINGU 1.0 EVO F.Flex 8V 5P",
            "manufacturer": "Fiat",
            "fipe_code": "001394-3",
            "sold": false
          },
          {
            "vehicle": "UNO WAY XINGU 1.4 EVO F.Flex 8V 5p",
            "manufacturer": "Fiat",
            "fipe_code": "001395-1",
            "sold": false
          },
          {
            "vehicle": "Buggy Off Road 1.8 8V",
            "manufacturer": "Fibravan",
            "fipe_code": "067004-9",
            "sold": false
          },
          {
            "vehicle": "Buggy Plus 1.6 8V",
            "manufacturer": "Fibravan",
            "fipe_code": "067001-4",
            "sold": false
          },
          {
            "vehicle": "Buggy Vip 1.6 8V Total Flex",
            "manufacturer": "Fibravan",
            "fipe_code": "067003-0",
            "sold": false
          },
          {
            "vehicle": "Buggy Vip 1.8 8V",
            "manufacturer": "Fibravan",
            "fipe_code": "067002-2",
            "sold": false
          },
          {
            "vehicle": "Aerostar Mini-Van 3.8",
            "manufacturer": "Ford",
            "fipe_code": "003118-6",
            "sold": false
          },
          {
            "vehicle": "Aspire 1.3",
            "manufacturer": "Ford",
            "fipe_code": "003152-6",
            "sold": false
          },
          {
            "vehicle": "Belina GL 1.8 / 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003021-0",
            "sold": false
          },
          {
            "vehicle": "Belina L 1.8/ 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003020-1",
            "sold": false
          },
          {
            "vehicle": "Club Wagon V8",
            "manufacturer": "Ford",
            "fipe_code": "003119-4",
            "sold": false
          },
          {
            "vehicle": "Club Wagon XLT 4.9 V6",
            "manufacturer": "Ford",
            "fipe_code": "003120-8",
            "sold": false
          },
          {
            "vehicle": "Contour SE/ GL/ LX  2.0 16V",
            "manufacturer": "Ford",
            "fipe_code": "003121-6",
            "sold": false
          },
          {
            "vehicle": "Contour SE/GL/ LX 2.5 24V",
            "manufacturer": "Ford",
            "fipe_code": "003122-4",
            "sold": false
          },
          {
            "vehicle": "Corcel II GL/GT",
            "manufacturer": "Ford",
            "fipe_code": "003129-1",
            "sold": false
          },
          {
            "vehicle": "Corcel II L",
            "manufacturer": "Ford",
            "fipe_code": "003128-3",
            "sold": false
          },
          {
            "vehicle": "Courier 1.3i/Furgão",
            "manufacturer": "Ford",
            "fipe_code": "003001-5",
            "sold": false
          },
          {
            "vehicle": "Courier 1.6 L/ 1.6 Flex",
            "manufacturer": "Ford",
            "fipe_code": "003139-9",
            "sold": false
          },
          {
            "vehicle": "Courier CLX 1.4i 16V",
            "manufacturer": "Ford",
            "fipe_code": "003002-3",
            "sold": false
          },
          {
            "vehicle": "Courier Si 1.4i 16V",
            "manufacturer": "Ford",
            "fipe_code": "003003-1",
            "sold": false
          },
          {
            "vehicle": "Courier Sport 1.6 8v",
            "manufacturer": "Ford",
            "fipe_code": "003231-0",
            "sold": false
          },
          {
            "vehicle": "Courier Van 1.6/ 1.6 Flex 8V  ( Carga )",
            "manufacturer": "Ford",
            "fipe_code": "003312-0",
            "sold": false
          },
          {
            "vehicle": "Courier XL/XL-RS 1.6/ XL 1.6 Flex",
            "manufacturer": "Ford",
            "fipe_code": "003140-2",
            "sold": false
          },
          {
            "vehicle": "Crown Victoria LX 4.6",
            "manufacturer": "Ford",
            "fipe_code": "003153-4",
            "sold": false
          },
          {
            "vehicle": "Del Rey Belina Ghia",
            "manufacturer": "Ford",
            "fipe_code": "003135-6",
            "sold": false
          },
          {
            "vehicle": "Del Rey Belina GL",
            "manufacturer": "Ford",
            "fipe_code": "003133-0",
            "sold": false
          },
          {
            "vehicle": "Del Rey Belina GLX",
            "manufacturer": "Ford",
            "fipe_code": "003134-8",
            "sold": false
          },
          {
            "vehicle": "Del Rey Belina L",
            "manufacturer": "Ford",
            "fipe_code": "003132-1",
            "sold": false
          },
          {
            "vehicle": "Del Rey Ghia 1.8 / 1.6 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003025-2",
            "sold": false
          },
          {
            "vehicle": "Del Rey GLX 1.6/1.8 / GL 1.6/1.8 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003024-4",
            "sold": false
          },
          {
            "vehicle": "Del Rey L 1.8 / 1.6 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003023-6",
            "sold": false
          },
          {
            "vehicle": "EcoSport 4WD 2.0/ 2.0 Flex 16V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003285-9",
            "sold": false
          },
          {
            "vehicle": "EcoSport FREESTYLE 1.6 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003367-7",
            "sold": false
          },
          {
            "vehicle": "EcoSport FREESTYLE 1.6 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003420-7",
            "sold": false
          },
          {
            "vehicle": "EcoSport FREESTYLE 2.0 16V 4WD Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003391-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport FREESTYLE 2.0 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003369-3",
            "sold": false
          },
          {
            "vehicle": "EcoSport FREESTYLE 2.0 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003407-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport S 1.6 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003365-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport SE 1.6 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003419-3",
            "sold": false
          },
          {
            "vehicle": "EcoSport SE 1.6 16V Flex 5p Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003366-9",
            "sold": false
          },
          {
            "vehicle": "EcoSport SE 2.0 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003373-1",
            "sold": false
          },
          {
            "vehicle": "EcoSport SE Direct 1.6 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003427-4",
            "sold": false
          },
          {
            "vehicle": "EcoSport TITANIUM 1.6 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003368-5",
            "sold": false
          },
          {
            "vehicle": "EcoSport TITANIUM 2.0 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003370-7",
            "sold": false
          },
          {
            "vehicle": "EcoSport TITANIUM 2.0 16V Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003374-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport XL 1.6/ 1.6 Flex 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003268-9",
            "sold": false
          },
          {
            "vehicle": "EcoSport XL Supercharger 1.0 8V 95cv 5p",
            "manufacturer": "Ford",
            "fipe_code": "003267-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLS 1.6/ 1.6 Flex 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003269-7",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLS 2.0/2.0 Flex 16V 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003319-7",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLS FREESTYLE 1.6 Flex 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003303-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLT 1.6/ 1.6 Flex 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003270-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLT 2.0/ 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003320-0",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLT 2.0/ 2.0 Flex 16V 5p Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003271-9",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLT FREESTYLE 1.6 Flex 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003318-9",
            "sold": false
          },
          {
            "vehicle": "EcoSport XLT FREESTYLE 2.0 Flex 16V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003330-8",
            "sold": false
          },
          {
            "vehicle": "EDGE LIMITED 3.5 V6 24V AWD Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003344-8",
            "sold": false
          },
          {
            "vehicle": "EDGE LIMITED 3.5 V6 24V FWD Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003352-9",
            "sold": false
          },
          {
            "vehicle": "EDGE SEL 3.5 V6  24V FWD Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003353-7",
            "sold": false
          },
          {
            "vehicle": "EDGE SEL 3.5 V6 24V AWD Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003329-4",
            "sold": false
          },
          {
            "vehicle": "EDGE TITANIUM 3.5 V6 24V AWD Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003428-2",
            "sold": false
          },
          {
            "vehicle": "Escort  Racer 2.0i",
            "manufacturer": "Ford",
            "fipe_code": "003123-2",
            "sold": false
          },
          {
            "vehicle": "Escort Ghia 1.8i / 1.8 / 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003035-0",
            "sold": false
          },
          {
            "vehicle": "Escort Ghia 2.0i / 2.0",
            "manufacturer": "Ford",
            "fipe_code": "003036-8",
            "sold": false
          },
          {
            "vehicle": "Escort GL 1.6 MPI",
            "manufacturer": "Ford",
            "fipe_code": "003207-7",
            "sold": false
          },
          {
            "vehicle": "Escort GL 1.6i / 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003030-9",
            "sold": false
          },
          {
            "vehicle": "Escort GL 1.8i / 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003031-7",
            "sold": false
          },
          {
            "vehicle": "Escort GL 1.8i 16V 3p",
            "manufacturer": "Ford",
            "fipe_code": "003004-0",
            "sold": false
          },
          {
            "vehicle": "Escort GL 1.8i 16V 4p",
            "manufacturer": "Ford",
            "fipe_code": "003005-8",
            "sold": false
          },
          {
            "vehicle": "Escort GLX 1.6i",
            "manufacturer": "Ford",
            "fipe_code": "003032-5",
            "sold": false
          },
          {
            "vehicle": "Escort GLX 1.8i 16V 4p",
            "manufacturer": "Ford",
            "fipe_code": "003007-4",
            "sold": false
          },
          {
            "vehicle": "Escort GLX 1.8i 8v",
            "manufacturer": "Ford",
            "fipe_code": "003033-3",
            "sold": false
          },
          {
            "vehicle": "Escort Guarujá 1.8 4p",
            "manufacturer": "Ford",
            "fipe_code": "003034-1",
            "sold": false
          },
          {
            "vehicle": "Escort Hobby 1.0",
            "manufacturer": "Ford",
            "fipe_code": "003026-0",
            "sold": false
          },
          {
            "vehicle": "Escort Hobby 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003027-9",
            "sold": false
          },
          {
            "vehicle": "Escort L 1.8i / 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003029-5",
            "sold": false
          },
          {
            "vehicle": "Escort L/LX 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003028-7",
            "sold": false
          },
          {
            "vehicle": "Escort RS 1.8i 16V",
            "manufacturer": "Ford",
            "fipe_code": "003095-3",
            "sold": false
          },
          {
            "vehicle": "Escort S.W GL 1.8i 16V",
            "manufacturer": "Ford",
            "fipe_code": "003006-6",
            "sold": false
          },
          {
            "vehicle": "Escort S.W. GLX 1.8i 16V",
            "manufacturer": "Ford",
            "fipe_code": "003008-2",
            "sold": false
          },
          {
            "vehicle": "Escort SW 1.9 16v",
            "manufacturer": "Ford",
            "fipe_code": "003230-1",
            "sold": false
          },
          {
            "vehicle": "Escort SW GL 1.6 MPI",
            "manufacturer": "Ford",
            "fipe_code": "003208-5",
            "sold": false
          },
          {
            "vehicle": "Escort XR3 1.8 / 1.6 Beneton/Form./Laser",
            "manufacturer": "Ford",
            "fipe_code": "003038-4",
            "sold": false
          },
          {
            "vehicle": "Escort XR3 1.8 / 1.6 Conversível",
            "manufacturer": "Ford",
            "fipe_code": "003039-2",
            "sold": false
          },
          {
            "vehicle": "Escort XR3 2.0i",
            "manufacturer": "Ford",
            "fipe_code": "003040-6",
            "sold": false
          },
          {
            "vehicle": "Escort XR3 2.0i Conversível",
            "manufacturer": "Ford",
            "fipe_code": "003041-4",
            "sold": false
          },
          {
            "vehicle": "Expedition 5.4 V8",
            "manufacturer": "Ford",
            "fipe_code": "003154-2",
            "sold": false
          },
          {
            "vehicle": "Explorer Limited 4.0 4x4 V6 213cv",
            "manufacturer": "Ford",
            "fipe_code": "003290-5",
            "sold": false
          },
          {
            "vehicle": "Explorer Limited 5.0 4x4 V8",
            "manufacturer": "Ford",
            "fipe_code": "003138-0",
            "sold": false
          },
          {
            "vehicle": "Explorer Sport 4.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003157-7",
            "sold": false
          },
          {
            "vehicle": "Explorer XL 4x2 4.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003155-0",
            "sold": false
          },
          {
            "vehicle": "Explorer XL 4x4 4.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003156-9",
            "sold": false
          },
          {
            "vehicle": "Explorer XLT 4x2 4.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003073-2",
            "sold": false
          },
          {
            "vehicle": "Explorer XLT 4x4 4.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003074-0",
            "sold": false
          },
          {
            "vehicle": "F-100 2.3",
            "manufacturer": "Ford",
            "fipe_code": "003185-2",
            "sold": false
          },
          {
            "vehicle": "F-100 Blazer 2.3",
            "manufacturer": "Ford",
            "fipe_code": "003186-0",
            "sold": false
          },
          {
            "vehicle": "F-100 CD 2.3",
            "manufacturer": "Ford",
            "fipe_code": "003187-9",
            "sold": false
          },
          {
            "vehicle": "F-100 Super 2.3",
            "manufacturer": "Ford",
            "fipe_code": "003188-7",
            "sold": false
          },
          {
            "vehicle": "F-100 Super Série 2.3",
            "manufacturer": "Ford",
            "fipe_code": "003189-5",
            "sold": false
          },
          {
            "vehicle": "F-1000 CD/Blazer 3.6",
            "manufacturer": "Ford",
            "fipe_code": "003162-3",
            "sold": false
          },
          {
            "vehicle": "F-1000 CD/Blazer 3.9 Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003163-1",
            "sold": false
          },
          {
            "vehicle": "F-1000 Lightning/ Super 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003164-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 Regular Cab. 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003009-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 S. S. Diesel / S.S. Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003048-1",
            "sold": false
          },
          {
            "vehicle": "F-1000 SR XK  Deserter Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003124-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 SR XK Deserter",
            "manufacturer": "Ford",
            "fipe_code": "003222-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super 3.6 / Super Série 3.6",
            "manufacturer": "Ford",
            "fipe_code": "003042-2",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super CE 4.9i / 3.6",
            "manufacturer": "Ford",
            "fipe_code": "003043-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super Diesel / Super Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003046-5",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super Diesel CE 3.9",
            "manufacturer": "Ford",
            "fipe_code": "003045-7",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super Série CE 4.9i / 3.6",
            "manufacturer": "Ford",
            "fipe_code": "003044-9",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super Série CE Diesel 3.9",
            "manufacturer": "Ford",
            "fipe_code": "003047-3",
            "sold": false
          },
          {
            "vehicle": "F-1000 Super/ S.Série 4x4 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003049-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 Tropical CD 2.5 HSD/4.3 Diesel TB",
            "manufacturer": "Ford",
            "fipe_code": "003165-8",
            "sold": false
          },
          {
            "vehicle": "F-1000 Tropical CD 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003166-6",
            "sold": false
          },
          {
            "vehicle": "F-1000 Tropical SL/ Van 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003243-3",
            "sold": false
          },
          {
            "vehicle": "F-1000 Tropical SL/ Van T.Diesel (todas)",
            "manufacturer": "Ford",
            "fipe_code": "003241-7",
            "sold": false
          },
          {
            "vehicle": "F-1000 XL 2.5 HSD Diesel TB",
            "manufacturer": "Ford",
            "fipe_code": "003167-4",
            "sold": false
          },
          {
            "vehicle": "F-1000 XL 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003199-2",
            "sold": false
          },
          {
            "vehicle": "F-1000 XL 4.9i CE",
            "manufacturer": "Ford",
            "fipe_code": "003010-4",
            "sold": false
          },
          {
            "vehicle": "F-1000 XL 4x4 Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003014-7",
            "sold": false
          },
          {
            "vehicle": "F-1000 XL Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003012-0",
            "sold": false
          },
          {
            "vehicle": "F-1000 XLT 2.5 HSD Diesel TB",
            "manufacturer": "Ford",
            "fipe_code": "003168-2",
            "sold": false
          },
          {
            "vehicle": "F-1000 XLT 4x4 Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003015-5",
            "sold": false
          },
          {
            "vehicle": "F-1000 XLT CE 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003197-6",
            "sold": false
          },
          {
            "vehicle": "F-1000 XLT Diesel Turbo",
            "manufacturer": "Ford",
            "fipe_code": "003013-9",
            "sold": false
          },
          {
            "vehicle": "F-1000 XLT/XL Lighting 4.9i",
            "manufacturer": "Ford",
            "fipe_code": "003011-2",
            "sold": false
          },
          {
            "vehicle": "F-150 XL Triton 4.3 V6",
            "manufacturer": "Ford",
            "fipe_code": "003126-7",
            "sold": false
          },
          {
            "vehicle": "F-150 XLT Triton 4.3",
            "manufacturer": "Ford",
            "fipe_code": "003159-3",
            "sold": false
          },
          {
            "vehicle": "F-150 XLT Triton 4.6 V8",
            "manufacturer": "Ford",
            "fipe_code": "003217-4",
            "sold": false
          },
          {
            "vehicle": "F-150 XLT Triton 5.8",
            "manufacturer": "Ford",
            "fipe_code": "003160-7",
            "sold": false
          },
          {
            "vehicle": "F-250 F-MILHA CD 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003338-3",
            "sold": false
          },
          {
            "vehicle": "F-250 TropiCab CE 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003313-8",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropical 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003170-4",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropical 4.2 CE / CD Diesel TB",
            "manufacturer": "Ford",
            "fipe_code": "003172-0",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropical 4.2 V6",
            "manufacturer": "Ford",
            "fipe_code": "003171-2",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropical SL/ Van T.Diesel (todas)",
            "manufacturer": "Ford",
            "fipe_code": "003242-5",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropicampo CD 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003314-6",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropicampo Executive 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003355-3",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropiclassic 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003315-4",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropivan Executive 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003316-2",
            "sold": false
          },
          {
            "vehicle": "F-250 Tropivan/Tropi. Plus 3.9 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003317-0",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 3.9 4x2 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003115-1",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 3.9 4x4 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003305-7",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 3.9 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003306-5",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 4.2 180cv CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003279-4",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 4.2 Turbo Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003198-4",
            "sold": false
          },
          {
            "vehicle": "F-250 XL 4.2 V6",
            "manufacturer": "Ford",
            "fipe_code": "003114-3",
            "sold": false
          },
          {
            "vehicle": "F-250 XL Super Duty 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003142-9",
            "sold": false
          },
          {
            "vehicle": "F-250 XL Super Duty 4.2 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003272-7",
            "sold": false
          },
          {
            "vehicle": "F-250 XL Super Duty 4.2 V6",
            "manufacturer": "Ford",
            "fipe_code": "003141-0",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 3.9 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003308-1",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 3.9 4x2 Diesel TB",
            "manufacturer": "Ford",
            "fipe_code": "003117-8",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 3.9 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003309-0",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 3.9 4x4 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003307-3",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 4.2 180cv CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003280-8",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 4.2 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003206-9",
            "sold": false
          },
          {
            "vehicle": "F-250 XLT 4.2 V6",
            "manufacturer": "Ford",
            "fipe_code": "003116-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.0 8V Flex/Class 1.0 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003310-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.0i 3p e 5p",
            "manufacturer": "Ford",
            "fipe_code": "003016-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.3  3p e 5p",
            "manufacturer": "Ford",
            "fipe_code": "003075-9",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.5 16V Flex Mec. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003386-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.6 16V Flex Aut. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003388-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.6 16V Flex Mec. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003387-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta 1.6 8V Flex/Class 1.6 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003286-7",
            "sold": false
          },
          {
            "vehicle": "Fiesta Class 1.0 2p",
            "manufacturer": "Ford",
            "fipe_code": "003200-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta Class 1.0 4p",
            "manufacturer": "Ford",
            "fipe_code": "003201-8",
            "sold": false
          },
          {
            "vehicle": "Fiesta Class 1.6 8V 98cv 5p",
            "manufacturer": "Ford",
            "fipe_code": "003261-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta CLX 1.3i 3p",
            "manufacturer": "Ford",
            "fipe_code": "003052-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta CLX 1.3i 5p",
            "manufacturer": "Ford",
            "fipe_code": "003053-8",
            "sold": false
          },
          {
            "vehicle": "Fiesta CLX 1.4i 16V 3p e 5p",
            "manufacturer": "Ford",
            "fipe_code": "003017-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta GL 1.0 3p",
            "manufacturer": "Ford",
            "fipe_code": "003143-7",
            "sold": false
          },
          {
            "vehicle": "Fiesta GL 1.0 5p",
            "manufacturer": "Ford",
            "fipe_code": "003192-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta GL Class 1.0i 5p",
            "manufacturer": "Ford",
            "fipe_code": "003096-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta GLX 1.6 8V 3p",
            "manufacturer": "Ford",
            "fipe_code": "003144-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta GLX 1.6 8V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003193-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta Personnalité 1.0 8V 66cv 5p",
            "manufacturer": "Ford",
            "fipe_code": "003259-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta S 1.0 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003380-4",
            "sold": false
          },
          {
            "vehicle": "Fiesta SE 1.0 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003381-2",
            "sold": false
          },
          {
            "vehicle": "Fiesta SE 1.6 16V Flex 5p   ",
            "manufacturer": "Ford",
            "fipe_code": "003351-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta SE 1.6 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003382-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta SE Style 1.6 16V Flex Mec. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003430-4",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sed. 1.6 8V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003289-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sed. Personnalité 1.0 8V 4p",
            "manufacturer": "Ford",
            "fipe_code": "003287-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sed. Supercharger 1.0 8V 4p",
            "manufacturer": "Ford",
            "fipe_code": "003288-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sed. TI./TI.Plus1.6 16V Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003400-2",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan 1.0 8V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003311-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan 1.6 16V Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003398-7",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan 1.6 16V Flex Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003397-9",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan S 1.0 8V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003383-9",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan SE 1.0 8V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003384-7",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan SE 1.6 16V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003340-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan SE 1.6 8V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003385-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan Street 1.0 8v 4p",
            "manufacturer": "Ford",
            "fipe_code": "003245-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan Street 1.6 8v 4p",
            "manufacturer": "Ford",
            "fipe_code": "003246-8",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sedan TITANIUM 1.6 16V Flex Mec",
            "manufacturer": "Ford",
            "fipe_code": "003399-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta SEL 1.6 16V Flex  Aut. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003423-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta SEL 1.6 16V Flex Mec. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003422-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta SEL Style 1.6 16V Flex Mec. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003431-2",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sport 1.0MPi 4p",
            "manufacturer": "Ford",
            "fipe_code": "003219-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sport 1.6 16V Flex Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003416-9",
            "sold": false
          },
          {
            "vehicle": "Fiesta Sport 1.6MPi 4p",
            "manufacturer": "Ford",
            "fipe_code": "003221-2",
            "sold": false
          },
          {
            "vehicle": "Fiesta Street 1.0 8v 3p",
            "manufacturer": "Ford",
            "fipe_code": "003229-8",
            "sold": false
          },
          {
            "vehicle": "Fiesta Street 1.6 8v 95cv 5p",
            "manufacturer": "Ford",
            "fipe_code": "003256-5",
            "sold": false
          },
          {
            "vehicle": "Fiesta Street/ Action 1.0 8v 5p",
            "manufacturer": "Ford",
            "fipe_code": "003244-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta Supercharger 1.0 8V 95cv 5p",
            "manufacturer": "Ford",
            "fipe_code": "003260-3",
            "sold": false
          },
          {
            "vehicle": "Fiesta TIT./TIT.Plus 1.6 16V Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003390-1",
            "sold": false
          },
          {
            "vehicle": "Fiesta TIT.Plus 1.0 12V EcoBoost Aut. 5p",
            "manufacturer": "Ford",
            "fipe_code": "003424-0",
            "sold": false
          },
          {
            "vehicle": "Fiesta TITANIUM 1.6 16V Flex Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003389-8",
            "sold": false
          },
          {
            "vehicle": "Fiesta TRAIL 1.0 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003322-7",
            "sold": false
          },
          {
            "vehicle": "Fiesta TRAIL 1.6 8V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003323-5",
            "sold": false
          },
          {
            "vehicle": "Focus 1.6 S/1.6 SE Flex 16v 5p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003404-5",
            "sold": false
          },
          {
            "vehicle": "Focus 1.6 S/SE/SE Plus Flex 8V/16V  5p",
            "manufacturer": "Ford",
            "fipe_code": "003281-6",
            "sold": false
          },
          {
            "vehicle": "Focus 1.8 16V 5p",
            "manufacturer": "Ford",
            "fipe_code": "003224-7",
            "sold": false
          },
          {
            "vehicle": "Focus 2.0 16V/ 2.0 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003228-0",
            "sold": false
          },
          {
            "vehicle": "Focus 2.0 16V/SE/SE Plus Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003283-2",
            "sold": false
          },
          {
            "vehicle": "Focus Fastback SE/SE PLUS 2.0 Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003417-7",
            "sold": false
          },
          {
            "vehicle": "Focus Fastback TIT./T.PLUS 2.0 Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003418-5",
            "sold": false
          },
          {
            "vehicle": "Focus Ghia  2.0 16V/ 2.0 16V Flex 5p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003266-2",
            "sold": false
          },
          {
            "vehicle": "Focus Ghia Sed. 2.0 16V/ 2.0 16V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003226-3",
            "sold": false
          },
          {
            "vehicle": "Focus Ghia Sed. 2.0 16V/2.0 16V Flex Aut",
            "manufacturer": "Ford",
            "fipe_code": "003262-0",
            "sold": false
          },
          {
            "vehicle": "Focus Ghia/ XR 2.0 /Ghia 2.0 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003227-1",
            "sold": false
          },
          {
            "vehicle": "Focus Sed. TI./TI.Plus 2.0 16V Flex  Aut",
            "manufacturer": "Ford",
            "fipe_code": "003348-0",
            "sold": false
          },
          {
            "vehicle": "Focus Sedan 1.6 16V Flex 4p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003425-8",
            "sold": false
          },
          {
            "vehicle": "Focus Sedan 1.6/ 1.6 Flex 8V/16v 4p Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003284-0",
            "sold": false
          },
          {
            "vehicle": "Focus Sedan 1.8 16V 115cv 4p",
            "manufacturer": "Ford",
            "fipe_code": "003265-4",
            "sold": false
          },
          {
            "vehicle": "Focus Sedan 2.0 16V/ 2.0 16V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003225-5",
            "sold": false
          },
          {
            "vehicle": "Focus Sedan 2.0 16V/ 2.0 16V Flex 4p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003282-4",
            "sold": false
          },
          {
            "vehicle": "Focus TITA/TITA Plus 2.0  Flex 5p Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003347-2",
            "sold": false
          },
          {
            "vehicle": "Focus TITANIUM 2.0 16V Flex 5p Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003346-4",
            "sold": false
          },
          {
            "vehicle": "Furglaine 3.6",
            "manufacturer": "Ford",
            "fipe_code": "003173-9",
            "sold": false
          },
          {
            "vehicle": "Furglaine 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003174-7",
            "sold": false
          },
          {
            "vehicle": "Furglaine Chateaux/Exec. 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003175-5",
            "sold": false
          },
          {
            "vehicle": "Fusion 2.5L I-VCT Flex Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003378-2",
            "sold": false
          },
          {
            "vehicle": "Fusion Hybrid 2.5 16V 193cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003345-6",
            "sold": false
          },
          {
            "vehicle": "Fusion SE 2.5 I-VCT Flex 16V Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003432-0",
            "sold": false
          },
          {
            "vehicle": "Fusion SEL 2.0 Ecobo. 16V 248cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003429-0",
            "sold": false
          },
          {
            "vehicle": "Fusion SEL 2.3 16V  162cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003304-9",
            "sold": false
          },
          {
            "vehicle": "Fusion SEL 2.5 16V 173cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003335-9",
            "sold": false
          },
          {
            "vehicle": "Fusion SEL 3.0 V6  24V 243cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003349-9",
            "sold": false
          },
          {
            "vehicle": "Fusion SEL 3.0 V6 AWD 24V 243cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003336-7",
            "sold": false
          },
          {
            "vehicle": "Fusion Titanium 2.0 GTDI EcoBo. Awd Aut ",
            "manufacturer": "Ford",
            "fipe_code": "003376-6",
            "sold": false
          },
          {
            "vehicle": "Fusion Titanium 2.0 GTDI EcoBo. Fwd Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003377-4",
            "sold": false
          },
          {
            "vehicle": "Fusion Titanium HYBRID 2.0 145cv Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003402-9",
            "sold": false
          },
          {
            "vehicle": "Ibiza 3.9 Furgão Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003176-3",
            "sold": false
          },
          {
            "vehicle": "Ibiza Chat./Exec. 3.9 Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003177-1",
            "sold": false
          },
          {
            "vehicle": "KA 1.0 8V/1.0 8V ST Flex 3p",
            "manufacturer": "Ford",
            "fipe_code": "003325-1",
            "sold": false
          },
          {
            "vehicle": "Ka 1.0 SEL TiCVT Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003409-6",
            "sold": false
          },
          {
            "vehicle": "KA 1.0 TECNO 8V Flex 3p",
            "manufacturer": "Ford",
            "fipe_code": "003327-8",
            "sold": false
          },
          {
            "vehicle": "Ka 1.0 TiCVT Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003408-8",
            "sold": false
          },
          {
            "vehicle": "KA 1.0i 3p",
            "manufacturer": "Ford",
            "fipe_code": "003018-0",
            "sold": false
          },
          {
            "vehicle": "Ka 1.5 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003410-0",
            "sold": false
          },
          {
            "vehicle": "KA 1.6 8V Flex 3p",
            "manufacturer": "Ford",
            "fipe_code": "003326-0",
            "sold": false
          },
          {
            "vehicle": "KA 1.6 TECNO 8V Flex 3p",
            "manufacturer": "Ford",
            "fipe_code": "003328-6",
            "sold": false
          },
          {
            "vehicle": "KA Action 1.6 MPI 8V 95cv",
            "manufacturer": "Ford",
            "fipe_code": "003264-6",
            "sold": false
          },
          {
            "vehicle": "KA Black 1.0 MPI 8v 65cv",
            "manufacturer": "Ford",
            "fipe_code": "003233-6",
            "sold": false
          },
          {
            "vehicle": "KA Black 1.6 MPI 8v 95cv",
            "manufacturer": "Ford",
            "fipe_code": "003234-4",
            "sold": false
          },
          {
            "vehicle": "KA CLX 1.3i 3p",
            "manufacturer": "Ford",
            "fipe_code": "003019-8",
            "sold": false
          },
          {
            "vehicle": "KA GL 1.0i Zetec Rocam",
            "manufacturer": "Ford",
            "fipe_code": "003145-3",
            "sold": false
          },
          {
            "vehicle": "KA GL Image 1.0i/ 1.0i Zetec Rocam",
            "manufacturer": "Ford",
            "fipe_code": "003161-5",
            "sold": false
          },
          {
            "vehicle": "KA Image 1.0i",
            "manufacturer": "Ford",
            "fipe_code": "003098-8",
            "sold": false
          },
          {
            "vehicle": "KA MP3 1.0 MPI 8V 65cv",
            "manufacturer": "Ford",
            "fipe_code": "003301-4",
            "sold": false
          },
          {
            "vehicle": "KA MP3 1.6 MPI 8V 95cv",
            "manufacturer": "Ford",
            "fipe_code": "003302-2",
            "sold": false
          },
          {
            "vehicle": "Ka SEL 1.5 16V Flex 5p",
            "manufacturer": "Ford",
            "fipe_code": "003411-8",
            "sold": false
          },
          {
            "vehicle": "KA Sport 1.6 8V Flex 3p",
            "manufacturer": "Ford",
            "fipe_code": "003350-2",
            "sold": false
          },
          {
            "vehicle": "KA Street 1.0i",
            "manufacturer": "Ford",
            "fipe_code": "003097-0",
            "sold": false
          },
          {
            "vehicle": "KA Tecno 1.0i 8v Zetec Rocam",
            "manufacturer": "Ford",
            "fipe_code": "003169-0",
            "sold": false
          },
          {
            "vehicle": "KA XR 1.6 MPI 8V",
            "manufacturer": "Ford",
            "fipe_code": "003232-8",
            "sold": false
          },
          {
            "vehicle": "Ka+ Sedan 1.0 SEL TiCVT Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003413-4",
            "sold": false
          },
          {
            "vehicle": "Ka+ Sedan 1.0 TiCVT Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003412-6",
            "sold": false
          },
          {
            "vehicle": "Ka+ Sedan 1.5 16V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003414-2",
            "sold": false
          },
          {
            "vehicle": "Ka+ Sedan 1.5 SEL 16V Flex 4p",
            "manufacturer": "Ford",
            "fipe_code": "003415-0",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 1.8 4p e 5p",
            "manufacturer": "Ford",
            "fipe_code": "003076-7",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 1.8i SW",
            "manufacturer": "Ford",
            "fipe_code": "003077-5",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 2.0i 4p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003194-1",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 2.0i 4p Mec",
            "manufacturer": "Ford",
            "fipe_code": "003078-3",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 2.0i SW Aut",
            "manufacturer": "Ford",
            "fipe_code": "003195-0",
            "sold": false
          },
          {
            "vehicle": "Mondeo CLX 2.0i SW Mec",
            "manufacturer": "Ford",
            "fipe_code": "003079-1",
            "sold": false
          },
          {
            "vehicle": "Mondeo Ghia 2.0 16V 143cv 4p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003258-1",
            "sold": false
          },
          {
            "vehicle": "Mondeo Ghia 2.0 16V 143cv 4p Mec",
            "manufacturer": "Ford",
            "fipe_code": "003257-3",
            "sold": false
          },
          {
            "vehicle": "Mondeo Ghia 2.5 V6 Aut",
            "manufacturer": "Ford",
            "fipe_code": "003104-6",
            "sold": false
          },
          {
            "vehicle": "Mondeo Ghia 2.5 V6 Mec",
            "manufacturer": "Ford",
            "fipe_code": "003103-8",
            "sold": false
          },
          {
            "vehicle": "Mondeo GLX 2.0 16V 4p Aut",
            "manufacturer": "Ford",
            "fipe_code": "003223-9",
            "sold": false
          },
          {
            "vehicle": "Mondeo GLX 2.0 4p e 5p",
            "manufacturer": "Ford",
            "fipe_code": "003080-5",
            "sold": false
          },
          {
            "vehicle": "Mondeo GLX 2.0i SW Mec./ Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003082-1",
            "sold": false
          },
          {
            "vehicle": "Mustang 3.8 V6",
            "manufacturer": "Ford",
            "fipe_code": "003179-8",
            "sold": false
          },
          {
            "vehicle": "Mustang 3.8 V6 Conv.",
            "manufacturer": "Ford",
            "fipe_code": "003180-1",
            "sold": false
          },
          {
            "vehicle": "Mustang Cobra 5.7 V8",
            "manufacturer": "Ford",
            "fipe_code": "003190-9",
            "sold": false
          },
          {
            "vehicle": "Mustang GT V8",
            "manufacturer": "Ford",
            "fipe_code": "003083-0",
            "sold": false
          },
          {
            "vehicle": "Mustang GT V8 Conversível",
            "manufacturer": "Ford",
            "fipe_code": "003084-8",
            "sold": false
          },
          {
            "vehicle": "Pampa 4x4 Jeep GL / L 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003058-9",
            "sold": false
          },
          {
            "vehicle": "Pampa Ghia 1.6/1.8/DUO",
            "manufacturer": "Ford",
            "fipe_code": "003137-2",
            "sold": false
          },
          {
            "vehicle": "Pampa GL 1.6/ 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003056-2",
            "sold": false
          },
          {
            "vehicle": "Pampa L 1.6",
            "manufacturer": "Ford",
            "fipe_code": "003054-6",
            "sold": false
          },
          {
            "vehicle": "Pampa L 1.8i / 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003055-4",
            "sold": false
          },
          {
            "vehicle": "Pampa S 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003057-0",
            "sold": false
          },
          {
            "vehicle": "Probe 2.0/2.2",
            "manufacturer": "Ford",
            "fipe_code": "003125-9",
            "sold": false
          },
          {
            "vehicle": "Probe GT 2.5 V6",
            "manufacturer": "Ford",
            "fipe_code": "003182-8",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003210-7",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x2 CE Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003209-3",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x2 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003205-0",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003108-9",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x4 CE TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003147-0",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5 4x4 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003107-0",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5i CD",
            "manufacturer": "Ford",
            "fipe_code": "003105-4",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5i CE",
            "manufacturer": "Ford",
            "fipe_code": "003146-1",
            "sold": false
          },
          {
            "vehicle": "Ranger 2.5i CS",
            "manufacturer": "Ford",
            "fipe_code": "003106-2",
            "sold": false
          },
          {
            "vehicle": "Ranger Limited 2.3 150cv CD",
            "manufacturer": "Ford",
            "fipe_code": "003337-5",
            "sold": false
          },
          {
            "vehicle": "Ranger Limited 2.5 16V 4x2 CD Flex",
            "manufacturer": "Ford",
            "fipe_code": "003359-6",
            "sold": false
          },
          {
            "vehicle": "Ranger Limited 3.0 PSE 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003296-4",
            "sold": false
          },
          {
            "vehicle": "Ranger Limited 3.2 20V 4x4 CD Aut. Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003364-2",
            "sold": false
          },
          {
            "vehicle": "Ranger Splash CE",
            "manufacturer": "Ford",
            "fipe_code": "003220-4",
            "sold": false
          },
          {
            "vehicle": "Ranger Splash CS",
            "manufacturer": "Ford",
            "fipe_code": "003089-9",
            "sold": false
          },
          {
            "vehicle": "Ranger SPORT 2.5 Flex 16V 4x2 CS",
            "manufacturer": "Ford",
            "fipe_code": "003406-1",
            "sold": false
          },
          {
            "vehicle": "Ranger STX 4.0 CS/ CE",
            "manufacturer": "Ford",
            "fipe_code": "003090-2",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPICAB 2.5 16V 4X2 Flex",
            "manufacturer": "Ford",
            "fipe_code": "003396-0",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPICAB 3.2 20V 4X4 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003395-2",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN 2.5 16V 4X2 Flex",
            "manufacturer": "Ford",
            "fipe_code": "003394-4",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN 3.2 20V 4X4 TB Dies.Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003393-6",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN 3.2 20V 4X4 TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003392-8",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN XLT 2.3 16V 150cv",
            "manufacturer": "Ford",
            "fipe_code": "003341-3",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN XLT 3.0 PSE 4x2 TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003342-1",
            "sold": false
          },
          {
            "vehicle": "Ranger TROPIVAN XLT 3.0 PSE 4x4 TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003343-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.2 4x4 Cd Diesel Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003426-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.3 16v 137cv 4x2 CD Repower.",
            "manufacturer": "Ford",
            "fipe_code": "003237-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.3 16v 137cv 4x2 CE Repower.",
            "manufacturer": "Ford",
            "fipe_code": "003236-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.3 16v 137cv 4x2 CS Repower.",
            "manufacturer": "Ford",
            "fipe_code": "003235-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.3 CS",
            "manufacturer": "Ford",
            "fipe_code": "003085-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003254-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x2 CE TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003249-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x2 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003247-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003255-7",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x4 CE TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003250-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 2.8 8v 135cv 4x4 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003248-4",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 3.0 PSE 163cv 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003298-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 3.0 PSE 163cv 4x2 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003299-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 3.0 PSE 163cv 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003300-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 3.0 PSE 163cv 4x4 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003297-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 4.0 12v V6 210cv 4x2 CS Repow.",
            "manufacturer": "Ford",
            "fipe_code": "003238-7",
            "sold": false
          },
          {
            "vehicle": "Ranger XL 4.0 CS",
            "manufacturer": "Ford",
            "fipe_code": "003086-4",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.2 4x4 CD Diesel Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003421-5",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.2 4x4 CD Diesel Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003405-3",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.3 16V 145cv/150cv 4x2 CD",
            "manufacturer": "Ford",
            "fipe_code": "003276-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.3 16V 145cv/150cv 4x2 CS",
            "manufacturer": "Ford",
            "fipe_code": "003275-1",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.5 16V 4x2 CD Flex",
            "manufacturer": "Ford",
            "fipe_code": "003357-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.5 16V 4x2 CS",
            "manufacturer": "Ford",
            "fipe_code": "003356-1",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.8 8V 135cv 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003278-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.8 8V 135cv 4x2 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003277-8",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.8 8V 135cv 4x4 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003273-5",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 2.8/2.8 Storm  4x4 CD TB Dies",
            "manufacturer": "Ford",
            "fipe_code": "003274-3",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.0 PSE 163cv 4x2 CD TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003291-3",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.0 PSE 163cv 4x2 CS TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003292-1",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.0 PSE 163cv 4x4 CD TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003293-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.0 PSE Storm 4x4 CD TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003334-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.2 20V 4x4 CD Diesel Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003401-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.2 20V 4x4 CD Diesel Mec.",
            "manufacturer": "Ford",
            "fipe_code": "003361-8",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS 3.2 20V 4x4 CS Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003360-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLS SPORT 2.3 16V 150cv CS",
            "manufacturer": "Ford",
            "fipe_code": "003324-3",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.3 16V 150cv CD Repower.",
            "manufacturer": "Ford",
            "fipe_code": "003321-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.3 CS",
            "manufacturer": "Ford",
            "fipe_code": "003087-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 16V 4x2 CD Flex",
            "manufacturer": "Ford",
            "fipe_code": "003358-8",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x2 CD Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003204-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x2 CE Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003202-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x2 CS Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003203-4",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x4 CD Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003110-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x4 CE TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003148-8",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.5 4x4 CS TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003109-7",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.8 8v 135cv 4x2 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003252-2",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.8 8v 135cv 4x4 CD TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003253-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 2.8 8v 135cv 4x4 CE TB Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003251-4",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 3.0 PSE 163cv 4x2 CD TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003294-8",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 3.0 PSE 163cv 4x4 CD TB Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003295-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 3.2 20V 4x4 CD Diesel ",
            "manufacturer": "Ford",
            "fipe_code": "003362-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 3.2 20V 4x4 CD Diesel Aut.",
            "manufacturer": "Ford",
            "fipe_code": "003363-4",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 12v V6 210cv 4x4 CD Repow",
            "manufacturer": "Ford",
            "fipe_code": "003240-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 12v V6 210cv 4x4 CE Repow",
            "manufacturer": "Ford",
            "fipe_code": "003239-5",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 4x2 CE",
            "manufacturer": "Ford",
            "fipe_code": "003149-6",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 4x2 CS",
            "manufacturer": "Ford",
            "fipe_code": "003088-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 4x4 CD",
            "manufacturer": "Ford",
            "fipe_code": "003112-7",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 4x4 CE",
            "manufacturer": "Ford",
            "fipe_code": "003150-0",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT 4.0 4x4 CS",
            "manufacturer": "Ford",
            "fipe_code": "003111-9",
            "sold": false
          },
          {
            "vehicle": "Ranger XLT Limit./L.Cent. 2.8 CD TB Dies",
            "manufacturer": "Ford",
            "fipe_code": "003263-8",
            "sold": false
          },
          {
            "vehicle": "Royale Ghia 2.0i 4p / 2.0i / 2.0",
            "manufacturer": "Ford",
            "fipe_code": "003061-9",
            "sold": false
          },
          {
            "vehicle": "Royale GL 1.8i 4p / 1.8i / 1.8",
            "manufacturer": "Ford",
            "fipe_code": "003059-7",
            "sold": false
          },
          {
            "vehicle": "Royale GL 2.0i 2e4p / 2.0i / 2.0",
            "manufacturer": "Ford",
            "fipe_code": "003060-0",
            "sold": false
          },
          {
            "vehicle": "Taurus GL 3.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003091-0",
            "sold": false
          },
          {
            "vehicle": "Taurus GL SW 3.0 V6 24V",
            "manufacturer": "Ford",
            "fipe_code": "003127-5",
            "sold": false
          },
          {
            "vehicle": "Taurus L/LX 3.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003092-9",
            "sold": false
          },
          {
            "vehicle": "Taurus LX SW 3.0 V6 24V",
            "manufacturer": "Ford",
            "fipe_code": "003191-7",
            "sold": false
          },
          {
            "vehicle": "Taurus SHO 3.0 V6",
            "manufacturer": "Ford",
            "fipe_code": "003183-6",
            "sold": false
          },
          {
            "vehicle": "Thunderbird SC 3.8 V6",
            "manufacturer": "Ford",
            "fipe_code": "003184-4",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Chassi 2.2 TDCI Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003372-3",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Chassi 2.4 TDCI Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003339-1",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Furgão 2.2 TDCI Curto Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003379-0",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Furgão 2.2 TDCI Longa Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003375-8",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Furgão 2.2 TDCI Longo Jumbo Dies",
            "manufacturer": "Ford",
            "fipe_code": "003354-5",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Furgão 3330 2.4 TDCI Curto Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003331-6",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Furgão 3550 2.4 TDCI Longo Dies.",
            "manufacturer": "Ford",
            "fipe_code": "003332-4",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Van 3550 2.2 TDCI 14/16lug. Dies",
            "manufacturer": "Ford",
            "fipe_code": "003371-5",
            "sold": false
          },
          {
            "vehicle": "TRANSIT Van 3550 2.4 TDCI 14lug. Diesel",
            "manufacturer": "Ford",
            "fipe_code": "003333-2",
            "sold": false
          },
          {
            "vehicle": "Verona Ghia 2.0i 4p",
            "manufacturer": "Ford",
            "fipe_code": "003065-1",
            "sold": false
          },
          {
            "vehicle": "Verona GL 1.8i / LX 1.8i 4p",
            "manufacturer": "Ford",
            "fipe_code": "003062-7",
            "sold": false
          },
          {
            "vehicle": "Verona GLX 1.8 (Modelo antigo)",
            "manufacturer": "Ford",
            "fipe_code": "003069-4",
            "sold": false
          },
          {
            "vehicle": "Verona GLX 1.8i / 1.8 4p",
            "manufacturer": "Ford",
            "fipe_code": "003063-5",
            "sold": false
          },
          {
            "vehicle": "Verona GLX 2.0i / 2.0 4p",
            "manufacturer": "Ford",
            "fipe_code": "003064-3",
            "sold": false
          },
          {
            "vehicle": "Verona LX 1.6 (Modelo antigo)",
            "manufacturer": "Ford",
            "fipe_code": "003067-8",
            "sold": false
          },
          {
            "vehicle": "Verona LX 1.8 (Modelo antigo)",
            "manufacturer": "Ford",
            "fipe_code": "003068-6",
            "sold": false
          },
          {
            "vehicle": "Verona S 2.0i 4p",
            "manufacturer": "Ford",
            "fipe_code": "003066-0",
            "sold": false
          },
          {
            "vehicle": "Versailles Ghia 2.0i / 2.0 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003072-4",
            "sold": false
          },
          {
            "vehicle": "Versailles GL 1.8i / 1.8 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003070-8",
            "sold": false
          },
          {
            "vehicle": "Versailles GL 2.0i / 2.0 2p e 4p",
            "manufacturer": "Ford",
            "fipe_code": "003071-6",
            "sold": false
          },
          {
            "vehicle": "Windstar GL",
            "manufacturer": "Ford",
            "fipe_code": "003093-7",
            "sold": false
          },
          {
            "vehicle": "Windstar LX",
            "manufacturer": "Ford",
            "fipe_code": "003094-5",
            "sold": false
          },
          {
            "vehicle": "AUMARK 3.5 - 11DT 2.8 4x2 TB Diesel",
            "manufacturer": "FOTON",
            "fipe_code": "086003-4",
            "sold": false
          },
          {
            "vehicle": "AUMARK 3.5 - 11ST 2.8 4x2 TB Diesel",
            "manufacturer": "FOTON",
            "fipe_code": "086002-6",
            "sold": false
          },
          {
            "vehicle": "AUMARK 3.5 - 14ST 2.8 4x2 TB Diesel",
            "manufacturer": "FOTON",
            "fipe_code": "086004-2",
            "sold": false
          },
          {
            "vehicle": "AUMARK 3.50AK 2.8 4x2 TB Diesel",
            "manufacturer": "FOTON",
            "fipe_code": "086001-8",
            "sold": false
          },
          {
            "vehicle": "Buggy 2000W 1.6 8V",
            "manufacturer": "Fyber",
            "fipe_code": "079002-8",
            "sold": false
          },
          {
            "vehicle": "Buggy 2000W 1.8 8V/ 1.8 8V Flex",
            "manufacturer": "Fyber",
            "fipe_code": "079001-0",
            "sold": false
          },
          {
            "vehicle": "EC7 1.8 16V 130cv 4p Mec.",
            "manufacturer": "GEELY",
            "fipe_code": "088001-9",
            "sold": false
          },
          {
            "vehicle": "GC2 1.0 12V 68cv 5p",
            "manufacturer": "GEELY",
            "fipe_code": "088002-7",
            "sold": false
          },
          {
            "vehicle": "A-10 2.5/4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004113-0",
            "sold": false
          },
          {
            "vehicle": "A-10 De Luxe 2.5/4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004114-9",
            "sold": false
          },
          {
            "vehicle": "A-20 Custom Std. CD/ De Luxe CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004126-2",
            "sold": false
          },
          {
            "vehicle": "A-20 Custom/ C-20 Luxe 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004024-0",
            "sold": false
          },
          {
            "vehicle": "A-20 Custom/ C-20 S 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004023-1",
            "sold": false
          },
          {
            "vehicle": "AGILE LT 1.4 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004362-1",
            "sold": false
          },
          {
            "vehicle": "AGILE LTZ 1.4 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004363-0",
            "sold": false
          },
          {
            "vehicle": "AGILE LTZ EASYTRONIC 1.4 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004427-0",
            "sold": false
          },
          {
            "vehicle": "AGILE LTZ EFFECT 1.4 8V FlexPower 5p Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004446-6",
            "sold": false
          },
          {
            "vehicle": "AGILE LTZ EFFECT EASYTR.1.4 8V FlexP. 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004447-4",
            "sold": false
          },
          {
            "vehicle": "AGILE LTZ WI-FI 1.4 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004382-6",
            "sold": false
          },
          {
            "vehicle": "Astra 2.0 8V/ CD 2.0 8V Hatchback 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004232-3",
            "sold": false
          },
          {
            "vehicle": "Astra 2.0 8V/ CD 2.0 8V Hatchback 5p Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004231-5",
            "sold": false
          },
          {
            "vehicle": "Astra 2.0/ CD 2.0 8V 3p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004223-4",
            "sold": false
          },
          {
            "vehicle": "Astra 2.0/ CD/ GLS 2.0 MPFI 16V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004169-6",
            "sold": false
          },
          {
            "vehicle": "Astra 2.0/ CD/ Sunny/ GLS 2.0 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004082-7",
            "sold": false
          },
          {
            "vehicle": "Astra 500 Sedan 2.0 MPFI 16V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004194-7",
            "sold": false
          },
          {
            "vehicle": "Astra Advant. 2.0 MPFI 8V FlexP. 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004330-3",
            "sold": false
          },
          {
            "vehicle": "Astra Advantage 2.0 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004328-1",
            "sold": false
          },
          {
            "vehicle": "Astra Advantage 2.0 MPFI FlexPower 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004312-5",
            "sold": false
          },
          {
            "vehicle": "Astra Comfort 2.0 MPFI FlexPower 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004252-8",
            "sold": false
          },
          {
            "vehicle": "Astra Comfort 2.0 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004254-4",
            "sold": false
          },
          {
            "vehicle": "Astra Eleg. 2.0 MPFI FlexPower 8V 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004256-0",
            "sold": false
          },
          {
            "vehicle": "Astra Elegance 2.0 MPFI FlexPower 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004253-6",
            "sold": false
          },
          {
            "vehicle": "Astra Elegance 2.0 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004255-2",
            "sold": false
          },
          {
            "vehicle": "Astra Elite 2.0 MPFI Flex Pow. 8V 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004310-9",
            "sold": false
          },
          {
            "vehicle": "Astra Elite 2.0 MPFI FlexPower 8V 5p Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004257-9",
            "sold": false
          },
          {
            "vehicle": "Astra GL 1.8 MPFI 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004081-9",
            "sold": false
          },
          {
            "vehicle": "Astra GL Milenium 1.8 MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004120-3",
            "sold": false
          },
          {
            "vehicle": "Astra GLS 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004072-0",
            "sold": false
          },
          {
            "vehicle": "Astra GLS 2.0 MPFI SW",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004073-8",
            "sold": false
          },
          {
            "vehicle": "Astra GSi 2.0 16v 136cv Hatchback 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004230-7",
            "sold": false
          },
          {
            "vehicle": "Astra S.Sport 2.0 F.Pow. 5p/Sport 2.0 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004195-5",
            "sold": false
          },
          {
            "vehicle": "Astra Sed. Advant. 2.0 8V MPFI FlexP. 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004329-0",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Advant. 2.0 8V MPFI FlexP. Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004331-1",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Comf. 2.0 MPFI FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004258-7",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Comf.2.0 MPFI MultiPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004313-3",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Eleg. 2.0 MPFI FlexP.8V 4p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004260-9",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Eleg.2.0 MPFI FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004259-5",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Eleg.2.0 MPFI MultiPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004314-1",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Elite 2.0 MPFI FlexP.8V 4p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004262-5",
            "sold": false
          },
          {
            "vehicle": "Astra Sed.Elite 2.0 MPFI FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004261-7",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan 1.8 MPFI 8V 4p (taxi)",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004216-1",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan 2.0/ CD 2.0 MPFI 8V 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004215-3",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan 2.0/CD/ Expres.GLS 2.0 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004168-8",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan 2.0/CD/ GLS/ Adv. 2.0 16V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004083-5",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan Comfort 1.8 MPFI 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004263-3",
            "sold": false
          },
          {
            "vehicle": "Astra Sedan/ Astra GL Sedan 1.8 MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004084-3",
            "sold": false
          },
          {
            "vehicle": "Blazer Jimmy 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004158-0",
            "sold": false
          },
          {
            "vehicle": "Blazer S-10 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004159-9",
            "sold": false
          },
          {
            "vehicle": "Blazer SS-10 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004160-2",
            "sold": false
          },
          {
            "vehicle": "Bonanza S / Luxe 4.0 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004026-6",
            "sold": false
          },
          {
            "vehicle": "Bonanza S / Luxe 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004025-8",
            "sold": false
          },
          {
            "vehicle": "Brasinca Blazer CD 4.0 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004183-1",
            "sold": false
          },
          {
            "vehicle": "Brasinca Blazer CD 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004117-3",
            "sold": false
          },
          {
            "vehicle": "C-10 2.5/4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004115-7",
            "sold": false
          },
          {
            "vehicle": "C-10 CD 2.5/ 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004127-0",
            "sold": false
          },
          {
            "vehicle": "C-10 De Luxe 2.5/4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004116-5",
            "sold": false
          },
          {
            "vehicle": "C-10 De Luxe CD 2.5/ 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004128-9",
            "sold": false
          },
          {
            "vehicle": "C-20 Custom De Luxe 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004129-7",
            "sold": false
          },
          {
            "vehicle": "C-20 Custom De Luxe CD 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004131-9",
            "sold": false
          },
          {
            "vehicle": "C-20 Custom Std. 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004130-0",
            "sold": false
          },
          {
            "vehicle": "C-20 Custom Std. CD 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004132-7",
            "sold": false
          },
          {
            "vehicle": "Calibra 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004074-6",
            "sold": false
          },
          {
            "vehicle": "CAMARO FIFTY 6.2 V8 16V 461cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004475-0",
            "sold": false
          },
          {
            "vehicle": "Camaro RS 5.0 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004155-6",
            "sold": false
          },
          {
            "vehicle": "Camaro Sport 5.0 Conv.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004156-4",
            "sold": false
          },
          {
            "vehicle": "Camaro SS 6.2 V8 16V 406cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004371-0",
            "sold": false
          },
          {
            "vehicle": "Camaro SS Conversível 6.2 V8 16V 406cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004453-9",
            "sold": false
          },
          {
            "vehicle": "Camaro Z-28 Targa/Conv. 5.7",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004111-4",
            "sold": false
          },
          {
            "vehicle": "Caprice 4.3 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004133-5",
            "sold": false
          },
          {
            "vehicle": "Caprice SW 4.3 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004134-3",
            "sold": false
          },
          {
            "vehicle": "Caprice Victoria",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004135-1",
            "sold": false
          },
          {
            "vehicle": "CAPTIVA SPORT AWD 3.0 V6 24V 268cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004377-0",
            "sold": false
          },
          {
            "vehicle": "CAPTIVA SPORT AWD 3.6 V6 24V 261cv 4x4",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004352-4",
            "sold": false
          },
          {
            "vehicle": "CAPTIVA SPORT FWD 2.4 16V 171/185cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004357-5",
            "sold": false
          },
          {
            "vehicle": "CAPTIVA SPORT FWD 3.0 V6 24V 268cv 4x2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004376-1",
            "sold": false
          },
          {
            "vehicle": "CAPTIVA SPORT FWD 3.6 V6 24V 261cv 4x2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004351-6",
            "sold": false
          },
          {
            "vehicle": "Caravan Comodoro 4.1 / 2.5",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004027-4",
            "sold": false
          },
          {
            "vehicle": "Caravan Diplomata 4.1 / 2.5",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004028-2",
            "sold": false
          },
          {
            "vehicle": "Caravan L/SL/S/SS 2.5/4.1/4.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004137-8",
            "sold": false
          },
          {
            "vehicle": "Cavalier 3.1 Conv.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004138-6",
            "sold": false
          },
          {
            "vehicle": "Cavalier L 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004139-4",
            "sold": false
          },
          {
            "vehicle": "Celta 1.0/ Super 1.0 MPFI VHC 8v 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004227-7",
            "sold": false
          },
          {
            "vehicle": "Celta 1.0/Super/N.Piq.1.0 MPFi VHC 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004202-1",
            "sold": false
          },
          {
            "vehicle": "Celta 1.4/ Super/ Energy 1.4 8V 85cv 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004235-8",
            "sold": false
          },
          {
            "vehicle": "Celta 1.4/ Super/ Energy 1.4 8V 85cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004236-6",
            "sold": false
          },
          {
            "vehicle": "Celta ADVANTAGE 1.0 8v FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004445-8",
            "sold": false
          },
          {
            "vehicle": "Celta Life 1.0 MPFI VHC 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004264-1",
            "sold": false
          },
          {
            "vehicle": "Celta Life 1.0 MPFI VHC 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004266-8",
            "sold": false
          },
          {
            "vehicle": "Celta Life 1.4 MPFI 8V 85cv 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004268-4",
            "sold": false
          },
          {
            "vehicle": "Celta Life 1.4 MPFI 8V 85cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004270-6",
            "sold": false
          },
          {
            "vehicle": "Celta Life/ LS 1.0 MPFI 8V FlexPower 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004318-4",
            "sold": false
          },
          {
            "vehicle": "Celta Life/ LS 1.0 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004319-2",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit 1.0 MPFI 8V FlexPower 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004320-6",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit 1.0 MPFI VHC 8V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004265-0",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit 1.0 MPFI VHC 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004267-6",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit 1.4 MPFI 8V 85cv 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004269-2",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit 1.4 MPFI 8V 85cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004271-4",
            "sold": false
          },
          {
            "vehicle": "Celta Spirit/ LT 1.0 MPFI 8V FlexP. 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004321-4",
            "sold": false
          },
          {
            "vehicle": "Celta Super 1.0 MPFI 8V FlexPower 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004316-8",
            "sold": false
          },
          {
            "vehicle": "Celta Super 1.0 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004317-6",
            "sold": false
          },
          {
            "vehicle": "Chevette Junior 1.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004029-0",
            "sold": false
          },
          {
            "vehicle": "Chevette L / SL / SL/e / DL / SE 1.6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004030-4",
            "sold": false
          },
          {
            "vehicle": "Chevy 500 DL / SL / SE/ Furgão 1.6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004031-2",
            "sold": false
          },
          {
            "vehicle": "Cheynne 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004161-0",
            "sold": false
          },
          {
            "vehicle": "Classic ADVANTAGE 1.0 VHC FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004450-4",
            "sold": false
          },
          {
            "vehicle": "Classic/ Classic LS 1.0 VHC FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004360-5",
            "sold": false
          },
          {
            "vehicle": "COBALT ADVANTAGE 1.4 MPFI 8V F.Power 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004442-3",
            "sold": false
          },
          {
            "vehicle": "COBALT ADVANTAGE 1.8 8V Eco.Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004443-1",
            "sold": false
          },
          {
            "vehicle": "COBALT ELITE 1.8 8V Econo.Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004468-7",
            "sold": false
          },
          {
            "vehicle": "COBALT Graphite 1.8 8V Econo.Flex 4p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004463-6",
            "sold": false
          },
          {
            "vehicle": "COBALT Graphite 1.8 8V Econo.Flex 4p Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004462-8",
            "sold": false
          },
          {
            "vehicle": "COBALT LS 1.4 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004383-4",
            "sold": false
          },
          {
            "vehicle": "COBALT LT 1.4 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004384-2",
            "sold": false
          },
          {
            "vehicle": "COBALT LT 1.8 8V Econo.Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004419-9",
            "sold": false
          },
          {
            "vehicle": "COBALT LT 1.8 8V Econo.Flex 4p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004418-0",
            "sold": false
          },
          {
            "vehicle": "COBALT LTZ 1.4 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004385-0",
            "sold": false
          },
          {
            "vehicle": "COBALT LTZ 1.8 8V Econo.Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004421-0",
            "sold": false
          },
          {
            "vehicle": "COBALT LTZ 1.8 8V Econo.Flex 4p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004420-2",
            "sold": false
          },
          {
            "vehicle": "Corsa Furgão 1.6 MPFi Powertech 92cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004199-8",
            "sold": false
          },
          {
            "vehicle": "Corsa GL 1.6 MPFI / 1.4 EFI 2p e 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004004-5",
            "sold": false
          },
          {
            "vehicle": "Corsa GLS 1.6 MPFI 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004085-1",
            "sold": false
          },
          {
            "vehicle": "Corsa GSi 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004033-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Joy 1.0/ 1.0 FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004280-3",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Joy 1.8 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004286-2",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Maxx 1.0/ 1.0 FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004281-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Maxx 1.4 8V ECONOFLEX 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004339-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Maxx 1.8 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004287-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Prem. 1.0/1.0 FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004282-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. Premium 1.4 8V ECONOFLEX 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004340-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat. SS 1.8 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004326-5",
            "sold": false
          },
          {
            "vehicle": "Corsa Hat.Premium 1.8 MPFI 8V F.Power 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004288-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Hatchback 1.0 MPFI 8V 71cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004218-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Hatchback 1.8 MPFI 8V 102cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004220-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Hatchback 1.8 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004233-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Pick-Up GL/ Champ 1.6 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004003-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Pick-Up Sport 1.6 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004213-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Pick-Up STD/ Rodeio 1.6 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004086-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Clas.Spirit 1.6MPFI VHC 8V Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004278-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Clas.Super 1.6MPFI VHC 8V Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004279-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Class.Life 1.0/1.0 FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004272-2",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Class.Spirit 1.0/1.0 FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004273-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Class.Super 1.0/1.0 FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004274-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Classic Life 1.6 MPFI VHC 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004275-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Classic Spirit 1.6 MPFI VHC 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004276-5",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed Classic Super 1.6 MPFI VHC 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004277-3",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Joy 1.0/ 1.0 FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004283-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Joy 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004289-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Maxx 1.0/ 1.0 FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004284-6",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Maxx 1.4 8V ECONOFLEX 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004341-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Maxx 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004290-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Premium 1.4 8V ECONOFLEX 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004342-7",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed. Premium 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004291-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed.Prem. 1.0/ 1.0 FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004285-4",
            "sold": false
          },
          {
            "vehicle": "Corsa Sed.Wind 1.0/Millenium/Classic VHC",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004121-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan 1.0 MPFI 8V 71cv 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004219-6",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan 1.8 MPFI 8V  102cv 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004221-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan 1.8 MPFI FlexPower 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004234-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan GL 1.6  MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004005-3",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan GLS 1.6 16V MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004006-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan GLS 1.6 MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004032-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan Super 1.0 MPFI 16V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004171-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan Super 1.0 MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004080-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan Super Milenium 1.0 MPFI 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004122-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Sedan Super/ Classic 1.6 MPFI 8v 4",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004208-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Super 1.0 MPFI / 2p e 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004002-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Super 1.0 MPFI 16V 3p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004087-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Super 1.0 MPFI 16V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004172-6",
            "sold": false
          },
          {
            "vehicle": "Corsa Super 1.6 MPFI 8v 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004207-2",
            "sold": false
          },
          {
            "vehicle": "Corsa Wagon GL 1.6 MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004007-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Wagon GLS 1.6 16V MPFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004008-8",
            "sold": false
          },
          {
            "vehicle": "Corsa Wagon GLS 1.6 8V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004186-6",
            "sold": false
          },
          {
            "vehicle": "Corsa Wagon Super 1.0 MPFI 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004112-2",
            "sold": false
          },
          {
            "vehicle": "Corsa Wagon Super 1.6 MPFI 8v",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004209-9",
            "sold": false
          },
          {
            "vehicle": "Corsa Wind 1.0 MPF/MilleniumI/ EFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004173-4",
            "sold": false
          },
          {
            "vehicle": "Corsa Wind 1.0 MPFI / EFI  2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004001-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Wind 1.6 MPFi 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004197-1",
            "sold": false
          },
          {
            "vehicle": "Corsa Wind 1.6 MPFi 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004198-0",
            "sold": false
          },
          {
            "vehicle": "Corsa Wind Piquet/ Champ 1.0 MPFI 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004203-0",
            "sold": false
          },
          {
            "vehicle": "Corvette 5.7/ 6.0, 6.2 Conv./Stingray",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004140-8",
            "sold": false
          },
          {
            "vehicle": "Corvette 5.7/ 6.0, 6.2 Targa/Stingray",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004141-6",
            "sold": false
          },
          {
            "vehicle": "CRUZE HB Sport LT 1.8 16V FlexP. 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004399-0",
            "sold": false
          },
          {
            "vehicle": "CRUZE HB Sport LT 1.8 16V FlexP. 5p Mec ",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004398-2",
            "sold": false
          },
          {
            "vehicle": "CRUZE HB Sport LTZ 1.8 16V FlexP. 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004401-6",
            "sold": false
          },
          {
            "vehicle": "CRUZE HB Sport LTZ 1.8 16V FlexP. 5p Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004400-8",
            "sold": false
          },
          {
            "vehicle": "CRUZE LT 1.4 16V Turbo Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004470-9",
            "sold": false
          },
          {
            "vehicle": "CRUZE LT 1.8 16V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004380-0",
            "sold": false
          },
          {
            "vehicle": "CRUZE LT 1.8 16V FlexPower 4p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004379-6",
            "sold": false
          },
          {
            "vehicle": "CRUZE LTZ 1.4 16V Turbo Flex 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004469-5",
            "sold": false
          },
          {
            "vehicle": "CRUZE LTZ 1.8 16V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004381-8",
            "sold": false
          },
          {
            "vehicle": "CRUZE Sport LT 1.4 16V TB Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004478-4",
            "sold": false
          },
          {
            "vehicle": "CRUZE Sport LTZ 1.4 16V TB Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004479-2",
            "sold": false
          },
          {
            "vehicle": "D-10 CD Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004184-0",
            "sold": false
          },
          {
            "vehicle": "D-10 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004118-1",
            "sold": false
          },
          {
            "vehicle": "D-20 4.0 Champ/Conquest/El Caminho Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004142-4",
            "sold": false
          },
          {
            "vehicle": "D-20 CD Lx S4T/Tro.Plus/Lx 3.9/4.0 TDies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004037-1",
            "sold": false
          },
          {
            "vehicle": "D-20 S / El Caminho 3.9/4.0 CD T.Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004036-3",
            "sold": false
          },
          {
            "vehicle": "D-20 S / Luxe 3.9/4.0 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004034-7",
            "sold": false
          },
          {
            "vehicle": "D-20 S / Luxe 3.9/4.0 T.Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004035-5",
            "sold": false
          },
          {
            "vehicle": "D-20 S 3.9/4.0 Turbo Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004187-4",
            "sold": false
          },
          {
            "vehicle": "Ipanema GL 1.8 MPFI / EFI /SL 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004038-0",
            "sold": false
          },
          {
            "vehicle": "Ipanema GL/ Flair 2.0 MPFI / EFI 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004039-8",
            "sold": false
          },
          {
            "vehicle": "Ipanema GLS/SLE 2.0EFI /SL/e1.8/Sol/Wave",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004040-1",
            "sold": false
          },
          {
            "vehicle": "Kadett GL 2.0 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004042-8",
            "sold": false
          },
          {
            "vehicle": "Kadett GL/SL/Lite/Turim 1.8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004041-0",
            "sold": false
          },
          {
            "vehicle": "Kadett GLS 1.8 EFI / SL/e 1.8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004043-6",
            "sold": false
          },
          {
            "vehicle": "Kadett GLS 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004009-6",
            "sold": false
          },
          {
            "vehicle": "Kadett GSi / GS 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004044-4",
            "sold": false
          },
          {
            "vehicle": "Kadett GSi 2.0 Conversível",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004045-2",
            "sold": false
          },
          {
            "vehicle": "Kadett Sport 2.0 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004046-0",
            "sold": false
          },
          {
            "vehicle": "Lumina",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004075-4",
            "sold": false
          },
          {
            "vehicle": "MALIBU LTZ 2.4 16V 171cv 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004366-4",
            "sold": false
          },
          {
            "vehicle": "Marajo SL/SLe/Se",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004119-0",
            "sold": false
          },
          {
            "vehicle": "Meriva 1.8/ CD 1.8 MPFI 16V 122cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004229-3",
            "sold": false
          },
          {
            "vehicle": "Meriva 1.8/ CD 1.8 MPFI 8V 102cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004228-5",
            "sold": false
          },
          {
            "vehicle": "Meriva 1.8/ CD 1.8 MPFI FlexPower 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004242-0",
            "sold": false
          },
          {
            "vehicle": "Meriva COLLECTION 1.4 8V ECONOFLEX 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004408-3",
            "sold": false
          },
          {
            "vehicle": "Meriva Expres.EASYTRONIC 1.8 FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004355-9",
            "sold": false
          },
          {
            "vehicle": "Meriva Joy 1.4 MPFI 8V ECONOFLEX 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004353-2",
            "sold": false
          },
          {
            "vehicle": "Meriva Joy 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004292-7",
            "sold": false
          },
          {
            "vehicle": "Meriva Maxx 1.4 MPFI 8V ECONOFLEX 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004354-0",
            "sold": false
          },
          {
            "vehicle": "Meriva Maxx 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004293-5",
            "sold": false
          },
          {
            "vehicle": "Meriva Prem.EASYTRONIC 1.8 FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004347-8",
            "sold": false
          },
          {
            "vehicle": "Meriva Premium 1.8 MPFI 8V FlexPower",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004294-3",
            "sold": false
          },
          {
            "vehicle": "Meriva SS 1.8 MPFI 8V FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004327-3",
            "sold": false
          },
          {
            "vehicle": "Meriva SS EASYTRONIC 1.8 FlexPower 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004356-7",
            "sold": false
          },
          {
            "vehicle": "MONTANA  Sport 1.8 MPFI FlexPower 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004240-4",
            "sold": false
          },
          {
            "vehicle": "MONTANA 1.4 8V Conquest ECONOFLEX  2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004338-9",
            "sold": false
          },
          {
            "vehicle": "MONTANA 1.8/ 1.8 Conquest FlexPower 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004239-0",
            "sold": false
          },
          {
            "vehicle": "MONTANA ARENA 1.4 ECONOFLEX  8V 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004364-8",
            "sold": false
          },
          {
            "vehicle": "MONTANA COMBO 1.4 8V ECONOFLEX",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004361-3",
            "sold": false
          },
          {
            "vehicle": "MONTANA LS 1.4 ECONOFLEX 8V 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004370-2",
            "sold": false
          },
          {
            "vehicle": "MONTANA LS COMBO 1.4 8V ECONOFLEX 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004422-9",
            "sold": false
          },
          {
            "vehicle": "MONTANA Off Road 1.8 MPFI FlexPower 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004241-2",
            "sold": false
          },
          {
            "vehicle": "MONTANA Sport 1.4 ECONOFLEX 8V 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004365-6",
            "sold": false
          },
          {
            "vehicle": "Monza 1.6i/ 1.8i  (restante)",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004143-2",
            "sold": false
          },
          {
            "vehicle": "Monza Class 1.8/ 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004191-2",
            "sold": false
          },
          {
            "vehicle": "Monza Classic SE 2.0 /MPFI e EFI 2p e 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004051-7",
            "sold": false
          },
          {
            "vehicle": "Monza Classic/ SL/e/SR 1.8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004048-7",
            "sold": false
          },
          {
            "vehicle": "Monza GL 1.8 EFI/ SL/ L/ 650/Barc. 2e4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004047-9",
            "sold": false
          },
          {
            "vehicle": "Monza GL 2.0 EFI/SL/L/650/Club/Barc.2e4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004049-5",
            "sold": false
          },
          {
            "vehicle": "Monza GLS/ Hi-Tech 2.0 EFI 2p e 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004050-9",
            "sold": false
          },
          {
            "vehicle": "Monza SL/e SR 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004200-5",
            "sold": false
          },
          {
            "vehicle": "Omega CD 3.8 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004090-8",
            "sold": false
          },
          {
            "vehicle": "Omega CD 4.1 / 3.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004011-8",
            "sold": false
          },
          {
            "vehicle": "Omega CD/ FITTIPALDI 3.6 V6 24V 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004315-0",
            "sold": false
          },
          {
            "vehicle": "Omega Diamond",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004103-3",
            "sold": false
          },
          {
            "vehicle": "Omega GL 2.0/ 2.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004052-5",
            "sold": false
          },
          {
            "vehicle": "Omega GLS 2.2 / 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004010-0",
            "sold": false
          },
          {
            "vehicle": "Omega GLS 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004053-3",
            "sold": false
          },
          {
            "vehicle": "ONIX  Lollapalooza 1.0 F.Power 5p Mec. ",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004451-2",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH ACTIV 1.4 8V Flex 5P Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004471-7",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH ACTIV 1.4 8V Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004472-5",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH EFFECT 1.4 8V F.Power 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004460-1",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH Joy 1.0 8V Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004473-3",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LS 1.0 8V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004423-7",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LT 1.0 8V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004424-5",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LT 1.4 8V FlexPower 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004438-5",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LT 1.4 8V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004425-3",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LTZ 1.4 8V FlexPower 5p Aut. ",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004439-3",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH LTZ 1.4 8V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004426-1",
            "sold": false
          },
          {
            "vehicle": "ONIX HATCH SELEÇÃO 1.0 8V Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004461-0",
            "sold": false
          },
          {
            "vehicle": "Opala Comodoro/ Comod. SLE  4.1 / 2.5",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004054-1",
            "sold": false
          },
          {
            "vehicle": "Opala Diplomata/ Diplom. SLE 4.1 / 2.5",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004055-0",
            "sold": false
          },
          {
            "vehicle": "Opala L/SL/SS/ 2.5/4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004104-1",
            "sold": false
          },
          {
            "vehicle": "PRISMA  Sed. Maxx/ LT 1.4 8V ECONOF. 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004333-8",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. ADVANT. 1.0 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004452-0",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. ADVANT. 1.4 8V F.Power Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004466-0",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. Joy 1.4 8V ECONOFLEX 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004332-0",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. Joy/ LS 1.0 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004358-3",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. LT 1.0 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004432-6",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. LT 1.4 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004433-4",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. LT 1.4 8V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004436-9",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. LTZ 1.4 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004434-2",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. LTZ 1.4 8V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004437-7",
            "sold": false
          },
          {
            "vehicle": "PRISMA Sed. Maxx 1.0 8V FlexPower 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004359-1",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer  DTi 2.8 4x2 Turbo Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004226-9",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer 2.4 MPFI 8v 128cv 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004204-8",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004190-4",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Advant. 2.4/2.4 MPFI F.Power",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004308-7",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Colina 2.4/2.4 MPFI F.Power",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004306-0",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Colina 2.8 TDI 4x4 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004309-5",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer DLX 2.2 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004019-3",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer DLX 2.4 MPFI 128cv 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004237-4",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer DLX 2.5 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004022-3",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer DLX 2.8 4x4 TB Interc. Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004193-9",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer DLX 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004020-7",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Executive 2.8 4x4 TDI Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004244-7",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Executive 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004091-6",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Std. 2.2 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004018-5",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Std. 2.5 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004021-5",
            "sold": false
          },
          {
            "vehicle": "S10 Blazer Tornado 2.4 MPFI 8V 128cv",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004307-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 2.4 MPFI 8v 128cv CD 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004206-4",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 2.4 MPFI 8v 128cv/ Rodeio",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004205-6",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 2.5 4x2 CD TB Max HST Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004093-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 2.5 4x4 CD TB Max HST Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004144-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 2.8 4x2 Turbo Interc. Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004174-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004162-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Advantage 2.5 Flex 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004474-1",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Barretos 2.2 MPFI 2p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004201-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Champ 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004105-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up DLX 2.4 MPFI 128cv CD 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004238-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Exec. 2.8 4x2 CD TB Int.Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004300-1",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Exec. 2.8 4x4 CD TB Int.Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004217-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Executive CD 4.3",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004146-7",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Executive CD 4.3 4x4",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004147-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Freeride 2.5 Flex 4x2 CD Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004465-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.4 F.Power 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004388-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.4 F.Power 4x2 CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004386-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.8 TDI 4x2 CD Dies. Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004412-1",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.8 TDI 4x2 CS Dies. Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004411-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.8 TDI 4x4 CD Dies. Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004413-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LS 2.8 TDI 4x4 CS Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004391-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.4 F.Power 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004389-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.4 F.Power 4x2 CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004387-7",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.5 Flex 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004455-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.5 Flex 4x4 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004456-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.8 TDI 4x2 CD Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004392-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.8 TDI 4x2 CD Diesel Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004393-1",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.8 TDI 4x4 CD Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004394-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LT 2.8 TDI 4x4 CD Diesel Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004395-8",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.4 F.Power 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004390-7",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.5 Flex 4x2 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004454-7",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.5 Flex 4x4 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004457-1",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.8 TDI 4x2 CD Dies. Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004410-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.8 TDI 4x2 CD Dies.Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004396-6",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up LTZ 2.8 TDI 4x4 CD Dies.Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004397-4",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.2 EFI CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004056-8",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.2 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004013-4",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.2 MPFI/EFI CE",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004015-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.5 CE TB Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004059-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.5 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004058-4",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 2.8 4x2 CD TB Int.Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004176-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004014-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 4.3 V6 CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004017-7",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Luxe 4.3 V6 CE",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004016-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up RODEIO 2.4 MPFI F.Power CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004367-2",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up RODEIO 2.8 TDI 4x2 CD Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004368-0",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up RODEIO 2.8 TDI 4x4 CD Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004369-9",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Std 2.8 4x2 CD TB Int.Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004178-5",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Std 2.8 4x4 CD TB Int.Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004179-3",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Std. 2.2 MPFI / EFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004012-6",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Std. 2.2 MPFI CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004092-4",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Std. 2.5 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004057-6",
            "sold": false
          },
          {
            "vehicle": "S10 Pick-Up Tornado 2.4 MPFI 128cv CD 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004303-6",
            "sold": false
          },
          {
            "vehicle": "S10 Pic-Up H.Country 2.8 4x4 CD Dies.Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004464-4",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up 2.8/Sert. 2.8 4x4 TB Int. Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004175-0",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Advant. 2.4/2.4 MPFI F.Power CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004322-2",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Advantage 2.4 MPFI F.Power CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004349-4",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Colina 2.4 MPFI 128cv CD 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004302-8",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Colina 2.4/2.4 MPFI F.Power CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004311-7",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Colina 2.8 TDI 4x2/4x4 CD Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004304-4",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Colina 2.8 TDI 4x2/4x4 CS Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004301-0",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Executive 2.4 MPFI F.Power CD",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004350-8",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Luxe 2.5 4x2 CD TB Max HST Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004060-6",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Luxe 2.5 4x4 CD TB Max HST Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004145-9",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Lx/Sert/Rod 2.8 4x4 CD TDI Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004177-7",
            "sold": false
          },
          {
            "vehicle": "S10 P-Up Tornado 2.8 TDI 4x2/4x4 CD Dies",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004305-2",
            "sold": false
          },
          {
            "vehicle": "Saturn SL",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004106-8",
            "sold": false
          },
          {
            "vehicle": "Sierra CE 5.7 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004164-5",
            "sold": false
          },
          {
            "vehicle": "Sierra Sport 5.0 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004165-3",
            "sold": false
          },
          {
            "vehicle": "Silverado",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004076-2",
            "sold": false
          },
          {
            "vehicle": "Silverado 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004094-0",
            "sold": false
          },
          {
            "vehicle": "Silverado 4.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004095-9",
            "sold": false
          },
          {
            "vehicle": "Silverado 4.2 Turbo Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004096-7",
            "sold": false
          },
          {
            "vehicle": "Silverado Conquest 4.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004109-2",
            "sold": false
          },
          {
            "vehicle": "Silverado Conquest 4.2 Diesel Turbo",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004110-6",
            "sold": false
          },
          {
            "vehicle": "Silverado D20/ Rodeio 4.2 TB Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004196-3",
            "sold": false
          },
          {
            "vehicle": "Silverado DLX 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004097-5",
            "sold": false
          },
          {
            "vehicle": "Silverado DLX 4.2 Conquest HD Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004180-7",
            "sold": false
          },
          {
            "vehicle": "Silverado DLX 4.2 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004098-3",
            "sold": false
          },
          {
            "vehicle": "Silverado G. Blazer DLX/ Std 4.2 Dies.TB",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004089-4",
            "sold": false
          },
          {
            "vehicle": "Silverado Grand Blazer DLX 4.1 mpfi",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004088-6",
            "sold": false
          },
          {
            "vehicle": "Silverado Sport/ Fleet Side 5.7 CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004151-3",
            "sold": false
          },
          {
            "vehicle": "Silverado Sport/Fleet Side 6.5 Dies. CS",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004152-1",
            "sold": false
          },
          {
            "vehicle": "Silverado Trop. SL/ Van T.Diesel (todas)",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004214-5",
            "sold": false
          },
          {
            "vehicle": "Silverado Tropical CD 4.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004149-1",
            "sold": false
          },
          {
            "vehicle": "Silverado Tropical CD 4.1 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004148-3",
            "sold": false
          },
          {
            "vehicle": "Silverado Tropical CD 4.2 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004150-5",
            "sold": false
          },
          {
            "vehicle": "SONIC HB LT 1.6 16V FlexPower 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004428-8",
            "sold": false
          },
          {
            "vehicle": "SONIC HB LT 1.6 16V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004402-4",
            "sold": false
          },
          {
            "vehicle": "SONIC HB LTZ 1.6 16V FlexPower 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004404-0",
            "sold": false
          },
          {
            "vehicle": "SONIC HB LTZ 1.6 16V FlexPower 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004403-2",
            "sold": false
          },
          {
            "vehicle": "SONIC HB LTZ EFFECT 1.6 16V FlexP 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004448-2",
            "sold": false
          },
          {
            "vehicle": "SONIC Sed. LT 1.6 16V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004429-6",
            "sold": false
          },
          {
            "vehicle": "SONIC Sed. LT 1.6 16V FlexPower 4p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004405-9",
            "sold": false
          },
          {
            "vehicle": "SONIC Sed. LTZ 1.6 16V FlexPower 4p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004407-5",
            "sold": false
          },
          {
            "vehicle": "SONIC Sed. LTZ 1.6 16V FlexPower 4p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004406-7",
            "sold": false
          },
          {
            "vehicle": "Sonoma CE 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004166-1",
            "sold": false
          },
          {
            "vehicle": "SpaceVan Furgão 2.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004107-6",
            "sold": false
          },
          {
            "vehicle": "SpaceVan Furgão 2.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004099-1",
            "sold": false
          },
          {
            "vehicle": "SpaceVan Passageiro 2.1Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004101-7",
            "sold": false
          },
          {
            "vehicle": "SpaceVan Passageiro 2.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004100-9",
            "sold": false
          },
          {
            "vehicle": "SPIN ACTIV 1.8 8V Econo. Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004458-0",
            "sold": false
          },
          {
            "vehicle": "SPIN ACTIV 1.8 8V Econo. Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004459-8",
            "sold": false
          },
          {
            "vehicle": "SPIN ADVANTAGE 1.8 8V Econo.Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004441-5",
            "sold": false
          },
          {
            "vehicle": "SPIN ADVANTAGE 1.8 8V Econo.Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004440-7",
            "sold": false
          },
          {
            "vehicle": "SPIN LS 1.8 8V Econo.Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004435-0",
            "sold": false
          },
          {
            "vehicle": "SPIN LT 1.8 8V Econo.Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004415-6",
            "sold": false
          },
          {
            "vehicle": "SPIN LT 1.8 8V Econo.Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004414-8",
            "sold": false
          },
          {
            "vehicle": "SPIN LTZ 1.8 8V Econo.Flex 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004417-2",
            "sold": false
          },
          {
            "vehicle": "SPIN LTZ 1.8 8V Econo.Flex 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004416-4",
            "sold": false
          },
          {
            "vehicle": "SS10 Pick-Up 4.3 V6",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004163-7",
            "sold": false
          },
          {
            "vehicle": "Suburban 5.7/ 6.5 V8/ 5.3 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004153-0",
            "sold": false
          },
          {
            "vehicle": "Suprema CD 4.1 / 3.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004064-9",
            "sold": false
          },
          {
            "vehicle": "Suprema Diamond",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004108-4",
            "sold": false
          },
          {
            "vehicle": "Suprema GL 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004061-4",
            "sold": false
          },
          {
            "vehicle": "Suprema GLS 2.2 / 2.0",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004062-2",
            "sold": false
          },
          {
            "vehicle": "Suprema GLS 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004063-0",
            "sold": false
          },
          {
            "vehicle": "Syclone 5.7 V8",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004167-0",
            "sold": false
          },
          {
            "vehicle": "Tigra 1.6 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004102-5",
            "sold": false
          },
          {
            "vehicle": "Tigra Power Tech Coupe 1.6 SFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004123-8",
            "sold": false
          },
          {
            "vehicle": "TRACKER 2.0 16v 128cv MPFI 4x4 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004334-6",
            "sold": false
          },
          {
            "vehicle": "TRACKER 2.0 4x4 TB Int. Diesel 4p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004210-2",
            "sold": false
          },
          {
            "vehicle": "TRACKER Freeride 1.8 16V Flex 4x2 Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004449-0",
            "sold": false
          },
          {
            "vehicle": "TRACKER LT 1.4 Turbo 16V Flex 4x2 Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004476-8",
            "sold": false
          },
          {
            "vehicle": "TRACKER LT 1.8 16V Flex 4x2 Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004467-9",
            "sold": false
          },
          {
            "vehicle": "TRACKER LTZ 1.4 Turbo 16V Flex 4x2 Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004477-6",
            "sold": false
          },
          {
            "vehicle": "TRACKER LTZ 1.8 16V Flex 4x2 Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004444-0",
            "sold": false
          },
          {
            "vehicle": "Trafic Chassi Longo Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004077-0",
            "sold": false
          },
          {
            "vehicle": "Trafic Furgão Carga 2.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004078-9",
            "sold": false
          },
          {
            "vehicle": "Trafic Furgao Carga 2.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004188-2",
            "sold": false
          },
          {
            "vehicle": "Trafic Passageiros 2.1 Diesel",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004079-7",
            "sold": false
          },
          {
            "vehicle": "Trafic Passageiros 2.2",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004189-0",
            "sold": false
          },
          {
            "vehicle": "TRAILBLAZER LTZ 2.8 CTDI Diesel Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004431-8",
            "sold": false
          },
          {
            "vehicle": "TRAILBLAZER LTZ 3.6 V6  Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004430-0",
            "sold": false
          },
          {
            "vehicle": "Vectra CD 2.0 (modelo antigo)",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004068-1",
            "sold": false
          },
          {
            "vehicle": "Vectra CD 2.2 16V / 2.0 16V Mec./Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004067-3",
            "sold": false
          },
          {
            "vehicle": "Vectra COLLECTION 2.0 FlexPower 8V Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004378-8",
            "sold": false
          },
          {
            "vehicle": "Vectra Comfort 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004295-1",
            "sold": false
          },
          {
            "vehicle": "Vectra Elegan. 2.0 MPFI 8V FlexPower Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004324-9",
            "sold": false
          },
          {
            "vehicle": "Vectra Elegan. 2.0 MPFI 8V FlexPower Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004323-0",
            "sold": false
          },
          {
            "vehicle": "Vectra Elegance 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004296-0",
            "sold": false
          },
          {
            "vehicle": "Vectra Elegance 2.2 MPFI 16V Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004298-6",
            "sold": false
          },
          {
            "vehicle": "Vectra Elite 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004297-8",
            "sold": false
          },
          {
            "vehicle": "Vectra Elite 2.0 MPFI 8V FlexPower Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004348-6",
            "sold": false
          },
          {
            "vehicle": "Vectra Elite 2.2 MPFI 16V Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004299-4",
            "sold": false
          },
          {
            "vehicle": "Vectra Elite 2.4 MPFI 16V FlexPower Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004325-7",
            "sold": false
          },
          {
            "vehicle": "Vectra Expres./ Collection  2.0 MPFI 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004243-9",
            "sold": false
          },
          {
            "vehicle": "Vectra EXPRESSION 2.0 MPFI FlexPower Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004337-0",
            "sold": false
          },
          {
            "vehicle": "Vectra EXPRESSION 2.0 MPFI FlexPower Mec",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004336-2",
            "sold": false
          },
          {
            "vehicle": "Vectra GL 2.2 / 2.0 MPFI",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004065-7",
            "sold": false
          },
          {
            "vehicle": "Vectra GL 2.2 MPFI Milenium",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004181-5",
            "sold": false
          },
          {
            "vehicle": "Vectra GLS/ Challenge 2.2 MPFI 16V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004182-3",
            "sold": false
          },
          {
            "vehicle": "Vectra GLS/Expres.2.2/ 2.0 e 2.0 CD 8V",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004066-5",
            "sold": false
          },
          {
            "vehicle": "Vectra GSi 2.0 16V (modelo antigo)",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004069-0",
            "sold": false
          },
          {
            "vehicle": "Vectra GT 2.0 MPFI 8V FlexPower Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004344-3",
            "sold": false
          },
          {
            "vehicle": "Vectra GT 2.0 MPFI 8V FlexPower Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004343-5",
            "sold": false
          },
          {
            "vehicle": "Vectra GT-X 2.0 MPFI 8V FlexPower Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004346-0",
            "sold": false
          },
          {
            "vehicle": "Vectra GT-X 2.0 MPFI 8V FlexPower Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004345-1",
            "sold": false
          },
          {
            "vehicle": "Veraneio S / Luxe 4.1",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004070-3",
            "sold": false
          },
          {
            "vehicle": "Veraneio S/ Luxe 4.0 Dies./TB Dies.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004071-1",
            "sold": false
          },
          {
            "vehicle": "Zafira 2.0/ CD 2.0  8V  MPFI 5p Mec.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004211-0",
            "sold": false
          },
          {
            "vehicle": "Zafira 2.0/ CD 2.0 16V  MPFI 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004212-9",
            "sold": false
          },
          {
            "vehicle": "Zafira 2.0/ CD 2.0 8V MPFI 5p Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004222-6",
            "sold": false
          },
          {
            "vehicle": "Zafira COLLECTION 2.0 FlexPower 8V Aut.",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004409-1",
            "sold": false
          },
          {
            "vehicle": "Zafira Comfort 2.0 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004245-5",
            "sold": false
          },
          {
            "vehicle": "Zafira Eleg.2.0 MPFI FlexPower 8V 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004247-1",
            "sold": false
          },
          {
            "vehicle": "Zafira Elegance 2.0 MPFI 16v 136cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004250-1",
            "sold": false
          },
          {
            "vehicle": "Zafira Elegance 2.0 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004246-3",
            "sold": false
          },
          {
            "vehicle": "Zafira Elite 2.0 MPFI 16v 136cv 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004251-0",
            "sold": false
          },
          {
            "vehicle": "Zafira Elite 2.0 MPFI FlexPower 8V  Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004249-8",
            "sold": false
          },
          {
            "vehicle": "Zafira Elite 2.0 MPFI FlexPower 8V 5p",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004248-0",
            "sold": false
          },
          {
            "vehicle": "Zafira Expres. 2.0 MPFI FlexPower 5p Aut",
            "manufacturer": "GM - Chevrolet",
            "fipe_code": "004335-4",
            "sold": false
          },
          {
            "vehicle": "HOVER CUV 2.4 16V 4WD 5p Mec.",
            "manufacturer": "GREAT WALL",
            "fipe_code": "069002-3",
            "sold": false
          },
          {
            "vehicle": "HOVER CUV 2.4 16V 5p Mec.",
            "manufacturer": "GREAT WALL",
            "fipe_code": "069001-5",
            "sold": false
          },
          {
            "vehicle": "BR-800 (todos)/ Supermini",
            "manufacturer": "Gurgel",
            "fipe_code": "045003-0",
            "sold": false
          },
          {
            "vehicle": "Carajas Diesel",
            "manufacturer": "Gurgel",
            "fipe_code": "045002-2",
            "sold": false
          },
          {
            "vehicle": "Carajas/ Tocantis/ Xavante/ Vip",
            "manufacturer": "Gurgel",
            "fipe_code": "045001-4",
            "sold": false
          },
          {
            "vehicle": "Towner Furgão 1.0 8V 48cv 5p",
            "manufacturer": "HAFEI",
            "fipe_code": "068002-8",
            "sold": false
          },
          {
            "vehicle": "Towner Jr. Pick-up 1.0 8V 48cv  CD 4p",
            "manufacturer": "HAFEI",
            "fipe_code": "068005-2",
            "sold": false
          },
          {
            "vehicle": "Towner Jr. Pick-up 1.0 8V 48cv  CS 2p",
            "manufacturer": "HAFEI",
            "fipe_code": "068004-4",
            "sold": false
          },
          {
            "vehicle": "Towner Jr. Pick-up Baú 1.0 8V 48cv 2p",
            "manufacturer": "HAFEI",
            "fipe_code": "068007-9",
            "sold": false
          },
          {
            "vehicle": "Towner Jr. Pick-up Baú 1.0 8V 48cv CD 4p",
            "manufacturer": "HAFEI",
            "fipe_code": "068008-7",
            "sold": false
          },
          {
            "vehicle": "Towner Passageiro 1.0 8V 48cv 7L 5p",
            "manufacturer": "HAFEI",
            "fipe_code": "068001-0",
            "sold": false
          },
          {
            "vehicle": "Towner Pick_up Baú 1.0 8V 48cv 2p",
            "manufacturer": "HAFEI",
            "fipe_code": "068006-0",
            "sold": false
          },
          {
            "vehicle": "Towner Pick-up 1.0 8V 48cv 2p",
            "manufacturer": "HAFEI",
            "fipe_code": "068003-6",
            "sold": false
          },
          {
            "vehicle": "Accord Coupe EX",
            "manufacturer": "Honda",
            "fipe_code": "014001-5",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã EX 2.0 16V 156cv Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014066-0",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã EX 2.4/ 2.3/ 2.2 16V ",
            "manufacturer": "Honda",
            "fipe_code": "014014-7",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã EX 2.7/ 3.0 24V",
            "manufacturer": "Honda",
            "fipe_code": "014023-6",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã EX 3.5 V6 24V",
            "manufacturer": "Honda",
            "fipe_code": "014055-4",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã EXR",
            "manufacturer": "Honda",
            "fipe_code": "014015-5",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã LX  2.2/ 2.4 16V 158cv",
            "manufacturer": "Honda",
            "fipe_code": "014002-3",
            "sold": false
          },
          {
            "vehicle": "Accord Sedã LX 2.0 16V 150cv/ 156cv Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014047-3",
            "sold": false
          },
          {
            "vehicle": "Accord SW EX",
            "manufacturer": "Honda",
            "fipe_code": "014020-1",
            "sold": false
          },
          {
            "vehicle": "Accord SW LX",
            "manufacturer": "Honda",
            "fipe_code": "014021-0",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan DX 1.5 Flex 16V Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014067-8",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan DX 1.5 Flex 16V Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014068-6",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan EX 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014061-9",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan EX 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014060-0",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan EXL 1.5 Flex  16V 4p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014063-5",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan EXL 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014062-7",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan LX 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014059-7",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan LX 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014058-9",
            "sold": false
          },
          {
            "vehicle": "CITY Sedan SPORT 1.5 FLEX 16V 4p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014077-5",
            "sold": false
          },
          {
            "vehicle": "Civic Coupe EX/ EXS 1.6 16V 2p",
            "manufacturer": "Honda",
            "fipe_code": "014019-8",
            "sold": false
          },
          {
            "vehicle": "Civic Coupé Si 2.4 16V 206cv Mec. 2p",
            "manufacturer": "Honda",
            "fipe_code": "014084-8",
            "sold": false
          },
          {
            "vehicle": "Civic CRX/ Targa VTi",
            "manufacturer": "Honda",
            "fipe_code": "014004-0",
            "sold": false
          },
          {
            "vehicle": "Civic Hatch DX",
            "manufacturer": "Honda",
            "fipe_code": "014005-8",
            "sold": false
          },
          {
            "vehicle": "Civic Hatch LSi",
            "manufacturer": "Honda",
            "fipe_code": "014008-2",
            "sold": false
          },
          {
            "vehicle": "Civic Hatch LX Aut",
            "manufacturer": "Honda",
            "fipe_code": "014006-6",
            "sold": false
          },
          {
            "vehicle": "Civic Hatch Si",
            "manufacturer": "Honda",
            "fipe_code": "014011-2",
            "sold": false
          },
          {
            "vehicle": "Civic Hatch VTi",
            "manufacturer": "Honda",
            "fipe_code": "014007-4",
            "sold": false
          },
          {
            "vehicle": "Civic Sed LX 1.8 Aut 4p(s/Acess.Esp.D.F)",
            "manufacturer": "Honda",
            "fipe_code": "014051-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sed. LXL/ LXL SE 1.8 Flex 16V Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014065-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sed. LXL/ LXL SE 1.8 Flex 16V Mec",
            "manufacturer": "Honda",
            "fipe_code": "014064-3",
            "sold": false
          },
          {
            "vehicle": "Civic Sedã EX/ EXS 1.6 Mec. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014009-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedã EX/ EXS Aut. 4p/ Del-Sol 2p",
            "manufacturer": "Honda",
            "fipe_code": "014003-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sedã LX 1.5/ 1.6",
            "manufacturer": "Honda",
            "fipe_code": "014010-4",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EX 1.6 16V Aut. 4p (nacion.)",
            "manufacturer": "Honda",
            "fipe_code": "014030-9",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EX 1.6 16V Mec. 4p (nacion.)",
            "manufacturer": "Honda",
            "fipe_code": "014029-5",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EX 1.7 16V 130cv Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014033-3",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EX 1.7 16v 130cv Mec. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014034-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EX 2.0 Flex 16V Aut.4p",
            "manufacturer": "Honda",
            "fipe_code": "014091-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EXL 2.0 Flex 16V Aut.4p",
            "manufacturer": "Honda",
            "fipe_code": "014090-2",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EXR 2.0 Flexone 16V Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014075-9",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan EXS 1.8/1.8 Flex 16V Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014050-3",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LX 1.6 16V Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014028-7",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LX 1.6 16V Mec. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014017-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LX 1.7 16V 115cv Mec. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014036-8",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LX/ LXL 1.7 16V 115cv Aut 4p",
            "manufacturer": "Honda",
            "fipe_code": "014035-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXB 1.6 16V 4p",
            "manufacturer": "Honda",
            "fipe_code": "014016-3",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXB 1.7 16V 115cv",
            "manufacturer": "Honda",
            "fipe_code": "014037-6",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXL 1.7 16V 130cv Aut 4p",
            "manufacturer": "Honda",
            "fipe_code": "014044-9",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXL 1.7 16V 130cv Mec 4p",
            "manufacturer": "Honda",
            "fipe_code": "014043-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXR 2.0 Flexone 16V Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014074-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXS 1.8/1.8 Flex 16V Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014049-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan LXS 1.8/1.8 Flex 16V Mec. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014048-1",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan Si 2.0 16V  192cv 4p",
            "manufacturer": "Honda",
            "fipe_code": "014052-0",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan SPORT 2.0 Flex 16V Aut.4p",
            "manufacturer": "Honda",
            "fipe_code": "014092-9",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan SPORT 2.0 Flex 16V Mec.4p",
            "manufacturer": "Honda",
            "fipe_code": "014093-7",
            "sold": false
          },
          {
            "vehicle": "Civic Sedan TOURING 1.5 Turbo 16V Aut.4p",
            "manufacturer": "Honda",
            "fipe_code": "014089-9",
            "sold": false
          },
          {
            "vehicle": "CR-V 2.0 16V Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014032-5",
            "sold": false
          },
          {
            "vehicle": "CR-V 2.0 16V Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014031-7",
            "sold": false
          },
          {
            "vehicle": "CR-V 2.4 16V 156cv Aut. 4p",
            "manufacturer": "Honda",
            "fipe_code": "014038-4",
            "sold": false
          },
          {
            "vehicle": "CR-V EXL 2.0 16V 4WD/2.0 Flexone Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014053-8",
            "sold": false
          },
          {
            "vehicle": "CR-V EXL 2.0 Flexone 16V 2WD Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014076-7",
            "sold": false
          },
          {
            "vehicle": "CR-V LX 2.0 16V 2WD Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014071-6",
            "sold": false
          },
          {
            "vehicle": "CR-V LX 2.0 16V 2WD/2.0 Flexone Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014054-6",
            "sold": false
          },
          {
            "vehicle": "Fit CX 1.4 Flex 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014079-1",
            "sold": false
          },
          {
            "vehicle": "Fit CX 1.4 Flex 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014078-3",
            "sold": false
          },
          {
            "vehicle": "Fit DX 1.4 Flex 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014070-8",
            "sold": false
          },
          {
            "vehicle": "Fit DX 1.4 Flex 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014069-4",
            "sold": false
          },
          {
            "vehicle": "Fit DX 1.5 Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014082-1",
            "sold": false
          },
          {
            "vehicle": "Fit DX 1.5 Flexone 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014083-0",
            "sold": false
          },
          {
            "vehicle": "Fit EX/ S 1.5/ EX 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014046-5",
            "sold": false
          },
          {
            "vehicle": "Fit EX/S/EX 1.5 Flex/Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014045-7",
            "sold": false
          },
          {
            "vehicle": "Fit EXL 1.5 Flex 16V 5p Mec",
            "manufacturer": "Honda",
            "fipe_code": "014057-0",
            "sold": false
          },
          {
            "vehicle": "Fit EXL 1.5 Flex/Flexone 16V 5p Aut",
            "manufacturer": "Honda",
            "fipe_code": "014056-2",
            "sold": false
          },
          {
            "vehicle": "Fit LX 1.4/ 1.4 Flex 8V/16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014040-6",
            "sold": false
          },
          {
            "vehicle": "Fit LX 1.4/ 1.4 Flex 8V/16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014039-2",
            "sold": false
          },
          {
            "vehicle": "Fit LX 1.5 Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014081-3",
            "sold": false
          },
          {
            "vehicle": "Fit LX 1.5 Flexone 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014080-5",
            "sold": false
          },
          {
            "vehicle": "Fit LXL 1.4/ 1.4 Flex 8V/16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014042-2",
            "sold": false
          },
          {
            "vehicle": "Fit LXL 1.4/ 1.4 Flex 8V/16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014041-4",
            "sold": false
          },
          {
            "vehicle": "Fit Twist 1.5 Flex 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014073-2",
            "sold": false
          },
          {
            "vehicle": "Fit Twist 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014072-4",
            "sold": false
          },
          {
            "vehicle": "HR-V EX 1.8 Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014087-2",
            "sold": false
          },
          {
            "vehicle": "HR-V EXL 1.8 Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014088-0",
            "sold": false
          },
          {
            "vehicle": "HR-V LX 1.8 Flexone 16V 5p Aut.",
            "manufacturer": "Honda",
            "fipe_code": "014086-4",
            "sold": false
          },
          {
            "vehicle": "HR-V LX 1.8 Flexone 16V 5p Mec.",
            "manufacturer": "Honda",
            "fipe_code": "014085-6",
            "sold": false
          },
          {
            "vehicle": "Odyssey EX Van Aut (6 lug.)",
            "manufacturer": "Honda",
            "fipe_code": "014012-0",
            "sold": false
          },
          {
            "vehicle": "Odyssey Van LX Aut (6 lug.)",
            "manufacturer": "Honda",
            "fipe_code": "014022-8",
            "sold": false
          },
          {
            "vehicle": "Passport EX",
            "manufacturer": "Honda",
            "fipe_code": "014024-4",
            "sold": false
          },
          {
            "vehicle": "Passport LX",
            "manufacturer": "Honda",
            "fipe_code": "014025-2",
            "sold": false
          },
          {
            "vehicle": "Passport PIck-Up 4x2",
            "manufacturer": "Honda",
            "fipe_code": "014026-0",
            "sold": false
          },
          {
            "vehicle": "Prelude Coupê S 2.2",
            "manufacturer": "Honda",
            "fipe_code": "014027-9",
            "sold": false
          },
          {
            "vehicle": "Prelude Si",
            "manufacturer": "Honda",
            "fipe_code": "014013-9",
            "sold": false
          },
          {
            "vehicle": "Accent GLS 1.5 12/16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015032-0",
            "sold": false
          },
          {
            "vehicle": "Accent GLS 1.5 12/16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015001-0",
            "sold": false
          },
          {
            "vehicle": "Accent GS 3p Mec",
            "manufacturer": "Hyundai",
            "fipe_code": "015002-9",
            "sold": false
          },
          {
            "vehicle": "Accent L/ LR 1.5 2/4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015003-7",
            "sold": false
          },
          {
            "vehicle": "Accent LS 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015004-5",
            "sold": false
          },
          {
            "vehicle": "Atos Prime GL 1.0 Mec",
            "manufacturer": "Hyundai",
            "fipe_code": "015048-7",
            "sold": false
          },
          {
            "vehicle": "Atos Prime GLS 1.0 Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015035-5",
            "sold": false
          },
          {
            "vehicle": "Atos Prime GLS 1.0 Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015033-9",
            "sold": false
          },
          {
            "vehicle": "Atos Prime GLS 1.0 Semi-Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015034-7",
            "sold": false
          },
          {
            "vehicle": "AZERA 3.0 V6 24V 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015083-5",
            "sold": false
          },
          {
            "vehicle": "AZERA GLS 3.3 V6 24V 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015069-0",
            "sold": false
          },
          {
            "vehicle": "Coupê FX 2.0 Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015037-1",
            "sold": false
          },
          {
            "vehicle": "Coupê FX 2.0 Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015036-3",
            "sold": false
          },
          {
            "vehicle": "Coupe FX 2.7 V6 24V 180cv Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015054-1",
            "sold": false
          },
          {
            "vehicle": "Coupe FX 2.7 V6 24V 180cv Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015053-3",
            "sold": false
          },
          {
            "vehicle": "Creta Attitude 1.6 16V Flex Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015142-4",
            "sold": false
          },
          {
            "vehicle": "Creta Prestige 2.0 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015144-0",
            "sold": false
          },
          {
            "vehicle": "Creta Pulse 1.6 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015141-6",
            "sold": false
          },
          {
            "vehicle": "Creta Pulse 1.6 16V Flex Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015140-8",
            "sold": false
          },
          {
            "vehicle": "Creta Pulse 2.0 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015143-2",
            "sold": false
          },
          {
            "vehicle": "Cupê 2.0",
            "manufacturer": "Hyundai",
            "fipe_code": "015015-0",
            "sold": false
          },
          {
            "vehicle": "Elantra 2.0 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015136-0",
            "sold": false
          },
          {
            "vehicle": "Elantra GL",
            "manufacturer": "Hyundai",
            "fipe_code": "015005-3",
            "sold": false
          },
          {
            "vehicle": "Elantra GLS 1.6",
            "manufacturer": "Hyundai",
            "fipe_code": "015030-4",
            "sold": false
          },
          {
            "vehicle": "Elantra GLS 1.8 16V",
            "manufacturer": "Hyundai",
            "fipe_code": "015006-1",
            "sold": false
          },
          {
            "vehicle": "ELANTRA GLS 1.8 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015081-9",
            "sold": false
          },
          {
            "vehicle": "ELANTRA GLS 1.8 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015080-0",
            "sold": false
          },
          {
            "vehicle": "Elantra GLS 2.0 16V Aut",
            "manufacturer": "Hyundai",
            "fipe_code": "015050-9",
            "sold": false
          },
          {
            "vehicle": "Elantra GLS 2.0 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015104-1",
            "sold": false
          },
          {
            "vehicle": "Elantra GLS 2.0 16V Mec",
            "manufacturer": "Hyundai",
            "fipe_code": "015049-5",
            "sold": false
          },
          {
            "vehicle": "Elantra Special Edition 2.0 16V Flex Aut",
            "manufacturer": "Hyundai",
            "fipe_code": "015135-1",
            "sold": false
          },
          {
            "vehicle": "Elantra Wagon 1.8 16V",
            "manufacturer": "Hyundai",
            "fipe_code": "015016-9",
            "sold": false
          },
          {
            "vehicle": "EQUUS 4.6 V8 32V 366cv 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015087-8",
            "sold": false
          },
          {
            "vehicle": "Excel GLS",
            "manufacturer": "Hyundai",
            "fipe_code": "015007-0",
            "sold": false
          },
          {
            "vehicle": "Excel GS",
            "manufacturer": "Hyundai",
            "fipe_code": "015026-6",
            "sold": false
          },
          {
            "vehicle": "Excel L",
            "manufacturer": "Hyundai",
            "fipe_code": "015027-4",
            "sold": false
          },
          {
            "vehicle": "Excel LS/ GL",
            "manufacturer": "Hyundai",
            "fipe_code": "015008-8",
            "sold": false
          },
          {
            "vehicle": "Galloper 2.5 Luxo Turbo Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015022-3",
            "sold": false
          },
          {
            "vehicle": "Galloper 2.5 Super Luxo Turbo Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015021-5",
            "sold": false
          },
          {
            "vehicle": "Galloper 3.0 V6 Luxo",
            "manufacturer": "Hyundai",
            "fipe_code": "015023-1",
            "sold": false
          },
          {
            "vehicle": "Galloper 3.0 V6 Super Luxo Aut",
            "manufacturer": "Hyundai",
            "fipe_code": "015025-8",
            "sold": false
          },
          {
            "vehicle": "Galloper 3.0 V6 Super Luxo Mec",
            "manufacturer": "Hyundai",
            "fipe_code": "015024-0",
            "sold": false
          },
          {
            "vehicle": "GENESIS 3.8 V6 24V 290cv 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015084-3",
            "sold": false
          },
          {
            "vehicle": "Grand Santa Fé  3.3 V6 4X4 Tiptronic",
            "manufacturer": "Hyundai",
            "fipe_code": "015108-4",
            "sold": false
          },
          {
            "vehicle": "H1 Starex HSV 2.4 16V 137cv  Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015060-6",
            "sold": false
          },
          {
            "vehicle": "H1 Starex HSV 2.5 Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015042-8",
            "sold": false
          },
          {
            "vehicle": "H1 Starex SVX 2.4 16V",
            "manufacturer": "Hyundai",
            "fipe_code": "015070-3",
            "sold": false
          },
          {
            "vehicle": "H1 Starex SVX 2.5 TDI 100cv Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015067-3",
            "sold": false
          },
          {
            "vehicle": "H1 Starex SVX 2.6 85cv Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015043-6",
            "sold": false
          },
          {
            "vehicle": "H100 DLX Furgão Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015018-5",
            "sold": false
          },
          {
            "vehicle": "H100 DLX/ Panel Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015019-3",
            "sold": false
          },
          {
            "vehicle": "H100 GL Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015038-0",
            "sold": false
          },
          {
            "vehicle": "H100 GL Furgão Extra-Longo Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015041-0",
            "sold": false
          },
          {
            "vehicle": "H100 GLS Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015040-1",
            "sold": false
          },
          {
            "vehicle": "H100 GS (12 lugares)",
            "manufacturer": "Hyundai",
            "fipe_code": "015029-0",
            "sold": false
          },
          {
            "vehicle": "H100 GS Diesel (12 lugares)",
            "manufacturer": "Hyundai",
            "fipe_code": "015013-4",
            "sold": false
          },
          {
            "vehicle": "H100 Porter Truck Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015031-2",
            "sold": false
          },
          {
            "vehicle": "H100 SPR Diesel (15 lugares)",
            "manufacturer": "Hyundai",
            "fipe_code": "015014-2",
            "sold": false
          },
          {
            "vehicle": "H100 Top Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015039-8",
            "sold": false
          },
          {
            "vehicle": "HB20 C./C.Plus/C.Style 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015089-4",
            "sold": false
          },
          {
            "vehicle": "HB20 C.Style/C.Plus 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015090-8",
            "sold": false
          },
          {
            "vehicle": "HB20 Comf./C.Plus/C.Style 1.0 Flex 12V",
            "manufacturer": "Hyundai",
            "fipe_code": "015088-6",
            "sold": false
          },
          {
            "vehicle": "HB20 Comfort Plus 1.0 TB Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015126-2",
            "sold": false
          },
          {
            "vehicle": "HB20 Comfort Style 1.0 TB Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015127-0",
            "sold": false
          },
          {
            "vehicle": "HB20 Copa do Mundo 1.0 Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015109-2",
            "sold": false
          },
          {
            "vehicle": "HB20 Copa do Mundo 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015111-4",
            "sold": false
          },
          {
            "vehicle": "HB20 Copa do Mundo 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015110-6",
            "sold": false
          },
          {
            "vehicle": "HB20 For You 1.0 Flex 12V 5p",
            "manufacturer": "Hyundai",
            "fipe_code": "015115-7",
            "sold": false
          },
          {
            "vehicle": "HB20 Ocean 1.0 Flex 12V 5p Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015130-0",
            "sold": false
          },
          {
            "vehicle": "HB20 Ocean 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015132-7",
            "sold": false
          },
          {
            "vehicle": "HB20 Ocean 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015131-9",
            "sold": false
          },
          {
            "vehicle": "HB20 Premium 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015092-4",
            "sold": false
          },
          {
            "vehicle": "HB20 Premium 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015091-6",
            "sold": false
          },
          {
            "vehicle": "HB20 R spec 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015124-6",
            "sold": false
          },
          {
            "vehicle": "HB20 R spec 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015125-4",
            "sold": false
          },
          {
            "vehicle": "HB20 S For You 1.0 Flex 12V 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015116-5",
            "sold": false
          },
          {
            "vehicle": "HB20 Spicy 1.0 Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015119-0",
            "sold": false
          },
          {
            "vehicle": "HB20 Spicy 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015118-1",
            "sold": false
          },
          {
            "vehicle": "HB20 Spicy 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015117-3",
            "sold": false
          },
          {
            "vehicle": "HB20S  Impress 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015120-3",
            "sold": false
          },
          {
            "vehicle": "HB20S  Impress 1.6 Flex 16v Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015121-1",
            "sold": false
          },
          {
            "vehicle": "HB20S C.Plus/C.Style 1.6 Flex 16V Mec.4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015100-9",
            "sold": false
          },
          {
            "vehicle": "HB20S C.Plus/C.Style1.0 Flex 12V Mec. 4P",
            "manufacturer": "Hyundai",
            "fipe_code": "015099-1",
            "sold": false
          },
          {
            "vehicle": "HB20S C.Style/C.Plus1.6 Flex 16V Aut. 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015101-7",
            "sold": false
          },
          {
            "vehicle": "HB20S Comfort Plus 1.0 TB Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015128-9",
            "sold": false
          },
          {
            "vehicle": "HB20S Comfort Style 1.0 TB Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015129-7",
            "sold": false
          },
          {
            "vehicle": "HB20S Copa do Mundo 1.0 Flex 12V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015112-2",
            "sold": false
          },
          {
            "vehicle": "HB20S Copa do Mundo 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015114-9",
            "sold": false
          },
          {
            "vehicle": "HB20S Copa do Mundo 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015113-0",
            "sold": false
          },
          {
            "vehicle": "HB20S Ocean 1.6 Flex 16v 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015134-3",
            "sold": false
          },
          {
            "vehicle": "HB20S Ocean 1.6 Flex 16V 4p Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015133-5",
            "sold": false
          },
          {
            "vehicle": "HB20S Premium 1.6 Flex 16V Aut. 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015103-3",
            "sold": false
          },
          {
            "vehicle": "HB20S Premium 1.6 Flex 16V Mec. 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015102-5",
            "sold": false
          },
          {
            "vehicle": "HB20X Premium 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015097-5",
            "sold": false
          },
          {
            "vehicle": "HB20X Premium 1.6 Flex 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015096-7",
            "sold": false
          },
          {
            "vehicle": "HB20X Style 1.6 Flex 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015095-9",
            "sold": false
          },
          {
            "vehicle": "HB20X Style 1.6 Flex 16v Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015094-0",
            "sold": false
          },
          {
            "vehicle": "HR 2.5 TCI Diesel (RS/RD)",
            "manufacturer": "Hyundai",
            "fipe_code": "015065-7",
            "sold": false
          },
          {
            "vehicle": "i30 1.6 16V Flex 5p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015098-3",
            "sold": false
          },
          {
            "vehicle": "i30 1.8 16V Aut. 5p",
            "manufacturer": "Hyundai",
            "fipe_code": "015106-8",
            "sold": false
          },
          {
            "vehicle": "i30 2.0 16V 145cv 5p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015071-1",
            "sold": false
          },
          {
            "vehicle": "i30 2.0 16V 145cv 5p Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015072-0",
            "sold": false
          },
          {
            "vehicle": "i30 Serie Limitada 1.8 16V Aut. 5p",
            "manufacturer": "Hyundai",
            "fipe_code": "015122-0",
            "sold": false
          },
          {
            "vehicle": "i30cw 2.0 16V 145cv Aut. 5p",
            "manufacturer": "Hyundai",
            "fipe_code": "015077-0",
            "sold": false
          },
          {
            "vehicle": "i30cw 2.0 16V 145cv Mec. 5p",
            "manufacturer": "Hyundai",
            "fipe_code": "015076-2",
            "sold": false
          },
          {
            "vehicle": "ix35 2.0 16V 170cv 2WD/4WD Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015074-6",
            "sold": false
          },
          {
            "vehicle": "ix35 2.0 16V 170cv 2WD/4WD Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015075-4",
            "sold": false
          },
          {
            "vehicle": "ix35 2.0 16V 2WD Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015146-7",
            "sold": false
          },
          {
            "vehicle": "ix35 2.0 16V 2WD Flex Mec. ",
            "manufacturer": "Hyundai",
            "fipe_code": "015085-1",
            "sold": false
          },
          {
            "vehicle": "ix35 2.0 Launching Edition 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015123-8",
            "sold": false
          },
          {
            "vehicle": "ix35 GL 2.0 16V 2WD Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015145-9",
            "sold": false
          },
          {
            "vehicle": "ix35 GLS 2.0 16V 2WD Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015086-0",
            "sold": false
          },
          {
            "vehicle": "Matrix GLS 1.8 16V 123cv Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015058-4",
            "sold": false
          },
          {
            "vehicle": "Matrix GLS 1.8 16V 123cv Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015057-6",
            "sold": false
          },
          {
            "vehicle": "Porter GL 4x2 Curto/Longo Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015044-4",
            "sold": false
          },
          {
            "vehicle": "Porter GLS CD 4x2 2.6 8V Diesel",
            "manufacturer": "Hyundai",
            "fipe_code": "015046-0",
            "sold": false
          },
          {
            "vehicle": "Santa Fé /GLS 3.3 V6 4X4 Tiptronic",
            "manufacturer": "Hyundai",
            "fipe_code": "015105-0",
            "sold": false
          },
          {
            "vehicle": "Santa Fe GLS 2.4 Tiptronic",
            "manufacturer": "Hyundai",
            "fipe_code": "015082-7",
            "sold": false
          },
          {
            "vehicle": "Santa Fe GLS 2.7 V6 4x4TipTronic",
            "manufacturer": "Hyundai",
            "fipe_code": "015051-7",
            "sold": false
          },
          {
            "vehicle": "Santa Fe GLS 3.5 V6 4x4 Tiptronic",
            "manufacturer": "Hyundai",
            "fipe_code": "015073-8",
            "sold": false
          },
          {
            "vehicle": "Scoupe",
            "manufacturer": "Hyundai",
            "fipe_code": "015009-6",
            "sold": false
          },
          {
            "vehicle": "Sonata 2.4 16V 182cv 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015078-9",
            "sold": false
          },
          {
            "vehicle": "Sonata GL 2.0 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015010-0",
            "sold": false
          },
          {
            "vehicle": "Sonata GLS 2.0 4p",
            "manufacturer": "Hyundai",
            "fipe_code": "015011-8",
            "sold": false
          },
          {
            "vehicle": "Sonata GLS 2.5 Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015045-2",
            "sold": false
          },
          {
            "vehicle": "Sonata GLS 2.7 V6 24V 179cv 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015052-5",
            "sold": false
          },
          {
            "vehicle": "Sonata GLS 3.0 4p Aut",
            "manufacturer": "Hyundai",
            "fipe_code": "015012-6",
            "sold": false
          },
          {
            "vehicle": "Sonata GLS 3.3 V6 24V 235cv 4p Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015066-5",
            "sold": false
          },
          {
            "vehicle": "Terracan 2.5 8V 100cv TB Diesel Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015056-8",
            "sold": false
          },
          {
            "vehicle": "Terracan 2.5 8V 100cv TB Diesel Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015055-0",
            "sold": false
          },
          {
            "vehicle": "Terracan 2.9 CRDI 8V 163cv Diesel Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015059-2",
            "sold": false
          },
          {
            "vehicle": "Trajet GLS 2.7 V6 24v 179cv Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015047-9",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.0 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015064-9",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.0 16V Flex Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015093-2",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.0 16V Flex Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015107-6",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.0 16V Mec.",
            "manufacturer": "Hyundai",
            "fipe_code": "015063-0",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.0 CRDi 16V 112cv Diesel Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015061-4",
            "sold": false
          },
          {
            "vehicle": "Tucson 2.7 MPFI 24V 175cv Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015062-2",
            "sold": false
          },
          {
            "vehicle": "Tucson Ed. Especial 1.6 Turbo 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015139-4",
            "sold": false
          },
          {
            "vehicle": "Tucson GL 1.6 Turbo 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015137-8",
            "sold": false
          },
          {
            "vehicle": "Tucson GLS 1.6 Turbo 16V Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015138-6",
            "sold": false
          },
          {
            "vehicle": "Veloster 1.6 16V  140cv Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015079-7",
            "sold": false
          },
          {
            "vehicle": "VERACRUZ GLS 3.8 4WD Aut.",
            "manufacturer": "Hyundai",
            "fipe_code": "015068-1",
            "sold": false
          },
          {
            "vehicle": "Amigo 2.3 4x2/4x4",
            "manufacturer": "Isuzu",
            "fipe_code": "046001-0",
            "sold": false
          },
          {
            "vehicle": "Hombre 2 WD XS 2.2",
            "manufacturer": "Isuzu",
            "fipe_code": "046002-8",
            "sold": false
          },
          {
            "vehicle": "Rodeo 3.2 V6",
            "manufacturer": "Isuzu",
            "fipe_code": "046003-6",
            "sold": false
          },
          {
            "vehicle": "J2 1.4 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080007-4",
            "sold": false
          },
          {
            "vehicle": "J2 1.4 JET Flex 16V 5p Mec",
            "manufacturer": "JAC",
            "fipe_code": "080012-0",
            "sold": false
          },
          {
            "vehicle": "J3 1.4 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080001-5",
            "sold": false
          },
          {
            "vehicle": "J3 Brasil1.4 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080004-0",
            "sold": false
          },
          {
            "vehicle": "J3 S 1.5 JET Flex 16v VVT 5p",
            "manufacturer": "JAC",
            "fipe_code": "080008-2",
            "sold": false
          },
          {
            "vehicle": "J3 S turin 1.5 JET Flex 16V 4p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080011-2",
            "sold": false
          },
          {
            "vehicle": "J3 turin Sedan 1.4 16V 4p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080002-3",
            "sold": false
          },
          {
            "vehicle": "J3 turin Sedan Brasil 1.4 16V 4p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080005-8",
            "sold": false
          },
          {
            "vehicle": "J5 Sedan 1.5 16V 4p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080006-6",
            "sold": false
          },
          {
            "vehicle": "J6 2.0 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080003-1",
            "sold": false
          },
          {
            "vehicle": "J6 2.0 JET Flex 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080014-7",
            "sold": false
          },
          {
            "vehicle": "T 140 2.8 2p (diesel)",
            "manufacturer": "JAC",
            "fipe_code": "080009-0",
            "sold": false
          },
          {
            "vehicle": "T5 1.5 JET Flex 16V 5p Aut.",
            "manufacturer": "JAC",
            "fipe_code": "080016-3",
            "sold": false
          },
          {
            "vehicle": "T5 1.5 JET Flex 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080015-5",
            "sold": false
          },
          {
            "vehicle": "T6 2.0 JET Flex 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080013-9",
            "sold": false
          },
          {
            "vehicle": "T8 2.0 16V 5p Mec.",
            "manufacturer": "JAC",
            "fipe_code": "080010-4",
            "sold": false
          },
          {
            "vehicle": "Daimler LWB 4.0",
            "manufacturer": "Jaguar",
            "fipe_code": "016006-7",
            "sold": false
          },
          {
            "vehicle": "F-Pace 2.0 Prestige 180cv Diesel Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016052-0",
            "sold": false
          },
          {
            "vehicle": "F-Pace 3.0 FIRST EDITION 380cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016053-9",
            "sold": false
          },
          {
            "vehicle": "F-Pace 3.0 R-Sport 340cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016051-2",
            "sold": false
          },
          {
            "vehicle": "F-Pace 3.0 S 380cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016050-4",
            "sold": false
          },
          {
            "vehicle": "F-Type R AWD Supercharged Coupe 5.0 V8",
            "manufacturer": "Jaguar",
            "fipe_code": "016046-6",
            "sold": false
          },
          {
            "vehicle": "F-Type R Supercharged Coupe 5.0 V8",
            "manufacturer": "Jaguar",
            "fipe_code": "016040-7",
            "sold": false
          },
          {
            "vehicle": "F-Type S Supercharged Conversivel 3.0 V6",
            "manufacturer": "Jaguar",
            "fipe_code": "016032-6",
            "sold": false
          },
          {
            "vehicle": "F-Type S Supercharged Conversivel 5.0 V8",
            "manufacturer": "Jaguar",
            "fipe_code": "016033-4",
            "sold": false
          },
          {
            "vehicle": "F-Type S Supercharged Coupe 3.0 V6",
            "manufacturer": "Jaguar",
            "fipe_code": "016038-5",
            "sold": false
          },
          {
            "vehicle": "F-Type Supercharged Conversivel 3.0 V6 ",
            "manufacturer": "Jaguar",
            "fipe_code": "016031-8",
            "sold": false
          },
          {
            "vehicle": "F-Type Supercharged Coupe 3.0 V6 ",
            "manufacturer": "Jaguar",
            "fipe_code": "016039-3",
            "sold": false
          },
          {
            "vehicle": "S-Type 3.0/ 3.0 SE V6",
            "manufacturer": "Jaguar",
            "fipe_code": "016009-1",
            "sold": false
          },
          {
            "vehicle": "S-Type 4.2/ 4.2 SE/ 4.0 V8 32V",
            "manufacturer": "Jaguar",
            "fipe_code": "016015-6",
            "sold": false
          },
          {
            "vehicle": "S-Type R 4.2 V8 32V 400cv",
            "manufacturer": "Jaguar",
            "fipe_code": "016019-9",
            "sold": false
          },
          {
            "vehicle": "XE 2.0 Turbocharged Pure 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016043-1",
            "sold": false
          },
          {
            "vehicle": "XE 2.0 Turbocharged R-Sport 240cv Aut. ",
            "manufacturer": "Jaguar",
            "fipe_code": "016044-0",
            "sold": false
          },
          {
            "vehicle": "XE 3.0 Supercharged S 340cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016045-8",
            "sold": false
          },
          {
            "vehicle": "XF 2.0 GTDi Prestige 16V 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016047-4",
            "sold": false
          },
          {
            "vehicle": "XF 2.0 GTDI R-SPORT 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016048-2",
            "sold": false
          },
          {
            "vehicle": "XF 2.0 GTDI SPORT LUXURY 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016041-5",
            "sold": false
          },
          {
            "vehicle": "XF 2.0 GTDI SPORT PREMIUM TECH 240cv Aut",
            "manufacturer": "Jaguar",
            "fipe_code": "016042-3",
            "sold": false
          },
          {
            "vehicle": "XF 2.0 Turbo 16V 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016029-6",
            "sold": false
          },
          {
            "vehicle": "XF 3.0 Portfolio Supercharged V6 Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016030-0",
            "sold": false
          },
          {
            "vehicle": "XF 3.0 S V6 380cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016049-0",
            "sold": false
          },
          {
            "vehicle": "XF 3.0 V6 24V 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016023-7",
            "sold": false
          },
          {
            "vehicle": "XF 4.2 V8 32V 300cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016024-5",
            "sold": false
          },
          {
            "vehicle": "XF 5.0 32V V8 385cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016027-0",
            "sold": false
          },
          {
            "vehicle": "XF SV8 4.2 V8 32V 420cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016025-3",
            "sold": false
          },
          {
            "vehicle": "XFR Supercharged 5.0 V8 510cv Aut",
            "manufacturer": "Jaguar",
            "fipe_code": "016026-1",
            "sold": false
          },
          {
            "vehicle": "XFR-S Supercharged 5.0 V8 550cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016036-9",
            "sold": false
          },
          {
            "vehicle": "XJ 2.0 Turbo 16V 240cv Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016035-0",
            "sold": false
          },
          {
            "vehicle": "XJ 3.0 Portfolio Supercharged V6 Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016034-2",
            "sold": false
          },
          {
            "vehicle": "XJ 3.0 R-Sport Supercharged V6 Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016054-7",
            "sold": false
          },
          {
            "vehicle": "XJ S.Sport Supercharged 5.0 V8 32V Aut.",
            "manufacturer": "Jaguar",
            "fipe_code": "016028-8",
            "sold": false
          },
          {
            "vehicle": "XJ Super 4.2 V8 32V 400cv 4p",
            "manufacturer": "Jaguar",
            "fipe_code": "016018-0",
            "sold": false
          },
          {
            "vehicle": "XJ-12",
            "manufacturer": "Jaguar",
            "fipe_code": "016002-4",
            "sold": false
          },
          {
            "vehicle": "XJ-12 Conv.",
            "manufacturer": "Jaguar",
            "fipe_code": "016010-5",
            "sold": false
          },
          {
            "vehicle": "XJ-6",
            "manufacturer": "Jaguar",
            "fipe_code": "016001-6",
            "sold": false
          },
          {
            "vehicle": "XJ-8 Daimler",
            "manufacturer": "Jaguar",
            "fipe_code": "016003-2",
            "sold": false
          },
          {
            "vehicle": "XJ-8 Executive/ Centenary 4.0",
            "manufacturer": "Jaguar",
            "fipe_code": "016004-0",
            "sold": false
          },
          {
            "vehicle": "XJ-8 Executive/ SE 4.2 V8 32V 300cv 4p",
            "manufacturer": "Jaguar",
            "fipe_code": "016016-4",
            "sold": false
          },
          {
            "vehicle": "XJ-8 Sovereign LWB 4.0",
            "manufacturer": "Jaguar",
            "fipe_code": "016005-9",
            "sold": false
          },
          {
            "vehicle": "XJR 4.2 V8 32V 400cv 4p",
            "manufacturer": "Jaguar",
            "fipe_code": "016017-2",
            "sold": false
          },
          {
            "vehicle": "XJS 4.0 24V",
            "manufacturer": "Jaguar",
            "fipe_code": "016011-3",
            "sold": false
          },
          {
            "vehicle": "XJS-C 6.0 V12",
            "manufacturer": "Jaguar",
            "fipe_code": "016012-1",
            "sold": false
          },
          {
            "vehicle": "XK-8 BR Conversível / XK-8 Conversível",
            "manufacturer": "Jaguar",
            "fipe_code": "016008-3",
            "sold": false
          },
          {
            "vehicle": "XK-8 BR Coupê/ XK-8 Coupê",
            "manufacturer": "Jaguar",
            "fipe_code": "016007-5",
            "sold": false
          },
          {
            "vehicle": "XKR Conversível 4.2 / 5.0 32V",
            "manufacturer": "Jaguar",
            "fipe_code": "016022-9",
            "sold": false
          },
          {
            "vehicle": "XKR Coupê  4.2 / 5.0 32V",
            "manufacturer": "Jaguar",
            "fipe_code": "016021-0",
            "sold": false
          },
          {
            "vehicle": "XKR-S Coupé Supercharged 5.0 32V",
            "manufacturer": "Jaguar",
            "fipe_code": "016037-7",
            "sold": false
          },
          {
            "vehicle": "X-Type ESTATE 3.0 24V 230cv",
            "manufacturer": "Jaguar",
            "fipe_code": "016020-2",
            "sold": false
          },
          {
            "vehicle": "X-Type SE 2.5 V6 194cv",
            "manufacturer": "Jaguar",
            "fipe_code": "016013-0",
            "sold": false
          },
          {
            "vehicle": "X-Type SE 3.0 V6 231cv",
            "manufacturer": "Jaguar",
            "fipe_code": "016014-8",
            "sold": false
          },
          {
            "vehicle": "Cherokee Country 4.0 V6 4x4",
            "manufacturer": "Jeep",
            "fipe_code": "017009-7",
            "sold": false
          },
          {
            "vehicle": "Cherokee Limited 3.2 4x4 V6 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017031-3",
            "sold": false
          },
          {
            "vehicle": "Cherokee Limited 3.7 4x4 V6 12V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017022-4",
            "sold": false
          },
          {
            "vehicle": "Cherokee Longitude 3.2 4x4 V6 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017032-1",
            "sold": false
          },
          {
            "vehicle": "Cherokee Rubicon 4.0 V6 4x4",
            "manufacturer": "Jeep",
            "fipe_code": "017010-0",
            "sold": false
          },
          {
            "vehicle": "Cherokee Sport  4.0 Mec./Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017004-6",
            "sold": false
          },
          {
            "vehicle": "Cherokee Sport 2.5 4x4 Diesel",
            "manufacturer": "Jeep",
            "fipe_code": "017012-7",
            "sold": false
          },
          {
            "vehicle": "Cherokee Sport 3.7 4x4 V6 12V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017015-1",
            "sold": false
          },
          {
            "vehicle": "Cherokee Traihawk 3.2 4x4 V6 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017039-9",
            "sold": false
          },
          {
            "vehicle": "Commander Limited 5.7 326cv 5p",
            "manufacturer": "Jeep",
            "fipe_code": "017017-8",
            "sold": false
          },
          {
            "vehicle": "COMPASS LIMITED 2.0 4x2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017047-0",
            "sold": false
          },
          {
            "vehicle": "COMPASS LONGITUDE 2.0 4x2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017046-1",
            "sold": false
          },
          {
            "vehicle": "COMPASS LONGITUDE 2.0 4x4 Dies. 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017045-3",
            "sold": false
          },
          {
            "vehicle": "COMPASS SPORT 2.0 16V 156cv 5p",
            "manufacturer": "Jeep",
            "fipe_code": "017028-3",
            "sold": false
          },
          {
            "vehicle": "COMPASS SPORT 2.0 4x2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017048-8",
            "sold": false
          },
          {
            "vehicle": "COMPASS TRAILHAWK 2.0 4x4 Dies. 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017044-5",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Laredo 2.7 I-5 TB Dies.",
            "manufacturer": "Jeep",
            "fipe_code": "017014-3",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Laredo 3.1 TB Diesel Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017013-5",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Laredo 3.6 4x4 V6 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017025-9",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Laredo 4.0 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017001-1",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limit.4.7 Quad.Drive Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017011-9",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited 3.0 TB Dies. Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017021-6",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited 3.6 4x4 V6 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017024-0",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited 4.7",
            "manufacturer": "Jeep",
            "fipe_code": "017006-2",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited 5.2 Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017002-0",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited 5.7 326cv",
            "manufacturer": "Jeep",
            "fipe_code": "017016-0",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Limited LX 5.9",
            "manufacturer": "Jeep",
            "fipe_code": "017005-4",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Nova Limited 4.7",
            "manufacturer": "Jeep",
            "fipe_code": "017008-9",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee Overland 5.7 326cv",
            "manufacturer": "Jeep",
            "fipe_code": "017019-4",
            "sold": false
          },
          {
            "vehicle": "Grand Cherokee SRT8 6.1 V8 16V 432cv Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017018-6",
            "sold": false
          },
          {
            "vehicle": "Renegade 75 Anos 1.8 4X2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017043-7",
            "sold": false
          },
          {
            "vehicle": "Renegade 75 Anos 2.0 4X4 TB Diesel Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017042-9",
            "sold": false
          },
          {
            "vehicle": "Renegade Lim. Edit. 1.8 4x2 Flex 16V Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017041-0",
            "sold": false
          },
          {
            "vehicle": "Renegade Longitude 1.8 4x2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017035-6",
            "sold": false
          },
          {
            "vehicle": "Renegade Longitude 2.0 4x4 TB Diesel Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017037-2",
            "sold": false
          },
          {
            "vehicle": "Renegade Sport 1.8 4x2 Flex 16V Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017034-8",
            "sold": false
          },
          {
            "vehicle": "Renegade Sport 1.8 4x2 Flex 16V Mec.",
            "manufacturer": "Jeep",
            "fipe_code": "017033-0",
            "sold": false
          },
          {
            "vehicle": "Renegade Sport 2.0 4x4 TB Diesel Aut.",
            "manufacturer": "Jeep",
            "fipe_code": "017036-4",
            "sold": false
          },
          {
            "vehicle": "Renegade Trailhawk 2.0 4x4 TB Diesel Aut",
            "manufacturer": "Jeep",
            "fipe_code": "017038-0",
            "sold": false
          },
          {
            "vehicle": "Renegade1.8 4x2 Flex 16V Mec.",
            "manufacturer": "Jeep",
            "fipe_code": "017040-2",
            "sold": false
          },
          {
            "vehicle": "Wrangler 4.0/Sport 4.0",
            "manufacturer": "Jeep",
            "fipe_code": "017003-8",
            "sold": false
          },
          {
            "vehicle": "Wrangler SAHARA 3.8 V6 199cv 2p",
            "manufacturer": "Jeep",
            "fipe_code": "017026-7",
            "sold": false
          },
          {
            "vehicle": "Wrangler Sport 3.6 V6 284cv 2p",
            "manufacturer": "Jeep",
            "fipe_code": "017029-1",
            "sold": false
          },
          {
            "vehicle": "Wrangler Sport 3.8 V6 199cv",
            "manufacturer": "Jeep",
            "fipe_code": "017020-8",
            "sold": false
          },
          {
            "vehicle": "Wrangler Unlimited 75 Anos 3.6 V6 284cv",
            "manufacturer": "Jeep",
            "fipe_code": "017049-6",
            "sold": false
          },
          {
            "vehicle": "Wrangler Unlimited SAHARA 3.8 V6  4p",
            "manufacturer": "Jeep",
            "fipe_code": "017027-5",
            "sold": false
          },
          {
            "vehicle": "Wrangler Unlimited Sport 3.6 V6 284cv 4p",
            "manufacturer": "Jeep",
            "fipe_code": "017030-5",
            "sold": false
          },
          {
            "vehicle": "Wrangler Unlimited Sport 3.8 V6 199cv",
            "manufacturer": "Jeep",
            "fipe_code": "017023-2",
            "sold": false
          },
          {
            "vehicle": "TOPIC ESCOLAR L 2.2 8V/ 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070004-5",
            "sold": false
          },
          {
            "vehicle": "TOPIC ESCOLAR SL 2.2 8V/ 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070005-3",
            "sold": false
          },
          {
            "vehicle": "TOPIC FURGAO L 2.2 8V/ 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070001-0",
            "sold": false
          },
          {
            "vehicle": "TOPIC VAN L 2.2 8V/ 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070002-9",
            "sold": false
          },
          {
            "vehicle": "TOPIC VAN Lon./GRAN TOPIC SL",
            "manufacturer": "JINBEI",
            "fipe_code": "070007-0",
            "sold": false
          },
          {
            "vehicle": "TOPIC VAN SL 2.2 8V/ 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070003-7",
            "sold": false
          },
          {
            "vehicle": "TOPIC VAN STD 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070006-1",
            "sold": false
          },
          {
            "vehicle": "VKN VAN 2.0 16V 4p",
            "manufacturer": "JINBEI",
            "fipe_code": "070008-8",
            "sold": false
          },
          {
            "vehicle": "Jipe Montez 4x4 CD Teto de Lona Diesel",
            "manufacturer": "JPX",
            "fipe_code": "032001-3",
            "sold": false
          },
          {
            "vehicle": "Jipe Montez 4x4 CD Teto Rígido Diesel",
            "manufacturer": "JPX",
            "fipe_code": "032002-1",
            "sold": false
          },
          {
            "vehicle": "Jipe Montez Std 4x4 Teto de Lona Diesel",
            "manufacturer": "JPX",
            "fipe_code": "032004-8",
            "sold": false
          },
          {
            "vehicle": "Jipe Montez Std 4x4 Teto Rígido Diesel",
            "manufacturer": "JPX",
            "fipe_code": "032005-6",
            "sold": false
          },
          {
            "vehicle": "Picape Montez 1.9 4x4 Diesel",
            "manufacturer": "JPX",
            "fipe_code": "032003-0",
            "sold": false
          },
          {
            "vehicle": "Besta EST 2.7 Diesel (10/12lug.)",
            "manufacturer": "Kia Motors",
            "fipe_code": "018002-5",
            "sold": false
          },
          {
            "vehicle": "Besta EST Full 2.7 Diesel (10/12lug.)",
            "manufacturer": "Kia Motors",
            "fipe_code": "018003-3",
            "sold": false
          },
          {
            "vehicle": "Besta Furgão 2.2 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018004-1",
            "sold": false
          },
          {
            "vehicle": "Besta Furgão 2.7 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018013-0",
            "sold": false
          },
          {
            "vehicle": "Besta Furgão Grand 3.0 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018042-4",
            "sold": false
          },
          {
            "vehicle": "Besta GS 2.7 8V 12L Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018014-9",
            "sold": false
          },
          {
            "vehicle": "Besta GS Full 2.7 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018015-7",
            "sold": false
          },
          {
            "vehicle": "Besta GS Grand 3.0 8V 16L Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018035-1",
            "sold": false
          },
          {
            "vehicle": "Besta ST 2.2 Diesel (12lug.)",
            "manufacturer": "Kia Motors",
            "fipe_code": "018001-7",
            "sold": false
          },
          {
            "vehicle": "Bongo K-2400 2.4 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018027-0",
            "sold": false
          },
          {
            "vehicle": "Bongo K-2500 2.5 4x2 TB Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018065-3",
            "sold": false
          },
          {
            "vehicle": "Bongo K-2700 2.7 4x2/4x4 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018028-9",
            "sold": false
          },
          {
            "vehicle": "Bongo K-2700 2.7 4x4 Basculante Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018058-0",
            "sold": false
          },
          {
            "vehicle": "Bongo K-2700 2.7 4x4 CD Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018048-3",
            "sold": false
          },
          {
            "vehicle": "Bongo K-3500/K-3600/110 3.6 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018029-7",
            "sold": false
          },
          {
            "vehicle": "CADENZA EX 3.5 V6 24V 290cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018080-7",
            "sold": false
          },
          {
            "vehicle": "Carens EX 2.0 16V  Aut",
            "manufacturer": "Kia Motors",
            "fipe_code": "018067-0",
            "sold": false
          },
          {
            "vehicle": "Carens LS 1.8 16V 130cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018045-9",
            "sold": false
          },
          {
            "vehicle": "Carens LS 1.8 16V 130cv Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018044-0",
            "sold": false
          },
          {
            "vehicle": "Carnival 2.5 V6",
            "manufacturer": "Kia Motors",
            "fipe_code": "018016-5",
            "sold": false
          },
          {
            "vehicle": "Carnival EX 3.5 V6 24V 276cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018081-5",
            "sold": false
          },
          {
            "vehicle": "Carnival EX 3.8 V6 24V 242cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018057-2",
            "sold": false
          },
          {
            "vehicle": "Carnival GS 2.9 TDI 16V 125cv Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018043-2",
            "sold": false
          },
          {
            "vehicle": "Cerato 1.6 16 V Flex Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018084-0",
            "sold": false
          },
          {
            "vehicle": "Cerato 1.6 16V  Flex  Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018085-8",
            "sold": false
          },
          {
            "vehicle": "Cerato 1.6 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018064-5",
            "sold": false
          },
          {
            "vehicle": "Cerato 1.6 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018054-8",
            "sold": false
          },
          {
            "vehicle": "Cerato 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018055-6",
            "sold": false
          },
          {
            "vehicle": "Cerato KOUP 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018082-3",
            "sold": false
          },
          {
            "vehicle": "Ceres Pick-Up 2.2 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018022-0",
            "sold": false
          },
          {
            "vehicle": "Clarus GLX 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018030-0",
            "sold": false
          },
          {
            "vehicle": "Clarus GLX 2.0 16V Mec",
            "manufacturer": "Kia Motors",
            "fipe_code": "018010-6",
            "sold": false
          },
          {
            "vehicle": "Clarus Wagon GLX 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018031-9",
            "sold": false
          },
          {
            "vehicle": "Clarus Wagon GLX 2.0 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018017-3",
            "sold": false
          },
          {
            "vehicle": "Grand Carnival EX 3.3 V6 24V 270cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018089-0",
            "sold": false
          },
          {
            "vehicle": "Magentis EX 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018039-4",
            "sold": false
          },
          {
            "vehicle": "Magentis LX 2.0 16V Aut",
            "manufacturer": "Kia Motors",
            "fipe_code": "018062-9",
            "sold": false
          },
          {
            "vehicle": "MOHAVE EX 3.0 V6 24V 256cv TB Dies. Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018069-6",
            "sold": false
          },
          {
            "vehicle": "MOHAVE EX 3.8 V6 24V 275cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018068-8",
            "sold": false
          },
          {
            "vehicle": "MOHAVE EX 4.6 V8 32V 340cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018072-6",
            "sold": false
          },
          {
            "vehicle": "Opirus GL 3.5 V6 24V 202cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018052-1",
            "sold": false
          },
          {
            "vehicle": "Opirus GL 3.8 V6 24V 267cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018063-7",
            "sold": false
          },
          {
            "vehicle": "OPTIMA 2.0 16V 165cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018086-6",
            "sold": false
          },
          {
            "vehicle": "OPTIMA 2.4 16V 180cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018083-1",
            "sold": false
          },
          {
            "vehicle": "Picanto EX 1.1/ 1.0/ 1.0 Flex Aut",
            "manufacturer": "Kia Motors",
            "fipe_code": "018060-2",
            "sold": false
          },
          {
            "vehicle": "Picanto EX 1.1/ 1.0/ 1.0 Flex Mec",
            "manufacturer": "Kia Motors",
            "fipe_code": "018059-9",
            "sold": false
          },
          {
            "vehicle": "QUORIS EX 3.8 V6 24V 294cv Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018087-4",
            "sold": false
          },
          {
            "vehicle": "Sephia GTX 1.5 16V",
            "manufacturer": "Kia Motors",
            "fipe_code": "018007-6",
            "sold": false
          },
          {
            "vehicle": "Sephia GTX 1.6",
            "manufacturer": "Kia Motors",
            "fipe_code": "018008-4",
            "sold": false
          },
          {
            "vehicle": "Sephia LS 1.5 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018019-0",
            "sold": false
          },
          {
            "vehicle": "Sephia LS 1.5 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018018-1",
            "sold": false
          },
          {
            "vehicle": "Sephia SLX",
            "manufacturer": "Kia Motors",
            "fipe_code": "018011-4",
            "sold": false
          },
          {
            "vehicle": "Shuma LS 1.5 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018032-7",
            "sold": false
          },
          {
            "vehicle": "Shuma LS 1.5 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018023-8",
            "sold": false
          },
          {
            "vehicle": "Sorento 2.4 16V 174cv 4x2 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018073-4",
            "sold": false
          },
          {
            "vehicle": "Sorento 2.4 16V 174cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018074-2",
            "sold": false
          },
          {
            "vehicle": "Sorento 3.3 V6 24V 270cv 4x2 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018088-2",
            "sold": false
          },
          {
            "vehicle": "Sorento 3.5 V6 24V 278cv 4x2 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018075-0",
            "sold": false
          },
          {
            "vehicle": "Sorento 3.5 V6 24V 278cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018076-9",
            "sold": false
          },
          {
            "vehicle": "Sorento EX 2.5 140/170cv 4x4 Aut.Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018047-5",
            "sold": false
          },
          {
            "vehicle": "Sorento EX 2.5 16V 4x4 Mec. Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018056-4",
            "sold": false
          },
          {
            "vehicle": "Sorento EX 3.5 V6 24V 197cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018046-7",
            "sold": false
          },
          {
            "vehicle": "Sorento EX 3.8 V6 24V 267cv 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018061-0",
            "sold": false
          },
          {
            "vehicle": "Sorento LX 2.5 16V 140cv 4x4 Aut. Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018050-5",
            "sold": false
          },
          {
            "vehicle": "Sorento LX 2.5 16V 140cv 4x4 Mec. Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018051-3",
            "sold": false
          },
          {
            "vehicle": "SOUL 1.6/ 1.6 16V FLEX Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018070-0",
            "sold": false
          },
          {
            "vehicle": "SOUL 1.6/ 1.6 16V FLEX Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018071-8",
            "sold": false
          },
          {
            "vehicle": "Sportage 2.0 16V Aut",
            "manufacturer": "Kia Motors",
            "fipe_code": "018012-2",
            "sold": false
          },
          {
            "vehicle": "Sportage 2.0 8V TB-IC Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018037-8",
            "sold": false
          },
          {
            "vehicle": "Sportage DLX 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018033-5",
            "sold": false
          },
          {
            "vehicle": "Sportage DLX 2.0 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018024-6",
            "sold": false
          },
          {
            "vehicle": "Sportage DLX 2.2 Diesel Mec",
            "manufacturer": "Kia Motors",
            "fipe_code": "018009-2",
            "sold": false
          },
          {
            "vehicle": "Sportage EX 2.0 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018066-1",
            "sold": false
          },
          {
            "vehicle": "Sportage EX 2.0 16V/ 2.0 16V Flex Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018079-3",
            "sold": false
          },
          {
            "vehicle": "Sportage EX 2.7 V6 4x4 Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018053-0",
            "sold": false
          },
          {
            "vehicle": "Sportage Grand 2.0 16V Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018034-3",
            "sold": false
          },
          {
            "vehicle": "Sportage Grand 2.0 16V Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018020-3",
            "sold": false
          },
          {
            "vehicle": "Sportage Grand 2.0 8V TB-IC Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018025-4",
            "sold": false
          },
          {
            "vehicle": "Sportage GTE 2.2 4x4 Diesel",
            "manufacturer": "Kia Motors",
            "fipe_code": "018026-2",
            "sold": false
          },
          {
            "vehicle": "Sportage LX 2.0 16V 142cv 5p",
            "manufacturer": "Kia Motors",
            "fipe_code": "018049-1",
            "sold": false
          },
          {
            "vehicle": "Sportage LX 2.0 16V/ 2.0 16V Flex  Aut.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018077-7",
            "sold": false
          },
          {
            "vehicle": "Sportage LX 2.0 16V/ 2.0 16V Flex Mec.",
            "manufacturer": "Kia Motors",
            "fipe_code": "018078-5",
            "sold": false
          },
          {
            "vehicle": "Sportage Targa 2.0 16V",
            "manufacturer": "Kia Motors",
            "fipe_code": "018021-1",
            "sold": false
          },
          {
            "vehicle": "Laika 1.5",
            "manufacturer": "Lada",
            "fipe_code": "019005-5",
            "sold": false
          },
          {
            "vehicle": "Laika 1.6",
            "manufacturer": "Lada",
            "fipe_code": "019001-2",
            "sold": false
          },
          {
            "vehicle": "Laika SW 5p",
            "manufacturer": "Lada",
            "fipe_code": "019002-0",
            "sold": false
          },
          {
            "vehicle": "Niva 1.6 RC/ Pantanal 4x4",
            "manufacturer": "Lada",
            "fipe_code": "019003-9",
            "sold": false
          },
          {
            "vehicle": "Niva 1.6/ CD 4x4",
            "manufacturer": "Lada",
            "fipe_code": "019007-1",
            "sold": false
          },
          {
            "vehicle": "Niva 1.7i 4x4",
            "manufacturer": "Lada",
            "fipe_code": "019006-3",
            "sold": false
          },
          {
            "vehicle": "Samara 1.3/ 1.5",
            "manufacturer": "Lada",
            "fipe_code": "019004-7",
            "sold": false
          },
          {
            "vehicle": "AVENTADOR LP 700-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078008-1",
            "sold": false
          },
          {
            "vehicle": "AVENTADOR LP 700-4 ROADSTER",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078009-0",
            "sold": false
          },
          {
            "vehicle": "Gallardo Coupe LP550-2 Bicolore",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078007-3",
            "sold": false
          },
          {
            "vehicle": "Gallardo Coupe LP560-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078001-4",
            "sold": false
          },
          {
            "vehicle": "Gallardo Coupe LP570-4 Sup.Trof.Stradale",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078006-5",
            "sold": false
          },
          {
            "vehicle": "Gallardo Coupe Superleggera LP570-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078004-9",
            "sold": false
          },
          {
            "vehicle": "Gallardo Coupe Valentino Balboni LP550-2",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078003-0",
            "sold": false
          },
          {
            "vehicle": "Gallardo Spider LP560-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078002-2",
            "sold": false
          },
          {
            "vehicle": "Gallardo Spyder Performante LP570-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078005-7",
            "sold": false
          },
          {
            "vehicle": "HURACAN Coupe LP 610-4",
            "manufacturer": "LAMBORGHINI",
            "fipe_code": "078010-3",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.4 122cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033048-5",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.5 HCPU TDi CS Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033013-2",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.5 TDi County Pers. Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033018-3",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.5 TDi Hard Top Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033014-0",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.5 TDi High Capacity Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033015-9",
            "sold": false
          },
          {
            "vehicle": "Defender 110 2.5 TDi Personel Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033016-7",
            "sold": false
          },
          {
            "vehicle": "Defender 110 LE FIRE & ICE 2.4 T. Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033052-3",
            "sold": false
          },
          {
            "vehicle": "Defender 110 RAW 2.4 122cv T. Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033067-1",
            "sold": false
          },
          {
            "vehicle": "Defender 110 SVX Lim.Edit. 2.4 T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033050-7",
            "sold": false
          },
          {
            "vehicle": "Defender 110 TD5 2.5 4x4 Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033036-1",
            "sold": false
          },
          {
            "vehicle": "Defender 110 TDI County SW Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033001-9",
            "sold": false
          },
          {
            "vehicle": "Defender 110 TDI SW Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033004-3",
            "sold": false
          },
          {
            "vehicle": "Defender 130 Chassis CD Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033010-8",
            "sold": false
          },
          {
            "vehicle": "Defender 130 High CAP Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033011-6",
            "sold": false
          },
          {
            "vehicle": "Defender 130 TDI CD Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033012-4",
            "sold": false
          },
          {
            "vehicle": "Defender 90 2.4 122cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033047-7",
            "sold": false
          },
          {
            "vehicle": "Defender 90 2.5 TDi CS Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033017-5",
            "sold": false
          },
          {
            "vehicle": "Defender 90 LE FIRE & ICE 2.4 T. Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033051-5",
            "sold": false
          },
          {
            "vehicle": "Defender 90 RAW 2.4 122cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033066-3",
            "sold": false
          },
          {
            "vehicle": "Defender 90 Soft Top Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033003-5",
            "sold": false
          },
          {
            "vehicle": "Defender 90 SVX Lim.Edit. 2.4 T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033049-3",
            "sold": false
          },
          {
            "vehicle": "Defender 90 TDI CSW Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033006-0",
            "sold": false
          },
          {
            "vehicle": "Defender 90 TDI Hard Top Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033002-7",
            "sold": false
          },
          {
            "vehicle": "Defender 90 TDI SW Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033005-1",
            "sold": false
          },
          {
            "vehicle": "Discovery ES 3.9 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033008-6",
            "sold": false
          },
          {
            "vehicle": "Discovery ES 4.0 V8 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033021-3",
            "sold": false
          },
          {
            "vehicle": "Discovery ES TD5 2.5 4x4 4p Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033023-0",
            "sold": false
          },
          {
            "vehicle": "Discovery ES TD5 2.5 4x4 4p Diesel Mec.",
            "manufacturer": "Land Rover",
            "fipe_code": "033022-1",
            "sold": false
          },
          {
            "vehicle": "Discovery RAW 3.0 4x4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033106-6",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport BLACK 2.2 4x4 Dies. Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033121-0",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport HSE 2.0 4x4 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033104-0",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport HSE 2.0 4x4 Diesel Aut",
            "manufacturer": "Land Rover",
            "fipe_code": "033127-9",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport HSE 2.2 4x4 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033118-0",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport HSE L. 2.2 4x4 Die. Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033119-8",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport HSE Luxury 2.0 4x4 Aut. ",
            "manufacturer": "Land Rover",
            "fipe_code": "033105-8",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport SE 2.0 4x4 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033103-1",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport SE 2.0 4x4 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033126-0",
            "sold": false
          },
          {
            "vehicle": "Discovery Sport SE 2.2 4x4 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033117-1",
            "sold": false
          },
          {
            "vehicle": "Discovery TDI 2.5 Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033007-8",
            "sold": false
          },
          {
            "vehicle": "Discovery3 HSE 2.7 4x4 TDI Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033028-0",
            "sold": false
          },
          {
            "vehicle": "Discovery3 HSE 4.4 V8 4x4 299cv Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033027-2",
            "sold": false
          },
          {
            "vehicle": "Discovery3 S 2.7 4x4 TDI Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033029-9",
            "sold": false
          },
          {
            "vehicle": "Discovery3 S 4.0 V6 4x4 215cv Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033037-0",
            "sold": false
          },
          {
            "vehicle": "Discovery3 SE 2.7 4x4 TDI Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033045-0",
            "sold": false
          },
          {
            "vehicle": "Discovery3 SE 4.0 V6 4x4 215cv Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033030-2",
            "sold": false
          },
          {
            "vehicle": "Discovery4 B&W 3.0 4x4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033071-0",
            "sold": false
          },
          {
            "vehicle": "Discovery4 BLACK 3.0 4x4 SDV6 Dies. Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033111-2",
            "sold": false
          },
          {
            "vehicle": "Discovery4 GRAPHITE 3.0 4x4 SDV6 Die.Aut",
            "manufacturer": "Land Rover",
            "fipe_code": "033124-4",
            "sold": false
          },
          {
            "vehicle": "Discovery4 HSE 2.7 4x4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033057-4",
            "sold": false
          },
          {
            "vehicle": "Discovery4 HSE 3.0 4x4 TDV6/SDV6 Die.Aut",
            "manufacturer": "Land Rover",
            "fipe_code": "033059-0",
            "sold": false
          },
          {
            "vehicle": "Discovery4 HSE 5.0 4x4 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033060-4",
            "sold": false
          },
          {
            "vehicle": "Discovery4 S 2.7 4x4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033056-6",
            "sold": false
          },
          {
            "vehicle": "Discovery4 S 3.0 4X4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033080-9",
            "sold": false
          },
          {
            "vehicle": "Discovery4 SE 2.7 4x4 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033053-1",
            "sold": false
          },
          {
            "vehicle": "Discovery4 SE 3.0 4x4 TDV6/SDV6 Die.Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033058-2",
            "sold": false
          },
          {
            "vehicle": "Freelander 1.8 16v",
            "manufacturer": "Land Rover",
            "fipe_code": "033020-5",
            "sold": false
          },
          {
            "vehicle": "Freelander HSE 2.5 V6 24V 177cv 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033025-6",
            "sold": false
          },
          {
            "vehicle": "Freelander HSE3 2.5 V6 24V 177cv 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033034-5",
            "sold": false
          },
          {
            "vehicle": "Freelander S/ SE 2.5 V6 24V 177cv 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033024-8",
            "sold": false
          },
          {
            "vehicle": "Freelander SE3 2.5 V6 24V 177cv 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033026-4",
            "sold": false
          },
          {
            "vehicle": "Freelander2 Dynamique 2.2 SD4 T. Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033081-7",
            "sold": false
          },
          {
            "vehicle": "Freelander2 HSE 2.2 SD4 190cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033070-1",
            "sold": false
          },
          {
            "vehicle": "Freelander2 I6 HSE 3.2 232cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033042-6",
            "sold": false
          },
          {
            "vehicle": "Freelander2 I6 LE Sport 3.2 232cv Aut. 5",
            "manufacturer": "Land Rover",
            "fipe_code": "033065-5",
            "sold": false
          },
          {
            "vehicle": "Freelander2 I6 S 3.2 232cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033041-8",
            "sold": false
          },
          {
            "vehicle": "Freelander2 I6 S Sport 3.2 232cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033063-9",
            "sold": false
          },
          {
            "vehicle": "Freelander2 I6 SE 3.2 232cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033040-0",
            "sold": false
          },
          {
            "vehicle": "Freelander2 S 2.2 SD4 190cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033068-0",
            "sold": false
          },
          {
            "vehicle": "Freelander2 SE 2.2 SD4 190cv T.Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033069-8",
            "sold": false
          },
          {
            "vehicle": "Freelander2 SI4 Dyn. 2.0 240cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033089-2",
            "sold": false
          },
          {
            "vehicle": "Freelander2 SI4 HSE 2.0 240cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033090-6",
            "sold": false
          },
          {
            "vehicle": "Freelander2 SI4 S 2.0 240cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033087-6",
            "sold": false
          },
          {
            "vehicle": "Freelander2 SI4 SE 2.0 240cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033088-4",
            "sold": false
          },
          {
            "vehicle": "New Range/Range Rover Vogue 3.9 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033019-1",
            "sold": false
          },
          {
            "vehicle": "Range R. EVO DYNAMIQUE BLACK 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033109-0",
            "sold": false
          },
          {
            "vehicle": "Range R. EVO STYLE 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033110-4",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE LONDON 2.0 240cv Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033107-4",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE SD4 HSE 2.2 Dies. Aut.5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033122-8",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE SD4 SE 2.2 Dies. Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033112-0",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE SI4 HSE Dynamic 2.0 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033115-5",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE SI4 SE 2.0 Aut. 5p ",
            "manufacturer": "Land Rover",
            "fipe_code": "033113-9",
            "sold": false
          },
          {
            "vehicle": "Range R. EVOQUE SI4 SE Dynamic 2.0 Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033116-3",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport Autob. 3.0 SDV6 Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033086-8",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport Autob. Dyn.SCHA. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033101-5",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport Autob. SUPERCHAR. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033085-0",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport HSE Dynamic SUPERC.5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033093-0",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport HSE SUPERCHARGED 3.0 V6 ",
            "manufacturer": "Land Rover",
            "fipe_code": "033094-9",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport HST SUPERCHARGED 3.0 V6",
            "manufacturer": "Land Rover",
            "fipe_code": "033120-1",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport L. Edit. SCHARGED 3.0 V6",
            "manufacturer": "Land Rover",
            "fipe_code": "033125-2",
            "sold": false
          },
          {
            "vehicle": "Range R. Sport TECH S 3.0 SDV6 Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033108-2",
            "sold": false
          },
          {
            "vehicle": "Range R. SVAutobiography SUPERC. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033123-6",
            "sold": false
          },
          {
            "vehicle": "Range R. Vogue 4.4 TDV8/SDV8 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033064-7",
            "sold": false
          },
          {
            "vehicle": "Range R. Vogue Autob. SUPERCHAR. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033084-1",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Dynamic 2.0 Aut 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033076-0",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Dynamic 2.0 Aut 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033077-9",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Dynamic Tech 2.0 Aut 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033078-7",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Dynamic Tech 2.0 Aut 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033079-5",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE ONE SICILIAN 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033095-7",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Prestige 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033074-4",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Prestige 2.2 5p Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033099-0",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Prestige Tech 2.0 Aut 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033075-2",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE PrestigeTech 2.2 5p Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033098-1",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Pure  2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033073-6",
            "sold": false
          },
          {
            "vehicle": "Range R.EVOQUE Pure 2.0 Aut. 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033072-8",
            "sold": false
          },
          {
            "vehicle": "Range R.Sport HSE Dynamic 4.4 SDV8 Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033114-7",
            "sold": false
          },
          {
            "vehicle": "Range R.Sport SE 3.0 4x4 TDV6/SDV6 Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033055-8",
            "sold": false
          },
          {
            "vehicle": "Range Rover EVOQUE Pure Tech 2.0 Aut. 3p",
            "manufacturer": "Land Rover",
            "fipe_code": "033092-2",
            "sold": false
          },
          {
            "vehicle": "Range Rover EVOQUE Pure Tech 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033082-5",
            "sold": false
          },
          {
            "vehicle": "Range Rover EVOQUE SE 2.0 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033128-7",
            "sold": false
          },
          {
            "vehicle": "Range Rover EVOQUE Zanzibar 2.0 Aut. 5p",
            "manufacturer": "Land Rover",
            "fipe_code": "033100-7",
            "sold": false
          },
          {
            "vehicle": "Range Rover HSE 4.4/ 4.6",
            "manufacturer": "Land Rover",
            "fipe_code": "033009-4",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport 3.6 TDV8 272cv Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033044-2",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport HSE 2.7 190cv TB Dies.",
            "manufacturer": "Land Rover",
            "fipe_code": "033035-3",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport HSE 3.0 SDV6  Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033062-0",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport HSE 4.4 V8 32V 295cv",
            "manufacturer": "Land Rover",
            "fipe_code": "033033-7",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport HSE SUPERCHAR. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033054-0",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport SE 2.7 190cv TB Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033038-8",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport SE 3.6 TDV8 272cv Dies",
            "manufacturer": "Land Rover",
            "fipe_code": "033046-9",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport SE 4.4 V8 32V 299cv",
            "manufacturer": "Land Rover",
            "fipe_code": "033039-6",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport SUPERCHAGED 4.2 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033032-9",
            "sold": false
          },
          {
            "vehicle": "Range Rover Sport SVR SUPERCHAGED 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033102-3",
            "sold": false
          },
          {
            "vehicle": "Range Rover SUPERCHAGED 4.2 V8 396cv",
            "manufacturer": "Land Rover",
            "fipe_code": "033031-0",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue 3.0 TDV6 Diesel Aut.",
            "manufacturer": "Land Rover",
            "fipe_code": "033096-5",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue 3.6 TDV8 272cv Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033043-4",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue 4.4 Auto. SDV8 Diesel.",
            "manufacturer": "Land Rover",
            "fipe_code": "033083-3",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue HSE 3.0 TDV6 Diesel",
            "manufacturer": "Land Rover",
            "fipe_code": "033097-3",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue SE 4.4 SDV8 Dies. Aut",
            "manufacturer": "Land Rover",
            "fipe_code": "033091-4",
            "sold": false
          },
          {
            "vehicle": "Range Rover Vogue SE SUPERCHAR. 5.0 V8",
            "manufacturer": "Land Rover",
            "fipe_code": "033061-2",
            "sold": false
          },
          {
            "vehicle": "CT200h  1.8 16V HIBRID Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057034-6",
            "sold": false
          },
          {
            "vehicle": "CT200h F-Sport 1.8 16V HIBRID Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057035-4",
            "sold": false
          },
          {
            "vehicle": "ES-300 3.0",
            "manufacturer": "Lexus",
            "fipe_code": "057020-6",
            "sold": false
          },
          {
            "vehicle": "ES-330 3.3 24V 228cv",
            "manufacturer": "Lexus",
            "fipe_code": "057027-3",
            "sold": false
          },
          {
            "vehicle": "ES-350 3.5 24V 284cv",
            "manufacturer": "Lexus",
            "fipe_code": "057028-1",
            "sold": false
          },
          {
            "vehicle": "GS 300 3.0 V6 24V",
            "manufacturer": "Lexus",
            "fipe_code": "057001-0",
            "sold": false
          },
          {
            "vehicle": "IS-250 2.5 24V 208cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057036-2",
            "sold": false
          },
          {
            "vehicle": "IS-250 F Sport 2.5 24V 208cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057037-0",
            "sold": false
          },
          {
            "vehicle": "IS-300 3.0 24v 231cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057030-3",
            "sold": false
          },
          {
            "vehicle": "LS 400 4.0",
            "manufacturer": "Lexus",
            "fipe_code": "057025-7",
            "sold": false
          },
          {
            "vehicle": "LS 430 4.3 32V 281cv",
            "manufacturer": "Lexus",
            "fipe_code": "057026-5",
            "sold": false
          },
          {
            "vehicle": "LS 460 4.6 32V 347cv",
            "manufacturer": "Lexus",
            "fipe_code": "057029-0",
            "sold": false
          },
          {
            "vehicle": "LS-460L 4.6 V8 32v 347cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057031-1",
            "sold": false
          },
          {
            "vehicle": "NX-200t F-Sport 2.0 16v 238cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057039-7",
            "sold": false
          },
          {
            "vehicle": "NX-200t Luxury 2.0 16V 238cv Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057038-9",
            "sold": false
          },
          {
            "vehicle": "RX 300 3.0 V6 24V",
            "manufacturer": "Lexus",
            "fipe_code": "057002-8",
            "sold": false
          },
          {
            "vehicle": "RX-350 3.5 24v  Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057032-0",
            "sold": false
          },
          {
            "vehicle": "RX-350 F-Sport 3.5 24V Aut.",
            "manufacturer": "Lexus",
            "fipe_code": "057033-8",
            "sold": false
          },
          {
            "vehicle": "SC 400 4.0 V8",
            "manufacturer": "Lexus",
            "fipe_code": "057003-6",
            "sold": false
          },
          {
            "vehicle": "320 ELITE 1.3 16V 88cv 5p",
            "manufacturer": "LIFAN",
            "fipe_code": "077001-9",
            "sold": false
          },
          {
            "vehicle": "530 1.5 16V 103cv 4p",
            "manufacturer": "LIFAN",
            "fipe_code": "077005-1",
            "sold": false
          },
          {
            "vehicle": "530 TALENT 1.5 16V 103cv 4p",
            "manufacturer": "LIFAN",
            "fipe_code": "077006-0",
            "sold": false
          },
          {
            "vehicle": "620 TALENT 1.6 16V 106cv 4p",
            "manufacturer": "LIFAN",
            "fipe_code": "077002-7",
            "sold": false
          },
          {
            "vehicle": "FOISON 1.3 16V 85cv 2p",
            "manufacturer": "LIFAN",
            "fipe_code": "077004-3",
            "sold": false
          },
          {
            "vehicle": "X60 1.8 16V 128cv 5p Mec.",
            "manufacturer": "LIFAN",
            "fipe_code": "077003-5",
            "sold": false
          },
          {
            "vehicle": "H1 1.8 20V Turbo 180cv 2p",
            "manufacturer": "LOBINI",
            "fipe_code": "063001-2",
            "sold": false
          },
          {
            "vehicle": "Elan S-2 1.6 16V",
            "manufacturer": "Lotus",
            "fipe_code": "047001-5",
            "sold": false
          },
          {
            "vehicle": "Esprit S-4 2.2 16V",
            "manufacturer": "Lotus",
            "fipe_code": "047002-3",
            "sold": false
          },
          {
            "vehicle": "PIK-UP CD 2.2 4X2 (diesel) Mec.",
            "manufacturer": "Mahindra",
            "fipe_code": "065007-2",
            "sold": false
          },
          {
            "vehicle": "PIK-UP CD 2.2 4X4 (diesel) Mec.",
            "manufacturer": "Mahindra",
            "fipe_code": "065005-6",
            "sold": false
          },
          {
            "vehicle": "PIK-UP CS 2.2 4X2 (diesel) Mec.",
            "manufacturer": "Mahindra",
            "fipe_code": "065006-4",
            "sold": false
          },
          {
            "vehicle": "PIK-UP CS 2.2 4X4 (diesel) Mec.",
            "manufacturer": "Mahindra",
            "fipe_code": "065004-8",
            "sold": false
          },
          {
            "vehicle": "SCORPIO 2.6 CD TB Diesel CRDe 4x4",
            "manufacturer": "Mahindra",
            "fipe_code": "065003-0",
            "sold": false
          },
          {
            "vehicle": "SCORPIO 2.6 CS/ Chassi TB Dies. CRDe 4x4",
            "manufacturer": "Mahindra",
            "fipe_code": "065002-1",
            "sold": false
          },
          {
            "vehicle": "SCORPIO GLX SUV 2.6 TB Diesel CRDe 4WD",
            "manufacturer": "Mahindra",
            "fipe_code": "065001-3",
            "sold": false
          },
          {
            "vehicle": "SUV 2.2 4x4 (diesel) Mec.",
            "manufacturer": "Mahindra",
            "fipe_code": "065008-0",
            "sold": false
          },
          {
            "vehicle": "222 SE/SR 2.0 V6",
            "manufacturer": "Maserati",
            "fipe_code": "034003-0",
            "sold": false
          },
          {
            "vehicle": "228",
            "manufacturer": "Maserati",
            "fipe_code": "034004-9",
            "sold": false
          },
          {
            "vehicle": "3200 GT Cupê",
            "manufacturer": "Maserati",
            "fipe_code": "034001-4",
            "sold": false
          },
          {
            "vehicle": "3200 GT Cupê Aut.",
            "manufacturer": "Maserati",
            "fipe_code": "034011-1",
            "sold": false
          },
          {
            "vehicle": "430 2.0 V6",
            "manufacturer": "Maserati",
            "fipe_code": "034005-7",
            "sold": false
          },
          {
            "vehicle": "430 II 2.0 V6",
            "manufacturer": "Maserati",
            "fipe_code": "034006-5",
            "sold": false
          },
          {
            "vehicle": "Coupé CC 4.2 V8 32V 390cv",
            "manufacturer": "Maserati",
            "fipe_code": "034012-0",
            "sold": false
          },
          {
            "vehicle": "Ghibli 2.0 V6",
            "manufacturer": "Maserati",
            "fipe_code": "034007-3",
            "sold": false
          },
          {
            "vehicle": "Ghibli 3.0 V6 330cv Aut.",
            "manufacturer": "Maserati",
            "fipe_code": "034027-8",
            "sold": false
          },
          {
            "vehicle": "Ghibli S Q4 3.0 V6 410cv Aut.",
            "manufacturer": "Maserati",
            "fipe_code": "034026-0",
            "sold": false
          },
          {
            "vehicle": "Gran Turismo Sport 4.7 V8 32v 460cv",
            "manufacturer": "Maserati",
            "fipe_code": "034028-6",
            "sold": false
          },
          {
            "vehicle": "GranCabrio 4.7 V8 32V 440cv",
            "manufacturer": "Maserati",
            "fipe_code": "034023-5",
            "sold": false
          },
          {
            "vehicle": "GranSport 4.2 V8 32V 400cv",
            "manufacturer": "Maserati",
            "fipe_code": "034016-2",
            "sold": false
          },
          {
            "vehicle": "GranSport Spyder 4.2 V8 32V 400cv",
            "manufacturer": "Maserati",
            "fipe_code": "034017-0",
            "sold": false
          },
          {
            "vehicle": "GranTurismo 4.2 V8 32V 405cv",
            "manufacturer": "Maserati",
            "fipe_code": "034018-9",
            "sold": false
          },
          {
            "vehicle": "GranTurismo MC Stradale 4.7 V8 32V 450cv",
            "manufacturer": "Maserati",
            "fipe_code": "034024-3",
            "sold": false
          },
          {
            "vehicle": "GranTurismo S 4.7 V8 32V/ MC Line",
            "manufacturer": "Maserati",
            "fipe_code": "034021-9",
            "sold": false
          },
          {
            "vehicle": "Levante 3.0 V6 350cv Aut.",
            "manufacturer": "Maserati",
            "fipe_code": "034029-4",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Automatica 4.2 32V 400cv",
            "manufacturer": "Maserati",
            "fipe_code": "034019-7",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Evolucione Aut.",
            "manufacturer": "Maserati",
            "fipe_code": "034002-2",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Evolucione Mec.",
            "manufacturer": "Maserati",
            "fipe_code": "034010-3",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Executive 4.2 32V 400cv",
            "manufacturer": "Maserati",
            "fipe_code": "034014-6",
            "sold": false
          },
          {
            "vehicle": "Quattroporte GTS 3.8 V8 32V 530cv",
            "manufacturer": "Maserati",
            "fipe_code": "034025-1",
            "sold": false
          },
          {
            "vehicle": "Quattroporte S 4.7 V8 32V 430cv",
            "manufacturer": "Maserati",
            "fipe_code": "034020-0",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Sport 4.2 32V 400cv/430cv",
            "manufacturer": "Maserati",
            "fipe_code": "034015-4",
            "sold": false
          },
          {
            "vehicle": "Quattroporte Sport GT-S 4.7 V8 32V 440cv",
            "manufacturer": "Maserati",
            "fipe_code": "034022-7",
            "sold": false
          },
          {
            "vehicle": "Shamal 3.2 V8",
            "manufacturer": "Maserati",
            "fipe_code": "034008-1",
            "sold": false
          },
          {
            "vehicle": "Spider IE 2.0 V6",
            "manufacturer": "Maserati",
            "fipe_code": "034009-0",
            "sold": false
          },
          {
            "vehicle": "Spyder CC 4.2 V8 32V 390cv",
            "manufacturer": "Maserati",
            "fipe_code": "034013-8",
            "sold": false
          },
          {
            "vehicle": "Pick-Up 4x2 Curto/Longo 2.5 TDI Diesel",
            "manufacturer": "Matra",
            "fipe_code": "058001-5",
            "sold": false
          },
          {
            "vehicle": "Pick-Up 4x4 Curto/Longo 2.5 TDI  Diesel",
            "manufacturer": "Matra",
            "fipe_code": "058002-3",
            "sold": false
          },
          {
            "vehicle": "Pick-Up CD 4x2 Curto/Longo 2.5 TDI Dies.",
            "manufacturer": "Matra",
            "fipe_code": "058003-1",
            "sold": false
          },
          {
            "vehicle": "Pick-Up CD 4x4 Curto/Longo 2.5 TDI Dies.",
            "manufacturer": "Matra",
            "fipe_code": "058004-0",
            "sold": false
          },
          {
            "vehicle": "323 1.6 16V",
            "manufacturer": "Mazda",
            "fipe_code": "020018-2",
            "sold": false
          },
          {
            "vehicle": "626 GLX",
            "manufacturer": "Mazda",
            "fipe_code": "020001-8",
            "sold": false
          },
          {
            "vehicle": "626 GT",
            "manufacturer": "Mazda",
            "fipe_code": "020002-6",
            "sold": false
          },
          {
            "vehicle": "626 Sedan Aut.",
            "manufacturer": "Mazda",
            "fipe_code": "020022-0",
            "sold": false
          },
          {
            "vehicle": "626 Sedan High",
            "manufacturer": "Mazda",
            "fipe_code": "020014-0",
            "sold": false
          },
          {
            "vehicle": "626 Sedan Mec.",
            "manufacturer": "Mazda",
            "fipe_code": "020013-1",
            "sold": false
          },
          {
            "vehicle": "626 Sedan Top",
            "manufacturer": "Mazda",
            "fipe_code": "020015-8",
            "sold": false
          },
          {
            "vehicle": "626 SW",
            "manufacturer": "Mazda",
            "fipe_code": "020016-6",
            "sold": false
          },
          {
            "vehicle": "626 SW High",
            "manufacturer": "Mazda",
            "fipe_code": "020017-4",
            "sold": false
          },
          {
            "vehicle": "929 V6 Aut",
            "manufacturer": "Mazda",
            "fipe_code": "020003-4",
            "sold": false
          },
          {
            "vehicle": "B2200 Pick-Up 2.2 Diesel",
            "manufacturer": "Mazda",
            "fipe_code": "020007-7",
            "sold": false
          },
          {
            "vehicle": "B2200 Pick-Up CD 2.2 Diesel",
            "manufacturer": "Mazda",
            "fipe_code": "020008-5",
            "sold": false
          },
          {
            "vehicle": "B-2500 Pick-Up 2.5 Diesel",
            "manufacturer": "Mazda",
            "fipe_code": "020010-7",
            "sold": false
          },
          {
            "vehicle": "B-2500 Pick-Up 4x4 2.5 Diesel",
            "manufacturer": "Mazda",
            "fipe_code": "020025-5",
            "sold": false
          },
          {
            "vehicle": "B-2500 Pick-Up CD 4x4 2.5 Diesel",
            "manufacturer": "Mazda",
            "fipe_code": "020011-5",
            "sold": false
          },
          {
            "vehicle": "Millenia 3.0 V6 24V",
            "manufacturer": "Mazda",
            "fipe_code": "020019-0",
            "sold": false
          },
          {
            "vehicle": "MPV Minivan Aut",
            "manufacturer": "Mazda",
            "fipe_code": "020004-2",
            "sold": false
          },
          {
            "vehicle": "MX-3 1.6 16V",
            "manufacturer": "Mazda",
            "fipe_code": "020005-0",
            "sold": false
          },
          {
            "vehicle": "MX-3 GS 1.8 V6 24V",
            "manufacturer": "Mazda",
            "fipe_code": "020020-4",
            "sold": false
          },
          {
            "vehicle": "MX-5 Mec",
            "manufacturer": "Mazda",
            "fipe_code": "020006-9",
            "sold": false
          },
          {
            "vehicle": "Navajo LX 3.0 V6",
            "manufacturer": "Mazda",
            "fipe_code": "020021-2",
            "sold": false
          },
          {
            "vehicle": "Protegé Aut.",
            "manufacturer": "Mazda",
            "fipe_code": "020023-9",
            "sold": false
          },
          {
            "vehicle": "Protegé High",
            "manufacturer": "Mazda",
            "fipe_code": "020024-7",
            "sold": false
          },
          {
            "vehicle": "Protegé Mec.",
            "manufacturer": "Mazda",
            "fipe_code": "020009-3",
            "sold": false
          },
          {
            "vehicle": "RX 7 2.6 Turbo",
            "manufacturer": "Mazda",
            "fipe_code": "020012-3",
            "sold": false
          },
          {
            "vehicle": "180-D Pick-Up/Furgão 2.4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021060-9",
            "sold": false
          },
          {
            "vehicle": "180-D Van 2.4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021061-7",
            "sold": false
          },
          {
            "vehicle": "190-E 2.3",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021062-5",
            "sold": false
          },
          {
            "vehicle": "230-E 2.3",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021063-3",
            "sold": false
          },
          {
            "vehicle": "260-E 2.6",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021067-6",
            "sold": false
          },
          {
            "vehicle": "300-D 3.0 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021068-4",
            "sold": false
          },
          {
            "vehicle": "300-E 3.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021069-2",
            "sold": false
          },
          {
            "vehicle": "300-SE 3.0/3.2",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021045-5",
            "sold": false
          },
          {
            "vehicle": "300-SL 3.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021070-6",
            "sold": false
          },
          {
            "vehicle": "300-TE Wagon 3.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021071-4",
            "sold": false
          },
          {
            "vehicle": "500-E 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021072-2",
            "sold": false
          },
          {
            "vehicle": "500-SEC/ SL",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021047-1",
            "sold": false
          },
          {
            "vehicle": "500-SEL 5.0/ 5.6",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021074-9",
            "sold": false
          },
          {
            "vehicle": "560-SEL 5.6",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021075-7",
            "sold": false
          },
          {
            "vehicle": "C-180 1.6 Turbo 16V/Flex 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021331-4",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Avant. 1.6/1.6 FlexTB 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021308-0",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Classic 1.8 16V 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021239-3",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Coupe 1.8 16V 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021246-6",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Coupe Sport 1.6 TB 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021281-4",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Estate Avant. 1.6 TB 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021320-9",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Exc. 1.6/1.6 Flex TB 16V  Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021307-1",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Sport 1.6 TB 16V 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021280-6",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Touring 1.8 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021255-5",
            "sold": false
          },
          {
            "vehicle": "C-180 CGI Touring Sport 1.6 TB Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021282-2",
            "sold": false
          },
          {
            "vehicle": "C-180 Classic/Classic Plus/Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021001-3",
            "sold": false
          },
          {
            "vehicle": "C-180 Kompressor Classic 1.6 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021230-0",
            "sold": false
          },
          {
            "vehicle": "C-180 Kompressor Classic 1.8 16V 143cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021151-6",
            "sold": false
          },
          {
            "vehicle": "C-200 Avantgarde 2.0 TB 16V 184cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021310-1",
            "sold": false
          },
          {
            "vehicle": "C-200 CGI Avantgarde 1.8 16V 184cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021233-4",
            "sold": false
          },
          {
            "vehicle": "C-200 CGI Sport 1.8 TB 16V 184cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021234-2",
            "sold": false
          },
          {
            "vehicle": "C-200 CGI Touring Avantgarde 1.8 16V Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021237-7",
            "sold": false
          },
          {
            "vehicle": "C-200 Classic/Sport",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021076-5",
            "sold": false
          },
          {
            "vehicle": "C-200 Kompressor 2.0 V6 16v 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021123-0",
            "sold": false
          },
          {
            "vehicle": "C-200 Kompressor Avant.1.8 16V Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021193-1",
            "sold": false
          },
          {
            "vehicle": "C-200 Kompressor Classic 1.8 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021202-4",
            "sold": false
          },
          {
            "vehicle": "C-200 Sportcoupé Komp. 2.0 16V 163cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021143-5",
            "sold": false
          },
          {
            "vehicle": "C-200 Touring Komp. 2.0 16V 163cv 5p Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021142-7",
            "sold": false
          },
          {
            "vehicle": "C-200 Touring Komp. Avant. 1.8 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021210-5",
            "sold": false
          },
          {
            "vehicle": "C-220 Classic/Elegance/Sport",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021002-1",
            "sold": false
          },
          {
            "vehicle": "C-230 Avantgarde 2.5 V6 24V 204cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021181-8",
            "sold": false
          },
          {
            "vehicle": "C-230 Komp. Sportcoupé 2.3 16V 197cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021132-0",
            "sold": false
          },
          {
            "vehicle": "C-230 Kompressor Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021003-0",
            "sold": false
          },
          {
            "vehicle": "C-230 Sport/ Eleg./Touring Eleg.Plus 2.3",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021077-3",
            "sold": false
          },
          {
            "vehicle": "C-230 Touring Avant. 2.5 24V 204cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021192-3",
            "sold": false
          },
          {
            "vehicle": "C-230 Touring Kompressor",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021022-6",
            "sold": false
          },
          {
            "vehicle": "C-240 AvantGarde 2.4/ 2.6 4p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021119-2",
            "sold": false
          },
          {
            "vehicle": "C-240 Classic",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021050-1",
            "sold": false
          },
          {
            "vehicle": "C-240 Elegance 2.4",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021040-4",
            "sold": false
          },
          {
            "vehicle": "C-240 Elegance 2.4 V6 24v 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021120-6",
            "sold": false
          },
          {
            "vehicle": "C-250 CGI Sport 1.8 16V Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021242-3",
            "sold": false
          },
          {
            "vehicle": "C-250 CGI Sport Coupe 1.8 16V TB Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021286-5",
            "sold": false
          },
          {
            "vehicle": "C-250 Sport 2.0 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021309-8",
            "sold": false
          },
          {
            "vehicle": "C-250 Sport Coupe 2.0 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021350-0",
            "sold": false
          },
          {
            "vehicle": "C-280 Avantgarde 3.0 V6 231cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021203-2",
            "sold": false
          },
          {
            "vehicle": "C-280 Classic/Sport",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021005-6",
            "sold": false
          },
          {
            "vehicle": "C-280 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021004-8",
            "sold": false
          },
          {
            "vehicle": "C-280 Touring",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021041-2",
            "sold": false
          },
          {
            "vehicle": "C-300 Anniversary Lim. Edit. 2.0 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021365-9",
            "sold": false
          },
          {
            "vehicle": "C-300 Avantgarde 3.0 V6 24V 231cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021222-9",
            "sold": false
          },
          {
            "vehicle": "C-300 Cabriolet 2.0 245cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021368-3",
            "sold": false
          },
          {
            "vehicle": "C-300 Sport 3.0 V6 231cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021236-9",
            "sold": false
          },
          {
            "vehicle": "C-320 AvantGarde 3.2 V6 24v 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021121-4",
            "sold": false
          },
          {
            "vehicle": "C-320 Elegance 3.2 V6 24v 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021122-2",
            "sold": false
          },
          {
            "vehicle": "C-320 Touring 3.2 V6 18v 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021131-1",
            "sold": false
          },
          {
            "vehicle": "C-350 Avantgarde/ Elegance 3.5 V6 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021179-6",
            "sold": false
          },
          {
            "vehicle": "C-350 CGI Sport 3.5 306cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021249-0",
            "sold": false
          },
          {
            "vehicle": "C-350 Sport 3.5 V6 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021215-6",
            "sold": false
          },
          {
            "vehicle": "C-350 Sportcoupé 3.5 24V  272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021185-0",
            "sold": false
          },
          {
            "vehicle": "C-350 Touring AvantGarde 3.5 24V 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021186-9",
            "sold": false
          },
          {
            "vehicle": "C-36 AMG",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021006-4",
            "sold": false
          },
          {
            "vehicle": "C-43 AMG",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021023-4",
            "sold": false
          },
          {
            "vehicle": "C-43 AMG 3.0 V6 Bi-Turbo 367cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021361-6",
            "sold": false
          },
          {
            "vehicle": "C-43 Coupe AMG 3.0 V6 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021357-8",
            "sold": false
          },
          {
            "vehicle": "C-450 AMG Sport 3.0 TB 362cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021333-0",
            "sold": false
          },
          {
            "vehicle": "C-55 AMG 24V 367cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021183-4",
            "sold": false
          },
          {
            "vehicle": "C-55 Touring AMG 24V 367cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021184-2",
            "sold": false
          },
          {
            "vehicle": "C-63 AMG 4.0 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021349-7",
            "sold": false
          },
          {
            "vehicle": "C-63 AMG 6.2 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021209-1",
            "sold": false
          },
          {
            "vehicle": "C-63 Coupe AMG 6.2 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021251-2",
            "sold": false
          },
          {
            "vehicle": "C-63 Coupe AMG Black Series 6.3 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021279-2",
            "sold": false
          },
          {
            "vehicle": "C-63 S AMG 4.0 V8  Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021330-6",
            "sold": false
          },
          {
            "vehicle": "C-63 S Coupe AMG 4.0 V8  Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021370-5",
            "sold": false
          },
          {
            "vehicle": "C-63 Touring AMG 6.2 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021224-5",
            "sold": false
          },
          {
            "vehicle": "CL-500 5.0/ 5.5",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021046-3",
            "sold": false
          },
          {
            "vehicle": "CL-600 6.0/ 5.5",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021078-1",
            "sold": false
          },
          {
            "vehicle": "CL-63 AMG 6.2 V8 32V 525cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021206-7",
            "sold": false
          },
          {
            "vehicle": "CL-65 AMG 6.0 V12 612cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021225-3",
            "sold": false
          },
          {
            "vehicle": "CLA-200 CGI 1.6 TB 16V 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021301-2",
            "sold": false
          },
          {
            "vehicle": "CLA-200 Urban 1.6 TB 16V/Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021312-8",
            "sold": false
          },
          {
            "vehicle": "CLA-200 Vision 1.6 TB 16V Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021316-0",
            "sold": false
          },
          {
            "vehicle": "CLA-250 Sport 2.0 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021311-0",
            "sold": false
          },
          {
            "vehicle": "CLA-45 AMG CGI 2.0 TB Aut. ",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021306-3",
            "sold": false
          },
          {
            "vehicle": "Classe A 160 Classic Semi-Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021051-0",
            "sold": false
          },
          {
            "vehicle": "Classe A 160 Classic/ Spirit Mec.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021048-0",
            "sold": false
          },
          {
            "vehicle": "Classe A 160 Elegance Mec.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021049-8",
            "sold": false
          },
          {
            "vehicle": "Classe A 160 Elegance Semi-Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021098-6",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 AvantGarde 1.9 8V 125cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021161-3",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 AvantGarde 1.9 8V 125cv Mec",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021141-9",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 Classic 1.9 Semi-Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021113-3",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 Classic/ Spirit 1.9 Mec.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021112-5",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 Elegance 1.9 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021129-0",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 Elegance 1.9 Mec.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021114-1",
            "sold": false
          },
          {
            "vehicle": "Classe A 190 Elegance 1.9 Semi-Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021115-0",
            "sold": false
          },
          {
            "vehicle": "Classe A 200 1.6 TB 16V Style 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021288-1",
            "sold": false
          },
          {
            "vehicle": "Classe A 200 1.6 TB 16V Urban 156cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021289-0",
            "sold": false
          },
          {
            "vehicle": "Classe A 200 1.6 TB/Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021327-6",
            "sold": false
          },
          {
            "vehicle": "Classe A 200 Elegance 2.0 136cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021182-6",
            "sold": false
          },
          {
            "vehicle": "Classe A 250 2.0 TB Sport Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021304-7",
            "sold": false
          },
          {
            "vehicle": "Classe A 45 AMG 2.0 Turbo 360cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021300-4",
            "sold": false
          },
          {
            "vehicle": "Classe B 170 1.7 116cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021218-0",
            "sold": false
          },
          {
            "vehicle": "Classe B 180 1.7 116cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021220-2",
            "sold": false
          },
          {
            "vehicle": "Classe B 200 2.0 136cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021194-0",
            "sold": false
          },
          {
            "vehicle": "Classe B 200 2.0 Turbo 193cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021197-4",
            "sold": false
          },
          {
            "vehicle": "Classe B 200 CGI 1.6 TB Sport 156cv Aut ",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021278-4",
            "sold": false
          },
          {
            "vehicle": "Classe B 200 CGI 1.6 TB/Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021277-6",
            "sold": false
          },
          {
            "vehicle": "Classe R 500 5.0 V8 306cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021195-8",
            "sold": false
          },
          {
            "vehicle": "Classe R 500 L 5.5 V8 388cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021226-1",
            "sold": false
          },
          {
            "vehicle": "Classic 6.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021082-0",
            "sold": false
          },
          {
            "vehicle": "CLC 200 Kompressor 1.8 184cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021219-9",
            "sold": false
          },
          {
            "vehicle": "CLK-230 Cabriolet Kompressor",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021099-4",
            "sold": false
          },
          {
            "vehicle": "CLK-230 Kompressor",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021024-2",
            "sold": false
          },
          {
            "vehicle": "CLK-320 AvantGarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021053-6",
            "sold": false
          },
          {
            "vehicle": "CLK-320 AvantGarde Cabriolet",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021116-8",
            "sold": false
          },
          {
            "vehicle": "CLK-320 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021025-0",
            "sold": false
          },
          {
            "vehicle": "CLK-320 Elegance Cabriolet",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021052-8",
            "sold": false
          },
          {
            "vehicle": "CLK-320 Sport",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021026-9",
            "sold": false
          },
          {
            "vehicle": "CLK-320 Sport Cabriolet",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021054-4",
            "sold": false
          },
          {
            "vehicle": "CLK-350 Avant./ Elegance 3.5 24V 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021188-5",
            "sold": false
          },
          {
            "vehicle": "CLK-350 Avant./Eleg. Cabriolet 3.5 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021190-7",
            "sold": false
          },
          {
            "vehicle": "CLK-430 Avantgard Cabriolet 4.3 V8 24v",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021126-5",
            "sold": false
          },
          {
            "vehicle": "CLK-430 AvantGarde 4.3",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021118-4",
            "sold": false
          },
          {
            "vehicle": "CLK-430 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021027-7",
            "sold": false
          },
          {
            "vehicle": "CLK-430 Elegance Cabriolet 4.3 V8 24v",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021127-3",
            "sold": false
          },
          {
            "vehicle": "CLK-430 Sport 4.3",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021028-5",
            "sold": false
          },
          {
            "vehicle": "CLK-500 Cabriolet V8 24V 306cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021163-0",
            "sold": false
          },
          {
            "vehicle": "CLK-500 Elegance/ Avant. 5.0 V8 24V Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021145-1",
            "sold": false
          },
          {
            "vehicle": "CLK-55 AMG Cabriolet V8 24v 367cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021156-7",
            "sold": false
          },
          {
            "vehicle": "CLK-55 AMG V8 24V 367cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021153-2",
            "sold": false
          },
          {
            "vehicle": "CLS-350 CGI 3.5 306cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021250-4",
            "sold": false
          },
          {
            "vehicle": "CLS-350 V6 24V 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021189-3",
            "sold": false
          },
          {
            "vehicle": "CLS-400 3.5 V6 Bi-Turbo 333cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021321-7",
            "sold": false
          },
          {
            "vehicle": "CLS-500 V8 24V",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021175-3",
            "sold": false
          },
          {
            "vehicle": "CLS-55 Kompressor AMG 5.5 V8 24V 476cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021180-0",
            "sold": false
          },
          {
            "vehicle": "CLS-63 AMG 5.5 V8 557cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021245-8",
            "sold": false
          },
          {
            "vehicle": "CLS-63 AMG 6.2 V8 32V 514cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021196-6",
            "sold": false
          },
          {
            "vehicle": "E-190",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021007-2",
            "sold": false
          },
          {
            "vehicle": "E-190 Classic",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021107-9",
            "sold": false
          },
          {
            "vehicle": "E-200 Classic 2.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021079-0",
            "sold": false
          },
          {
            "vehicle": "E-220 Classic/Touring 2.2",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021064-1",
            "sold": false
          },
          {
            "vehicle": "E-230 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021008-0",
            "sold": false
          },
          {
            "vehicle": "E-240 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021029-3",
            "sold": false
          },
          {
            "vehicle": "E-250 Cabriolet 2.0 TB 211CV Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021305-5",
            "sold": false
          },
          {
            "vehicle": "E-250 CGI Avantgarde 1.8 16V 204cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021243-1",
            "sold": false
          },
          {
            "vehicle": "E-250 CGI Avantgarde 2.0 TB 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021295-4",
            "sold": false
          },
          {
            "vehicle": "E-250 CGI Coupe 1.8 16V 204cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021244-0",
            "sold": false
          },
          {
            "vehicle": "E-250 CGI VR4 2.0 TB Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021323-3",
            "sold": false
          },
          {
            "vehicle": "E-250 Coupe 2.0 TB 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021298-9",
            "sold": false
          },
          {
            "vehicle": "E-250 Excl. Launch Ed. 2.0 TB 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021362-4",
            "sold": false
          },
          {
            "vehicle": "E-280 Classic 2.8",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021065-0",
            "sold": false
          },
          {
            "vehicle": "E-280 Touring 2.8",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021066-8",
            "sold": false
          },
          {
            "vehicle": "E-320",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021009-9",
            "sold": false
          },
          {
            "vehicle": "E-320 3.2 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021030-7",
            "sold": false
          },
          {
            "vehicle": "E-320 Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021031-5",
            "sold": false
          },
          {
            "vehicle": "E-320 C 3.2/ CA Classic 3.2",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021094-3",
            "sold": false
          },
          {
            "vehicle": "E-320 Cabriolet",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021093-5",
            "sold": false
          },
          {
            "vehicle": "E-320 Touring Avantgarde 24V V6 5p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021160-5",
            "sold": false
          },
          {
            "vehicle": "E-320 Touring Eleg./Classic",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021033-1",
            "sold": false
          },
          {
            "vehicle": "E-350  Touring Avant/Eleg. 3.5 24V 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021187-7",
            "sold": false
          },
          {
            "vehicle": "E-350 Avant./Avant. Execut. 3.5 V6 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021221-0",
            "sold": false
          },
          {
            "vehicle": "E-350 Avantgarde/ Elegance 3.5 V6 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021178-8",
            "sold": false
          },
          {
            "vehicle": "E-350 Cabrio 3.5 V6 272cv 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021235-0",
            "sold": false
          },
          {
            "vehicle": "E-350 CGI Avantgarde Sport 3.5 306cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021275-0",
            "sold": false
          },
          {
            "vehicle": "E-350 CGI Cabriolet 3.5 306cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021294-6",
            "sold": false
          },
          {
            "vehicle": "E-350 CGI Executive 3.5 306cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021256-3",
            "sold": false
          },
          {
            "vehicle": "E-350 CGI Guard VR4 3.5 306cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021296-2",
            "sold": false
          },
          {
            "vehicle": "E-350 Coupe 3.5 V6 272cv 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021223-7",
            "sold": false
          },
          {
            "vehicle": "E-350 Sport 3.5 V6 272cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021208-3",
            "sold": false
          },
          {
            "vehicle": "E-400 Avantgarde 3.5 V6 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021317-9",
            "sold": false
          },
          {
            "vehicle": "E-400 Cabriolet 3.5 V6 Bi-Turbo Aut. ",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021329-2",
            "sold": false
          },
          {
            "vehicle": "E-420 Classic/Elegance/Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021010-2",
            "sold": false
          },
          {
            "vehicle": "E-420 Touring Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021059-5",
            "sold": false
          },
          {
            "vehicle": "E-430 Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021035-8",
            "sold": false
          },
          {
            "vehicle": "E-430 Elegance",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021034-0",
            "sold": false
          },
          {
            "vehicle": "E-430 Touring Avantgarde",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021036-6",
            "sold": false
          },
          {
            "vehicle": "E-500 Avangarde Executive 5.5 V8 388cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021240-7",
            "sold": false
          },
          {
            "vehicle": "E-500 Avant. (Blindada) 5.0 V8 4p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021216-4",
            "sold": false
          },
          {
            "vehicle": "E-500 CGI Guard VR4 4.7 V8 408cv 4p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021274-1",
            "sold": false
          },
          {
            "vehicle": "E-500 CGI Guard VR4 5.5 V8 4p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021257-1",
            "sold": false
          },
          {
            "vehicle": "E-500 Coupe Sport 4.7 V8 408cv Aut 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021263-6",
            "sold": false
          },
          {
            "vehicle": "E-500 Coupe Sport 5.5 V8 388cv 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021238-5",
            "sold": false
          },
          {
            "vehicle": "E-500 Elegance/ Avant. 5.0 V8 24V 4p Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021144-3",
            "sold": false
          },
          {
            "vehicle": "E-500 Sport Avantgarde 5.0 V8 24V 4p Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021211-3",
            "sold": false
          },
          {
            "vehicle": "E-500 Tour. Avant./ Eleg. 24V V8 5p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021158-3",
            "sold": false
          },
          {
            "vehicle": "E-55 AMG",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021037-4",
            "sold": false
          },
          {
            "vehicle": "E-55 Touring AMG 24V V8 5p Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021159-1",
            "sold": false
          },
          {
            "vehicle": "E-63 AMG 5.5 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021258-0",
            "sold": false
          },
          {
            "vehicle": "E-63 AMG 6.2 V8 32V",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021198-2",
            "sold": false
          },
          {
            "vehicle": "E-63 Touring AMG 5.5 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021259-8",
            "sold": false
          },
          {
            "vehicle": "E-63 Touring AMG 6.2 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021241-5",
            "sold": false
          },
          {
            "vehicle": "G-55 Kompressor AMG 5.5 V8 507cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021229-6",
            "sold": false
          },
          {
            "vehicle": "G-63 AMG 5.5 Bi-Turbo 32V 4x4 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021293-8",
            "sold": false
          },
          {
            "vehicle": "GL-350 Sport 3.0 V6 258cv 4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021299-7",
            "sold": false
          },
          {
            "vehicle": "GL-500 4.7 Bi-Turbo V8 4x4 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021287-3",
            "sold": false
          },
          {
            "vehicle": "GL-500 5.5 V8 32V 4x4 388cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021199-0",
            "sold": false
          },
          {
            "vehicle": "GL-63 AMG 5.5 Bi-Turbo 32V 4x4 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021292-0",
            "sold": false
          },
          {
            "vehicle": "GLA 200 Adv. 1.6/1.6 TB 16V Flex  Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021313-6",
            "sold": false
          },
          {
            "vehicle": "GLA 200 Enduro 1.6 TB 16V Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021338-1",
            "sold": false
          },
          {
            "vehicle": "GLA 200 Style 1.6 TB 16V/Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021322-5",
            "sold": false
          },
          {
            "vehicle": "GLA 200 Vis. Black Ed. 1.6 TB 16V  Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021315-2",
            "sold": false
          },
          {
            "vehicle": "GLA 200 Vision 1.6/1.6 TB 16V Flex Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021314-4",
            "sold": false
          },
          {
            "vehicle": "GLA 250 Enduro 2.0 TB 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021339-0",
            "sold": false
          },
          {
            "vehicle": "GLA 250 Sport 2.0 TB 16V 4x2  211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021325-0",
            "sold": false
          },
          {
            "vehicle": "GLA 250 Sport TB 16V 4x4 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021363-2",
            "sold": false
          },
          {
            "vehicle": "GLA 250 Vision 2.0 TB 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021324-1",
            "sold": false
          },
          {
            "vehicle": "GLA 45 AMG 2.0 Turbo 4x4 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021318-7",
            "sold": false
          },
          {
            "vehicle": "GLC 250 2.0 TB 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021344-6",
            "sold": false
          },
          {
            "vehicle": "GLC 250 Sport 2.0 TB 16V 211cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021343-8",
            "sold": false
          },
          {
            "vehicle": "GLC-43 AMG 3.0 V6 Bi-Turbo 367cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021367-5",
            "sold": false
          },
          {
            "vehicle": "GLE-350 3.0 V6 258cv 4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021340-3",
            "sold": false
          },
          {
            "vehicle": "GLE-350 Family 3.0 V6 258cv 4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021342-0",
            "sold": false
          },
          {
            "vehicle": "GLE-350 Sport 3.0 V6 258cv 4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021341-1",
            "sold": false
          },
          {
            "vehicle": "GLE-400 Coupe 3.0 V6 333cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021345-4",
            "sold": false
          },
          {
            "vehicle": "GLE-400 Highway Coupe 3.0 V6 333cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021364-0",
            "sold": false
          },
          {
            "vehicle": "GLE-400 Night Coupe 3.0 V6 333cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021346-2",
            "sold": false
          },
          {
            "vehicle": "GLE-43 AMG 3.0 V6 Bi-Turbo 367cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021369-1",
            "sold": false
          },
          {
            "vehicle": "GLE-450 AMG 3.0 V6 367cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021356-0",
            "sold": false
          },
          {
            "vehicle": "GLE-63 AMG 5.5 V8 557cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021360-8",
            "sold": false
          },
          {
            "vehicle": "GLE-63 AMG Coupe 5.5 v8 557cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021347-0",
            "sold": false
          },
          {
            "vehicle": "GLK 220 CDI 2.2 TB 4X4 170cv Aut. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021290-3",
            "sold": false
          },
          {
            "vehicle": "GLK 220 Sport CDI 2.2 TB 4X4 Aut. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021291-1",
            "sold": false
          },
          {
            "vehicle": "GLK 280 3.0 V6 24V 4x4 231cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021217-2",
            "sold": false
          },
          {
            "vehicle": "GLK 300 3.0 V6 24V 4x4 231cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021228-8",
            "sold": false
          },
          {
            "vehicle": "GLK 300 3.5 CGI V6 4x4 252cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021284-9",
            "sold": false
          },
          {
            "vehicle": "GLS-350 V6 258cv 4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021348-9",
            "sold": false
          },
          {
            "vehicle": "GT AMG 4.0 V8 Bi-Turbo 462cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021358-6",
            "sold": false
          },
          {
            "vehicle": "GT S AMG 4.0 V8 Bi-Turbo 510cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021332-2",
            "sold": false
          },
          {
            "vehicle": "ML-230 4x4",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021038-2",
            "sold": false
          },
          {
            "vehicle": "ML-320 3.0 V6 224cv 4x4 diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021212-1",
            "sold": false
          },
          {
            "vehicle": "ML-320 4x4",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021039-0",
            "sold": false
          },
          {
            "vehicle": "ML-350 3.0 V6  4x4 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021227-0",
            "sold": false
          },
          {
            "vehicle": "ML-350 3.5  4x4",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021172-9",
            "sold": false
          },
          {
            "vehicle": "ML-350 Sport 3.0 V6 258cv 4X4 Diesel ",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021297-0",
            "sold": false
          },
          {
            "vehicle": "ML-350 Sport CGI 3.5 V6 306cv 4x4 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021264-4",
            "sold": false
          },
          {
            "vehicle": "ML-430",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021056-0",
            "sold": false
          },
          {
            "vehicle": "ML-500 V8 24V ",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021155-9",
            "sold": false
          },
          {
            "vehicle": "ML-55 AMG 5.5 24v",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021128-1",
            "sold": false
          },
          {
            "vehicle": "ML-63 AMG 5.5 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021276-8",
            "sold": false
          },
          {
            "vehicle": "ML-63 AMG 6.2 V8 32V 510cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021201-6",
            "sold": false
          },
          {
            "vehicle": "S-320 L Classic/Wagon Classic 3.2",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021013-7",
            "sold": false
          },
          {
            "vehicle": "S-400 Hybrid 3.5 V6 279cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021231-8",
            "sold": false
          },
          {
            "vehicle": "S-420 Classic 4.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021080-3",
            "sold": false
          },
          {
            "vehicle": "S-500 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021014-5",
            "sold": false
          },
          {
            "vehicle": "S-500 C Classic 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021081-1",
            "sold": false
          },
          {
            "vehicle": "S-500 L/ L Classic/ Wagon Classic 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021092-7",
            "sold": false
          },
          {
            "vehicle": "S-500L 4.7 Bi-Turbo V8 455cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021302-0",
            "sold": false
          },
          {
            "vehicle": "S-500L 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021057-9",
            "sold": false
          },
          {
            "vehicle": "S-55 AMG V8 24V 364cv/ 500cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021173-7",
            "sold": false
          },
          {
            "vehicle": "S-600 L/ L Classic/ Wagon Classic 6.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021083-8",
            "sold": false
          },
          {
            "vehicle": "S-600/ S-600 C Classic 6.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021015-3",
            "sold": false
          },
          {
            "vehicle": "S-63 AMG 5.5 V8 BI-TURBO Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021252-0",
            "sold": false
          },
          {
            "vehicle": "S-63 AMG 6.2 V8 525cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021204-0",
            "sold": false
          },
          {
            "vehicle": "S-63 Cabriolet AMG 5.5 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021366-7",
            "sold": false
          },
          {
            "vehicle": "S-63 Coupe AMG 5.5 V8 Bi-Turbo Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021328-4",
            "sold": false
          },
          {
            "vehicle": "S-63 L AMG 6.2 V8/5.5 V8 Bi-TB Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021205-9",
            "sold": false
          },
          {
            "vehicle": "S-65 AMG 6.0 V12 612cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021200-8",
            "sold": false
          },
          {
            "vehicle": "S-65 L AMG 6.0 V12 630cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021359-4",
            "sold": false
          },
          {
            "vehicle": "SE-500",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021016-1",
            "sold": false
          },
          {
            "vehicle": "SL-280 Classic 2.8",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021084-6",
            "sold": false
          },
          {
            "vehicle": "SL-320 3.2/Classic 3.2",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021017-0",
            "sold": false
          },
          {
            "vehicle": "SL-350 3.5 V6 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021191-5",
            "sold": false
          },
          {
            "vehicle": "SL-350 Sport 3.5 V6 316cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021232-6",
            "sold": false
          },
          {
            "vehicle": "SL-400 3.0 Bi-Turbo V6 2p",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021326-8",
            "sold": false
          },
          {
            "vehicle": "SL-500 5.0 e 5.5/ Classic 5.0",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021018-8",
            "sold": false
          },
          {
            "vehicle": "SL-55 AMG V8 24V 500cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021154-0",
            "sold": false
          },
          {
            "vehicle": "SL-600",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021019-6",
            "sold": false
          },
          {
            "vehicle": "SL-63 AMG 5.5 Bi-Turbo V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021285-7",
            "sold": false
          },
          {
            "vehicle": "SL-63 AMG 6.2 V8 525cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021213-0",
            "sold": false
          },
          {
            "vehicle": "SL-65 AMG 6.0 V12 612cv Aut",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021214-8",
            "sold": false
          },
          {
            "vehicle": "SLC-300 2.0 Turbo 245cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021351-9",
            "sold": false
          },
          {
            "vehicle": "SLC-43 AMG 3.0 V6 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021355-1",
            "sold": false
          },
          {
            "vehicle": "SLK-200 Kompressor 16V/ 200 CGI 16V",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021162-1",
            "sold": false
          },
          {
            "vehicle": "SLK-230 Kompressor",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021021-8",
            "sold": false
          },
          {
            "vehicle": "SLK-230 Plus",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021058-7",
            "sold": false
          },
          {
            "vehicle": "SLK-250 CGI 1.8 16V 204cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021254-7",
            "sold": false
          },
          {
            "vehicle": "SLK-300 2.0 Turbo 245cv Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021334-9",
            "sold": false
          },
          {
            "vehicle": "SLK-320 3.2 218cv",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021125-7",
            "sold": false
          },
          {
            "vehicle": "SLK-350 3.5 V6/SLK-350 CGI",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021177-0",
            "sold": false
          },
          {
            "vehicle": "SLK-55 AMG V8 24V",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021176-1",
            "sold": false
          },
          {
            "vehicle": "SLS-63 AMG 6.2 8V Black Series Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021303-9",
            "sold": false
          },
          {
            "vehicle": "SLS-63 AMG 6.2 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021247-4",
            "sold": false
          },
          {
            "vehicle": "SLS-63 AMG Roadster 6.3 V8 Aut.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021253-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Chassi Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021095-1",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Furgão 2.5 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021117-6",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Pick-Up Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021096-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Van Exec. 9Lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021097-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Van Luxo/Exec. 12/14L Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021085-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Van Std 12e14L/Luxo 9L.Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021087-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 310 Van Std. 9Lug. 2.5 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021088-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Chassi 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021146-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Chassi E. Longa 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021319-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Furgão Curto 2.2 Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021133-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Furgão E.Longo T.Alto Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021248-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Furgão Longo 2.2  Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021134-6",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Furgão Longo Teto alto Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021135-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Street Luxo 2.2 16Lug. Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021149-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 Street Std. 2.2 16Lug. Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021150-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 VAN Luxo 2.2 109cv 13L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021138-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 VAN Luxo 2.2 109cv 16L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021148-6",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 VAN Std. 2.2 109cv 13L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021137-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 311 VAN Std. 2.2 109cv 16L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021136-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Furgão Curto Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021042-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Furgão Longo Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021124-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Furgão Longo T.Alto Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021130-3",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Exec. 10Lug. 2.5 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021089-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Exec. 12Lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021104-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Luxo 10lug.  Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021043-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Luxo 12lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021102-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Luxo 15lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021044-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Luxo 16lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021103-6",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Luxo Lotação 16lug.Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021106-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Std 12lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021100-1",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Std 16lug. Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021101-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Std Lotação 16lug. Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021105-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Street Luxo 15Lug.Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021090-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312 Van Street Std. 15Lug.Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021091-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 312-D Chassi Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021111-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313  Chassi Ex. Longo 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021353-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Chassi 2.2 129cv Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021166-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Chassi Longo 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021352-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Furgão Curto 2.2 129cv Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021164-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Furgão Ex. Longo T. A. Die.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021354-3",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Furgão Longo 2.2 129cv Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021165-6",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 Furgão Longo T. Alto Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021147-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Exec 2.2 Mec/S-Aut Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021139-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Luxo 2.2 129cv 13L.Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021168-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Luxo 2.2 129cv 16L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021140-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Std. 2.2 129cv 13L.Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021167-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Std. 2.2 129cv 16L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021174-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Street Luxo 16L. Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021169-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 313 VAN Street Std. 16L. Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021170-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 412-D Chassi Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021108-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 413 Furgão Longo T.Alto Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021157-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 413 VAN Luxo 2.2 16 e 20L Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021207-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 413-D Chassi Curto/Longo Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021152-4",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 Chassi L. 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021265-2",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 Furgão Curto T.B. 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021268-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 Furgão E.L.T.Alt. 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021269-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 Furgão Lon.T.Alto 2.2 Dies",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021261-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 Furgão Lon.T.Bai. 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021260-1",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 VAN Luxo T.A. 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021273-3",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 VAN Luxo T.B. 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021272-5",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 VAN Standard T.A. 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021271-7",
            "sold": false
          },
          {
            "vehicle": "Sprinter 415 VAN Standard T.B. 2.2 Dies.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021270-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 515 Chassi E. L. 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021267-9",
            "sold": false
          },
          {
            "vehicle": "Sprinter 515 Chassi L. 2.2  Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021266-0",
            "sold": false
          },
          {
            "vehicle": "Sprinter 515 Furgão E.L.T. Alto 2.2 Die.",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021262-8",
            "sold": false
          },
          {
            "vehicle": "Sprinter 515 VAN 2.2 Diesel",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021283-0",
            "sold": false
          },
          {
            "vehicle": "VITO 111 CDI Furgão 1.6 TB Diesel 4p Mec",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021337-3",
            "sold": false
          },
          {
            "vehicle": "VITO TOURER 119 Comf. 2.0 Flex 9Lug. Mec",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021336-5",
            "sold": false
          },
          {
            "vehicle": "VITO TOURER 119 Luxo 2.0 Flex 8Lug. Mec",
            "manufacturer": "Mercedes-Benz",
            "fipe_code": "021335-7",
            "sold": false
          },
          {
            "vehicle": "Mystique GS 2.5 V6 Mec.",
            "manufacturer": "Mercury",
            "fipe_code": "048001-0",
            "sold": false
          },
          {
            "vehicle": "Sable LS 3.0 V6",
            "manufacturer": "Mercury",
            "fipe_code": "048002-9",
            "sold": false
          },
          {
            "vehicle": "550 1.8 16V Turbo 170cv Aut.",
            "manufacturer": "MG",
            "fipe_code": "076001-3",
            "sold": false
          },
          {
            "vehicle": "MG6 1.8 16V Turbo 170cv Aut.",
            "manufacturer": "MG",
            "fipe_code": "076002-1",
            "sold": false
          },
          {
            "vehicle": "COOPER 1.5 Turbo 12V 3p Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071029-6",
            "sold": false
          },
          {
            "vehicle": "COOPER 1.5 Turbo 12V 5p Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071033-4",
            "sold": false
          },
          {
            "vehicle": "COOPER 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071002-4",
            "sold": false
          },
          {
            "vehicle": "COOPER 1.6 Mec.",
            "manufacturer": "MINI",
            "fipe_code": "071001-6",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071005-9",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO John Works 1.6  Mec.",
            "manufacturer": "MINI",
            "fipe_code": "071012-1",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO John Works 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071024-5",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO S 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071006-7",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO S 2.0 16V Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071036-9",
            "sold": false
          },
          {
            "vehicle": "COOPER CABRIO S HIGHGATE 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071020-2",
            "sold": false
          },
          {
            "vehicle": "COOPER Clubman 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071015-6",
            "sold": false
          },
          {
            "vehicle": "COOPER Country. John Works ALL4 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071027-0",
            "sold": false
          },
          {
            "vehicle": "COOPER Countryman 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071010-5",
            "sold": false
          },
          {
            "vehicle": "COOPER Countryman S 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071009-1",
            "sold": false
          },
          {
            "vehicle": "COOPER Countryman S ALL4 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071007-5",
            "sold": false
          },
          {
            "vehicle": "COOPER COUPÉ 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071013-0",
            "sold": false
          },
          {
            "vehicle": "COOPER COUPÉ John Works 1.6 Aut",
            "manufacturer": "MINI",
            "fipe_code": "071022-9",
            "sold": false
          },
          {
            "vehicle": "COOPER COUPÉ S 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071014-8",
            "sold": false
          },
          {
            "vehicle": "COOPER John Works 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071021-0",
            "sold": false
          },
          {
            "vehicle": "COOPER John Works 1.6 Mec.",
            "manufacturer": "MINI",
            "fipe_code": "071008-3",
            "sold": false
          },
          {
            "vehicle": "COOPER John Works 2.0 Turbo 3p Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071034-2",
            "sold": false
          },
          {
            "vehicle": "COOPER PACEMAN S 1.6 16V 184cv Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071019-9",
            "sold": false
          },
          {
            "vehicle": "COOPER PACEMAN S ALL4 1.6 16V Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071026-1",
            "sold": false
          },
          {
            "vehicle": "COOPER PACEMAN S John Works ALL4 1.6 Aut",
            "manufacturer": "MINI",
            "fipe_code": "071028-8",
            "sold": false
          },
          {
            "vehicle": "COOPER ROADSTER 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071017-2",
            "sold": false
          },
          {
            "vehicle": "COOPER ROADSTER John Works 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071023-7",
            "sold": false
          },
          {
            "vehicle": "COOPER ROADSTER S 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071018-0",
            "sold": false
          },
          {
            "vehicle": "COOPER S 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071003-2",
            "sold": false
          },
          {
            "vehicle": "COOPER S 2.0 Turbo 16v 3p Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071030-0",
            "sold": false
          },
          {
            "vehicle": "COOPER S 2.0 Turbo 16V 3p Mec.",
            "manufacturer": "MINI",
            "fipe_code": "071031-8",
            "sold": false
          },
          {
            "vehicle": "COOPER S 2.0 Turbo 16V 5p Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071032-6",
            "sold": false
          },
          {
            "vehicle": "COOPER S BAYSWATER 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071025-3",
            "sold": false
          },
          {
            "vehicle": "COOPER S Clubman 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071004-0",
            "sold": false
          },
          {
            "vehicle": "COOPER S Clubman 2.0 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071035-0",
            "sold": false
          },
          {
            "vehicle": "ONE 1.6  Mec.",
            "manufacturer": "MINI",
            "fipe_code": "071011-3",
            "sold": false
          },
          {
            "vehicle": "ONE 1.6 Aut.",
            "manufacturer": "MINI",
            "fipe_code": "071016-4",
            "sold": false
          },
          {
            "vehicle": "3000 GT SL 3.0",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022041-8",
            "sold": false
          },
          {
            "vehicle": "3000 GT VR-4",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022001-9",
            "sold": false
          },
          {
            "vehicle": "Airtrek 2.0 16V TB-IC 202cv 4x4 5p",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022097-3",
            "sold": false
          },
          {
            "vehicle": "Airtrek 2.4 16V 163cv/ 136cv 4x4 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022077-9",
            "sold": false
          },
          {
            "vehicle": "ASX 2.0 16V  4x4 Aut.(By Armura-Blind.)",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022140-6",
            "sold": false
          },
          {
            "vehicle": "ASX 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022113-9",
            "sold": false
          },
          {
            "vehicle": "ASX 2.0 16V 160cv Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022114-7",
            "sold": false
          },
          {
            "vehicle": "ASX 2.0 16V 4x2 Aut.(By Amura-Blind.)",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022142-2",
            "sold": false
          },
          {
            "vehicle": "ASX 2.0 16V 4x4 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022115-5",
            "sold": false
          },
          {
            "vehicle": "ASX O NEILL 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022146-5",
            "sold": false
          },
          {
            "vehicle": "ASX OUTDOOR 2.0 4x2 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022155-4",
            "sold": false
          },
          {
            "vehicle": "ASX OUTDOOR 2.0 4X4 16V 160 cv Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022149-0",
            "sold": false
          },
          {
            "vehicle": "ASX-S 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022156-2",
            "sold": false
          },
          {
            "vehicle": "Colt GLXi",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022002-7",
            "sold": false
          },
          {
            "vehicle": "Colt GTi Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022003-5",
            "sold": false
          },
          {
            "vehicle": "Diamant  LS 3.0 V6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022030-2",
            "sold": false
          },
          {
            "vehicle": "Eclipse GS/ GS Turbo Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022004-3",
            "sold": false
          },
          {
            "vehicle": "Eclipse GST 2.0 16V Turbo",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022032-9",
            "sold": false
          },
          {
            "vehicle": "Eclipse GSX 2.0 V6 16V Turbo",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022031-0",
            "sold": false
          },
          {
            "vehicle": "Eclipse GT 3.0 V6 24V",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022059-0",
            "sold": false
          },
          {
            "vehicle": "Eclipse GT 3.8 V6 267cv",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022096-5",
            "sold": false
          },
          {
            "vehicle": "Expo LRV Sport 2.3 16V",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022042-6",
            "sold": false
          },
          {
            "vehicle": "Expo SP Van 2.3 16V",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022005-1",
            "sold": false
          },
          {
            "vehicle": "Galant 2.0",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022025-6",
            "sold": false
          },
          {
            "vehicle": "Galant 2.5 V6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022026-4",
            "sold": false
          },
          {
            "vehicle": "Galant ES",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022006-0",
            "sold": false
          },
          {
            "vehicle": "Galant GS 2.0 V6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022056-6",
            "sold": false
          },
          {
            "vehicle": "GRANDIS 2.4 16V 163cv 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022085-0",
            "sold": false
          },
          {
            "vehicle": "L200 2.5 4x2 CD Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022070-1",
            "sold": false
          },
          {
            "vehicle": "L200 2.5 4x2 Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022008-6",
            "sold": false
          },
          {
            "vehicle": "L200 2.5 4x4 CD Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022009-4",
            "sold": false
          },
          {
            "vehicle": "L200 Evolution 3.2 4x4 TB Int. Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022069-8",
            "sold": false
          },
          {
            "vehicle": "L200 GL 2.5 4X4 CD Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022028-0",
            "sold": false
          },
          {
            "vehicle": "L200 GLS 2.5 4X4 CD Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022029-9",
            "sold": false
          },
          {
            "vehicle": "L200 GLS Sport 2.5 4x4 121cv CD DTI Dies",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022080-9",
            "sold": false
          },
          {
            "vehicle": "L200 HPE 2.5 8v 95/118cv TB-IC Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022071-0",
            "sold": false
          },
          {
            "vehicle": "L200 L 2.5 4X4 CD Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022060-4",
            "sold": false
          },
          {
            "vehicle": "L200 OUTDOOR GLS 2.5 4X4 CD TDI Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022092-2",
            "sold": false
          },
          {
            "vehicle": "L200 OUTDOOR HPE 2.5 4x4 CD T.Diesel Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022094-9",
            "sold": false
          },
          {
            "vehicle": "L200 OUTDOOR HPE 2.5 4x4 CD T.Diesel Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022093-0",
            "sold": false
          },
          {
            "vehicle": "L200 RI/ RII/ RIII CD 2.5 TB Int. Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022076-0",
            "sold": false
          },
          {
            "vehicle": "L200 Savana 2.5 4x4 121cv CD DTI  Dies.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022081-7",
            "sold": false
          },
          {
            "vehicle": "L200 Sport 2.5 4x4 CD Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022043-4",
            "sold": false
          },
          {
            "vehicle": "L200 Sport HPE 2.5 4x4 CD DTI Dies. Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022078-7",
            "sold": false
          },
          {
            "vehicle": "L200 Sport HPE 2.5 4x4 CD DTI Dies. Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022079-5",
            "sold": false
          },
          {
            "vehicle": "L200 Sport RS 2.5 CD DTI (passeio) Dies.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022084-1",
            "sold": false
          },
          {
            "vehicle": "L200 T. OUTDOOR 3.2 CD TB Int.Dies. Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022153-8",
            "sold": false
          },
          {
            "vehicle": "L200 T. Savana 3.2 CD TB Int. Dies. Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022150-3",
            "sold": false
          },
          {
            "vehicle": "L200 T.OUTDOOR 3.2 CD TB Int. Dies. Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022152-0",
            "sold": false
          },
          {
            "vehicle": "L200 Tri.HLS Chrome Ed. 2.4 CD Flex Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022141-4",
            "sold": false
          },
          {
            "vehicle": "L200 Triton GLS 3.2 CD TB Int.Diesel Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022126-0",
            "sold": false
          },
          {
            "vehicle": "L200 Triton GLX 3.2 CD TB Int.Diesel Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022125-2",
            "sold": false
          },
          {
            "vehicle": "L200 Triton HLS 2.4 Flex 16V CD Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022130-9",
            "sold": false
          },
          {
            "vehicle": "L200 Triton HPE 3.2 CD TB Int.Diesel Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022103-1",
            "sold": false
          },
          {
            "vehicle": "L200 Triton HPE 3.2 CD TB Int.Diesel Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022104-0",
            "sold": false
          },
          {
            "vehicle": "L200 Triton HPE 3.5 CD V6 24V Flex Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022102-3",
            "sold": false
          },
          {
            "vehicle": "L200 Triton KTM 3.2 CD TB Int.Dies. Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022154-6",
            "sold": false
          },
          {
            "vehicle": "L200 Triton OUTDOOR 2.4 Flex 16V CD Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022151-1",
            "sold": false
          },
          {
            "vehicle": "L200 Triton S. HPE FTP 2.4 CD Dies. Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022159-7",
            "sold": false
          },
          {
            "vehicle": "L200 Triton Savana 3.2 CD TBI Dies. Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022128-7",
            "sold": false
          },
          {
            "vehicle": "L200 Triton Savanaoff 3.2 CD TBI Die.Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022135-0",
            "sold": false
          },
          {
            "vehicle": "L200 Triton Sport GLS 2.4 CD Diesel Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022160-0",
            "sold": false
          },
          {
            "vehicle": "L200 Triton Sport HPE 2.4 CD Diesel Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022158-9",
            "sold": false
          },
          {
            "vehicle": "L200 Triton XB 3.2 CD TB Int.Diesel Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022117-1",
            "sold": false
          },
          {
            "vehicle": "L300 Base/DX/Canter 2.5 Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022027-2",
            "sold": false
          },
          {
            "vehicle": "L300 Top/Luxo 2.5 Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022010-8",
            "sold": false
          },
          {
            "vehicle": "Lancer 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022123-6",
            "sold": false
          },
          {
            "vehicle": "Lancer 2.0 16V 160cv Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022124-4",
            "sold": false
          },
          {
            "vehicle": "Lancer Evol. 2.0 Turbo",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022036-1",
            "sold": false
          },
          {
            "vehicle": "Lancer Evol. VI 2.0 Turbo 4p",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022063-9",
            "sold": false
          },
          {
            "vehicle": "Lancer Evol. X J. Easton 2.0 16V TB Int.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022131-7",
            "sold": false
          },
          {
            "vehicle": "Lancer Evolut. IX MR 2.0 290cv TB-IC",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022095-7",
            "sold": false
          },
          {
            "vehicle": "Lancer Evolut. VII/ VIII/ IX 2.0 280cv T",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022072-8",
            "sold": false
          },
          {
            "vehicle": "Lancer Evolution X 2.0 16V 295cv TB Int.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022112-0",
            "sold": false
          },
          {
            "vehicle": "Lancer GLX",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022011-6",
            "sold": false
          },
          {
            "vehicle": "Lancer GT 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022120-1",
            "sold": false
          },
          {
            "vehicle": "Lancer GT 2.0 16V 4X4 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022129-5",
            "sold": false
          },
          {
            "vehicle": "Lancer GT 2.0 16V Aut.(By Armura-Blind.)",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022143-0",
            "sold": false
          },
          {
            "vehicle": "Lancer GTi Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022012-4",
            "sold": false
          },
          {
            "vehicle": "Lancer HL 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022138-4",
            "sold": false
          },
          {
            "vehicle": "Lancer HL 2.0 16V Aut.(By Armura-Blind.)",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022144-9",
            "sold": false
          },
          {
            "vehicle": "Lancer HLE 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022137-6",
            "sold": false
          },
          {
            "vehicle": "Lancer HLE 2.0 16V Aut.(By Armura-Blind)",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022145-7",
            "sold": false
          },
          {
            "vehicle": "Lancer HL-T 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022148-1",
            "sold": false
          },
          {
            "vehicle": "Lancer LS 1.8",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022037-0",
            "sold": false
          },
          {
            "vehicle": "Lancer Sport Ralliart 2.0 16V TB Int. 5p",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022119-8",
            "sold": false
          },
          {
            "vehicle": "Mirage ES",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022034-5",
            "sold": false
          },
          {
            "vehicle": "Mirage GS 16V/ GLSi1.6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022035-3",
            "sold": false
          },
          {
            "vehicle": "Mirage LS",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022033-7",
            "sold": false
          },
          {
            "vehicle": "Montero 2.8 Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022046-9",
            "sold": false
          },
          {
            "vehicle": "OUTLANDER 2.0 16V 160cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022116-3",
            "sold": false
          },
          {
            "vehicle": "OUTLANDER 2.2 165cv Diesel Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022139-2",
            "sold": false
          },
          {
            "vehicle": "OUTLANDER 2.4 16V 170cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022108-2",
            "sold": false
          },
          {
            "vehicle": "OUTLANDER 3.0/ GT 3.0 V6 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022101-5",
            "sold": false
          },
          {
            "vehicle": "OUTLANDER PHEV (Hybrid) 2.0 16V 4x4 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022136-8",
            "sold": false
          },
          {
            "vehicle": "Pajero 3.2 4x4 T.I. Dies. 5p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022132-5",
            "sold": false
          },
          {
            "vehicle": "Pajero DAKAR 3.2 4x4 T.I. Dies. 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022110-4",
            "sold": false
          },
          {
            "vehicle": "Pajero DAKAR 3.2 4x4 T.I. Dies. 5p Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022111-2",
            "sold": false
          },
          {
            "vehicle": "Pajero DAKAR HPE 3.2 4x4 T.I Dies 5p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022127-9",
            "sold": false
          },
          {
            "vehicle": "Pajero DAKAR/HPE 3.5 4x4 Flex 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022118-0",
            "sold": false
          },
          {
            "vehicle": "Pajero Evolution 4x4 3.5 V6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022048-5",
            "sold": false
          },
          {
            "vehicle": "Pajero Full GLS/GLS/PKHPE 3.2 Dies.TI 5p",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022106-6",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 2.8 Diesel Turbo Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022054-0",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 2.8 Diesel Turbo Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022014-0",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.0 V6 2p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022061-2",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.0 V6 2p Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022038-8",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.0 V6 4p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022055-8",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.0 V6 4p Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022047-7",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 2p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022022-1",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 2p Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022021-3",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 4p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022020-5",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 4p Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022062-0",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 Top 2p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022039-6",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS 3.5 V6 Top 4p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022040-0",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS Full 3.8 V6 250cv 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022098-1",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS HPE/HPE Full 3.8 233cv 3p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022082-5",
            "sold": false
          },
          {
            "vehicle": "Pajero GLS HPE/HPE Full 3.8 233cv 5p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022083-3",
            "sold": false
          },
          {
            "vehicle": "Pajero GLX 2.8 Diesel 4p Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022016-7",
            "sold": false
          },
          {
            "vehicle": "Pajero GLX 3.0 V6 4p Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022015-9",
            "sold": false
          },
          {
            "vehicle": "Pajero GLZ 2.8 4x4 Turbo Diesel",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022049-3",
            "sold": false
          },
          {
            "vehicle": "Pajero GLZ 3.0 4x4 V6",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022050-7",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE 3.2 4x4 T.I. Dies. 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022133-3",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE 3.5 4x4 Flex 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022134-1",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE Full 3.2 4x4 T.I.Dies. 5p Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022107-4",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE Full 3.2 4x4 T.I.Dies.3p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022088-4",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE Full 3.8 V6 250cv 3p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022099-0",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE Full 3.8 V6 250cv 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022100-7",
            "sold": false
          },
          {
            "vehicle": "Pajero HPE-S 3.2 4x4 T.I.Diesel 5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022147-3",
            "sold": false
          },
          {
            "vehicle": "Pajero iO Aut",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022024-8",
            "sold": false
          },
          {
            "vehicle": "Pajero iO Mec",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022023-0",
            "sold": false
          },
          {
            "vehicle": "Pajero iO SE 1.8 16V Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022065-5",
            "sold": false
          },
          {
            "vehicle": "Pajero iO SE 1.8 16V Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022067-1",
            "sold": false
          },
          {
            "vehicle": "Pajero OUTDOOR 3.2 4x4 T.I. Dies.5p Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022157-0",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport 2.8 4x4 Diesel Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022058-2",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport 2.8 4x4 Diesel Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022057-4",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport 3.0 4x2 V6 Mec./Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022018-3",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport 3.0 4x4 V6 Mec./Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022019-1",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport 3.5 V6 Flex 4x4 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022109-0",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport HPE 2.5 4x4 Diesel Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022090-6",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport HPE 2.5 4x4 Diesel Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022091-4",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport HPE 3.5 4x4 200cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022089-2",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport SE 3.0 4x2 V6 177cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022073-6",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport SE/ HPE 2.8 4x4 Diesel Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022066-3",
            "sold": false
          },
          {
            "vehicle": "Pajero Sport SE/ HPE 3.0 4x4 177cv Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022064-7",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0 Blind. 16V 131cv 4x4 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022087-6",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0 Blind. 16V 131cv 4x4 Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022086-8",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0 Flex 16V 4X2 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022122-8",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0 Flex 16V 4X2 Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022121-0",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0/ 2.0 Flex 16V 4x4 Aut.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022075-2",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 2.0/ 2.0 Flex 16V 4x4 Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022074-4",
            "sold": false
          },
          {
            "vehicle": "Pajero TR4 GLS 2.0 Flex 16V 4x4 Mec.",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022105-8",
            "sold": false
          },
          {
            "vehicle": "Space Wagon GLS 2.0",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022052-3",
            "sold": false
          },
          {
            "vehicle": "Space Wagon GLS 2.4",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022053-1",
            "sold": false
          },
          {
            "vehicle": "Space Wagon GLXi 2.4 ( Nova Série )",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022051-5",
            "sold": false
          },
          {
            "vehicle": "Space Wagon/ Glxi 2.4",
            "manufacturer": "Mitsubishi",
            "fipe_code": "022017-5",
            "sold": false
          },
          {
            "vehicle": "Picape BG-Truck CD Turbo Diesel",
            "manufacturer": "Miura",
            "fipe_code": "049001-6",
            "sold": false
          },
          {
            "vehicle": "350Z 3.5 V6 280cv/ 312cv 2p",
            "manufacturer": "Nissan",
            "fipe_code": "023051-0",
            "sold": false
          },
          {
            "vehicle": "Altima GXE 2.4 16V",
            "manufacturer": "Nissan",
            "fipe_code": "023020-0",
            "sold": false
          },
          {
            "vehicle": "Altima SE 2.4 16V",
            "manufacturer": "Nissan",
            "fipe_code": "023021-9",
            "sold": false
          },
          {
            "vehicle": "ALTIMA SL 2.5 16V 4p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023124-0",
            "sold": false
          },
          {
            "vehicle": "AX 6.5D Turbo Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023022-7",
            "sold": false
          },
          {
            "vehicle": "D-21 Pick-Up CD 4x2/4x4 2.7 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023024-3",
            "sold": false
          },
          {
            "vehicle": "D-21 Pick-Up CS 4x2/4x4 2.7 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023023-5",
            "sold": false
          },
          {
            "vehicle": "Frontier AX 3.2 CD Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023012-0",
            "sold": false
          },
          {
            "vehicle": "Frontier AX CD 4x4 2.5 TB Interc. Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023041-3",
            "sold": false
          },
          {
            "vehicle": "Frontier DX 3.2 CD Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023011-1",
            "sold": false
          },
          {
            "vehicle": "Frontier LE ATTACK CD 4x4 2.5 TB Die.Aut",
            "manufacturer": "Nissan",
            "fipe_code": "023102-9",
            "sold": false
          },
          {
            "vehicle": "Frontier LE CD 4x4 2.5 TB dies.(Import.)",
            "manufacturer": "Nissan",
            "fipe_code": "023059-6",
            "sold": false
          },
          {
            "vehicle": "Frontier LE CD 4x4 2.5 TB Diesel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023080-4",
            "sold": false
          },
          {
            "vehicle": "Frontier LE CD 4x4 2.5 TB Diesel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023079-0",
            "sold": false
          },
          {
            "vehicle": "Frontier PLATINUM CD 4x4 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023125-8",
            "sold": false
          },
          {
            "vehicle": "Frontier S CD 4x2 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023121-5",
            "sold": false
          },
          {
            "vehicle": "Frontier S CD 4x4 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023122-3",
            "sold": false
          },
          {
            "vehicle": "Frontier SE ATTACK CD 4x2 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023100-2",
            "sold": false
          },
          {
            "vehicle": "Frontier SE ATTACK CD 4x4 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023101-0",
            "sold": false
          },
          {
            "vehicle": "Frontier SE Serrana CD 4x4 2.8 TB Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023052-9",
            "sold": false
          },
          {
            "vehicle": "Frontier SE Vibe CD 2.8 TDI Dies.",
            "manufacturer": "Nissan",
            "fipe_code": "023069-3",
            "sold": false
          },
          {
            "vehicle": "Frontier SE/ SE ONE CD 4x2 2.8 TDI Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023046-4",
            "sold": false
          },
          {
            "vehicle": "Frontier SE/SE Strik CD 4x2 2.5 TB Dies.",
            "manufacturer": "Nissan",
            "fipe_code": "023077-4",
            "sold": false
          },
          {
            "vehicle": "Frontier SE/SE Strik CD 4x4 2.5 TB Dies.",
            "manufacturer": "Nissan",
            "fipe_code": "023078-2",
            "sold": false
          },
          {
            "vehicle": "Frontier SE/SE Strik/ONE CD 4x4 2.8 Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023047-2",
            "sold": false
          },
          {
            "vehicle": "Frontier SEL CD 4x4 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023070-7",
            "sold": false
          },
          {
            "vehicle": "Frontier SEL CD 4x4 2.5 TB Diesel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023071-5",
            "sold": false
          },
          {
            "vehicle": "Frontier SL CD 4x4 2.5TB Diesel Aut ",
            "manufacturer": "Nissan",
            "fipe_code": "023118-5",
            "sold": false
          },
          {
            "vehicle": "Frontier SV AT. CD 4x4 2.5 TB Dies. Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023128-2",
            "sold": false
          },
          {
            "vehicle": "Frontier SV AT.CD 4x4 2.5 TB Diesel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023117-7",
            "sold": false
          },
          {
            "vehicle": "Frontier SV ATTACK CD 4x2 2.5 TB Diesel ",
            "manufacturer": "Nissan",
            "fipe_code": "023116-9",
            "sold": false
          },
          {
            "vehicle": "Frontier XE  CD 4x4 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023081-2",
            "sold": false
          },
          {
            "vehicle": "Frontier XE ATTACK CD 2.8 TDI Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023056-1",
            "sold": false
          },
          {
            "vehicle": "Frontier XE CD 4x2 2.5 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023076-6",
            "sold": false
          },
          {
            "vehicle": "Frontier XE CS 4x2 2.8 TB Interc. Dies.",
            "manufacturer": "Nissan",
            "fipe_code": "023048-0",
            "sold": false
          },
          {
            "vehicle": "Frontier XE/ XE TIT. CD 4x2 2.8 TDI Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023044-8",
            "sold": false
          },
          {
            "vehicle": "Frontier XE/ XE TIT. CD 4x4 2.8 TDI Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023045-6",
            "sold": false
          },
          {
            "vehicle": "GT-R 3.8 V6 BiTurbo Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023151-7",
            "sold": false
          },
          {
            "vehicle": "Infinit 3.0",
            "manufacturer": "Nissan",
            "fipe_code": "023025-1",
            "sold": false
          },
          {
            "vehicle": "KICKS Rio 2016 1.6 16V FlexStar 5p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023148-7",
            "sold": false
          },
          {
            "vehicle": "KICKS SL 1.6 16V FlexStar 5p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023149-5",
            "sold": false
          },
          {
            "vehicle": "KICKS SV Limited 1.6 16V Flex 5p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023152-5",
            "sold": false
          },
          {
            "vehicle": "King-Cab SE 4x4 3.0 V6",
            "manufacturer": "Nissan",
            "fipe_code": "023026-0",
            "sold": false
          },
          {
            "vehicle": "LIVINA 1.6 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023082-0",
            "sold": false
          },
          {
            "vehicle": "LIVINA 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023084-7",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023087-1",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND 1.8 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023086-3",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND S 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023096-0",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND S 1.8 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023097-9",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND SL 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023089-8",
            "sold": false
          },
          {
            "vehicle": "LIVINA GRAND SL 1.8 16V Flex Fuel Mec",
            "manufacturer": "Nissan",
            "fipe_code": "023088-0",
            "sold": false
          },
          {
            "vehicle": "LIVINA NIGHT&DAY 1.6 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023099-5",
            "sold": false
          },
          {
            "vehicle": "LIVINA S 1.6 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023093-6",
            "sold": false
          },
          {
            "vehicle": "LIVINA S 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023094-4",
            "sold": false
          },
          {
            "vehicle": "LIVINA SL 1.6 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023083-9",
            "sold": false
          },
          {
            "vehicle": "LIVINA SL 1.8 16V Flex Fuel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023085-5",
            "sold": false
          },
          {
            "vehicle": "LIVINA X-GEAR 1.6 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023090-1",
            "sold": false
          },
          {
            "vehicle": "LIVINA X-GEAR S 1.6 16V Flex Fuel",
            "manufacturer": "Nissan",
            "fipe_code": "023095-2",
            "sold": false
          },
          {
            "vehicle": "LIVINA X-GEAR SL 1.6 16V Flex Fuel Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023091-0",
            "sold": false
          },
          {
            "vehicle": "LIVINA X-GEAR SL/X-GEAR 1.8 Flex F. Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023092-8",
            "sold": false
          },
          {
            "vehicle": "MARCH 1.0 12V Flex 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023134-7",
            "sold": false
          },
          {
            "vehicle": "MARCH 1.0 12V FlexStart 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023146-0",
            "sold": false
          },
          {
            "vehicle": "MARCH 1.0 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023105-3",
            "sold": false
          },
          {
            "vehicle": "MARCH Rio2016 1.0 Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023119-3",
            "sold": false
          },
          {
            "vehicle": "MARCH Rio2016 1.6 Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023120-7",
            "sold": false
          },
          {
            "vehicle": "MARCH S 1.0 12V Flex 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023129-0",
            "sold": false
          },
          {
            "vehicle": "MARCH S 1.0 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023104-5",
            "sold": false
          },
          {
            "vehicle": "MARCH S 1.6 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023108-8",
            "sold": false
          },
          {
            "vehicle": "MARCH S 1.6 16V FlexStart 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023150-9",
            "sold": false
          },
          {
            "vehicle": "MARCH SL 1.6 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023127-4",
            "sold": false
          },
          {
            "vehicle": "MARCH SL 1.6 16V FlexStart 5p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023139-8",
            "sold": false
          },
          {
            "vehicle": "MARCH SL 1.6 16V FlexStart 5p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023147-9",
            "sold": false
          },
          {
            "vehicle": "MARCH SR 1.6 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023110-0",
            "sold": false
          },
          {
            "vehicle": "MARCH SV 1.0 12V Flex 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023130-4",
            "sold": false
          },
          {
            "vehicle": "MARCH SV 1.0 16V Flex Fuel 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023126-6",
            "sold": false
          },
          {
            "vehicle": "MARCH SV 1.6 16V Flex Fuel",
            "manufacturer": "Nissan",
            "fipe_code": "023109-6",
            "sold": false
          },
          {
            "vehicle": "MARCH SV 1.6 16V FlexStart 5p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023143-6",
            "sold": false
          },
          {
            "vehicle": "MARCH SV 1.6 16V FlexStart 5p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023145-2",
            "sold": false
          },
          {
            "vehicle": "Maxima 30G/ GLE 3.0 V6 24V",
            "manufacturer": "Nissan",
            "fipe_code": "023013-8",
            "sold": false
          },
          {
            "vehicle": "Maxima 30GV  Limited 3.0 V6 24V",
            "manufacturer": "Nissan",
            "fipe_code": "023038-3",
            "sold": false
          },
          {
            "vehicle": "Maxima 30GV/30GV Aero/ GV 3.0 V6 24V",
            "manufacturer": "Nissan",
            "fipe_code": "023009-0",
            "sold": false
          },
          {
            "vehicle": "Maxima 30J",
            "manufacturer": "Nissan",
            "fipe_code": "023010-3",
            "sold": false
          },
          {
            "vehicle": "Maxima GXE 3.0",
            "manufacturer": "Nissan",
            "fipe_code": "023015-4",
            "sold": false
          },
          {
            "vehicle": "Maxima SE 3.0 V6",
            "manufacturer": "Nissan",
            "fipe_code": "023027-8",
            "sold": false
          },
          {
            "vehicle": "Micra 1.0 ",
            "manufacturer": "Nissan",
            "fipe_code": "023028-6",
            "sold": false
          },
          {
            "vehicle": "MURANO SE 3.5 V6 24V 231cv Aut",
            "manufacturer": "Nissan",
            "fipe_code": "023058-8",
            "sold": false
          },
          {
            "vehicle": "NX 2000",
            "manufacturer": "Nissan",
            "fipe_code": "023016-2",
            "sold": false
          },
          {
            "vehicle": "NX 2000 Targa 2.0",
            "manufacturer": "Nissan",
            "fipe_code": "023029-4",
            "sold": false
          },
          {
            "vehicle": "Pathfinder LE 2.5 16V TDI Diesel Aut",
            "manufacturer": "Nissan",
            "fipe_code": "023054-5",
            "sold": false
          },
          {
            "vehicle": "Pathfinder LE 4.0 V6 24V 266cv Aut",
            "manufacturer": "Nissan",
            "fipe_code": "023055-3",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE 2.5 16V TDI Diesel Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023073-1",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE 3.3 V6 12V",
            "manufacturer": "Nissan",
            "fipe_code": "023040-5",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE 4.0 V6 24V 266cv Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023072-3",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE 4x4 3.0 12V Aut./Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023001-4",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE Luxo 3.3 V6 12V",
            "manufacturer": "Nissan",
            "fipe_code": "023039-1",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE Luxo 3.5 V6 24V 243cv",
            "manufacturer": "Nissan",
            "fipe_code": "023043-0",
            "sold": false
          },
          {
            "vehicle": "Pathfinder SE Titanium 3.3 V6 12V",
            "manufacturer": "Nissan",
            "fipe_code": "023019-7",
            "sold": false
          },
          {
            "vehicle": "Pathfinder XE 2.7 TB Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023042-1",
            "sold": false
          },
          {
            "vehicle": "Pathfinder XE 4x4",
            "manufacturer": "Nissan",
            "fipe_code": "023003-0",
            "sold": false
          },
          {
            "vehicle": "Pick-Up CD AX/ DX 4x4 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023004-9",
            "sold": false
          },
          {
            "vehicle": "Pick-Up CS DX 4x4 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023005-7",
            "sold": false
          },
          {
            "vehicle": "Pick-Up King Cab DX 2.7 4x2 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023006-5",
            "sold": false
          },
          {
            "vehicle": "Primera GXE 2.0 16V",
            "manufacturer": "Nissan",
            "fipe_code": "023014-6",
            "sold": false
          },
          {
            "vehicle": "Quest GXE/ GLE/ SER",
            "manufacturer": "Nissan",
            "fipe_code": "023007-3",
            "sold": false
          },
          {
            "vehicle": "Quest XE 3.0 V6",
            "manufacturer": "Nissan",
            "fipe_code": "023030-8",
            "sold": false
          },
          {
            "vehicle": "Sentra 2.0/ 2.0 Flex Fuel 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023061-8",
            "sold": false
          },
          {
            "vehicle": "Sentra 2.0/ 2.0 Flex Fuel 16V Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023060-0",
            "sold": false
          },
          {
            "vehicle": "Sentra GLE",
            "manufacturer": "Nissan",
            "fipe_code": "023037-5",
            "sold": false
          },
          {
            "vehicle": "Sentra GSX/ EX",
            "manufacturer": "Nissan",
            "fipe_code": "023008-1",
            "sold": false
          },
          {
            "vehicle": "Sentra GXE/ SER",
            "manufacturer": "Nissan",
            "fipe_code": "023036-7",
            "sold": false
          },
          {
            "vehicle": "Sentra S 2.0 FlexStart 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023135-5",
            "sold": false
          },
          {
            "vehicle": "Sentra S 2.0/ 2.0 Flex Fuel 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023063-4",
            "sold": false
          },
          {
            "vehicle": "Sentra S 2.0/ 2.0 Flex Fuel 16V Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023062-6",
            "sold": false
          },
          {
            "vehicle": "Sentra SE 2.0 Flex 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023115-0",
            "sold": false
          },
          {
            "vehicle": "Sentra SL 2.0 FlexStart 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023136-3",
            "sold": false
          },
          {
            "vehicle": "Sentra SL 2.0/ 2.0 Flex Fuel 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023064-2",
            "sold": false
          },
          {
            "vehicle": "Sentra SR 2.0 Flex Fuel 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023106-1",
            "sold": false
          },
          {
            "vehicle": "Sentra SR 2.0 Flex Fuel 16V Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023107-0",
            "sold": false
          },
          {
            "vehicle": "Sentra SV 2.0 FlexStart 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023123-1",
            "sold": false
          },
          {
            "vehicle": "Sentra UNIQUE 2.0 Flex Fuel 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023103-7",
            "sold": false
          },
          {
            "vehicle": "Stanza XE 2.4 12V",
            "manufacturer": "Nissan",
            "fipe_code": "023031-6",
            "sold": false
          },
          {
            "vehicle": "SX 240 2.4",
            "manufacturer": "Nissan",
            "fipe_code": "023032-4",
            "sold": false
          },
          {
            "vehicle": "Terrano II SE 2.7 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023033-2",
            "sold": false
          },
          {
            "vehicle": "Terrano II SLX 2.7 Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023034-0",
            "sold": false
          },
          {
            "vehicle": "TIIDA S 1.8/1.8 Flex 16V  Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023065-0",
            "sold": false
          },
          {
            "vehicle": "TIIDA S 1.8/1.8 Flex 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023066-9",
            "sold": false
          },
          {
            "vehicle": "TIIDA Sedan 1.8 16V Flex Fuel 4p",
            "manufacturer": "Nissan",
            "fipe_code": "023098-7",
            "sold": false
          },
          {
            "vehicle": "TIIDA Sedan 1.8 16V Flex Fuel 4p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023114-2",
            "sold": false
          },
          {
            "vehicle": "TIIDA SL 1.8/1.8 Flex 16V  Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023067-7",
            "sold": false
          },
          {
            "vehicle": "TIIDA SL 1.8/1.8 Flex 16V Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023068-5",
            "sold": false
          },
          {
            "vehicle": "VERSA 1.0 12V FlexStart 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023131-2",
            "sold": false
          },
          {
            "vehicle": "VERSA S 1.0 12V FlexStart 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023132-0",
            "sold": false
          },
          {
            "vehicle": "VERSA S 1.6 16V Flex Fuel 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023111-8",
            "sold": false
          },
          {
            "vehicle": "VERSA S 1.6 16V FlexStart 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023142-8",
            "sold": false
          },
          {
            "vehicle": "VERSA SL 1.6 16V Flex Fuel 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023113-4",
            "sold": false
          },
          {
            "vehicle": "VERSA SL 1.6 16V FlexStart 4p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023140-1",
            "sold": false
          },
          {
            "vehicle": "VERSA SL 1.6 16V FlexStart 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023138-0",
            "sold": false
          },
          {
            "vehicle": "VERSA SV 1.6 16V Flex Fuel 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023112-6",
            "sold": false
          },
          {
            "vehicle": "VERSA SV 1.6 16V FlexStart 4p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023144-4",
            "sold": false
          },
          {
            "vehicle": "VERSA SV 1.6 16V FlexStart 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023137-1",
            "sold": false
          },
          {
            "vehicle": "VERSA UNIQUE 1.6 16V Flex 4p Mec.",
            "manufacturer": "Nissan",
            "fipe_code": "023133-9",
            "sold": false
          },
          {
            "vehicle": "VERSA UNIQUE 1.6 16V FlexStart 4p Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023141-0",
            "sold": false
          },
          {
            "vehicle": "XTerra ECOTRIP 4x4 140cv 2.8 TB Int.Dies",
            "manufacturer": "Nissan",
            "fipe_code": "023057-0",
            "sold": false
          },
          {
            "vehicle": "XTerra SE 4x4 2.8 132/140cv TB Int.Dies.",
            "manufacturer": "Nissan",
            "fipe_code": "023049-9",
            "sold": false
          },
          {
            "vehicle": "XTerra XE 4x4 2.8 132cv TB Int. Diesel",
            "manufacturer": "Nissan",
            "fipe_code": "023050-2",
            "sold": false
          },
          {
            "vehicle": "X-TRAIL GX 2.5 16V 180cv 5p",
            "manufacturer": "Nissan",
            "fipe_code": "023053-7",
            "sold": false
          },
          {
            "vehicle": "X-TRAIL LE 2.0 16V 138cv Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023075-8",
            "sold": false
          },
          {
            "vehicle": "X-TRAIL SE 2.0 16V 138cv Aut.",
            "manufacturer": "Nissan",
            "fipe_code": "023074-0",
            "sold": false
          },
          {
            "vehicle": "ZX 300 3.0 BI-Turbo",
            "manufacturer": "Nissan",
            "fipe_code": "023035-9",
            "sold": false
          },
          {
            "vehicle": "106 KID 1.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024042-7",
            "sold": false
          },
          {
            "vehicle": "106 Passion 1.0 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024028-1",
            "sold": false
          },
          {
            "vehicle": "106 Passion 1.0 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024066-4",
            "sold": false
          },
          {
            "vehicle": "106 Quiksilver 1.0 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024078-8",
            "sold": false
          },
          {
            "vehicle": "106 Selection 1.0 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024026-5",
            "sold": false
          },
          {
            "vehicle": "106 Selection 1.0 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024067-2",
            "sold": false
          },
          {
            "vehicle": "106 Soleil 1.0 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024027-3",
            "sold": false
          },
          {
            "vehicle": "106 Soleil 1.0 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024068-0",
            "sold": false
          },
          {
            "vehicle": "106 XN 3p e 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024001-0",
            "sold": false
          },
          {
            "vehicle": "106 XT",
            "manufacturer": "Peugeot",
            "fipe_code": "024002-8",
            "sold": false
          },
          {
            "vehicle": "2008 Allure 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024211-0",
            "sold": false
          },
          {
            "vehicle": "2008 Allure 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024210-1",
            "sold": false
          },
          {
            "vehicle": "2008 Crossoway 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024227-6",
            "sold": false
          },
          {
            "vehicle": "2008 Griffe 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024213-6",
            "sold": false
          },
          {
            "vehicle": "2008 Griffe 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024212-8",
            "sold": false
          },
          {
            "vehicle": "2008 Griffe 1.6 Turbo Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024214-4",
            "sold": false
          },
          {
            "vehicle": "205 CJ Cabriolet",
            "manufacturer": "Peugeot",
            "fipe_code": "024064-8",
            "sold": false
          },
          {
            "vehicle": "205 CTi Cabriolet 1.4",
            "manufacturer": "Peugeot",
            "fipe_code": "024065-6",
            "sold": false
          },
          {
            "vehicle": "205 GTi 1.4",
            "manufacturer": "Peugeot",
            "fipe_code": "024055-9",
            "sold": false
          },
          {
            "vehicle": "205 XSi/ Junior 1.4 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024003-6",
            "sold": false
          },
          {
            "vehicle": "206 Allure 1.6 Flex 16V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024132-6",
            "sold": false
          },
          {
            "vehicle": "206 Allure 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024133-4",
            "sold": false
          },
          {
            "vehicle": "206 Automatic (feline)1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024134-2",
            "sold": false
          },
          {
            "vehicle": "206 CC 1.6 16v 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024080-0",
            "sold": false
          },
          {
            "vehicle": "206 Feline 1.4/ 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024104-0",
            "sold": false
          },
          {
            "vehicle": "206 Holiday 1.4 8V 75cv 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024119-9",
            "sold": false
          },
          {
            "vehicle": "206 Holiday 1.4 8V 75cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024120-2",
            "sold": false
          },
          {
            "vehicle": "206 Holiday 1.6 Flex 16V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024121-0",
            "sold": false
          },
          {
            "vehicle": "206 Holiday 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024122-9",
            "sold": false
          },
          {
            "vehicle": "206 Moonlight 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024130-0",
            "sold": false
          },
          {
            "vehicle": "206 Moonlight 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024131-8",
            "sold": false
          },
          {
            "vehicle": "206 Passion 1.6",
            "manufacturer": "Peugeot",
            "fipe_code": "024030-3",
            "sold": false
          },
          {
            "vehicle": "206 Passion 1.6 16v 110cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024088-5",
            "sold": false
          },
          {
            "vehicle": "206 Presence 1.4/ 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024102-4",
            "sold": false
          },
          {
            "vehicle": "206 Presence 1.4/ 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024103-2",
            "sold": false
          },
          {
            "vehicle": "206 Rallye 1.6",
            "manufacturer": "Peugeot",
            "fipe_code": "024031-1",
            "sold": false
          },
          {
            "vehicle": "206 Rallye 1.6/ 1.6 Flex 16v 110cv 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024089-3",
            "sold": false
          },
          {
            "vehicle": "206 Select./Presence 1.6/1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024096-6",
            "sold": false
          },
          {
            "vehicle": "206 Selection 1.6 16V 110cv 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024095-8",
            "sold": false
          },
          {
            "vehicle": "206 Selection/ Sensation 1.0 16v 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024082-6",
            "sold": false
          },
          {
            "vehicle": "206 Selection/ Sensation 1.0 16v 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024084-2",
            "sold": false
          },
          {
            "vehicle": "206 Sensation 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024123-7",
            "sold": false
          },
          {
            "vehicle": "206 Sensation 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024124-5",
            "sold": false
          },
          {
            "vehicle": "206 Soleil 1.0 16v 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024085-0",
            "sold": false
          },
          {
            "vehicle": "206 Soleil 1.6 16v 110cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024087-7",
            "sold": false
          },
          {
            "vehicle": "206 Soleil 1.6 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024029-0",
            "sold": false
          },
          {
            "vehicle": "206 Soleil 1.6 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024069-9",
            "sold": false
          },
          {
            "vehicle": "206 Soleil/ Quiksilver 1.0 16v 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024081-8",
            "sold": false
          },
          {
            "vehicle": "206 Soleil/ Quiksilver 1.6 16v 110cv 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024086-9",
            "sold": false
          },
          {
            "vehicle": "206 SW Automatic (feline)1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024135-0",
            "sold": false
          },
          {
            "vehicle": "206 SW ESCAPADE 1.6 16v Flex 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024129-6",
            "sold": false
          },
          {
            "vehicle": "206 SW Feline 1.6/ 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024114-8",
            "sold": false
          },
          {
            "vehicle": "206 SW Moonlight 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024144-0",
            "sold": false
          },
          {
            "vehicle": "206 SW Presence 1.4/ 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024112-1",
            "sold": false
          },
          {
            "vehicle": "206 SW Presence 1.6/1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024113-0",
            "sold": false
          },
          {
            "vehicle": "206 Techno 1.0 16V 70cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024099-0",
            "sold": false
          },
          {
            "vehicle": "206 Techno/ Feline 1.6/ 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024100-8",
            "sold": false
          },
          {
            "vehicle": "207 Active 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024202-0",
            "sold": false
          },
          {
            "vehicle": "207 Blue Lion 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024192-0",
            "sold": false
          },
          {
            "vehicle": "207 QUIKSILVER 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024167-9",
            "sold": false
          },
          {
            "vehicle": "207 QUIKSILVER 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024168-7",
            "sold": false
          },
          {
            "vehicle": "207 QUIKSILVER 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024183-0",
            "sold": false
          },
          {
            "vehicle": "207 Sed. Passion XR Sport 1.4 Flex 8V 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024156-3",
            "sold": false
          },
          {
            "vehicle": "207 Sedan Active 1.4 Flex 8V 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024203-9",
            "sold": false
          },
          {
            "vehicle": "207 Sedan Allure 1.4 Flex 8v 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024204-7",
            "sold": false
          },
          {
            "vehicle": "207 Sedan Passion XR 1.4 Flex 8V 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024155-5",
            "sold": false
          },
          {
            "vehicle": "207 Sedan Passion XS 1.6 Flex 16V 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024157-1",
            "sold": false
          },
          {
            "vehicle": "207 Sedan Passion XS 1.6 Flex 16V 4p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024158-0",
            "sold": false
          },
          {
            "vehicle": "207 SW ESCAPADE 1.6 16V Flex 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024159-8",
            "sold": false
          },
          {
            "vehicle": "207 SW XR 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024152-0",
            "sold": false
          },
          {
            "vehicle": "207 SW XR Sport 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024153-9",
            "sold": false
          },
          {
            "vehicle": "207 SW XS 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024154-7",
            "sold": false
          },
          {
            "vehicle": "207 X-Line 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024164-4",
            "sold": false
          },
          {
            "vehicle": "207 X-Line 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024165-2",
            "sold": false
          },
          {
            "vehicle": "207 XR 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024145-8",
            "sold": false
          },
          {
            "vehicle": "207 XR 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024146-6",
            "sold": false
          },
          {
            "vehicle": "207 XR Sport 1.4 Flex 8V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024147-4",
            "sold": false
          },
          {
            "vehicle": "207 XR Sport 1.4 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024148-2",
            "sold": false
          },
          {
            "vehicle": "207 XS 1.6 Flex 16V 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024149-0",
            "sold": false
          },
          {
            "vehicle": "207 XS 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024150-4",
            "sold": false
          },
          {
            "vehicle": "207 XS 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024151-2",
            "sold": false
          },
          {
            "vehicle": "208 Active 1.2 Flex 12V 5p mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024219-5",
            "sold": false
          },
          {
            "vehicle": "208 Active Pack 1.2 flex 12V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024220-9",
            "sold": false
          },
          {
            "vehicle": "208 Active Pack 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024207-1",
            "sold": false
          },
          {
            "vehicle": "208 Active/Active Pack 1.5 Flex 8V 5p ",
            "manufacturer": "Peugeot",
            "fipe_code": "024194-6",
            "sold": false
          },
          {
            "vehicle": "208 Allure 1.2 Flex 12V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024221-7",
            "sold": false
          },
          {
            "vehicle": "208 Allure 1.5 Flex 8V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024195-4",
            "sold": false
          },
          {
            "vehicle": "208 Allure 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024215-2",
            "sold": false
          },
          {
            "vehicle": "208 Allure inconcert 1.5 Flex 8V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024217-9",
            "sold": false
          },
          {
            "vehicle": "208 Allure inconcert 1.6 Flex 16V 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024218-7",
            "sold": false
          },
          {
            "vehicle": "208 Griffe 1.6 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024197-0",
            "sold": false
          },
          {
            "vehicle": "208 Griffe 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024196-2",
            "sold": false
          },
          {
            "vehicle": "208 GT 1.6 THP Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024223-3",
            "sold": false
          },
          {
            "vehicle": "208 Premier 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024198-9",
            "sold": false
          },
          {
            "vehicle": "208 Sport 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024222-5",
            "sold": false
          },
          {
            "vehicle": "3008 Allure 1.6 Turbo 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024175-0",
            "sold": false
          },
          {
            "vehicle": "3008 Griffe 1.6 Turbo 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024176-8",
            "sold": false
          },
          {
            "vehicle": "3008 Roland Garros 1.6 Turbo 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024200-4",
            "sold": false
          },
          {
            "vehicle": "306 Break Passion 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024032-0",
            "sold": false
          },
          {
            "vehicle": "306 Cabriolet 1.8/ Mi 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024004-4",
            "sold": false
          },
          {
            "vehicle": "306 Cabriolet 2.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024005-2",
            "sold": false
          },
          {
            "vehicle": "306 GTi 2.0 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024033-8",
            "sold": false
          },
          {
            "vehicle": "306 Passion 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024040-0",
            "sold": false
          },
          {
            "vehicle": "306 Passion Sedan 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024046-0",
            "sold": false
          },
          {
            "vehicle": "306 Rallye 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024043-5",
            "sold": false
          },
          {
            "vehicle": "306 S16 2.0 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024006-0",
            "sold": false
          },
          {
            "vehicle": "306 Selection Hatch 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024038-9",
            "sold": false
          },
          {
            "vehicle": "306 Selection Sedan 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024039-7",
            "sold": false
          },
          {
            "vehicle": "306 Si/ SL 1.8",
            "manufacturer": "Peugeot",
            "fipe_code": "024044-3",
            "sold": false
          },
          {
            "vehicle": "306 Soleil 1.8 16V  4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024058-3",
            "sold": false
          },
          {
            "vehicle": "306 Soleil 1.8 16V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024057-5",
            "sold": false
          },
          {
            "vehicle": "306 Soleil Break 1.8 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024077-0",
            "sold": false
          },
          {
            "vehicle": "306 Soleil Hatch 1.8 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024076-1",
            "sold": false
          },
          {
            "vehicle": "306 SR",
            "manufacturer": "Peugeot",
            "fipe_code": "024045-1",
            "sold": false
          },
          {
            "vehicle": "306 XN 1.8",
            "manufacturer": "Peugeot",
            "fipe_code": "024041-9",
            "sold": false
          },
          {
            "vehicle": "306 XR 1.8 / XR Break 1.8 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024047-8",
            "sold": false
          },
          {
            "vehicle": "306 XS 1.6 3p/ ST 1.8i 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024007-9",
            "sold": false
          },
          {
            "vehicle": "306 XSi 2.0 3/5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024008-7",
            "sold": false
          },
          {
            "vehicle": "307 CC 2.0 16V 138cv 2p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024110-5",
            "sold": false
          },
          {
            "vehicle": "307 CC 2.0 16V 2p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024111-3",
            "sold": false
          },
          {
            "vehicle": "307 Feline 2.0/ 2.0 Flex 16V 5p Mec",
            "manufacturer": "Peugeot",
            "fipe_code": "024105-9",
            "sold": false
          },
          {
            "vehicle": "307 Feline/Griff/Premi. 2.0 Flex 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024106-7",
            "sold": false
          },
          {
            "vehicle": "307 MILLESIM200 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024174-1",
            "sold": false
          },
          {
            "vehicle": "307 Passion 1.6 16V 110cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024091-5",
            "sold": false
          },
          {
            "vehicle": "307 Passion 2.0 16V 138cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024125-3",
            "sold": false
          },
          {
            "vehicle": "307 Presence 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024160-1",
            "sold": false
          },
          {
            "vehicle": "307 Rallye 1.6 16V 110cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024092-3",
            "sold": false
          },
          {
            "vehicle": "307 Rallye 2.0 16V 138cv 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024098-2",
            "sold": false
          },
          {
            "vehicle": "307 Rallye 2.0 16V 138cv 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024107-5",
            "sold": false
          },
          {
            "vehicle": "307 Sed. Feline 2.0/ 2.0 Flex 16V 4p Mec",
            "manufacturer": "Peugeot",
            "fipe_code": "024127-0",
            "sold": false
          },
          {
            "vehicle": "307 Sed. Presence 1.6 Flex 16V 4p",
            "manufacturer": "Peugeot",
            "fipe_code": "024126-1",
            "sold": false
          },
          {
            "vehicle": "307 Sed. Presence 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024161-0",
            "sold": false
          },
          {
            "vehicle": "307 Sed.Feline/Griff 2.0/2.0 Flex 4p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024128-8",
            "sold": false
          },
          {
            "vehicle": "307 Soleil/ Presence 1.6/1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024090-7",
            "sold": false
          },
          {
            "vehicle": "307 SW 2.0 16V 138cv 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024097-4",
            "sold": false
          },
          {
            "vehicle": "307 SW 2.0 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024109-1",
            "sold": false
          },
          {
            "vehicle": "307 SW Allure 2.0 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024137-7",
            "sold": false
          },
          {
            "vehicle": "307 SW Allure 2.0 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024136-9",
            "sold": false
          },
          {
            "vehicle": "307 SW Feline 2.0 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024138-5",
            "sold": false
          },
          {
            "vehicle": "308 Active 1.6 Flex 16V 5p mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024186-5",
            "sold": false
          },
          {
            "vehicle": "308 Allure 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024187-3",
            "sold": false
          },
          {
            "vehicle": "308 Allure 1.6 Turbo Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024225-0",
            "sold": false
          },
          {
            "vehicle": "308 Allure 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024189-0",
            "sold": false
          },
          {
            "vehicle": "308 Allure 2.0 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024188-1",
            "sold": false
          },
          {
            "vehicle": "308 CC 1.6 Turbo 16V 2p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024191-1",
            "sold": false
          },
          {
            "vehicle": "308 CC Roland Garros 1.6 Turbo16V 2p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024201-2",
            "sold": false
          },
          {
            "vehicle": "308 Feline 2.0 Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024184-9",
            "sold": false
          },
          {
            "vehicle": "308 Feline/Griffe 1.6 Turbo 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024193-8",
            "sold": false
          },
          {
            "vehicle": "308 Griffe 1.6 Turbo Flex 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024216-0",
            "sold": false
          },
          {
            "vehicle": "308 QUIKSILVER 1.6 Flex 16V 5p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024208-0",
            "sold": false
          },
          {
            "vehicle": "308 Roland Garros 1.6 Turbo 16V 5P",
            "manufacturer": "Peugeot",
            "fipe_code": "024199-7",
            "sold": false
          },
          {
            "vehicle": "405 GLi/ GL 1.6",
            "manufacturer": "Peugeot",
            "fipe_code": "024009-5",
            "sold": false
          },
          {
            "vehicle": "405 GRi 1.8",
            "manufacturer": "Peugeot",
            "fipe_code": "024010-9",
            "sold": false
          },
          {
            "vehicle": "405 Mi 2.0 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024048-6",
            "sold": false
          },
          {
            "vehicle": "405 SRi 1.8",
            "manufacturer": "Peugeot",
            "fipe_code": "024011-7",
            "sold": false
          },
          {
            "vehicle": "405 SRi 2.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024012-5",
            "sold": false
          },
          {
            "vehicle": "405 SRi Break",
            "manufacturer": "Peugeot",
            "fipe_code": "024013-3",
            "sold": false
          },
          {
            "vehicle": "405 STi",
            "manufacturer": "Peugeot",
            "fipe_code": "024014-1",
            "sold": false
          },
          {
            "vehicle": "406 Break 2.0 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024036-2",
            "sold": false
          },
          {
            "vehicle": "406 Break 3.0 V6 24V",
            "manufacturer": "Peugeot",
            "fipe_code": "024059-1",
            "sold": false
          },
          {
            "vehicle": "406 Break ST 2.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024074-5",
            "sold": false
          },
          {
            "vehicle": "406 Cupê 3.0 24V Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024070-2",
            "sold": false
          },
          {
            "vehicle": "406 Cupê 3.0 24V Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024023-0",
            "sold": false
          },
          {
            "vehicle": "406 Familiale 2.0 16V Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024071-0",
            "sold": false
          },
          {
            "vehicle": "406 Familiale 2.0 16V Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024052-4",
            "sold": false
          },
          {
            "vehicle": "406 Sedan 2.0 Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024072-9",
            "sold": false
          },
          {
            "vehicle": "406 Sedan 2.0 Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024051-6",
            "sold": false
          },
          {
            "vehicle": "406 Sedan 3.0 V6 24V",
            "manufacturer": "Peugeot",
            "fipe_code": "024075-3",
            "sold": false
          },
          {
            "vehicle": "406 ST 2.0 16V  Mec",
            "manufacturer": "Peugeot",
            "fipe_code": "024035-4",
            "sold": false
          },
          {
            "vehicle": "406 ST/ SVA 2.0 16V Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024020-6",
            "sold": false
          },
          {
            "vehicle": "406 SV 2.0 16V",
            "manufacturer": "Peugeot",
            "fipe_code": "024037-0",
            "sold": false
          },
          {
            "vehicle": "406 SVA 3.0 24V",
            "manufacturer": "Peugeot",
            "fipe_code": "024060-5",
            "sold": false
          },
          {
            "vehicle": "406 SVE 3.0 24V",
            "manufacturer": "Peugeot",
            "fipe_code": "024025-7",
            "sold": false
          },
          {
            "vehicle": "407 Sed. Allure 2.0 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024139-3",
            "sold": false
          },
          {
            "vehicle": "407 Sed. Feline 3.0 V6 211cv 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024140-7",
            "sold": false
          },
          {
            "vehicle": "407 Sed. Griffe 3.0 V6 211cv 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024141-5",
            "sold": false
          },
          {
            "vehicle": "407 Sedan 2.0 16V  138cv 4p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024115-6",
            "sold": false
          },
          {
            "vehicle": "407 Sedan 3.0 V6 211cv 4p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024116-4",
            "sold": false
          },
          {
            "vehicle": "407 SW 2.0 16V 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024117-2",
            "sold": false
          },
          {
            "vehicle": "407 SW 3.0 V6 211cv 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024118-0",
            "sold": false
          },
          {
            "vehicle": "407 SW Allure 2.0 16V 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024142-3",
            "sold": false
          },
          {
            "vehicle": "407 SW Feline 3.0 V6 211cv 5p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024143-1",
            "sold": false
          },
          {
            "vehicle": "408 Sed. Business 1.6 TB Flex 16V 4p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024226-8",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Allure 2.0 Flex 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024177-6",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Allure 2.0 Flex 16V 4p Mec.",
            "manufacturer": "Peugeot",
            "fipe_code": "024178-4",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Feline 2.0 Flex 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024179-2",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Griffe 1.6 TB Flex 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024224-1",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Griffe 1.6 Turbo 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024185-7",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Griffe 2.0 Flex 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024180-6",
            "sold": false
          },
          {
            "vehicle": "408 Sedan Limited 2.0 Flex 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024209-8",
            "sold": false
          },
          {
            "vehicle": "504 GD 2.3 Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024049-4",
            "sold": false
          },
          {
            "vehicle": "504 GRD 2.3 Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024050-8",
            "sold": false
          },
          {
            "vehicle": "505 SR/ SRi/ SRX",
            "manufacturer": "Peugeot",
            "fipe_code": "024061-3",
            "sold": false
          },
          {
            "vehicle": "508 THP 1.6 Turbo 16V 4p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024190-3",
            "sold": false
          },
          {
            "vehicle": "605 SRi 3.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024062-1",
            "sold": false
          },
          {
            "vehicle": "605 SRi/ SLi 2.0",
            "manufacturer": "Peugeot",
            "fipe_code": "024015-0",
            "sold": false
          },
          {
            "vehicle": "605 SV 3.0 Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024016-8",
            "sold": false
          },
          {
            "vehicle": "605 SV-3 3.0 V6 24V",
            "manufacturer": "Peugeot",
            "fipe_code": "024053-2",
            "sold": false
          },
          {
            "vehicle": "607 Sedan 3.0 V6",
            "manufacturer": "Peugeot",
            "fipe_code": "024079-6",
            "sold": false
          },
          {
            "vehicle": "806 ST Turbo",
            "manufacturer": "Peugeot",
            "fipe_code": "024022-2",
            "sold": false
          },
          {
            "vehicle": "806 SV 2.0 Turbo",
            "manufacturer": "Peugeot",
            "fipe_code": "024017-6",
            "sold": false
          },
          {
            "vehicle": "807 2.0 16V 138cv 5p Aut",
            "manufacturer": "Peugeot",
            "fipe_code": "024108-3",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.3 Furg.TB Dies. Curto/Médio",
            "manufacturer": "Peugeot",
            "fipe_code": "024162-8",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.3 Furg.TB Dies. Méd/ LongoT.Alto",
            "manufacturer": "Peugeot",
            "fipe_code": "024163-6",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.3 LH Executive 15/16L TB Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024181-4",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.3 Minibus 15/16L TB Diesel.",
            "manufacturer": "Peugeot",
            "fipe_code": "024166-0",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.5 Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024021-4",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.8 10Lug. Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024054-0",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.8 15L/16L Dies./TB Diesel",
            "manufacturer": "Peugeot",
            "fipe_code": "024073-7",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.8 Furg. TB Dies. Méd/LongoT.Alto",
            "manufacturer": "Peugeot",
            "fipe_code": "024094-0",
            "sold": false
          },
          {
            "vehicle": "Boxer 2.8 Furgão Dies/ TB Dies.curto/méd",
            "manufacturer": "Peugeot",
            "fipe_code": "024093-1",
            "sold": false
          },
          {
            "vehicle": "HOGGAR Active 1.4 Flex 8V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024205-5",
            "sold": false
          },
          {
            "vehicle": "HOGGAR Allure 1.4 Flex 8V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024206-3",
            "sold": false
          },
          {
            "vehicle": "HOGGAR ESCAPADE 1.6 Flex 16V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024171-7",
            "sold": false
          },
          {
            "vehicle": "HOGGAR X-Line 1.4 Flex 8V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024169-5",
            "sold": false
          },
          {
            "vehicle": "HOGGAR XR 1.4 Flex 8V 2p",
            "manufacturer": "Peugeot",
            "fipe_code": "024170-9",
            "sold": false
          },
          {
            "vehicle": "Partner  VAN 1.6  Flex 16V  5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024172-5",
            "sold": false
          },
          {
            "vehicle": "Partner  VAN ESCAPADE 1.6 Flex 16V 5p",
            "manufacturer": "Peugeot",
            "fipe_code": "024173-3",
            "sold": false
          },
          {
            "vehicle": "Partner Furgão 1.6 16V/ 1.6 16V Flex 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024101-6",
            "sold": false
          },
          {
            "vehicle": "Partner Furgão 1.8 3p",
            "manufacturer": "Peugeot",
            "fipe_code": "024063-0",
            "sold": false
          },
          {
            "vehicle": "RCZ 1.6 Turbo16v 2p Aut.",
            "manufacturer": "Peugeot",
            "fipe_code": "024182-2",
            "sold": false
          },
          {
            "vehicle": "Gran Voyager LE 2.5",
            "manufacturer": "Plymouth",
            "fipe_code": "050001-1",
            "sold": false
          },
          {
            "vehicle": "Sundance 2.5",
            "manufacturer": "Plymouth",
            "fipe_code": "050002-0",
            "sold": false
          },
          {
            "vehicle": "Trans-AM 5.7 V8",
            "manufacturer": "Pontiac",
            "fipe_code": "051001-7",
            "sold": false
          },
          {
            "vehicle": "Trans-Sport SE 3.1",
            "manufacturer": "Pontiac",
            "fipe_code": "051002-5",
            "sold": false
          },
          {
            "vehicle": "718 Boxster 2.0 300cv",
            "manufacturer": "Porsche",
            "fipe_code": "035069-9",
            "sold": false
          },
          {
            "vehicle": "718 Boxster S 2.5 350cv",
            "manufacturer": "Porsche",
            "fipe_code": "035070-2",
            "sold": false
          },
          {
            "vehicle": "718 Cayman 2.0 300cv",
            "manufacturer": "Porsche",
            "fipe_code": "035084-2",
            "sold": false
          },
          {
            "vehicle": "718 Cayman S 2.5 350cv",
            "manufacturer": "Porsche",
            "fipe_code": "035086-9",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4 Cabriolet 3.0 370cv",
            "manufacturer": "Porsche",
            "fipe_code": "035073-7",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4 Coupe 3.0 370cv",
            "manufacturer": "Porsche",
            "fipe_code": "035075-3",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4 GTS Coupé 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035066-4",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4 GTS Targa 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035068-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4S Cabriolet 3.0 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035080-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4S Cabriolet-4 3.6/3.8",
            "manufacturer": "Porsche",
            "fipe_code": "035026-5",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4S Coupe 3.0 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035078-8",
            "sold": false
          },
          {
            "vehicle": "911 Carrera 4S Coupé-4 3.6/3.8",
            "manufacturer": "Porsche",
            "fipe_code": "035023-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Cabriolet 3.0 370cv",
            "manufacturer": "Porsche",
            "fipe_code": "035074-5",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Cabriolet 3.4/ 3.6 Mec",
            "manufacturer": "Porsche",
            "fipe_code": "035003-6",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Cabriolet 3.4/ 3.6 Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035008-7",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Cabriolet-4 3.4 Mec",
            "manufacturer": "Porsche",
            "fipe_code": "035004-4",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Cabriolet-4 3.4 Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035018-4",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé",
            "manufacturer": "Porsche",
            "fipe_code": "035001-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupe 3.0 370cv",
            "manufacturer": "Porsche",
            "fipe_code": "035076-1",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé Black Edi. 3.6/3.4 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035047-8",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé GTS 3.8 24V 408cv",
            "manufacturer": "Porsche",
            "fipe_code": "035046-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035006-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé-4 3.4/ 3.6",
            "manufacturer": "Porsche",
            "fipe_code": "035002-8",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Coupé-4 3.4/ 3.6 Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035007-9",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Evo Cabriolet",
            "manufacturer": "Porsche",
            "fipe_code": "035020-6",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Evo Cabriolet-4",
            "manufacturer": "Porsche",
            "fipe_code": "035022-2",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Evo Coupé",
            "manufacturer": "Porsche",
            "fipe_code": "035019-2",
            "sold": false
          },
          {
            "vehicle": "911 Carrera Evo Coupé-4",
            "manufacturer": "Porsche",
            "fipe_code": "035021-4",
            "sold": false
          },
          {
            "vehicle": "911 Carrera GT3 RS",
            "manufacturer": "Porsche",
            "fipe_code": "035082-6",
            "sold": false
          },
          {
            "vehicle": "911 Carrera GT3/ GT2 Street",
            "manufacturer": "Porsche",
            "fipe_code": "035009-5",
            "sold": false
          },
          {
            "vehicle": "911 Carrera GTS Cabriolet 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035065-6",
            "sold": false
          },
          {
            "vehicle": "911 Carrera GTS Coupé 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035064-8",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S 50th Coupé 3.8 24V(991)",
            "manufacturer": "Porsche",
            "fipe_code": "035059-1",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Cabriolet 3.0 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035072-9",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Cabriolet 3.8 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035032-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Cabriolet 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035050-8",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Coupe 3.0 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035077-0",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Coupé 3.8 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035028-1",
            "sold": false
          },
          {
            "vehicle": "911 Carrera S Coupé 3.8 24V (991)",
            "manufacturer": "Porsche",
            "fipe_code": "035049-4",
            "sold": false
          },
          {
            "vehicle": "911 Targa 3.6",
            "manufacturer": "Porsche",
            "fipe_code": "035013-3",
            "sold": false
          },
          {
            "vehicle": "911 Targa 4 3.0 370cv",
            "manufacturer": "Porsche",
            "fipe_code": "035079-6",
            "sold": false
          },
          {
            "vehicle": "911 Targa 4S",
            "manufacturer": "Porsche",
            "fipe_code": "035036-2",
            "sold": false
          },
          {
            "vehicle": "911 Targa 4S 3.0 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035081-8",
            "sold": false
          },
          {
            "vehicle": "911 Turbo Cabriolet 3.6/3.8",
            "manufacturer": "Porsche",
            "fipe_code": "035029-0",
            "sold": false
          },
          {
            "vehicle": "911 Turbo Coupé 3.6 / 3.8",
            "manufacturer": "Porsche",
            "fipe_code": "035014-1",
            "sold": false
          },
          {
            "vehicle": "911 Turbo S Cabriolet 3.6/3.8 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035031-1",
            "sold": false
          },
          {
            "vehicle": "911 Turbo S Coupé 3.6/3.8 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035030-3",
            "sold": false
          },
          {
            "vehicle": "928 GTS 5.4 32V",
            "manufacturer": "Porsche",
            "fipe_code": "035016-8",
            "sold": false
          },
          {
            "vehicle": "968 Cabriolet 3.0",
            "manufacturer": "Porsche",
            "fipe_code": "035005-2",
            "sold": false
          },
          {
            "vehicle": "968 Coupé 3.0 16V",
            "manufacturer": "Porsche",
            "fipe_code": "035017-6",
            "sold": false
          },
          {
            "vehicle": "Boxster  2.9 255cv",
            "manufacturer": "Porsche",
            "fipe_code": "035039-7",
            "sold": false
          },
          {
            "vehicle": "Boxster 2.7 265cv",
            "manufacturer": "Porsche",
            "fipe_code": "035051-6",
            "sold": false
          },
          {
            "vehicle": "Boxster GTS 3.4 330cv",
            "manufacturer": "Porsche",
            "fipe_code": "035057-5",
            "sold": false
          },
          {
            "vehicle": "Boxster Mec.",
            "manufacturer": "Porsche",
            "fipe_code": "035015-0",
            "sold": false
          },
          {
            "vehicle": "Boxster S",
            "manufacturer": "Porsche",
            "fipe_code": "035011-7",
            "sold": false
          },
          {
            "vehicle": "Boxster S 3.4 310cv",
            "manufacturer": "Porsche",
            "fipe_code": "035038-9",
            "sold": false
          },
          {
            "vehicle": "Boxster S 3.4 315cv",
            "manufacturer": "Porsche",
            "fipe_code": "035052-4",
            "sold": false
          },
          {
            "vehicle": "Boxster S Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035012-5",
            "sold": false
          },
          {
            "vehicle": "Boxster Spyder 3.4 320cv",
            "manufacturer": "Porsche",
            "fipe_code": "035044-3",
            "sold": false
          },
          {
            "vehicle": "Boxster Spyder 3.8 375cv",
            "manufacturer": "Porsche",
            "fipe_code": "035071-0",
            "sold": false
          },
          {
            "vehicle": "Boxster Tiptronic",
            "manufacturer": "Porsche",
            "fipe_code": "035010-9",
            "sold": false
          },
          {
            "vehicle": "Cayenne GTS 3.6 Bi-Turbo 440cv",
            "manufacturer": "Porsche",
            "fipe_code": "035062-1",
            "sold": false
          },
          {
            "vehicle": "Cayenne GTS 4.8 405/420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035037-0",
            "sold": false
          },
          {
            "vehicle": "Cayenne S 3.6 Bi-Turbo 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035063-0",
            "sold": false
          },
          {
            "vehicle": "Cayenne S 4.5/4.8",
            "manufacturer": "Porsche",
            "fipe_code": "035024-9",
            "sold": false
          },
          {
            "vehicle": "Cayenne S E-Hybrid 3.0 V6 416cv",
            "manufacturer": "Porsche",
            "fipe_code": "035085-0",
            "sold": false
          },
          {
            "vehicle": "Cayenne Turbo 4.5/4.8",
            "manufacturer": "Porsche",
            "fipe_code": "035025-7",
            "sold": false
          },
          {
            "vehicle": "Cayenne Turbo S 4.5/ 4.8 32V",
            "manufacturer": "Porsche",
            "fipe_code": "035035-4",
            "sold": false
          },
          {
            "vehicle": "Cayenne V6 3.2/3.6 24V",
            "manufacturer": "Porsche",
            "fipe_code": "035027-3",
            "sold": false
          },
          {
            "vehicle": "Cayman 2.7/ 2.9",
            "manufacturer": "Porsche",
            "fipe_code": "035034-6",
            "sold": false
          },
          {
            "vehicle": "Cayman GT4 3.8 385cv",
            "manufacturer": "Porsche",
            "fipe_code": "035061-3",
            "sold": false
          },
          {
            "vehicle": "Cayman GTS 3.4 340cv",
            "manufacturer": "Porsche",
            "fipe_code": "035058-3",
            "sold": false
          },
          {
            "vehicle": "Cayman R 3.4 330cv",
            "manufacturer": "Porsche",
            "fipe_code": "035045-1",
            "sold": false
          },
          {
            "vehicle": "Cayman S 3.4",
            "manufacturer": "Porsche",
            "fipe_code": "035033-8",
            "sold": false
          },
          {
            "vehicle": "Macan 2.0 Turbo 237/252cv",
            "manufacturer": "Porsche",
            "fipe_code": "035060-5",
            "sold": false
          },
          {
            "vehicle": "Macan GTS 3.0 Bi-Turbo 360cv",
            "manufacturer": "Porsche",
            "fipe_code": "035083-4",
            "sold": false
          },
          {
            "vehicle": "Macan S 3.0 Bi-Turbo 340cv",
            "manufacturer": "Porsche",
            "fipe_code": "035055-9",
            "sold": false
          },
          {
            "vehicle": "Macan Turbo 3.6 Bi-Turbo 400cv",
            "manufacturer": "Porsche",
            "fipe_code": "035056-7",
            "sold": false
          },
          {
            "vehicle": "Panamera 3.6 V6 300cv/310cv",
            "manufacturer": "Porsche",
            "fipe_code": "035043-5",
            "sold": false
          },
          {
            "vehicle": "Panamera 4S 4.8 400cv",
            "manufacturer": "Porsche",
            "fipe_code": "035041-9",
            "sold": false
          },
          {
            "vehicle": "Panamera Edition 3.6 v6 310cv",
            "manufacturer": "Porsche",
            "fipe_code": "035067-2",
            "sold": false
          },
          {
            "vehicle": "Panamera GT-S 4.8",
            "manufacturer": "Porsche",
            "fipe_code": "035053-2",
            "sold": false
          },
          {
            "vehicle": "Panamera S 3.0 Bi-Turbo 420cv",
            "manufacturer": "Porsche",
            "fipe_code": "035054-0",
            "sold": false
          },
          {
            "vehicle": "Panamera S 4.8 400cv",
            "manufacturer": "Porsche",
            "fipe_code": "035040-0",
            "sold": false
          },
          {
            "vehicle": "Panamera Turbo 4.8 500cv/520cv",
            "manufacturer": "Porsche",
            "fipe_code": "035042-7",
            "sold": false
          },
          {
            "vehicle": "Panamera Turbo S 4.8    ",
            "manufacturer": "Porsche",
            "fipe_code": "035048-6",
            "sold": false
          },
          {
            "vehicle": "2500 LARAMIE  6.7 TDI  CD 4x4 Diesel",
            "manufacturer": "RAM",
            "fipe_code": "083001-1",
            "sold": false
          },
          {
            "vehicle": "2500 LARAMIE TROPIV. 6.7 4x4 Diesel",
            "manufacturer": "RAM",
            "fipe_code": "083002-0",
            "sold": false
          },
          {
            "vehicle": "LINK 1.3 16V 5p",
            "manufacturer": "RELY",
            "fipe_code": "084003-3",
            "sold": false
          },
          {
            "vehicle": "PICK-UP Q22B CS 1.0 2p",
            "manufacturer": "RELY",
            "fipe_code": "084001-7",
            "sold": false
          },
          {
            "vehicle": "PICK-UP Q22D CS 1.0 2p",
            "manufacturer": "RELY",
            "fipe_code": "084004-1",
            "sold": false
          },
          {
            "vehicle": "PICK-UP Q22E CD 1.0 4p",
            "manufacturer": "RELY",
            "fipe_code": "084005-0",
            "sold": false
          },
          {
            "vehicle": "VAN Q22 1.0 5p",
            "manufacturer": "RELY",
            "fipe_code": "084002-5",
            "sold": false
          },
          {
            "vehicle": "19 16S/ RT 16V",
            "manufacturer": "Renault",
            "fipe_code": "025001-5",
            "sold": false
          },
          {
            "vehicle": "19 RN",
            "manufacturer": "Renault",
            "fipe_code": "025002-3",
            "sold": false
          },
          {
            "vehicle": "19 RT 1.8/ 1.8i",
            "manufacturer": "Renault",
            "fipe_code": "025003-1",
            "sold": false
          },
          {
            "vehicle": "19 RT 1.8/ 1.8i Conv.",
            "manufacturer": "Renault",
            "fipe_code": "025031-7",
            "sold": false
          },
          {
            "vehicle": "21 GTX 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025020-1",
            "sold": false
          },
          {
            "vehicle": "21 Nevada GTX 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025033-3",
            "sold": false
          },
          {
            "vehicle": "21 Nevada TXE 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025008-2",
            "sold": false
          },
          {
            "vehicle": "21 TXE/ TXi 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025034-1",
            "sold": false
          },
          {
            "vehicle": "Clio Auth. /AIR Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025099-6",
            "sold": false
          },
          {
            "vehicle": "Clio Authentique 1.0 8V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025081-3",
            "sold": false
          },
          {
            "vehicle": "Clio Authentique 1.0/1.0 Hi-Power 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025082-1",
            "sold": false
          },
          {
            "vehicle": "Clio Authentique Hi-Flex 1.0 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025111-9",
            "sold": false
          },
          {
            "vehicle": "Clio Authentique Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025112-7",
            "sold": false
          },
          {
            "vehicle": "Clio Authentique Hi-Flex 1.6 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025109-7",
            "sold": false
          },
          {
            "vehicle": "Clio Campus Hi-Flex 1.0 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025150-0",
            "sold": false
          },
          {
            "vehicle": "Clio Campus Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025151-8",
            "sold": false
          },
          {
            "vehicle": "Clio Dynamique 1.0/ 1.0 Hi-Power 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025090-2",
            "sold": false
          },
          {
            "vehicle": "Clio Dynamique 1.6 16V 110cv 3p",
            "manufacturer": "Renault",
            "fipe_code": "025091-0",
            "sold": false
          },
          {
            "vehicle": "Clio Dynamique Hi-Flex 1.6 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025098-8",
            "sold": false
          },
          {
            "vehicle": "Clio Expression 1.0 8V 60cv 3p",
            "manufacturer": "Renault",
            "fipe_code": "025085-6",
            "sold": false
          },
          {
            "vehicle": "Clio Expression 1.0/1.0 Hi-Power 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025086-4",
            "sold": false
          },
          {
            "vehicle": "Clio Expression Hi-Flex 1.0 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025113-5",
            "sold": false
          },
          {
            "vehicle": "Clio Expression Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025114-3",
            "sold": false
          },
          {
            "vehicle": "Clio GetUp Hi-Flex 1.0 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025121-6",
            "sold": false
          },
          {
            "vehicle": "Clio GetUp Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025122-4",
            "sold": false
          },
          {
            "vehicle": "Clio Hi-Flex 1.0 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025169-0",
            "sold": false
          },
          {
            "vehicle": "Clio Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025170-4",
            "sold": false
          },
          {
            "vehicle": "Clio Hi-Flex 1.6 16V 3p",
            "manufacturer": "Renault",
            "fipe_code": "025095-3",
            "sold": false
          },
          {
            "vehicle": "Clio Hi-Flex/ Expres. Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025096-1",
            "sold": false
          },
          {
            "vehicle": "Clio Privilège Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025115-1",
            "sold": false
          },
          {
            "vehicle": "Clio Privilège Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025100-3",
            "sold": false
          },
          {
            "vehicle": "Clio RL / Yahoo/ Authent. 1.0 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025026-0",
            "sold": false
          },
          {
            "vehicle": "Clio RL 1.6 3p/5p",
            "manufacturer": "Renault",
            "fipe_code": "025004-0",
            "sold": false
          },
          {
            "vehicle": "Clio RL Alizé/ Authent. 1.6 16V 110cv 5p",
            "manufacturer": "Renault",
            "fipe_code": "025075-9",
            "sold": false
          },
          {
            "vehicle": "Clio RL/ JP/Auth.1.0/1.0 Hi-Power 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025061-9",
            "sold": false
          },
          {
            "vehicle": "Clio RN 1.6 3p (importado)",
            "manufacturer": "Renault",
            "fipe_code": "025021-0",
            "sold": false
          },
          {
            "vehicle": "Clio RN 1.6 5p",
            "manufacturer": "Renault",
            "fipe_code": "025028-7",
            "sold": false
          },
          {
            "vehicle": "Clio RN/ Expression 1.0 5p",
            "manufacturer": "Renault",
            "fipe_code": "025027-9",
            "sold": false
          },
          {
            "vehicle": "Clio RN/ Expression 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025048-1",
            "sold": false
          },
          {
            "vehicle": "Clio RN/Alizé/Expr./1.0 Hi-Power 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025054-6",
            "sold": false
          },
          {
            "vehicle": "Clio RT 1.6 5p",
            "manufacturer": "Renault",
            "fipe_code": "025005-8",
            "sold": false
          },
          {
            "vehicle": "Clio RT/ Privil. 1.0/1.0 Hi-Power 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025056-2",
            "sold": false
          },
          {
            "vehicle": "Clio RT/ Privilège 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025049-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sed RT/ Privilège/ Botic 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025051-1",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Alizé 1.6/ 1.6 Hi-Flex 16v 4p",
            "manufacturer": "Renault",
            "fipe_code": "025076-7",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Authentique Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025116-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Authentique Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025102-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Expression Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025117-8",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Hi-Flex/Exp.Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025097-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Privilège Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025118-6",
            "sold": false
          },
          {
            "vehicle": "Clio Sed. Privilège Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025101-1",
            "sold": false
          },
          {
            "vehicle": "Clio Sed.RL/Auth.1.0/1.0 Hi-Power 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025067-8",
            "sold": false
          },
          {
            "vehicle": "Clio Sed.RN/Alizé/Botic./Exp.1.0 Hi-Pow.",
            "manufacturer": "Renault",
            "fipe_code": "025055-4",
            "sold": false
          },
          {
            "vehicle": "Clio Sed.RT/Privil.1.0/1.0 Hi-Pow.16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025057-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sedan Authentique 1.6 16V 110cv 4p",
            "manufacturer": "Renault",
            "fipe_code": "025093-7",
            "sold": false
          },
          {
            "vehicle": "Clio Sedan Egeus Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025123-2",
            "sold": false
          },
          {
            "vehicle": "Clio Sedan Egeus Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025124-0",
            "sold": false
          },
          {
            "vehicle": "Clio Sedan RN/ Expression 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025050-3",
            "sold": false
          },
          {
            "vehicle": "Clio SI 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025053-8",
            "sold": false
          },
          {
            "vehicle": "Clio Tech Run 1.0 16v 70cv 5p",
            "manufacturer": "Renault",
            "fipe_code": "025060-0",
            "sold": false
          },
          {
            "vehicle": "DUSTER 1.6 Hi-Flex 16V Mec      ",
            "manufacturer": "Renault",
            "fipe_code": "025181-0",
            "sold": false
          },
          {
            "vehicle": "DUSTER DAKAR 4x2 1.6 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025233-6",
            "sold": false
          },
          {
            "vehicle": "DUSTER DAKAR 4x4 2.0 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025234-4",
            "sold": false
          },
          {
            "vehicle": "DUSTER Dynamique 1.6 Hi-Flex 16V Mec. ",
            "manufacturer": "Renault",
            "fipe_code": "025183-6",
            "sold": false
          },
          {
            "vehicle": "DUSTER Dynamique 2.0  Hi-Flex 16V Aut.      ",
            "manufacturer": "Renault",
            "fipe_code": "025185-2",
            "sold": false
          },
          {
            "vehicle": "DUSTER Dynamique 2.0 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025184-4",
            "sold": false
          },
          {
            "vehicle": "DUSTER Dynamique 4x4 2.0 Hi-Flex 16V Mec",
            "manufacturer": "Renault",
            "fipe_code": "025186-0",
            "sold": false
          },
          {
            "vehicle": "DUSTER Expression 1.6 Hi-Flex 16V Mec.    ",
            "manufacturer": "Renault",
            "fipe_code": "025182-8",
            "sold": false
          },
          {
            "vehicle": "DUSTER OROCH Dyna. 1.6 Hi-Flex 16V Mec",
            "manufacturer": "Renault",
            "fipe_code": "025231-0",
            "sold": false
          },
          {
            "vehicle": "DUSTER OROCH Dyna. 2.0 Hi-Flex 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025240-9",
            "sold": false
          },
          {
            "vehicle": "DUSTER OROCH Dyna. 2.0 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025232-8",
            "sold": false
          },
          {
            "vehicle": "DUSTER OROCH Exp. 1.6 Hi-Flex 16V  Mec. ",
            "manufacturer": "Renault",
            "fipe_code": "025230-1",
            "sold": false
          },
          {
            "vehicle": "DUSTER OUTDOOR 1.6 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025221-2",
            "sold": false
          },
          {
            "vehicle": "DUSTER TECHROAD 1.6 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025191-7",
            "sold": false
          },
          {
            "vehicle": "DUSTER TECHROAD 2.0 Hi-Flex 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025193-3",
            "sold": false
          },
          {
            "vehicle": "DUSTER TECHROAD 2.0 Hi-Flex 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025192-5",
            "sold": false
          },
          {
            "vehicle": "DUSTER TECHROAD 4X4 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025209-3",
            "sold": false
          },
          {
            "vehicle": "Express 1.6/ RL 1.6",
            "manufacturer": "Renault",
            "fipe_code": "025012-0",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sed. Dyn. Plus 2.0 16V FLEX Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025225-5",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sed. Dynamique 2.0 16V FLEX Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025173-9",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sedan Dynamique 2.0 16V FLEX Aut",
            "manufacturer": "Renault",
            "fipe_code": "025174-7",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sedan Expres. 1.6 16V FLEX Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025239-5",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sedan GT Line 2.0 Flex Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025212-3",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sedan GT SPORT",
            "manufacturer": "Renault",
            "fipe_code": "025194-1",
            "sold": false
          },
          {
            "vehicle": "FLUENCE Sedan Privilège 2.0 16V FLEX Aut",
            "manufacturer": "Renault",
            "fipe_code": "025175-5",
            "sold": false
          },
          {
            "vehicle": "Kangoo Authentique 1.6 16V 95cv",
            "manufacturer": "Renault",
            "fipe_code": "025106-2",
            "sold": false
          },
          {
            "vehicle": "Kangoo Authentique Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025134-8",
            "sold": false
          },
          {
            "vehicle": "Kangoo Expres.SPORTWAY 1.6/1.6 Hi-Flex",
            "manufacturer": "Renault",
            "fipe_code": "025128-3",
            "sold": false
          },
          {
            "vehicle": "Kangoo Express Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025133-0",
            "sold": false
          },
          {
            "vehicle": "Kangoo Express RL/ Express 1.0 16V/ 8V",
            "manufacturer": "Renault",
            "fipe_code": "025044-9",
            "sold": false
          },
          {
            "vehicle": "Kangoo Express RL/ Express 1.6 16V/ 8V",
            "manufacturer": "Renault",
            "fipe_code": "025045-7",
            "sold": false
          },
          {
            "vehicle": "Kangoo Expression Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025132-1",
            "sold": false
          },
          {
            "vehicle": "Kangoo RL 1.0 8V",
            "manufacturer": "Renault",
            "fipe_code": "025038-4",
            "sold": false
          },
          {
            "vehicle": "Kangoo RL 1.6 8V",
            "manufacturer": "Renault",
            "fipe_code": "025041-4",
            "sold": false
          },
          {
            "vehicle": "Kangoo RL/ Yahoo 1.0 16V 70cv",
            "manufacturer": "Renault",
            "fipe_code": "025070-8",
            "sold": false
          },
          {
            "vehicle": "Kangoo RN 1.0 8V",
            "manufacturer": "Renault",
            "fipe_code": "025039-2",
            "sold": false
          },
          {
            "vehicle": "Kangoo RN/ Yahoo/ Expression 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025072-4",
            "sold": false
          },
          {
            "vehicle": "Kangoo RN/Expression 1.6 16V / 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025040-6",
            "sold": false
          },
          {
            "vehicle": "Kangoo RT 1.0 16V 70cv 5p",
            "manufacturer": "Renault",
            "fipe_code": "025073-2",
            "sold": false
          },
          {
            "vehicle": "Kangoo RT 1.6 16V/ 8V 90cv 5p",
            "manufacturer": "Renault",
            "fipe_code": "025074-0",
            "sold": false
          },
          {
            "vehicle": "Laguna Grand Tour Privilège 3.0 V6 210cv",
            "manufacturer": "Renault",
            "fipe_code": "025080-5",
            "sold": false
          },
          {
            "vehicle": "Laguna Nevada RT/ RXE 2.0s 16V",
            "manufacturer": "Renault",
            "fipe_code": "025010-4",
            "sold": false
          },
          {
            "vehicle": "Laguna Privilège 3.0 V6 24V 210cv 5p",
            "manufacturer": "Renault",
            "fipe_code": "025079-1",
            "sold": false
          },
          {
            "vehicle": "Laguna RT 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025006-6",
            "sold": false
          },
          {
            "vehicle": "Laguna RXE 2.0s 8V/ 16V",
            "manufacturer": "Renault",
            "fipe_code": "025011-2",
            "sold": false
          },
          {
            "vehicle": "Laguna V6",
            "manufacturer": "Renault",
            "fipe_code": "025007-4",
            "sold": false
          },
          {
            "vehicle": "LOGAN Authentique Flex 1.0 12V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025242-5",
            "sold": false
          },
          {
            "vehicle": "LOGAN Authentique Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025135-6",
            "sold": false
          },
          {
            "vehicle": "LOGAN Authentique Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025138-0",
            "sold": false
          },
          {
            "vehicle": "LOGAN Authentique Plus Hi-F. 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025226-3",
            "sold": false
          },
          {
            "vehicle": "LOGAN Avantage Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025178-0",
            "sold": false
          },
          {
            "vehicle": "LOGAN Dyna. EasyR Hi-Flex 1.6 8V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025218-2",
            "sold": false
          },
          {
            "vehicle": "LOGAN Dynamique Easy R Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025252-2",
            "sold": false
          },
          {
            "vehicle": "LOGAN Dynamique Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025255-7",
            "sold": false
          },
          {
            "vehicle": "LOGAN Dynamique Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025208-5",
            "sold": false
          },
          {
            "vehicle": "LOGAN Exclusive EasyR Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025224-7",
            "sold": false
          },
          {
            "vehicle": "LOGAN Exclusive Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025223-9",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expres. EasyR Hi-Flex 1.6 8V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025217-4",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expres. P.Avant. Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025238-7",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expres./Exp. UP Hi-Flex 1.0 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025136-4",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expression Easy R Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025256-5",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expression Flex 1.0 12V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025241-7",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expression Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025253-0",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expression Hi-Flex 1.6 16V 4p Aut",
            "manufacturer": "Renault",
            "fipe_code": "025177-1",
            "sold": false
          },
          {
            "vehicle": "LOGAN Expression Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025139-9",
            "sold": false
          },
          {
            "vehicle": "LOGAN Privilège Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025137-2",
            "sold": false
          },
          {
            "vehicle": "LOGAN Privilège Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025140-2",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Chassi 16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025195-0",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Executive 16L Longo Dies",
            "manufacturer": "Renault",
            "fipe_code": "025205-0",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Extra F.Vitre 16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025201-8",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Extra Furgão 16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025198-4",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Furgão 16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025196-8",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Grand F.Vitre16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025200-0",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Grand Furgão16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025197-6",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Std 16L Longo Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025204-2",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Std 16L Médio Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025202-6",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Std Escolar 20L MédioDies",
            "manufacturer": "Renault",
            "fipe_code": "025203-4",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi VIP 16L Longo Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025206-9",
            "sold": false
          },
          {
            "vehicle": "Master 2.3 dCi Vitre Furgão 16V Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025199-2",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi 16V 115cv 13L Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025110-0",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi 16V 115cv 16L Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025094-5",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Chassi 16V 115cv Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025103-8",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Escolar 115cv 16/19L Dies",
            "manufacturer": "Renault",
            "fipe_code": "025157-7",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Executivo 115cv 16L Dies",
            "manufacturer": "Renault",
            "fipe_code": "025158-5",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Furg. Medio/LongoTA Dies.",
            "manufacturer": "Renault",
            "fipe_code": "025105-4",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi FurgãoTB Curto Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025104-6",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Vitré 115cv Curto Diesel   ",
            "manufacturer": "Renault",
            "fipe_code": "025179-8",
            "sold": false
          },
          {
            "vehicle": "Master 2.5 dCi Vitré 115cv Longa Diesel   ",
            "manufacturer": "Renault",
            "fipe_code": "025180-1",
            "sold": false
          },
          {
            "vehicle": "Master 2.8 DTI 114cv 16L Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025071-6",
            "sold": false
          },
          {
            "vehicle": "Master 2.8 DTI Chassi 114cv Diesel",
            "manufacturer": "Renault",
            "fipe_code": "025084-8",
            "sold": false
          },
          {
            "vehicle": "Master 2.8 DTI Furgão 114cv Diesel curto",
            "manufacturer": "Renault",
            "fipe_code": "025083-0",
            "sold": false
          },
          {
            "vehicle": "Master 2.8 DTI Furgão Dies.Longo Alto",
            "manufacturer": "Renault",
            "fipe_code": "025069-4",
            "sold": false
          },
          {
            "vehicle": "Master 2.8 Furgão 85cv Diesel curto",
            "manufacturer": "Renault",
            "fipe_code": "025068-6",
            "sold": false
          },
          {
            "vehicle": "Megane Coupé Cabriolet Dynamique 2.0 Aut",
            "manufacturer": "Renault",
            "fipe_code": "025147-0",
            "sold": false
          },
          {
            "vehicle": "Megane G. Tour EXTREME 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025166-6",
            "sold": false
          },
          {
            "vehicle": "Megane G. Tour EXTREME 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025165-8",
            "sold": false
          },
          {
            "vehicle": "Megane G. Tour EXTREME Hi-Flex 1.6 Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025164-0",
            "sold": false
          },
          {
            "vehicle": "Megane Grand Tour Dynam. Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025129-1",
            "sold": false
          },
          {
            "vehicle": "Megane Grand Tour Dynamique 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025131-3",
            "sold": false
          },
          {
            "vehicle": "Megane Grand Tour Dynamique 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025130-5",
            "sold": false
          },
          {
            "vehicle": "Megane Grand Tour Expres.Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025155-0",
            "sold": false
          },
          {
            "vehicle": "Megane Grand Tour Privilège 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025153-4",
            "sold": false
          },
          {
            "vehicle": "Megane Hatch RN 1.6",
            "manufacturer": "Renault",
            "fipe_code": "025022-8",
            "sold": false
          },
          {
            "vehicle": "Megane Hatch RT 1.6/RT/Alizé/Exp 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025014-7",
            "sold": false
          },
          {
            "vehicle": "Megane Hatch RXE 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025016-3",
            "sold": false
          },
          {
            "vehicle": "Megane Hatch RXE/Egeus 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025043-0",
            "sold": false
          },
          {
            "vehicle": "Megane Sed. Expression 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025149-6",
            "sold": false
          },
          {
            "vehicle": "Megane Sed. Expression 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025154-2",
            "sold": false
          },
          {
            "vehicle": "Megane Sed. EXTREME 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025163-1",
            "sold": false
          },
          {
            "vehicle": "Megane Sed. EXTREME 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025162-3",
            "sold": false
          },
          {
            "vehicle": "Megane Sed. EXTREME HI-Flex 1.6 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025161-5",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan Dynamique 2.0 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025127-5",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan Dynamique 2.0 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025126-7",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan Dynamique Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025120-8",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan Expression Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025119-4",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan Privilège 2.0 16V Aut",
            "manufacturer": "Renault",
            "fipe_code": "025092-9",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan RT 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025015-5",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan RT/Alizé 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025042-2",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan RXE/ Privilège 2.0 16V Mec",
            "manufacturer": "Renault",
            "fipe_code": "025078-3",
            "sold": false
          },
          {
            "vehicle": "Megane Sedan RXE/Egeus 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025017-1",
            "sold": false
          },
          {
            "vehicle": "Safrane RXE",
            "manufacturer": "Renault",
            "fipe_code": "025023-6",
            "sold": false
          },
          {
            "vehicle": "SANDERO Auth. Plus Hi-Power 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025227-1",
            "sold": false
          },
          {
            "vehicle": "SANDERO Authentique Flex 1.0 12V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025243-3",
            "sold": false
          },
          {
            "vehicle": "SANDERO Authentique Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025141-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO Authentique Hi-Flex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025142-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO Authentique Hi-Power 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025216-6",
            "sold": false
          },
          {
            "vehicle": "SANDERO Dyna. EasyR Hi-Flex 1.6 8V",
            "manufacturer": "Renault",
            "fipe_code": "025219-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO Dynamique Easy R Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025248-4",
            "sold": false
          },
          {
            "vehicle": "SANDERO Dynamique Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025254-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO Dynamique Hi-Power 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025213-1",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expres EasyR Hi-Flex 1.6 8V",
            "manufacturer": "Renault",
            "fipe_code": "025220-4",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expres. Easy R Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025251-4",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expres. P.Avant. Hi.P. 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025237-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Flex 1.0 12V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025244-1",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025250-6",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025143-7",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Hi-Flex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025144-5",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Hi-Power 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025215-8",
            "sold": false
          },
          {
            "vehicle": "SANDERO Expression Hi-Power 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025214-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO GT line Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025249-2",
            "sold": false
          },
          {
            "vehicle": "SANDERO GT line Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025172-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO GT line Hi-Flex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025190-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO GT line Hi-Power 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025229-8",
            "sold": false
          },
          {
            "vehicle": "SANDERO NOKIA Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025152-6",
            "sold": false
          },
          {
            "vehicle": "SANDERO Privilège Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025146-1",
            "sold": false
          },
          {
            "vehicle": "SANDERO Privilège Hi-Flex 1.6 16V 5p Aut",
            "manufacturer": "Renault",
            "fipe_code": "025176-3",
            "sold": false
          },
          {
            "vehicle": "SANDERO Privilège Hi-Flex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025145-3",
            "sold": false
          },
          {
            "vehicle": "SANDERO SPORT RS 2.0 Hi-Power 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025228-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEP. Easy R H-Power 1.6 8V",
            "manufacturer": "Renault",
            "fipe_code": "025222-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEP. Easy R R.CURL H.P. 1.6 5p",
            "manufacturer": "Renault",
            "fipe_code": "025236-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEP. R. CURL Hi-Power 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025235-2",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Easy R Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025247-6",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025246-8",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Hi-F. R. CURL 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025188-7",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025156-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Hi-Flex 1.6 16V 5p Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025187-9",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Hi-Power 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025189-5",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Tweed HFlex 1.6 16V Aut",
            "manufacturer": "Renault",
            "fipe_code": "025211-5",
            "sold": false
          },
          {
            "vehicle": "SANDERO STEPWAY Tweed HFlex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025210-7",
            "sold": false
          },
          {
            "vehicle": "SANDERO TechRun Hi-Flex 1.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025207-7",
            "sold": false
          },
          {
            "vehicle": "SANDERO vibe Flex 1.0 12V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025245-0",
            "sold": false
          },
          {
            "vehicle": "SANDERO vibe Hi-Flex 1.6 8V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025168-2",
            "sold": false
          },
          {
            "vehicle": "Scénic Alizé/ Expression 1.6 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025052-0",
            "sold": false
          },
          {
            "vehicle": "Scénic Alizé/ Expression 2.0 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025077-5",
            "sold": false
          },
          {
            "vehicle": "Scénic Expression 1.6 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025087-2",
            "sold": false
          },
          {
            "vehicle": "Scénic Grand Dynamique 2.0 16V 5p Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025148-8",
            "sold": false
          },
          {
            "vehicle": "Scénic Hi-Flex/Express. Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025107-0",
            "sold": false
          },
          {
            "vehicle": "Scénic Privilège Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025108-9",
            "sold": false
          },
          {
            "vehicle": "Scénic Privillège 1.6 16V Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025088-0",
            "sold": false
          },
          {
            "vehicle": "Scénic Privillège 2.0 Plus 16V 5p Aut",
            "manufacturer": "Renault",
            "fipe_code": "025089-9",
            "sold": false
          },
          {
            "vehicle": "Scénic RT 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025024-4",
            "sold": false
          },
          {
            "vehicle": "Scénic RT 2.0 16V 5p Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025063-5",
            "sold": false
          },
          {
            "vehicle": "Scénic RT 2.0 16V 5p Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025062-7",
            "sold": false
          },
          {
            "vehicle": "Scénic RT/Auth/Auth/Kids Hi-Flex 1.6 16V",
            "manufacturer": "Renault",
            "fipe_code": "025029-5",
            "sold": false
          },
          {
            "vehicle": "Scénic RXE 2.0 8V",
            "manufacturer": "Renault",
            "fipe_code": "025025-2",
            "sold": false
          },
          {
            "vehicle": "Scénic RXE Egeus 2.0",
            "manufacturer": "Renault",
            "fipe_code": "025046-5",
            "sold": false
          },
          {
            "vehicle": "Scénic RXE/ Privilège 1.6 16V Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025058-9",
            "sold": false
          },
          {
            "vehicle": "Scénic RXE/ Privilège 2.0 16V 5p Aut.",
            "manufacturer": "Renault",
            "fipe_code": "025064-3",
            "sold": false
          },
          {
            "vehicle": "Scénic RXE/ Privilège 2.0 16V 5p Mec.",
            "manufacturer": "Renault",
            "fipe_code": "025059-7",
            "sold": false
          },
          {
            "vehicle": "Scénic SPORTWAY Hi-Flex 1.6 16V 5p",
            "manufacturer": "Renault",
            "fipe_code": "025125-9",
            "sold": false
          },
          {
            "vehicle": "SYMBOL CONNECTION Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025171-2",
            "sold": false
          },
          {
            "vehicle": "SYMBOL Expression Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025160-7",
            "sold": false
          },
          {
            "vehicle": "SYMBOL Expression Hi-Flex 1.6 8V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025167-4",
            "sold": false
          },
          {
            "vehicle": "SYMBOL Privilège Hi-Flex 1.6 16V 4p",
            "manufacturer": "Renault",
            "fipe_code": "025159-3",
            "sold": false
          },
          {
            "vehicle": "Trafic Furgão 2.0 98cv",
            "manufacturer": "Renault",
            "fipe_code": "025047-3",
            "sold": false
          },
          {
            "vehicle": "Trafic Furgão Chassi Curto 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025018-0",
            "sold": false
          },
          {
            "vehicle": "Trafic Furgão Chassi Longo 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025019-8",
            "sold": false
          },
          {
            "vehicle": "Trafic Van 2.2",
            "manufacturer": "Renault",
            "fipe_code": "025036-8",
            "sold": false
          },
          {
            "vehicle": "Twingo 1.0 8V",
            "manufacturer": "Renault",
            "fipe_code": "025035-0",
            "sold": false
          },
          {
            "vehicle": "Twingo 1.2",
            "manufacturer": "Renault",
            "fipe_code": "025009-0",
            "sold": false
          },
          {
            "vehicle": "Twingo Easy 1.2",
            "manufacturer": "Renault",
            "fipe_code": "025030-9",
            "sold": false
          },
          {
            "vehicle": "Twingo Initiale 1.0 16V 70cv",
            "manufacturer": "Renault",
            "fipe_code": "025066-0",
            "sold": false
          },
          {
            "vehicle": "Twingo Pack 1.0 16V 70cv",
            "manufacturer": "Renault",
            "fipe_code": "025065-1",
            "sold": false
          },
          {
            "vehicle": "Twingo Pack 1.0 8V",
            "manufacturer": "Renault",
            "fipe_code": "025037-6",
            "sold": false
          },
          {
            "vehicle": "Ghost 6.6 V12 Aut.",
            "manufacturer": "Rolls-Royce",
            "fipe_code": "087001-3",
            "sold": false
          },
          {
            "vehicle": "Ghost ll 6.6 V12 Aut.",
            "manufacturer": "Rolls-Royce",
            "fipe_code": "087003-0",
            "sold": false
          },
          {
            "vehicle": "Phantom 6.7 V12 Aut.",
            "manufacturer": "Rolls-Royce",
            "fipe_code": "087002-1",
            "sold": false
          },
          {
            "vehicle": "Wraith 6.6 V12 Aut.",
            "manufacturer": "Rolls-Royce",
            "fipe_code": "087004-8",
            "sold": false
          },
          {
            "vehicle": "Mini Cooper 1.3",
            "manufacturer": "Rover",
            "fipe_code": "052001-2",
            "sold": false
          },
          {
            "vehicle": "9000 CD 2.3 Turbo",
            "manufacturer": "Saab",
            "fipe_code": "053001-8",
            "sold": false
          },
          {
            "vehicle": "SL-2 1.9",
            "manufacturer": "Saturn",
            "fipe_code": "054001-3",
            "sold": false
          },
          {
            "vehicle": "Cordoba 1.6L",
            "manufacturer": "Seat",
            "fipe_code": "026003-7",
            "sold": false
          },
          {
            "vehicle": "Cordoba SXE 1.8 / GLX 1.8 4p",
            "manufacturer": "Seat",
            "fipe_code": "026001-0",
            "sold": false
          },
          {
            "vehicle": "Cordoba Vario 1.6L",
            "manufacturer": "Seat",
            "fipe_code": "026004-5",
            "sold": false
          },
          {
            "vehicle": "Ibiza 1.0 16v 4p",
            "manufacturer": "Seat",
            "fipe_code": "026008-8",
            "sold": false
          },
          {
            "vehicle": "Ibiza 1.0i 8v",
            "manufacturer": "Seat",
            "fipe_code": "026005-3",
            "sold": false
          },
          {
            "vehicle": "Ibiza 1.6L",
            "manufacturer": "Seat",
            "fipe_code": "026006-1",
            "sold": false
          },
          {
            "vehicle": "Ibiza SXE / GLX 1.8",
            "manufacturer": "Seat",
            "fipe_code": "026002-9",
            "sold": false
          },
          {
            "vehicle": "Inca 1.6L",
            "manufacturer": "Seat",
            "fipe_code": "026007-0",
            "sold": false
          },
          {
            "vehicle": "SY1020 T 20 TRUCKS BAU",
            "manufacturer": "SHINERAY",
            "fipe_code": "082005-9",
            "sold": false
          },
          {
            "vehicle": "SY1020 T 22 TRUCKS CD",
            "manufacturer": "SHINERAY",
            "fipe_code": "082004-0",
            "sold": false
          },
          {
            "vehicle": "SY1020 T20 TRUCKS",
            "manufacturer": "SHINERAY",
            "fipe_code": "082003-2",
            "sold": false
          },
          {
            "vehicle": "SY6370 A7 PVAN",
            "manufacturer": "SHINERAY",
            "fipe_code": "082006-7",
            "sold": false
          },
          {
            "vehicle": "SY6390 A9 CARGOV",
            "manufacturer": "SHINERAY",
            "fipe_code": "082001-6",
            "sold": false
          },
          {
            "vehicle": "SY6390 A9 PVANS",
            "manufacturer": "SHINERAY",
            "fipe_code": "082002-4",
            "sold": false
          },
          {
            "vehicle": "X30 VAN 1.3 16V Mec.",
            "manufacturer": "SHINERAY",
            "fipe_code": "082007-5",
            "sold": false
          },
          {
            "vehicle": "fortwo BRABUS cabrio 1.0 72kw",
            "manufacturer": "smart",
            "fipe_code": "072005-4",
            "sold": false
          },
          {
            "vehicle": "fortwo BRABUS coupé 1.0 72kw",
            "manufacturer": "smart",
            "fipe_code": "072003-8",
            "sold": false
          },
          {
            "vehicle": "fortwo coupé/Brasil.Edition 1.0 mhd 71cv",
            "manufacturer": "smart",
            "fipe_code": "072004-6",
            "sold": false
          },
          {
            "vehicle": "fortwo passion cabrio 1.0 62kw/Tritop",
            "manufacturer": "smart",
            "fipe_code": "072002-0",
            "sold": false
          },
          {
            "vehicle": "fortwo passion coupé 1.0 62kw",
            "manufacturer": "smart",
            "fipe_code": "072001-1",
            "sold": false
          },
          {
            "vehicle": "ACTYON 2.0 16V 141cv Diesel",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055025-6",
            "sold": false
          },
          {
            "vehicle": "ACTYON 2.3 16V 150cv Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055027-2",
            "sold": false
          },
          {
            "vehicle": "ACTYON SPORTS 2.0 16V 141cv Diesel",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055024-8",
            "sold": false
          },
          {
            "vehicle": "ACTYON SPORTS 2.0 16V 155cv Diesel",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055030-2",
            "sold": false
          },
          {
            "vehicle": "Chairman 3.2 V6 220cv Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055013-2",
            "sold": false
          },
          {
            "vehicle": "Istana 2.9 95cv TB Diesel Int. 16Lug.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055014-0",
            "sold": false
          },
          {
            "vehicle": "Korando 2.0 16V T.Diesel AWD Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055029-9",
            "sold": false
          },
          {
            "vehicle": "Korando 2.0 16V T.Diesel AWD Mec.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055028-0",
            "sold": false
          },
          {
            "vehicle": "Korando Canvas 2.9 TB Diesel Int. Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055007-8",
            "sold": false
          },
          {
            "vehicle": "Korando Canvas 2.9 TB Diesel Int. Mec",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055006-0",
            "sold": false
          },
          {
            "vehicle": "Korando GL 2.9 TB Diesel Int. 120cv",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055003-5",
            "sold": false
          },
          {
            "vehicle": "Korando GLX 2.9 TB Diesel Int. 120cv Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055005-1",
            "sold": false
          },
          {
            "vehicle": "Korando GLX 2.9 TB Diesel Int. 120cv Mec",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055004-3",
            "sold": false
          },
          {
            "vehicle": "Kyron 2.0 16V 141cv  TDI Diesel Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055026-4",
            "sold": false
          },
          {
            "vehicle": "Kyron 2.7 20V 165cv TDI Dies. Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055022-1",
            "sold": false
          },
          {
            "vehicle": "Musso DX 2.9 Diesel",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055001-9",
            "sold": false
          },
          {
            "vehicle": "Musso GL 2.9 TB Diesel Int. 120cv",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055008-6",
            "sold": false
          },
          {
            "vehicle": "Musso GLS 2.9 TB Diesel Int. 120cv Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055011-6",
            "sold": false
          },
          {
            "vehicle": "Musso GLS 3.2 V6 220cv 4x4 Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055012-4",
            "sold": false
          },
          {
            "vehicle": "Musso GLX 2.9 TB Diesel Int. 120cv Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055010-8",
            "sold": false
          },
          {
            "vehicle": "Musso GLX 2.9 TB Diesel Int. 120cv Mec",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055009-4",
            "sold": false
          },
          {
            "vehicle": "Musso Pick-Up GLX 2.9 4x4 CD TB Int.Dies",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055019-1",
            "sold": false
          },
          {
            "vehicle": "Musso Pick-Up LX 2.9 4x4 CD TB Int.Dies.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055018-3",
            "sold": false
          },
          {
            "vehicle": "Musso SX 2.9 Diesel",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055002-7",
            "sold": false
          },
          {
            "vehicle": "Rexton II 2.7 20V 165/186cv TDI Dies.Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055021-3",
            "sold": false
          },
          {
            "vehicle": "Rexton II 3.2 V6 24V 220cv Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055023-0",
            "sold": false
          },
          {
            "vehicle": "Rexton RX 270 2.7 165cv Xdi Diesel Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055020-5",
            "sold": false
          },
          {
            "vehicle": "Rexton RX 290 2.9 120cv TB Int. Dies.Aut",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055016-7",
            "sold": false
          },
          {
            "vehicle": "Rexton RX 290 2.9 120cv TB Int. Dies.Mec",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055015-9",
            "sold": false
          },
          {
            "vehicle": "Rexton RX 320 3.2 V6 235cv Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055017-5",
            "sold": false
          },
          {
            "vehicle": "Rexton W 2.7 20V XDI Diesel Aut.",
            "manufacturer": "SSANGYONG",
            "fipe_code": "055031-0",
            "sold": false
          },
          {
            "vehicle": "Forester 2.0 16v 4x4 Turbo Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027039-3",
            "sold": false
          },
          {
            "vehicle": "Forester 2.0 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027013-0",
            "sold": false
          },
          {
            "vehicle": "Forester 2.0 4x4 Turbo",
            "manufacturer": "Subaru",
            "fipe_code": "027037-7",
            "sold": false
          },
          {
            "vehicle": "Forester 2.0/2.0 S 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027024-5",
            "sold": false
          },
          {
            "vehicle": "Forester XT 2.0 16V 4x4 Turbo Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027067-9",
            "sold": false
          },
          {
            "vehicle": "Forester XT 2.5 16V 4x4 Turbo Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027047-4",
            "sold": false
          },
          {
            "vehicle": "Forester XT S-EDITION 2.5 16V 4x4 TB Aut",
            "manufacturer": "Subaru",
            "fipe_code": "027064-4",
            "sold": false
          },
          {
            "vehicle": "Impreza 1.5 16V 115cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027053-9",
            "sold": false
          },
          {
            "vehicle": "Impreza 1.5 16V 115cv Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027054-7",
            "sold": false
          },
          {
            "vehicle": "Impreza 2.0 16V 160cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027051-2",
            "sold": false
          },
          {
            "vehicle": "Impreza 2.0 16V 160cv Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027052-0",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 1.6/1.8 16V",
            "manufacturer": "Subaru",
            "fipe_code": "027020-2",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 2.0 4x2 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027032-6",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 2.0 4x2 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027014-8",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 2.0 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027025-3",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 2.0 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027015-6",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 4x4 1.8 16V",
            "manufacturer": "Subaru",
            "fipe_code": "027022-9",
            "sold": false
          },
          {
            "vehicle": "Impreza GL 4x4 2.0 16V",
            "manufacturer": "Subaru",
            "fipe_code": "027021-0",
            "sold": false
          },
          {
            "vehicle": "Impreza GT 2.0 Turbo",
            "manufacturer": "Subaru",
            "fipe_code": "027010-5",
            "sold": false
          },
          {
            "vehicle": "Impreza SD 2.0 16V 160cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027057-1",
            "sold": false
          },
          {
            "vehicle": "Impreza SD 2.0/2.0i-S AWD Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027066-0",
            "sold": false
          },
          {
            "vehicle": "Impreza SD GX 2.0 16v 4x4 4p Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027040-7",
            "sold": false
          },
          {
            "vehicle": "Impreza SD RX 2.0 4x4",
            "manufacturer": "Subaru",
            "fipe_code": "027038-5",
            "sold": false
          },
          {
            "vehicle": "Impreza SD WRX 2.0 16v 4x4",
            "manufacturer": "Subaru",
            "fipe_code": "027043-1",
            "sold": false
          },
          {
            "vehicle": "Impreza SD WRX 2.0 16V TB 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027068-7",
            "sold": false
          },
          {
            "vehicle": "Impreza SD WRX 2.5 16V TB 4x4 4p",
            "manufacturer": "Subaru",
            "fipe_code": "027048-2",
            "sold": false
          },
          {
            "vehicle": "Impreza SD WRX STI 2.5 16V TB 4x4",
            "manufacturer": "Subaru",
            "fipe_code": "027063-6",
            "sold": false
          },
          {
            "vehicle": "Impreza SW GL 1.6/1.8/2.0 4x4 16V",
            "manufacturer": "Subaru",
            "fipe_code": "027016-4",
            "sold": false
          },
          {
            "vehicle": "Impreza SW GT 2.0 16v 4x4 Turbo Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027041-5",
            "sold": false
          },
          {
            "vehicle": "Impreza SW GX 2.0 16v 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027042-3",
            "sold": false
          },
          {
            "vehicle": "Impreza SW WRX 2.0 16v 4x4 TB",
            "manufacturer": "Subaru",
            "fipe_code": "027044-0",
            "sold": false
          },
          {
            "vehicle": "Impreza SW WRX 2.5 16V TB 4x4 5p",
            "manufacturer": "Subaru",
            "fipe_code": "027049-0",
            "sold": false
          },
          {
            "vehicle": "Impreza WRX 2.5 16V TB 4x4 5p",
            "manufacturer": "Subaru",
            "fipe_code": "027050-4",
            "sold": false
          },
          {
            "vehicle": "Impreza WRX STI 2.5 16V TB 4x4",
            "manufacturer": "Subaru",
            "fipe_code": "027056-3",
            "sold": false
          },
          {
            "vehicle": "Impreza XV 2.0 16V 160cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027061-0",
            "sold": false
          },
          {
            "vehicle": "Impreza XV 2.0 16V 160cv Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027062-8",
            "sold": false
          },
          {
            "vehicle": "Legacy 2.0 16V 160cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027058-0",
            "sold": false
          },
          {
            "vehicle": "Legacy 3.0 R H6 245cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027046-6",
            "sold": false
          },
          {
            "vehicle": "Legacy 3.6 4x4 256cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027069-5",
            "sold": false
          },
          {
            "vehicle": "Legacy GL 1.8",
            "manufacturer": "Subaru",
            "fipe_code": "027023-7",
            "sold": false
          },
          {
            "vehicle": "Legacy GL 2.0/ GLS Mec",
            "manufacturer": "Subaru",
            "fipe_code": "027004-0",
            "sold": false
          },
          {
            "vehicle": "Legacy GL TW 2.0 4x2 Mec./Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027006-7",
            "sold": false
          },
          {
            "vehicle": "Legacy GL TW 2.0 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027034-2",
            "sold": false
          },
          {
            "vehicle": "Legacy GL TW 2.0 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027033-4",
            "sold": false
          },
          {
            "vehicle": "Legacy GL/ GLS 2.0 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027026-1",
            "sold": false
          },
          {
            "vehicle": "Legacy GT 2.5  16V 280cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027059-8",
            "sold": false
          },
          {
            "vehicle": "Legacy GX 2.2 4x4",
            "manufacturer": "Subaru",
            "fipe_code": "027005-9",
            "sold": false
          },
          {
            "vehicle": "Legacy GX 2.5 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027017-2",
            "sold": false
          },
          {
            "vehicle": "Legacy GX 2.5 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027031-8",
            "sold": false
          },
          {
            "vehicle": "Legacy GX TW 2.2 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027030-0",
            "sold": false
          },
          {
            "vehicle": "Legacy GX TW 2.2 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027029-6",
            "sold": false
          },
          {
            "vehicle": "Legacy GX TW 2.5 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027027-0",
            "sold": false
          },
          {
            "vehicle": "Legacy GX TW 2.5 4x4 Mec",
            "manufacturer": "Subaru",
            "fipe_code": "027007-5",
            "sold": false
          },
          {
            "vehicle": "Legacy SW 2.2",
            "manufacturer": "Subaru",
            "fipe_code": "027019-9",
            "sold": false
          },
          {
            "vehicle": "Outback 2.5 4x4 Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027028-8",
            "sold": false
          },
          {
            "vehicle": "Outback 2.5 4x4 Mec.",
            "manufacturer": "Subaru",
            "fipe_code": "027018-0",
            "sold": false
          },
          {
            "vehicle": "Outback 3.0 H6 SW 245cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027045-8",
            "sold": false
          },
          {
            "vehicle": "Outback 3.6 H6 SW Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027060-1",
            "sold": false
          },
          {
            "vehicle": "SVX Cupê 3.3 4x4 Aut",
            "manufacturer": "Subaru",
            "fipe_code": "027008-3",
            "sold": false
          },
          {
            "vehicle": "TRIBECA 3.6 24V 270cv 5p Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027055-5",
            "sold": false
          },
          {
            "vehicle": "Vivio SD GLI 3p Mec",
            "manufacturer": "Subaru",
            "fipe_code": "027009-1",
            "sold": false
          },
          {
            "vehicle": "XV 2.0 16V 4x4 150cv Aut.",
            "manufacturer": "Subaru",
            "fipe_code": "027065-2",
            "sold": false
          },
          {
            "vehicle": "Baleno 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028023-2",
            "sold": false
          },
          {
            "vehicle": "Baleno 1.6 16V Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028009-7",
            "sold": false
          },
          {
            "vehicle": "Baleno Wagon 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028010-0",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028025-9",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 1.6 16V Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028011-9",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V 3p",
            "manufacturer": "Suzuki",
            "fipe_code": "028012-7",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V 4x2/4x4 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028026-7",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V 4x2/4x4 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028013-5",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V 5p/ Gold Aut( Arg.)",
            "manufacturer": "Suzuki",
            "fipe_code": "028038-0",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V 5p/ Gold Mec( Arg.)",
            "manufacturer": "Suzuki",
            "fipe_code": "028037-2",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V Ed. Special 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028034-8",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 16V Ed. Special 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028033-0",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.0 TB-IC Diesel 4p",
            "manufacturer": "Suzuki",
            "fipe_code": "028036-4",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.5 V6 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028027-5",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 2.5 V6 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028014-3",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 3.2 24V 4WD 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028044-5",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 4SPORT 2.0 16V 4x2 5P Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028061-5",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 4SPORT 2.0 16V 4x4 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028059-3",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara 4SPORT 2.0 16V 4x4 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028060-7",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara L.EDI. 2.0 16V 4x2/4x4 Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028051-8",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara S. EDITI.  2.0 16V 4x2 Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028054-2",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara Sport 2.0 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028028-3",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara Sport 2.0 16V Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028019-4",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara XL_7 2.7 24V 173cv  4p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028040-2",
            "sold": false
          },
          {
            "vehicle": "Grand Vitara XL_7 2.7 24V 173cv 4p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028039-9",
            "sold": false
          },
          {
            "vehicle": "Ignis 1.3 16V 82cv 4p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028042-9",
            "sold": false
          },
          {
            "vehicle": "Ignis 1.3 16V 82cv 4p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028041-0",
            "sold": false
          },
          {
            "vehicle": "Ignis WRS 1.3 16V 82cv 4x4 4p",
            "manufacturer": "Suzuki",
            "fipe_code": "028043-7",
            "sold": false
          },
          {
            "vehicle": "Jimny 4S 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028049-6",
            "sold": false
          },
          {
            "vehicle": "Jimny 4SPORT/ 4WORK 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028047-0",
            "sold": false
          },
          {
            "vehicle": "Jimny 4STREET 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028048-8",
            "sold": false
          },
          {
            "vehicle": "Jimny 4SUN 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028050-0",
            "sold": false
          },
          {
            "vehicle": "Jimny 4WORK OFF ROAD 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028062-3",
            "sold": false
          },
          {
            "vehicle": "Jimny CANVAS 4ALL 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028072-0",
            "sold": false
          },
          {
            "vehicle": "Jimny CANVAS 4SPORT 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028073-9",
            "sold": false
          },
          {
            "vehicle": "Jimny Wide/ Jimny/4ALL 1.3 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028015-1",
            "sold": false
          },
          {
            "vehicle": "Samurai JX Canvas 1.3",
            "manufacturer": "Suzuki",
            "fipe_code": "028001-1",
            "sold": false
          },
          {
            "vehicle": "Samurai JX Metal 1.3",
            "manufacturer": "Suzuki",
            "fipe_code": "028002-0",
            "sold": false
          },
          {
            "vehicle": "S-CROSS 4STYLE 1.4 TB 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028069-0",
            "sold": false
          },
          {
            "vehicle": "S-CROSS 4STYLE ALLGRIP 1.4 TB 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028071-2",
            "sold": false
          },
          {
            "vehicle": "S-CROSS 4YOU 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028070-4",
            "sold": false
          },
          {
            "vehicle": "Sidekick Canvas",
            "manufacturer": "Suzuki",
            "fipe_code": "028031-3",
            "sold": false
          },
          {
            "vehicle": "Sidekick Metal",
            "manufacturer": "Suzuki",
            "fipe_code": "028003-8",
            "sold": false
          },
          {
            "vehicle": "Super Carry Van/ Furgão 1.0",
            "manufacturer": "Suzuki",
            "fipe_code": "028020-8",
            "sold": false
          },
          {
            "vehicle": "Swift GL",
            "manufacturer": "Suzuki",
            "fipe_code": "028004-6",
            "sold": false
          },
          {
            "vehicle": "Swift GTi 1.3 3p",
            "manufacturer": "Suzuki",
            "fipe_code": "028005-4",
            "sold": false
          },
          {
            "vehicle": "Swift GTI Convers. 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028018-6",
            "sold": false
          },
          {
            "vehicle": "Swift Hatch 1.0 3p e 5p",
            "manufacturer": "Suzuki",
            "fipe_code": "028006-2",
            "sold": false
          },
          {
            "vehicle": "Swift Hatch/ Sedan 1.3",
            "manufacturer": "Suzuki",
            "fipe_code": "028021-6",
            "sold": false
          },
          {
            "vehicle": "Swift Sedan 1.6 16V",
            "manufacturer": "Suzuki",
            "fipe_code": "028032-1",
            "sold": false
          },
          {
            "vehicle": "Swift Sport 1.6 16V 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028052-6",
            "sold": false
          },
          {
            "vehicle": "Swift Sport R 1.6 16V 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028053-4",
            "sold": false
          },
          {
            "vehicle": "SX4 2.0 16V 145cv 4WD 5p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028046-1",
            "sold": false
          },
          {
            "vehicle": "SX4 2.0 16V 145cv 4WD 5p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028045-3",
            "sold": false
          },
          {
            "vehicle": "SX4 S-CROSS ALLGRIP GLS 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028056-9",
            "sold": false
          },
          {
            "vehicle": "SX4 S-CROSS ALLGRIP GLX 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028058-5",
            "sold": false
          },
          {
            "vehicle": "SX4 S-CROSS GL 1.6 16V Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028055-0",
            "sold": false
          },
          {
            "vehicle": "SX4 S-CROSS GLX 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028057-7",
            "sold": false
          },
          {
            "vehicle": "Vitara 4ALL 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028064-0",
            "sold": false
          },
          {
            "vehicle": "Vitara 4ALL 1.6 16V Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028063-1",
            "sold": false
          },
          {
            "vehicle": "Vitara 4SPORT 1.4 TB 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028067-4",
            "sold": false
          },
          {
            "vehicle": "Vitara 4SPORT ALLGRIP 1.4 TB 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028068-2",
            "sold": false
          },
          {
            "vehicle": "Vitara 4YOU 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028065-8",
            "sold": false
          },
          {
            "vehicle": "Vitara 4YOU ALLGRIP 1.6 16V Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028066-6",
            "sold": false
          },
          {
            "vehicle": "Vitara JLX 1.6 16V 4x4 4p Aut.",
            "manufacturer": "Suzuki",
            "fipe_code": "028035-6",
            "sold": false
          },
          {
            "vehicle": "Vitara JLX 1.6 16V 4x4 4p Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028022-4",
            "sold": false
          },
          {
            "vehicle": "Vitara JLX 2.0 V6 4x4",
            "manufacturer": "Suzuki",
            "fipe_code": "028017-8",
            "sold": false
          },
          {
            "vehicle": "Vitara JLX Canvas 1.6 8V 2p",
            "manufacturer": "Suzuki",
            "fipe_code": "028007-0",
            "sold": false
          },
          {
            "vehicle": "Vitara JLX Metal 1.6 8V 2p",
            "manufacturer": "Suzuki",
            "fipe_code": "028008-9",
            "sold": false
          },
          {
            "vehicle": "Wagon R+ 1.0 Mec.",
            "manufacturer": "Suzuki",
            "fipe_code": "028016-0",
            "sold": false
          },
          {
            "vehicle": "Stark 2.3 4WD 127cv TDI Diesel 3p",
            "manufacturer": "TAC",
            "fipe_code": "075001-8",
            "sold": false
          },
          {
            "vehicle": "Avalon XLS 3.0",
            "manufacturer": "Toyota",
            "fipe_code": "002038-9",
            "sold": false
          },
          {
            "vehicle": "Band. Jipe 4x4 Sport 3.7 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002050-8",
            "sold": false
          },
          {
            "vehicle": "Band.Jipe Cap.de Aço Chas. Curto Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002002-8",
            "sold": false
          },
          {
            "vehicle": "Band.Jipe Cap.de Aço Chas. Longo Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002003-6",
            "sold": false
          },
          {
            "vehicle": "Band.Jipe Capota de Lona Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002001-0",
            "sold": false
          },
          {
            "vehicle": "Band.Picape CD 2p Chassi Longo Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002006-0",
            "sold": false
          },
          {
            "vehicle": "Band.Picape CD 4p Chassi Longo Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002059-1",
            "sold": false
          },
          {
            "vehicle": "Band.Picape Chassi Curto Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002005-2",
            "sold": false
          },
          {
            "vehicle": "Band.Picape Chassi Longo Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002008-7",
            "sold": false
          },
          {
            "vehicle": "Camry LE",
            "manufacturer": "Toyota",
            "fipe_code": "002009-5",
            "sold": false
          },
          {
            "vehicle": "Camry SW LE 2.2 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002042-7",
            "sold": false
          },
          {
            "vehicle": "Camry SW XLE 3.0 24V",
            "manufacturer": "Toyota",
            "fipe_code": "002043-5",
            "sold": false
          },
          {
            "vehicle": "Camry XLE 3.0 24V 186cv",
            "manufacturer": "Toyota",
            "fipe_code": "002010-9",
            "sold": false
          },
          {
            "vehicle": "Camry XLE 3.5 24V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002098-2",
            "sold": false
          },
          {
            "vehicle": "Celica GT 2.2 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002044-3",
            "sold": false
          },
          {
            "vehicle": "Celica ST 1.8",
            "manufacturer": "Toyota",
            "fipe_code": "002036-2",
            "sold": false
          },
          {
            "vehicle": "Corolla ALTIS 2.0 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002112-1",
            "sold": false
          },
          {
            "vehicle": "Corolla DX/ SW DX 1.6 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002011-7",
            "sold": false
          },
          {
            "vehicle": "Corolla Dynamic 2.0 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002158-0",
            "sold": false
          },
          {
            "vehicle": "Corolla Fielder SW 1.8/1.8 XEi Flex Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002084-2",
            "sold": false
          },
          {
            "vehicle": "Corolla Fielder SW 1.8/1.8 XEi Flex Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002083-4",
            "sold": false
          },
          {
            "vehicle": "Corolla Fielder SW S  1.8 16V 136cv Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002102-4",
            "sold": false
          },
          {
            "vehicle": "Corolla Fielder SW S 1.8 16V 136cv Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002101-6",
            "sold": false
          },
          {
            "vehicle": "Corolla Fielder SW SE-G 1.8 Flex 16V Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002103-2",
            "sold": false
          },
          {
            "vehicle": "Corolla GLi 1.6 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002046-0",
            "sold": false
          },
          {
            "vehicle": "Corolla GLi 1.8 Flex 16V  Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002109-1",
            "sold": false
          },
          {
            "vehicle": "Corolla GLi 1.8 Flex 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002108-3",
            "sold": false
          },
          {
            "vehicle": "Corolla GLi Upper 1.8 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002139-3",
            "sold": false
          },
          {
            "vehicle": "Corolla GLi Upper Black P. 1.8 Flex Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002155-5",
            "sold": false
          },
          {
            "vehicle": "Corolla LE 1.8",
            "manufacturer": "Toyota",
            "fipe_code": "002012-5",
            "sold": false
          },
          {
            "vehicle": "Corolla LE 2.2 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002045-1",
            "sold": false
          },
          {
            "vehicle": "Corolla S 1.8 16V 136cv Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002100-8",
            "sold": false
          },
          {
            "vehicle": "Corolla S 1.8 16V 136cv Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002099-0",
            "sold": false
          },
          {
            "vehicle": "Corolla SE-G 1.8 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002029-0",
            "sold": false
          },
          {
            "vehicle": "Corolla SE-G 1.8/1.8 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002060-5",
            "sold": false
          },
          {
            "vehicle": "Corolla SW LE 1.8/ XLi 1.6 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002037-0",
            "sold": false
          },
          {
            "vehicle": "Corolla WG",
            "manufacturer": "Toyota",
            "fipe_code": "002013-3",
            "sold": false
          },
          {
            "vehicle": "Corolla XEi 1.8/1.8 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002061-3",
            "sold": false
          },
          {
            "vehicle": "Corolla XEi 1.8/1.8 Flex 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002028-1",
            "sold": false
          },
          {
            "vehicle": "Corolla XEi 2.0 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002111-3",
            "sold": false
          },
          {
            "vehicle": "Corolla XLi 1.6 16V 110cv Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002080-0",
            "sold": false
          },
          {
            "vehicle": "Corolla XLi 1.6 16V 110cv Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002079-6",
            "sold": false
          },
          {
            "vehicle": "Corolla XLi 1.8/1.8 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002062-1",
            "sold": false
          },
          {
            "vehicle": "Corolla XLi 1.8/1.8 Flex 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002027-3",
            "sold": false
          },
          {
            "vehicle": "Corolla XRS 2.0 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002115-6",
            "sold": false
          },
          {
            "vehicle": "Corona Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002063-0",
            "sold": false
          },
          {
            "vehicle": "Corona GLi Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002024-9",
            "sold": false
          },
          {
            "vehicle": "Corona Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002039-7",
            "sold": false
          },
          {
            "vehicle": "ETIOS 1.3 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002121-0",
            "sold": false
          },
          {
            "vehicle": "ETIOS CROSS 1.5 Flex 16V 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002148-2",
            "sold": false
          },
          {
            "vehicle": "ETIOS CROSS 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002133-4",
            "sold": false
          },
          {
            "vehicle": "ETIOS PLATINUM 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002156-3",
            "sold": false
          },
          {
            "vehicle": "ETIOS PLATINUM 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002134-2",
            "sold": false
          },
          {
            "vehicle": "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002157-1",
            "sold": false
          },
          {
            "vehicle": "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002135-0",
            "sold": false
          },
          {
            "vehicle": "ETIOS READY! 1.5 Flex 16V 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002159-8",
            "sold": false
          },
          {
            "vehicle": "ETIOS X  1.3 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002122-9",
            "sold": false
          },
          {
            "vehicle": "ETIOS X 1.3 Flex 16V 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002154-7",
            "sold": false
          },
          {
            "vehicle": "ETIOS X Sedan 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002153-9",
            "sold": false
          },
          {
            "vehicle": "ETIOS X Sedan 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002125-3",
            "sold": false
          },
          {
            "vehicle": "ETIOS XLS 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002124-5",
            "sold": false
          },
          {
            "vehicle": "ETIOS XLS 1.5 Flex 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002150-4",
            "sold": false
          },
          {
            "vehicle": "ETIOS XLS Sedan 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002149-0",
            "sold": false
          },
          {
            "vehicle": "ETIOS XLS Sedan 1.5 Flex 16V 4p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002127-0",
            "sold": false
          },
          {
            "vehicle": "ETIOS XS  1.3 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002123-7",
            "sold": false
          },
          {
            "vehicle": "ETIOS XS 1.5 Flex 16V 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002152-0",
            "sold": false
          },
          {
            "vehicle": "ETIOS XS 1.5 Flex 16V 5p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002132-6",
            "sold": false
          },
          {
            "vehicle": "ETIOS XS Sedan 1.5 Flex 16V 4p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002151-2",
            "sold": false
          },
          {
            "vehicle": "ETIOS XS Sedan1.5 Flex 16V 4p Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002126-1",
            "sold": false
          },
          {
            "vehicle": "Hilux 4x2 2.4 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002030-3",
            "sold": false
          },
          {
            "vehicle": "Hilux 4x2 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002031-1",
            "sold": false
          },
          {
            "vehicle": "Hilux CD 4x2 2.4 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002014-1",
            "sold": false
          },
          {
            "vehicle": "Hilux CD 4x4 2.7 16V Flex Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002128-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CD 4x4 2.8 Diesel Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002015-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CD D4-D 4x2 2.5 16V 102cv TB Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002087-7",
            "sold": false
          },
          {
            "vehicle": "Hilux CD D4-D 4x4 2.5 16V 102cv TB Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002088-5",
            "sold": false
          },
          {
            "vehicle": "Hilux CD D4-D 4x4 3.0 TDI Dies. Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002119-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CD DLX 4x2 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002032-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CD DLX 4x4 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002033-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CD DX 4x2 2.7 16V 142cv",
            "manufacturer": "Toyota",
            "fipe_code": "002068-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CD DX 4x2 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002069-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CD DX 4x4 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002075-3",
            "sold": false
          },
          {
            "vehicle": "Hilux CD Limited 4x4 3.0 TDI Diesel Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002137-7",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR 4x2 2.7 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002104-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR 4x2 2.7 16V/2.7 Flex Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002110-5",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR 4x4 2.8 TDI Diesel Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002142-3",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR 4x4 3.0 8V 116cv TB Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002077-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR 4x4 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002076-1",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR D4-D 4x2 3.0 163cv TDI Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002089-3",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR D4-D 4x4 3.0  TDI Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002090-7",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR D4-D 4x4 3.0 TDI Dies Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002116-4",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SR5 4x4 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002041-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x2 2.7 16V 142cv",
            "manufacturer": "Toyota",
            "fipe_code": "002072-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x2 2.7 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002136-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x2 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002073-7",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x4 2.7 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002114-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x4 2.8 TDI Diesel Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002143-1",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV 4x4 3.0 8V 116cv TB Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002078-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV D4-D 4x2 3.0 163cv TDI Dies",
            "manufacturer": "Toyota",
            "fipe_code": "002091-5",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV D4-D 4x4 3.0  TDI Dies",
            "manufacturer": "Toyota",
            "fipe_code": "002092-3",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRV D4-D 4x4 3.0 TDI Diesel Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002093-1",
            "sold": false
          },
          {
            "vehicle": "Hilux CD SRX 4x4 2.8 TDI 16V Diesel Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002141-5",
            "sold": false
          },
          {
            "vehicle": "Hilux Chassi 4x4 2.8 TDI Diesel Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002145-8",
            "sold": false
          },
          {
            "vehicle": "Hilux Chassi D4-D 4x4 2.5 102cv TB Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002094-0",
            "sold": false
          },
          {
            "vehicle": "Hilux Chassi D4-D 4x4 3.0 TDI Dies. Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002118-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CS 4x4 2.4 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002016-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CS 4x4 2.8 TDI Diesel Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002144-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CS D4-D 4x2 2.5 16V 102cv TB Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002085-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CS D4-D 4x4 2.5 16V 102cv TB Dies.",
            "manufacturer": "Toyota",
            "fipe_code": "002086-9",
            "sold": false
          },
          {
            "vehicle": "Hilux CS D4-D 4x4 3.0 TDI Dies. Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002117-2",
            "sold": false
          },
          {
            "vehicle": "Hilux CS DLX 4x2 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002047-8",
            "sold": false
          },
          {
            "vehicle": "Hilux CS DLX 4x4 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002048-6",
            "sold": false
          },
          {
            "vehicle": "Hilux CS DX 4x2 2.7 16V 142cv",
            "manufacturer": "Toyota",
            "fipe_code": "002067-2",
            "sold": false
          },
          {
            "vehicle": "Hilux CS DX 4x2 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002070-2",
            "sold": false
          },
          {
            "vehicle": "Hilux CS DX 4x4 3.0 8V 90cv Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002074-5",
            "sold": false
          },
          {
            "vehicle": "Hilux CS SR5 4x4 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002040-0",
            "sold": false
          },
          {
            "vehicle": "Hilux CS SRV 4x2 2.7 16V 142cv",
            "manufacturer": "Toyota",
            "fipe_code": "002071-0",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 2.7 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002064-8",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 3.4 V6",
            "manufacturer": "Toyota",
            "fipe_code": "002019-2",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 4x4 2.4 8V",
            "manufacturer": "Toyota",
            "fipe_code": "002017-6",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 4x4 2.8 Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002018-4",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 4x4 3.0 12V V6",
            "manufacturer": "Toyota",
            "fipe_code": "002051-6",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 4x4 3.0 24V V6",
            "manufacturer": "Toyota",
            "fipe_code": "002053-2",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 4x4 3.0 8V TB Diesel",
            "manufacturer": "Toyota",
            "fipe_code": "002052-4",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SR 4x2 2.7/ 2.7 Flex 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002107-5",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SR 4x2 2.7/2.7 Flex 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002106-7",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SR D4-D 4x4 3.0 TDI Dies. Aut ",
            "manufacturer": "Toyota",
            "fipe_code": "002120-2",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SRV 4x4 4.0 V6 24V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002105-9",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002096-6",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002095-8",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SRX 4x4 2.8 TDI 16V Dies. Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002146-6",
            "sold": false
          },
          {
            "vehicle": "Hilux SW4 SRX 4x4 4.0 V6 24V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002147-4",
            "sold": false
          },
          {
            "vehicle": "Land Cruiser 4WD 4.5 24V",
            "manufacturer": "Toyota",
            "fipe_code": "002054-0",
            "sold": false
          },
          {
            "vehicle": "Land Cruiser Prado 3.0 4x4 TB Diesel Aut",
            "manufacturer": "Toyota",
            "fipe_code": "002082-6",
            "sold": false
          },
          {
            "vehicle": "Land Cruiser Prado 3.0 4x4 TB Diesel Mec",
            "manufacturer": "Toyota",
            "fipe_code": "002081-8",
            "sold": false
          },
          {
            "vehicle": "MR-2 Turbo 2.0",
            "manufacturer": "Toyota",
            "fipe_code": "002055-9",
            "sold": false
          },
          {
            "vehicle": "Paseo",
            "manufacturer": "Toyota",
            "fipe_code": "002021-4",
            "sold": false
          },
          {
            "vehicle": "Previa LE 2.4 16V",
            "manufacturer": "Toyota",
            "fipe_code": "002022-2",
            "sold": false
          },
          {
            "vehicle": "Previa LX 2.5",
            "manufacturer": "Toyota",
            "fipe_code": "002056-7",
            "sold": false
          },
          {
            "vehicle": "PRIUS HYBRID 1.8 16V 5p Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002129-6",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.0 4x2 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002130-0",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.0 4x4 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002066-4",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.0 4x4 16V Mec.",
            "manufacturer": "Toyota",
            "fipe_code": "002057-5",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.0 HIGH 4x2 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002138-5",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.0 TOP 4x2 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002140-7",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.4 4x2 16V 170cv Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002113-0",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.4 4x4 16V 170cv Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002097-4",
            "sold": false
          },
          {
            "vehicle": "RAV4 2.5 4x4 16V Aut.",
            "manufacturer": "Toyota",
            "fipe_code": "002131-8",
            "sold": false
          },
          {
            "vehicle": "Supra",
            "manufacturer": "Toyota",
            "fipe_code": "002023-0",
            "sold": false
          },
          {
            "vehicle": "T-100 3.4 V6",
            "manufacturer": "Toyota",
            "fipe_code": "002058-3",
            "sold": false
          },
          {
            "vehicle": "PANTANAL 3.0 TDI Elet. 4x2 CS Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056008-1",
            "sold": false
          },
          {
            "vehicle": "PANTANAL 3.0 TDI Elet. 4x4 CS Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056009-0",
            "sold": false
          },
          {
            "vehicle": "RF Esport 4x4 2.0",
            "manufacturer": "Troller",
            "fipe_code": "056001-4",
            "sold": false
          },
          {
            "vehicle": "RF Esport T-4 4x4 2.0 Cap. Lona",
            "manufacturer": "Troller",
            "fipe_code": "056002-2",
            "sold": false
          },
          {
            "vehicle": "RF Esport T-4 4x4 2.0 Cap. Rígida",
            "manufacturer": "Troller",
            "fipe_code": "056003-0",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 2.8 TB Int. Cap. Lona Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056004-9",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 2.8 TB Int. Cap. Rígida Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056005-7",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 3.0 TB Int. Cap. Lona Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056006-5",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 3.0 TB Int. Cap. Rígida Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056007-3",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 3.2 20V Tdi Cap. Rígida Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056012-0",
            "sold": false
          },
          {
            "vehicle": "T-4 4x4 3.2 TGV tdi Cap. Rígida Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056011-1",
            "sold": false
          },
          {
            "vehicle": "T-4 BOLD 4x4 3.2 Tdi Cap. Rígida Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056013-8",
            "sold": false
          },
          {
            "vehicle": "T-4 DESERT STORM 4x4 3.0 TB Int Diesel",
            "manufacturer": "Troller",
            "fipe_code": "056010-3",
            "sold": false
          },
          {
            "vehicle": "440 Turbo 1.8",
            "manufacturer": "Volvo",
            "fipe_code": "029029-7",
            "sold": false
          },
          {
            "vehicle": "460 GLT 2.0/ Turbo 1.8",
            "manufacturer": "Volvo",
            "fipe_code": "029001-7",
            "sold": false
          },
          {
            "vehicle": "850 GLE 2.5 20V",
            "manufacturer": "Volvo",
            "fipe_code": "029023-8",
            "sold": false
          },
          {
            "vehicle": "850 GLE SW 20V",
            "manufacturer": "Volvo",
            "fipe_code": "029024-6",
            "sold": false
          },
          {
            "vehicle": "850 GLT 2.5 20V",
            "manufacturer": "Volvo",
            "fipe_code": "029025-4",
            "sold": false
          },
          {
            "vehicle": "850 GLT SW 2.5 20V",
            "manufacturer": "Volvo",
            "fipe_code": "029031-9",
            "sold": false
          },
          {
            "vehicle": "850 R SW 2.3 Turbo",
            "manufacturer": "Volvo",
            "fipe_code": "029032-7",
            "sold": false
          },
          {
            "vehicle": "850 Sedan",
            "manufacturer": "Volvo",
            "fipe_code": "029002-5",
            "sold": false
          },
          {
            "vehicle": "850 T-5 SW 2.5 BI-Turbo/ 2.3 Turbo",
            "manufacturer": "Volvo",
            "fipe_code": "029003-3",
            "sold": false
          },
          {
            "vehicle": "850 TURBO 20V/ R Turbo 2.3",
            "manufacturer": "Volvo",
            "fipe_code": "029026-2",
            "sold": false
          },
          {
            "vehicle": "940 Turbo/ SW Turbo 3.0",
            "manufacturer": "Volvo",
            "fipe_code": "029033-5",
            "sold": false
          },
          {
            "vehicle": "960 Sedan",
            "manufacturer": "Volvo",
            "fipe_code": "029004-1",
            "sold": false
          },
          {
            "vehicle": "C30 2.0 145cv",
            "manufacturer": "Volvo",
            "fipe_code": "029072-6",
            "sold": false
          },
          {
            "vehicle": "C30 2.4 170cv Aut",
            "manufacturer": "Volvo",
            "fipe_code": "029073-4",
            "sold": false
          },
          {
            "vehicle": "C30 T-5 2.5 220/ 230cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029074-2",
            "sold": false
          },
          {
            "vehicle": "C30 T-5 2.5 230cv Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029075-0",
            "sold": false
          },
          {
            "vehicle": "C30 T-5 R-DESIGN 2.5 230cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029080-7",
            "sold": false
          },
          {
            "vehicle": "C70 Cabriolet",
            "manufacturer": "Volvo",
            "fipe_code": "029027-0",
            "sold": false
          },
          {
            "vehicle": "C70 Cupê",
            "manufacturer": "Volvo",
            "fipe_code": "029007-6",
            "sold": false
          },
          {
            "vehicle": "S40 1.8 Aut",
            "manufacturer": "Volvo",
            "fipe_code": "029005-0",
            "sold": false
          },
          {
            "vehicle": "S40 1.8 Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029034-3",
            "sold": false
          },
          {
            "vehicle": "S40 2.0 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029043-2",
            "sold": false
          },
          {
            "vehicle": "S40 2.0 Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029011-4",
            "sold": false
          },
          {
            "vehicle": "S40 2.0 T",
            "manufacturer": "Volvo",
            "fipe_code": "029012-2",
            "sold": false
          },
          {
            "vehicle": "S40 2.4 140cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029069-6",
            "sold": false
          },
          {
            "vehicle": "S40 2.4 170cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029065-3",
            "sold": false
          },
          {
            "vehicle": "S40 T 2.0  Turbo Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029042-4",
            "sold": false
          },
          {
            "vehicle": "S40 T-4",
            "manufacturer": "Volvo",
            "fipe_code": "029013-0",
            "sold": false
          },
          {
            "vehicle": "S40 T-4 ARM Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029048-3",
            "sold": false
          },
          {
            "vehicle": "S40 T-4 ARM Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029050-5",
            "sold": false
          },
          {
            "vehicle": "S40 T-5 2.5 220/230cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029061-0",
            "sold": false
          },
          {
            "vehicle": "S60 R 2.5 300cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029060-2",
            "sold": false
          },
          {
            "vehicle": "S60 R 2.5 300cv Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029063-7",
            "sold": false
          },
          {
            "vehicle": "S60 T 2.0 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029057-2",
            "sold": false
          },
          {
            "vehicle": "S60 T 2.4/ 2.5",
            "manufacturer": "Volvo",
            "fipe_code": "029054-8",
            "sold": false
          },
          {
            "vehicle": "S60 T-4 1.6 180cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029082-3",
            "sold": false
          },
          {
            "vehicle": "S60 T-4 KINETIC 2.0 190cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029114-5",
            "sold": false
          },
          {
            "vehicle": "S60 T-4 MOMENTUM 2.0 190cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029115-3",
            "sold": false
          },
          {
            "vehicle": "S60 T-5 2.0 240cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029083-1",
            "sold": false
          },
          {
            "vehicle": "S60 T-5 2.3",
            "manufacturer": "Volvo",
            "fipe_code": "029053-0",
            "sold": false
          },
          {
            "vehicle": "S60 T-5 KINETIC 2.0 245cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029094-7",
            "sold": false
          },
          {
            "vehicle": "S60 T-5 MOMENTUM 2.0 245cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029093-9",
            "sold": false
          },
          {
            "vehicle": "S60 T-5 R-DESIGN 2.0 240cv 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029090-4",
            "sold": false
          },
          {
            "vehicle": "S60 T-6 3.0 304cv AWD 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029084-0",
            "sold": false
          },
          {
            "vehicle": "S60 T-6 R-DESIGN 2.0 306cv FWD 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029105-6",
            "sold": false
          },
          {
            "vehicle": "S60 T-6 R-DESIGN 3.0 AWD 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029086-6",
            "sold": false
          },
          {
            "vehicle": "S70 2.5",
            "manufacturer": "Volvo",
            "fipe_code": "029014-9",
            "sold": false
          },
          {
            "vehicle": "S70 2.5 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029037-8",
            "sold": false
          },
          {
            "vehicle": "S70 R",
            "manufacturer": "Volvo",
            "fipe_code": "029008-4",
            "sold": false
          },
          {
            "vehicle": "S70 R Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029038-6",
            "sold": false
          },
          {
            "vehicle": "S70 T-5 2.3",
            "manufacturer": "Volvo",
            "fipe_code": "029015-7",
            "sold": false
          },
          {
            "vehicle": "S80 2.9",
            "manufacturer": "Volvo",
            "fipe_code": "029016-5",
            "sold": false
          },
          {
            "vehicle": "S80 2.9 ARM",
            "manufacturer": "Volvo",
            "fipe_code": "029046-7",
            "sold": false
          },
          {
            "vehicle": "S80 3.2 238cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029070-0",
            "sold": false
          },
          {
            "vehicle": "S80 4.4 V8 315cv AWD Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029071-8",
            "sold": false
          },
          {
            "vehicle": "S80 T6 2.8 BI-Turbo",
            "manufacturer": "Volvo",
            "fipe_code": "029009-2",
            "sold": false
          },
          {
            "vehicle": "S80 T6 2.8 BI-Turbo ARM",
            "manufacturer": "Volvo",
            "fipe_code": "029047-5",
            "sold": false
          },
          {
            "vehicle": "S80 T-6 Executive 2.8",
            "manufacturer": "Volvo",
            "fipe_code": "029055-6",
            "sold": false
          },
          {
            "vehicle": "S80 T-6 Executive ARM 2.8 24v",
            "manufacturer": "Volvo",
            "fipe_code": "029056-4",
            "sold": false
          },
          {
            "vehicle": "V40 1.8 Aut",
            "manufacturer": "Volvo",
            "fipe_code": "029006-8",
            "sold": false
          },
          {
            "vehicle": "V40 1.8 Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029035-1",
            "sold": false
          },
          {
            "vehicle": "V40 2.0",
            "manufacturer": "Volvo",
            "fipe_code": "029017-3",
            "sold": false
          },
          {
            "vehicle": "V40 2.0 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029040-8",
            "sold": false
          },
          {
            "vehicle": "V40 2.0 Turbo",
            "manufacturer": "Volvo",
            "fipe_code": "029028-9",
            "sold": false
          },
          {
            "vehicle": "V40 T-3 KINETIC 1.5 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029103-0",
            "sold": false
          },
          {
            "vehicle": "V40 T-4",
            "manufacturer": "Volvo",
            "fipe_code": "029019-0",
            "sold": false
          },
          {
            "vehicle": "V40 T-4 ARM Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029049-1",
            "sold": false
          },
          {
            "vehicle": "V40 T-4 Aut./Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029039-4",
            "sold": false
          },
          {
            "vehicle": "V40 T-4 Cross Country 2.0 FWD Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029112-9",
            "sold": false
          },
          {
            "vehicle": "V40 T-4 KINETIC 2.0 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029111-0",
            "sold": false
          },
          {
            "vehicle": "V40 T-4 MOMENTUM 2.0 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029106-4",
            "sold": false
          },
          {
            "vehicle": "V40 T-5 Cross Country 2.0 Awd Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029092-0",
            "sold": false
          },
          {
            "vehicle": "V40 T-5 R-DESIGN 2.0 Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029091-2",
            "sold": false
          },
          {
            "vehicle": "V50 2.4 20V 140cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029077-7",
            "sold": false
          },
          {
            "vehicle": "V50 2.4 20V 170cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029066-1",
            "sold": false
          },
          {
            "vehicle": "V50 T-5 2.5 220cv Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029062-9",
            "sold": false
          },
          {
            "vehicle": "V60 T-4 KINETIC 2.0 190cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029116-1",
            "sold": false
          },
          {
            "vehicle": "V60 T-4 MOMENTUM 2.0 190cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029113-7",
            "sold": false
          },
          {
            "vehicle": "V60 T-5 KINETIC 2.0 245cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029096-3",
            "sold": false
          },
          {
            "vehicle": "V60 T-5 MOMENTUM 2.0 245cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029095-5",
            "sold": false
          },
          {
            "vehicle": "V60 T-5 R-DESING 2.0 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029088-2",
            "sold": false
          },
          {
            "vehicle": "V60 T-6 R-DESIGN 2.0 FWD 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029107-2",
            "sold": false
          },
          {
            "vehicle": "V60 T-6 R-DESIGN 3.0 AWD 4p",
            "manufacturer": "Volvo",
            "fipe_code": "029089-0",
            "sold": false
          },
          {
            "vehicle": "V70 2.5",
            "manufacturer": "Volvo",
            "fipe_code": "029020-3",
            "sold": false
          },
          {
            "vehicle": "V70 Cross Country 2.4",
            "manufacturer": "Volvo",
            "fipe_code": "029052-1",
            "sold": false
          },
          {
            "vehicle": "V70 R 2.5 300cv AWD Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029010-6",
            "sold": false
          },
          {
            "vehicle": "V70 R 2.5 300cv AWD Mec.",
            "manufacturer": "Volvo",
            "fipe_code": "029064-5",
            "sold": false
          },
          {
            "vehicle": "V70 T 2.0 20v 180cv 4p Aut.",
            "manufacturer": "Volvo",
            "fipe_code": "029058-0",
            "sold": false
          },
          {
            "vehicle": "V70 T 2.4",
            "manufacturer": "Volvo",
            "fipe_code": "029044-0",
            "sold": false
          },
          {
            "vehicle": "V70 T 2.4/ 2.5 Premium",
            "manufacturer": "Volvo",
            "fipe_code": "029045-9",
            "sold": false
          },
          {
            "vehicle": "V70 T5 2.3",
            "manufacturer": "Volvo",
            "fipe_code": "029022-0",
            "sold": false
          },
          {
            "vehicle": "V70 XC/ XC 70",
            "manufacturer": "Volvo",
            "fipe_code": "029021-1",
            "sold": false
          },
          {
            "vehicle": "XC 60 2.0 T5  5p",
            "manufacturer": "Volvo",
            "fipe_code": "029085-8",
            "sold": false
          },
          {
            "vehicle": "XC 60 3.0 AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029078-5",
            "sold": false
          },
          {
            "vehicle": "XC 60 D-5 KINETIC 2.4 AWD Diesel 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029109-9",
            "sold": false
          },
          {
            "vehicle": "XC 60 D-5 MOMENTUM 2.4  AWD Diesel  5p",
            "manufacturer": "Volvo",
            "fipe_code": "029108-0",
            "sold": false
          },
          {
            "vehicle": "XC 60 R-DESIGN 3.0 304cv AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029079-3",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-5 INSCRIPTION 2.0 245 cv FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029110-2",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-5 KINETIC 2.0 245cv FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029102-1",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-5 MOMENTUM 2.0 245cv FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029104-8",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-5 R-DESIGN 2.0 FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029087-4",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-6  R-DESIGN 2.0 306cv FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029101-3",
            "sold": false
          },
          {
            "vehicle": "XC 60 T-6 INCRIPTION 2.0 FWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029097-1",
            "sold": false
          },
          {
            "vehicle": "XC 90 2.5T 210cv AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029067-0",
            "sold": false
          },
          {
            "vehicle": "XC 90 3.2 238cv AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029076-9",
            "sold": false
          },
          {
            "vehicle": "XC 90 4.4 V8 315cv AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029068-8",
            "sold": false
          },
          {
            "vehicle": "XC 90 D-5 INSCRIPTION 2.0 235cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029118-8",
            "sold": false
          },
          {
            "vehicle": "XC 90 D-5 MOMENTUM 2.0 235cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029117-0",
            "sold": false
          },
          {
            "vehicle": "XC 90 T6 2.9 BI-TB 272cv AWD 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029059-9",
            "sold": false
          },
          {
            "vehicle": "XC 90 T-6 FIRST EDITION 2.0 320cv 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029100-5",
            "sold": false
          },
          {
            "vehicle": "XC 90 T-6 INSCRIPTION 2.0 320CV 5p",
            "manufacturer": "Volvo",
            "fipe_code": "029099-8",
            "sold": false
          },
          {
            "vehicle": "XC 90 T-6 MOMENTUM 2.0 320cv 5P",
            "manufacturer": "Volvo",
            "fipe_code": "029098-0",
            "sold": false
          },
          {
            "vehicle": "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005329-5",
            "sold": false
          },
          {
            "vehicle": "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x4 Die",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005330-9",
            "sold": false
          },
          {
            "vehicle": "AMAROK CS2.0 16V/S2.0 16V TDI 4x2 Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005337-6",
            "sold": false
          },
          {
            "vehicle": "AMAROK CS2.0 16V/S2.0 16V TDI 4x4 Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005338-4",
            "sold": false
          },
          {
            "vehicle": "AMAROK Hig. Extreme CD 2.0 4x4 Dies. Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005470-4",
            "sold": false
          },
          {
            "vehicle": "AMAROK Hig.ULTIMATE CD 2.0 4x4 Dies. Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005464-0",
            "sold": false
          },
          {
            "vehicle": "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005340-6",
            "sold": false
          },
          {
            "vehicle": "AMAROK Highline CD 2.0 16V TDI 4x4 Dies.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005320-1",
            "sold": false
          },
          {
            "vehicle": "AMAROK SE CD 2.0 16V TDI 4x4 Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005325-2",
            "sold": false
          },
          {
            "vehicle": "AMAROK T. Dark Label CD 2.0 4x4 Dies Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005443-7",
            "sold": false
          },
          {
            "vehicle": "AMAROK Trendline CD 2.0 16V TDI 4x4 Dies",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005323-6",
            "sold": false
          },
          {
            "vehicle": "AMAROK Trendline CD 2.0 TDI 4X4 Dies Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005349-0",
            "sold": false
          },
          {
            "vehicle": "Apolo GL 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005025-3",
            "sold": false
          },
          {
            "vehicle": "Apolo GLS/ Vip 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005026-1",
            "sold": false
          },
          {
            "vehicle": "Bora 2.0 8v Comfortline Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005156-0",
            "sold": false
          },
          {
            "vehicle": "Bora 2.0 8v Comfortline Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005155-1",
            "sold": false
          },
          {
            "vehicle": "Bora 2.0/ 2.0 Flex 8v Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005154-3",
            "sold": false
          },
          {
            "vehicle": "Bora 2.0/ 2.0 Flex 8v Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005153-5",
            "sold": false
          },
          {
            "vehicle": "Caravelle 2.4 Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005083-0",
            "sold": false
          },
          {
            "vehicle": "Corrado 2.0 Turbo",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005118-7",
            "sold": false
          },
          {
            "vehicle": "Corrado G-60 2.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005117-9",
            "sold": false
          },
          {
            "vehicle": "CROSSFOX  1.6 T. Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005418-6",
            "sold": false
          },
          {
            "vehicle": "CROSSFOX  I MOTION 1.6 T. Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005419-4",
            "sold": false
          },
          {
            "vehicle": "CROSSFOX 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005225-6",
            "sold": false
          },
          {
            "vehicle": "CROSSFOX I MOTION 1.6 Mi T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005342-2",
            "sold": false
          },
          {
            "vehicle": "EOS Cab. 2.0 Turbo FSI Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005287-6",
            "sold": false
          },
          {
            "vehicle": "Eurovan 2.4 Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005084-9",
            "sold": false
          },
          {
            "vehicle": "Fox 1.0 Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005307-4",
            "sold": false
          },
          {
            "vehicle": "Fox 1.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005308-2",
            "sold": false
          },
          {
            "vehicle": "Fox 1.6 Mi I MOTION Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005305-8",
            "sold": false
          },
          {
            "vehicle": "Fox 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005306-6",
            "sold": false
          },
          {
            "vehicle": "Fox BLUEMOTION 1.0 Mi Total Flex 12V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005352-0",
            "sold": false
          },
          {
            "vehicle": "Fox BLUEMOTION 1.0 Mi Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005353-8",
            "sold": false
          },
          {
            "vehicle": "Fox BlueMotion 1.6 Mi Total Flex 3p.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005343-0",
            "sold": false
          },
          {
            "vehicle": "Fox BlueMotion 1.6 Mi Total Flex 5p.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005344-9",
            "sold": false
          },
          {
            "vehicle": "Fox City 1.0 Mi/ 1.0Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005205-1",
            "sold": false
          },
          {
            "vehicle": "Fox City 1.0Mi/ 1.0Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005198-5",
            "sold": false
          },
          {
            "vehicle": "Fox Comfortline 1.0 Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005433-0",
            "sold": false
          },
          {
            "vehicle": "Fox Comfortline 1.0 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005407-0",
            "sold": false
          },
          {
            "vehicle": "Fox Comfortline 1.6 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005405-4",
            "sold": false
          },
          {
            "vehicle": "Fox Comfortline I Motion 1.6 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005404-6",
            "sold": false
          },
          {
            "vehicle": "Fox extreme 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005274-4",
            "sold": false
          },
          {
            "vehicle": "Fox Highline I MOTION 1.6 Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005402-0",
            "sold": false
          },
          {
            "vehicle": "Fox Highline1.6 Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005403-8",
            "sold": false
          },
          {
            "vehicle": "Fox PEPPER 1.6 Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005421-6",
            "sold": false
          },
          {
            "vehicle": "Fox PEPPER I MOTION 1.6 Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005422-4",
            "sold": false
          },
          {
            "vehicle": "Fox Plus 1.0Mi/ 1.0Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005199-3",
            "sold": false
          },
          {
            "vehicle": "Fox Plus 1.0Mi/ 1.0Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005206-0",
            "sold": false
          },
          {
            "vehicle": "Fox Plus 1.6Mi/ 1.6Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005200-0",
            "sold": false
          },
          {
            "vehicle": "Fox Plus 1.6Mi/ 1.6Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005207-8",
            "sold": false
          },
          {
            "vehicle": "Fox PRIME/Hghi. IMOTION 1.6 T.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005304-0",
            "sold": false
          },
          {
            "vehicle": "Fox PRIME/Higli. 1.6 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005303-1",
            "sold": false
          },
          {
            "vehicle": "Fox Rock in Rio 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005332-5",
            "sold": false
          },
          {
            "vehicle": "Fox Route 1.0 Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005262-0",
            "sold": false
          },
          {
            "vehicle": "Fox Route 1.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005263-9",
            "sold": false
          },
          {
            "vehicle": "Fox Route 1.6 Mi Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005264-7",
            "sold": false
          },
          {
            "vehicle": "Fox Route 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005265-5",
            "sold": false
          },
          {
            "vehicle": "Fox RUN 1.6 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005462-3",
            "sold": false
          },
          {
            "vehicle": "Fox SELEÇÃO 1.0 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005358-9",
            "sold": false
          },
          {
            "vehicle": "Fox SELEÇÃO 1.6 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005359-7",
            "sold": false
          },
          {
            "vehicle": "Fox SELEÇÃO IMOTION 1.6 Mi T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005371-6",
            "sold": false
          },
          {
            "vehicle": "Fox Sportline/Sports 1.0 Tot.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005212-4",
            "sold": false
          },
          {
            "vehicle": "Fox Sportline/Sports 1.0/1.0 Tot.Flex 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005201-9",
            "sold": false
          },
          {
            "vehicle": "Fox Sportline/Sports 1.6/1.6 Tot.Flex 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005202-7",
            "sold": false
          },
          {
            "vehicle": "Fox Sportline/Sports 1.6/1.6 Tot.Flex 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005208-6",
            "sold": false
          },
          {
            "vehicle": "Fox SUNRISE 1.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005293-0",
            "sold": false
          },
          {
            "vehicle": "Fox TRACK 1.0 Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005444-5",
            "sold": false
          },
          {
            "vehicle": "Fox Trendline 1.0 Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005434-8",
            "sold": false
          },
          {
            "vehicle": "Fox Trendline 1.0 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005401-1",
            "sold": false
          },
          {
            "vehicle": "Fox Trendline 1.6 Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005406-2",
            "sold": false
          },
          {
            "vehicle": "Fusca",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005027-0",
            "sold": false
          },
          {
            "vehicle": "Fusca 2.0 R-Line TSI 16V Aut. ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005420-8",
            "sold": false
          },
          {
            "vehicle": "Fusca 2.0 TSI 16V Aut. ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005348-1",
            "sold": false
          },
          {
            "vehicle": "Fusca 2.0 TSI 16V Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005347-3",
            "sold": false
          },
          {
            "vehicle": "Gol (novo) 1.0 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005345-7",
            "sold": false
          },
          {
            "vehicle": "Gol (novo) 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005275-2",
            "sold": false
          },
          {
            "vehicle": "Gol (novo) 1.6 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005346-5",
            "sold": false
          },
          {
            "vehicle": "Gol (novo) 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005276-0",
            "sold": false
          },
          {
            "vehicle": "Gol (novo) 1.6 Power/Highi T.Flex 8v 4P",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005277-9",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Mi FUN/ Highway/ Sport 16V  2/4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005159-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Plus 16v 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005148-9",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Plus 16v 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005147-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Plus 8v 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005150-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Plus 8v 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005149-7",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Power 16v 76cv 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005162-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Total Flex 8V 5p (25 Anos)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005341-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Trend/ Power 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005163-2",
            "sold": false
          },
          {
            "vehicle": "Gol 1.0 Trend/ Power 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005164-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 I MOTI.Power/Highli T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005310-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi I MOTION Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005350-3",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi Plus Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005197-7",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi Plus Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005196-9",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi Power Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005190-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi Rallye I MOTION T. Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005324-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi Rallye Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005210-8",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi/ 1.6i 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005078-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1.6 Mi/ Power 1.6 Mi 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005124-1",
            "sold": false
          },
          {
            "vehicle": "Gol 1.8 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005104-7",
            "sold": false
          },
          {
            "vehicle": "Gol 1.8 Mi 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005125-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1.8 Mi Power Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005216-7",
            "sold": false
          },
          {
            "vehicle": "Gol 1.8 Mi Rallye Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005217-5",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 (modelo antigo)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005028-8",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 16V 2p Turbo",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005144-6",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 16V 4p Turbo",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005146-2",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 16V/ Ouro  2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005002-4",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 16V/ Ouro 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005126-8",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 2p  / 1000i",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005001-6",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005127-6",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi Plus 16V 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005004-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1000 Mi Plus 8v 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005030-0",
            "sold": false
          },
          {
            "vehicle": "Gol 1000i Plus 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005029-6",
            "sold": false
          },
          {
            "vehicle": "Gol 2.0 Mi 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005105-5",
            "sold": false
          },
          {
            "vehicle": "Gol 2.0 Mi 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005128-4",
            "sold": false
          },
          {
            "vehicle": "Gol BLACK 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005339-2",
            "sold": false
          },
          {
            "vehicle": "Gol City (Trend) 1.0 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005227-2",
            "sold": false
          },
          {
            "vehicle": "Gol City (Trend) 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005228-0",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.0 Mi 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005179-9",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.0 Mi 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005180-2",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.6 Mi 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005181-0",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.6 Mi 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005182-9",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.6 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005229-9",
            "sold": false
          },
          {
            "vehicle": "Gol City 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005195-0",
            "sold": false
          },
          {
            "vehicle": "Gol CL 1.6 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005005-9",
            "sold": false
          },
          {
            "vehicle": "Gol CL 1.8 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005006-7",
            "sold": false
          },
          {
            "vehicle": "Gol CLi / CL 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005033-4",
            "sold": false
          },
          {
            "vehicle": "Gol CLi / CL/ Copa/ Stones 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005032-6",
            "sold": false
          },
          {
            "vehicle": "Gol Comfortline 1.0 T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005456-9",
            "sold": false
          },
          {
            "vehicle": "Gol Comfortline 1.0 T. Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005389-9",
            "sold": false
          },
          {
            "vehicle": "Gol Comfortline 1.0 T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005390-2",
            "sold": false
          },
          {
            "vehicle": "Gol Comfortline 1.6 T. Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005391-0",
            "sold": false
          },
          {
            "vehicle": "Gol Comfortline 1.6 T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005392-9",
            "sold": false
          },
          {
            "vehicle": "Gol COPA 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005243-4",
            "sold": false
          },
          {
            "vehicle": "Gol COPA 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005244-2",
            "sold": false
          },
          {
            "vehicle": "Gol ECOMOTION  1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005317-1",
            "sold": false
          },
          {
            "vehicle": "Gol ECOMOTION 1.0 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005316-3",
            "sold": false
          },
          {
            "vehicle": "Gol Furgao 1.0 mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005031-8",
            "sold": false
          },
          {
            "vehicle": "Gol Furgão 1.6 Mi/ 1.6i/ 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005119-5",
            "sold": false
          },
          {
            "vehicle": "Gol GL 1.6 Mi/Star 1.6 e 1.8/Atlanta 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005034-2",
            "sold": false
          },
          {
            "vehicle": "Gol GL 1.8 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005007-5",
            "sold": false
          },
          {
            "vehicle": "Gol GLi / GL/ Atlanta 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005035-0",
            "sold": false
          },
          {
            "vehicle": "Gol GLS 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005080-6",
            "sold": false
          },
          {
            "vehicle": "Gol GT/GTS 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005036-9",
            "sold": false
          },
          {
            "vehicle": "Gol GTi 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005040-7",
            "sold": false
          },
          {
            "vehicle": "Gol GTi 2000 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005041-5",
            "sold": false
          },
          {
            "vehicle": "Gol I MOTION 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005309-0",
            "sold": false
          },
          {
            "vehicle": "Gol I MOTION Comfort. 1.6 T. Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005393-7",
            "sold": false
          },
          {
            "vehicle": "Gol I MOTION Comfort. 1.6 T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005394-5",
            "sold": false
          },
          {
            "vehicle": "Gol I Motion Trendline 1.6 T. Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005411-9",
            "sold": false
          },
          {
            "vehicle": "Gol I Motion Trendline 1.6 T. Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005398-8",
            "sold": false
          },
          {
            "vehicle": "Gol L 1.3/ L/ LS/ C/ S/ BX/ Plus 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005103-9",
            "sold": false
          },
          {
            "vehicle": "Gol Plus 1.0 Mi Total Flex 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005230-2",
            "sold": false
          },
          {
            "vehicle": "Gol Plus 1.0 Mi Total Flex 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005231-0",
            "sold": false
          },
          {
            "vehicle": "Gol Rallye 1.6 T. Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005395-3",
            "sold": false
          },
          {
            "vehicle": "Gol Rallye I MOTION 1.6 T. Flex 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005396-1",
            "sold": false
          },
          {
            "vehicle": "Gol Rock in Rio 1.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005331-7",
            "sold": false
          },
          {
            "vehicle": "Gol SELEÇÃO 1.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005318-0",
            "sold": false
          },
          {
            "vehicle": "Gol SELEÇÃO 1.6 I MOTION T.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005364-3",
            "sold": false
          },
          {
            "vehicle": "Gol SELEÇÃO 1.6 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005363-5",
            "sold": false
          },
          {
            "vehicle": "Gol Special 1.0 Mi 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005189-6",
            "sold": false
          },
          {
            "vehicle": "Gol Special 1.0 Total Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005415-1",
            "sold": false
          },
          {
            "vehicle": "Gol Special 1.0 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005414-3",
            "sold": false
          },
          {
            "vehicle": "Gol Special 1.6 Mi 8V 99cv 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005178-0",
            "sold": false
          },
          {
            "vehicle": "Gol Special/ Special Xtreme 1.0 Mi 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005079-2",
            "sold": false
          },
          {
            "vehicle": "Gol TECH 1.0 Mi Total Flex 8V 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005253-1",
            "sold": false
          },
          {
            "vehicle": "Gol TECH 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005254-0",
            "sold": false
          },
          {
            "vehicle": "Gol TRACK 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005351-1",
            "sold": false
          },
          {
            "vehicle": "Gol TRACK 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005469-0",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.0 T.Flex 12V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005461-5",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.0 T.Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005455-0",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.0 T.Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005383-0",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.0 T.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005384-8",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.6 T.Flex 8V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005412-7",
            "sold": false
          },
          {
            "vehicle": "Gol Trendline 1.6 T.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005397-0",
            "sold": false
          },
          {
            "vehicle": "Gol TSi 1.8/ 1.8Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005037-7",
            "sold": false
          },
          {
            "vehicle": "Gol TSi 2000 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005038-5",
            "sold": false
          },
          {
            "vehicle": "Golf  BLACK EDITON 2.0 Mi T. Flex 8V Tip",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005314-7",
            "sold": false
          },
          {
            "vehicle": "Golf  TECH 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005273-6",
            "sold": false
          },
          {
            "vehicle": "Golf 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005252-3",
            "sold": false
          },
          {
            "vehicle": "Golf 1.6 Mi Trip/ Sport 101cv 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005187-0",
            "sold": false
          },
          {
            "vehicle": "Golf 1.6Mi/ 1.6Mi Gener./Black & Silver",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005085-7",
            "sold": false
          },
          {
            "vehicle": "Golf 1.8 Mi Sport 150cv Turbo Mec/Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005209-4",
            "sold": false
          },
          {
            "vehicle": "Golf 2.0/ 2.0 Mi Flex Aut/Tiptronic.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005129-2",
            "sold": false
          },
          {
            "vehicle": "Golf 2.0/ 2.0 Mi Flex Comfortline Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005130-6",
            "sold": false
          },
          {
            "vehicle": "Golf 2.0/ 2.0 Mi Flex Comfortline/ Sport",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005106-3",
            "sold": false
          },
          {
            "vehicle": "Golf 2.0/ 2.0 T. Flex Mec.(Black & Silv)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005141-1",
            "sold": false
          },
          {
            "vehicle": "Golf Comfortline 1.0 TSI Total Flex Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005466-6",
            "sold": false
          },
          {
            "vehicle": "Golf Comfortline 1.4 TSI 140cv Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005370-8",
            "sold": false
          },
          {
            "vehicle": "Golf Comfortline 1.4 TSI 140cv Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005369-4",
            "sold": false
          },
          {
            "vehicle": "Golf Comfortline 1.6 MSI Total Flex Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005449-6",
            "sold": false
          },
          {
            "vehicle": "Golf Comfortline 1.6 MSI Total Flex Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005448-8",
            "sold": false
          },
          {
            "vehicle": "Golf Flash 1.6 Mi/1.6 Mi Tot. Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005236-1",
            "sold": false
          },
          {
            "vehicle": "Golf GL 1.8/ 2.0i 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005071-7",
            "sold": false
          },
          {
            "vehicle": "Golf GLX 2.0 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005072-5",
            "sold": false
          },
          {
            "vehicle": "Golf GT 2.0 Mi T. Flex 8V 4p Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005285-0",
            "sold": false
          },
          {
            "vehicle": "Golf GT 2.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005278-7",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 180/193cv Turbo 4p Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005171-3",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 180/193cv Turbo 4p Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005170-5",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 20V 2p Turbo Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005107-1",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 20V Turbo 2p Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005131-4",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 20V Turbo 4p Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005158-6",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 1.8 Mi 20V Turbo 4p Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005157-8",
            "sold": false
          },
          {
            "vehicle": "Golf GTI 1.8 Turbo",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005087-3",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005073-3",
            "sold": false
          },
          {
            "vehicle": "Golf GTi 2.0 TSI 220cv Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005356-2",
            "sold": false
          },
          {
            "vehicle": "Golf GTi Cabrio 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005120-9",
            "sold": false
          },
          {
            "vehicle": "Golf GTI VR6/ Golf 2.8 VR6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005099-7",
            "sold": false
          },
          {
            "vehicle": "Golf Highline 1.4 TSI 140cv Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005355-4",
            "sold": false
          },
          {
            "vehicle": "Golf Highline 1.4 TSI 140cv Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005354-6",
            "sold": false
          },
          {
            "vehicle": "Golf Highline 1.4 TSI Total Flex Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005451-8",
            "sold": false
          },
          {
            "vehicle": "Golf Highline 1.4 TSI Total Flex Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005450-0",
            "sold": false
          },
          {
            "vehicle": "Golf SILVER EDIT. 2.0 Mi T.Flex 8v Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005302-3",
            "sold": false
          },
          {
            "vehicle": "Golf SILVER EDIT. 2.0 Mi T.Flex 8V Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005301-5",
            "sold": false
          },
          {
            "vehicle": "Golf Sportline 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005259-0",
            "sold": false
          },
          {
            "vehicle": "Golf Sportline 2.0 Mi Total F. 8V Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005319-8",
            "sold": false
          },
          {
            "vehicle": "Golf Variant Comfort. 1.4 TSI T.Flex Aut",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005467-4",
            "sold": false
          },
          {
            "vehicle": "Golf Variant Comfortline 1.4 TSI  Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005431-3",
            "sold": false
          },
          {
            "vehicle": "Golf Variant Comfortline 1.4 TSI Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005445-3",
            "sold": false
          },
          {
            "vehicle": "Golf Variant Highli. 1.4 TSI T.Flex Aut ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005465-8",
            "sold": false
          },
          {
            "vehicle": "Golf Variant Highline 1.4 TSI Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005430-5",
            "sold": false
          },
          {
            "vehicle": "Grand Saveiro Xtreme/Street  1.6/1.8/2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005168-3",
            "sold": false
          },
          {
            "vehicle": "JETTA  GLX III 2.8 VR6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005121-7",
            "sold": false
          },
          {
            "vehicle": "JETTA 2.5 20V 150/170cv Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005255-8",
            "sold": false
          },
          {
            "vehicle": "JETTA Comfortline  2.0 T.Flex 8V 4p Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005326-0",
            "sold": false
          },
          {
            "vehicle": "JETTA Comfortline 1.4 TSI 16V 4p Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005454-2",
            "sold": false
          },
          {
            "vehicle": "JETTA Comfortline 2.0 T.Flex 8V 4p Tipt.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005327-9",
            "sold": false
          },
          {
            "vehicle": "JETTA Highline 2.0 TSI 16V 4p Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005328-7",
            "sold": false
          },
          {
            "vehicle": "JETTA Trendline 1.4 TSI 16V 4p  Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005452-6",
            "sold": false
          },
          {
            "vehicle": "JETTA Trendline 1.4 TSI 16V 4p Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005453-4",
            "sold": false
          },
          {
            "vehicle": "JETTA Trendline 2.0 T.Flex 8V 4p Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005425-9",
            "sold": false
          },
          {
            "vehicle": "JETTA Variant 2.5 20V 170cv Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005272-8",
            "sold": false
          },
          {
            "vehicle": "Kombi Carat",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005081-4",
            "sold": false
          },
          {
            "vehicle": "Kombi Escolar 1.6 MPi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005137-3",
            "sold": false
          },
          {
            "vehicle": "Kombi Escolar/ 50 anos 1.4 Mi Total Flex",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005241-8",
            "sold": false
          },
          {
            "vehicle": "Kombi Furgão",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005023-7",
            "sold": false
          },
          {
            "vehicle": "Kombi Furgão 1.4 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005239-6",
            "sold": false
          },
          {
            "vehicle": "Kombi Furgão Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005138-1",
            "sold": false
          },
          {
            "vehicle": "Kombi LAST EDITION 56 1.4 Mi Total Flex ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005357-0",
            "sold": false
          },
          {
            "vehicle": "Kombi Lotação 1.4 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005240-0",
            "sold": false
          },
          {
            "vehicle": "Kombi Lotação 1.6 MPi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005136-5",
            "sold": false
          },
          {
            "vehicle": "Kombi Pick-Up",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005022-9",
            "sold": false
          },
          {
            "vehicle": "Kombi Pick-Up Diesel",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005139-0",
            "sold": false
          },
          {
            "vehicle": "Kombi Standard 1.4 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005238-8",
            "sold": false
          },
          {
            "vehicle": "Kombi Standard/ Luxo/ Série Prata",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005024-5",
            "sold": false
          },
          {
            "vehicle": "Logus 1.6 / CLi / CL/ GL",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005042-3",
            "sold": false
          },
          {
            "vehicle": "Logus 1.8 / CLi / CL",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005043-1",
            "sold": false
          },
          {
            "vehicle": "Logus GLi / GL 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005044-0",
            "sold": false
          },
          {
            "vehicle": "Logus GLS 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005045-8",
            "sold": false
          },
          {
            "vehicle": "Logus GLSi / GLS 2000",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005046-6",
            "sold": false
          },
          {
            "vehicle": "Logus Wolfsburg Edition 2000i",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005047-4",
            "sold": false
          },
          {
            "vehicle": "New Beetle 2.0 Mi Mec./Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005111-0",
            "sold": false
          },
          {
            "vehicle": "Parati 1.0 Mi FUN/ SunSet 16V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005160-8",
            "sold": false
          },
          {
            "vehicle": "Parati 1.0 Mi Plus 16v 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005151-9",
            "sold": false
          },
          {
            "vehicle": "Parati 1.0 Mi Summer 16v 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005152-7",
            "sold": false
          },
          {
            "vehicle": "Parati 1.0 Mi Tour 16V 76cv 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005165-9",
            "sold": false
          },
          {
            "vehicle": "Parati 1.6 Mi Plus Total Flex  8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005211-6",
            "sold": false
          },
          {
            "vehicle": "Parati 1.6 Mi/ 1.6 Mi City",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005108-0",
            "sold": false
          },
          {
            "vehicle": "Parati 1.6Mi/1.6Mi City/T.Field T.Flex",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005192-6",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi City Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005218-3",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi CROSSOVER Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005221-3",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi Plus Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005219-1",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi T. Field Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005220-5",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi Tour 8V 99cv 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005166-7",
            "sold": false
          },
          {
            "vehicle": "Parati 1.8 Mi/ 1.8 Mi Plus",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005109-8",
            "sold": false
          },
          {
            "vehicle": "Parati 1000 Mi 16V 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005008-3",
            "sold": false
          },
          {
            "vehicle": "Parati 1000 Mi 16V 4p Turbo",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005145-4",
            "sold": false
          },
          {
            "vehicle": "Parati 2.0 Mi Tour 8V 112cv 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005167-5",
            "sold": false
          },
          {
            "vehicle": "Parati 2.0 Mi/ 2.0 Mi Track & Field",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005110-1",
            "sold": false
          },
          {
            "vehicle": "Parati C 1.6/ CL 1.6 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005009-1",
            "sold": false
          },
          {
            "vehicle": "Parati CL 1.8 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005010-5",
            "sold": false
          },
          {
            "vehicle": "Parati CLi / CL/ Atlanta 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005048-2",
            "sold": false
          },
          {
            "vehicle": "Parati CLi / CL/ Atlanta 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005049-0",
            "sold": false
          },
          {
            "vehicle": "Parati COMFORTLINE 1.6 Mi Tot.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005242-6",
            "sold": false
          },
          {
            "vehicle": "Parati COMFORTLINE 1.8 Mi Tot.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005232-9",
            "sold": false
          },
          {
            "vehicle": "Parati CROSSOVER 2.0 8V/ 1.0 16V TB 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005188-8",
            "sold": false
          },
          {
            "vehicle": "Parati Evidence 1.8 8V/ 1.0 16V TB 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005183-7",
            "sold": false
          },
          {
            "vehicle": "Parati GL 1.6 Mi/ 1.6/ GLS/ Club 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005050-4",
            "sold": false
          },
          {
            "vehicle": "Parati GL 1.8 Mi/ Club 1.8 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005011-3",
            "sold": false
          },
          {
            "vehicle": "Parati GLi / GL 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005051-2",
            "sold": false
          },
          {
            "vehicle": "Parati GLS 2.0 Mi 2/4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005012-1",
            "sold": false
          },
          {
            "vehicle": "Parati GLSi 2.0 / GLS/ Surf 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005052-0",
            "sold": false
          },
          {
            "vehicle": "Parati GTi 2.0 Mi 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005053-9",
            "sold": false
          },
          {
            "vehicle": "Parati Plus/ LS/ S",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005100-4",
            "sold": false
          },
          {
            "vehicle": "Parati SURF 1.6 Mi Total Flex",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005270-1",
            "sold": false
          },
          {
            "vehicle": "Parati SURF 1.8 Mi Total Flex",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005271-0",
            "sold": false
          },
          {
            "vehicle": "Parati TITAN 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005289-2",
            "sold": false
          },
          {
            "vehicle": "Parati Utility 1.8 8V/ 1.0 Turbo 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005169-1",
            "sold": false
          },
          {
            "vehicle": "Passat  L/LS/LSe/GL/GLS/TS/Fla/Vill/Plus",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005101-2",
            "sold": false
          },
          {
            "vehicle": "Passat 1.8 Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005132-2",
            "sold": false
          },
          {
            "vehicle": "Passat 1.8 Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005088-1",
            "sold": false
          },
          {
            "vehicle": "Passat 1.8 Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005113-6",
            "sold": false
          },
          {
            "vehicle": "Passat 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005074-1",
            "sold": false
          },
          {
            "vehicle": "Passat 2.0 FSI Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005234-5",
            "sold": false
          },
          {
            "vehicle": "Passat 2.8 V6 Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005092-0",
            "sold": false
          },
          {
            "vehicle": "Passat 2.8 V6 Protect Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005184-5",
            "sold": false
          },
          {
            "vehicle": "Passat 2.8 V6 Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005112-8",
            "sold": false
          },
          {
            "vehicle": "Passat 3.2 V6 FSI 24V 250cv Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005260-4",
            "sold": false
          },
          {
            "vehicle": "Passat CC 2.0 TSI 211cv Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005400-3",
            "sold": false
          },
          {
            "vehicle": "Passat CC 3.6 V6 FSI 300cv Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005292-2",
            "sold": false
          },
          {
            "vehicle": "Passat Comfortline 2.0 TSI 220cv Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005446-1",
            "sold": false
          },
          {
            "vehicle": "Passat Highline 2.0 TSI 220cv Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005447-0",
            "sold": false
          },
          {
            "vehicle": "Passat Pointer GTS",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005054-7",
            "sold": false
          },
          {
            "vehicle": "Passat R-Line TB 2.0 TSI Tiptronic 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005413-5",
            "sold": false
          },
          {
            "vehicle": "Passat TB 2.0 FSI/TSI 211cv Tiptronic 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005257-4",
            "sold": false
          },
          {
            "vehicle": "Passat Turbo 1.8 Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005090-3",
            "sold": false
          },
          {
            "vehicle": "Passat Turbo 1.8 Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005134-9",
            "sold": false
          },
          {
            "vehicle": "Passat Variant  2.0 FSI 150cv Tiptron.5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005237-0",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 1.8 Aut.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005135-7",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 1.8 Mec.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005089-0",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005075-0",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 2.8 V6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005093-8",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 2.8 V6 Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005114-4",
            "sold": false
          },
          {
            "vehicle": "Passat Variant 3.2 V6 FSI 24V 250cv Tip.",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005261-2",
            "sold": false
          },
          {
            "vehicle": "Passat Variant R-Line TB 2.0 TSI Tip. 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005440-2",
            "sold": false
          },
          {
            "vehicle": "Passat Variant Turbo 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005091-1",
            "sold": false
          },
          {
            "vehicle": "Passat Variant Turbo 1.8 Tiptronic",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005115-2",
            "sold": false
          },
          {
            "vehicle": "Passat Variant Turbo 2.0 FSI Tiptron. 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005256-6",
            "sold": false
          },
          {
            "vehicle": "Passat Variant VR6 2.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005076-8",
            "sold": false
          },
          {
            "vehicle": "Passat VR6 2.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005077-6",
            "sold": false
          },
          {
            "vehicle": "Pointer 1.8 / CLi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005055-5",
            "sold": false
          },
          {
            "vehicle": "Pointer GLi 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005056-3",
            "sold": false
          },
          {
            "vehicle": "Pointer GLi 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005057-1",
            "sold": false
          },
          {
            "vehicle": "Pointer GTi 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005058-0",
            "sold": false
          },
          {
            "vehicle": "Polo 1.0 Mi 79cv 16V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005174-8",
            "sold": false
          },
          {
            "vehicle": "Polo 1.6 E-Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005290-6",
            "sold": false
          },
          {
            "vehicle": "Polo 1.6 Mi/ S.Ouro 1.6Mi 101cv 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005172-1",
            "sold": false
          },
          {
            "vehicle": "Polo 1.6 Mi/S.Ouro 1.6 Mi Tot.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005213-2",
            "sold": false
          },
          {
            "vehicle": "Polo 2.0 Mi 116cv 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005173-0",
            "sold": false
          },
          {
            "vehicle": "Polo BLUEMOTION 1.6 Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005288-4",
            "sold": false
          },
          {
            "vehicle": "Polo Classic 1.0 Mi 16v  65cv 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005177-2",
            "sold": false
          },
          {
            "vehicle": "Polo Classic/ Special 1.8 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005013-0",
            "sold": false
          },
          {
            "vehicle": "Polo GT 2.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005284-1",
            "sold": false
          },
          {
            "vehicle": "Polo GTI 1.8 Mi 150cv 20V Turbo 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005258-2",
            "sold": false
          },
          {
            "vehicle": "Polo I MOTION 1.6 Total Flex  5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005294-9",
            "sold": false
          },
          {
            "vehicle": "Polo Next 1.6 Mi 101cv 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005191-8",
            "sold": false
          },
          {
            "vehicle": "Polo Sed. COMFORT. 1.6 Mi Tot. Flex 8v",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005248-5",
            "sold": false
          },
          {
            "vehicle": "Polo Sed./ Sed. COMF. 2.0/2.0 Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005186-1",
            "sold": false
          },
          {
            "vehicle": "Polo Sed.COMFORT. I MOTION 1.6 T.Flex 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005297-3",
            "sold": false
          },
          {
            "vehicle": "Polo Sedan 1.6 Mi 101cv 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005185-3",
            "sold": false
          },
          {
            "vehicle": "Polo Sedan 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005214-0",
            "sold": false
          },
          {
            "vehicle": "Polo Sedan Evidence 1.6 Mi T.Flex 8v 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005226-4",
            "sold": false
          },
          {
            "vehicle": "Polo Sedan I MOTION  1.6 Total Flex  4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005296-5",
            "sold": false
          },
          {
            "vehicle": "Polo SPORTLINE 1.6 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005249-3",
            "sold": false
          },
          {
            "vehicle": "Polo Sportline 2.0 Mi Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005333-3",
            "sold": false
          },
          {
            "vehicle": "Polo SPORTLINE I MOTION 1.6 T.Flex 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005295-7",
            "sold": false
          },
          {
            "vehicle": "Quantum 1.8 Mi/ 1.8i",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005014-8",
            "sold": false
          },
          {
            "vehicle": "Quantum 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005015-6",
            "sold": false
          },
          {
            "vehicle": "Quantum CLi / CL / C/ CS/ CD/ CG 1.8/2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005059-8",
            "sold": false
          },
          {
            "vehicle": "Quantum Evidenc 2.0 MI",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005097-0",
            "sold": false
          },
          {
            "vehicle": "Quantum Exclusiv 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005016-4",
            "sold": false
          },
          {
            "vehicle": "Quantum GLi / GL 1.8/ 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005060-1",
            "sold": false
          },
          {
            "vehicle": "Quantum GLSi / GLS 1.8/Sport/ Family 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005061-0",
            "sold": false
          },
          {
            "vehicle": "Santana 1.8 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005017-2",
            "sold": false
          },
          {
            "vehicle": "Santana 2.0 Mi 2p e 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005018-0",
            "sold": false
          },
          {
            "vehicle": "Santana CLi /CL /C 1.8/2.0 /SU 2.0 2p/4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005062-8",
            "sold": false
          },
          {
            "vehicle": "Santana COMFORTLINE 1.8 Mi 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005245-0",
            "sold": false
          },
          {
            "vehicle": "Santana CS/CD/CG",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005102-0",
            "sold": false
          },
          {
            "vehicle": "Santana Evidenc 2.0 MI",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005098-9",
            "sold": false
          },
          {
            "vehicle": "Santana Exclusiv 2.0 Mi/ Executivo 2.0i",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005019-9",
            "sold": false
          },
          {
            "vehicle": "Santana GLi / GL/ Sport 1.8/ 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005063-6",
            "sold": false
          },
          {
            "vehicle": "Santana GLSi / GLS 1.8/ 2.0",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005064-4",
            "sold": false
          },
          {
            "vehicle": "Saveiro  Trendline 1.6 T.Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005386-4",
            "sold": false
          },
          {
            "vehicle": "Saveiro  Trendline 1.6 T.Flex 8V CE",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005387-2",
            "sold": false
          },
          {
            "vehicle": "Saveiro 1.6 Mi Total Flex 8V CE",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005298-1",
            "sold": false
          },
          {
            "vehicle": "Saveiro 1.6 Mi/ 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005094-6",
            "sold": false
          },
          {
            "vehicle": "Saveiro 1.6 Mi/ 1.6Mi City Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005193-4",
            "sold": false
          },
          {
            "vehicle": "Saveiro 1.8 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005142-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005140-3",
            "sold": false
          },
          {
            "vehicle": "Saveiro City 1.8 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005222-1",
            "sold": false
          },
          {
            "vehicle": "Saveiro CL 1.6 Mi / CL/ C 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005020-2",
            "sold": false
          },
          {
            "vehicle": "Saveiro CL/ Summer 1.8 Mi e 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005021-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSS 1.6 Mi Total Flex 8V CE",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005315-5",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSS 1.6 T. Flex 16V CE",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005388-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSS 1.6 T.Flex 16v CD",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005408-9",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSSOVER 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005246-9",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSSOVER 1.8 Mi 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005215-9",
            "sold": false
          },
          {
            "vehicle": "Saveiro CROSSOVER 1.8 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005224-8",
            "sold": false
          },
          {
            "vehicle": "Saveiro Diesel (todas)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005122-5",
            "sold": false
          },
          {
            "vehicle": "Saveiro FUN 1.8 99cv/ City e S.Surf  1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005161-6",
            "sold": false
          },
          {
            "vehicle": "Saveiro GL 1.8Mi e 1.6/GL/LS/S/ Sunset",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005065-2",
            "sold": false
          },
          {
            "vehicle": "Saveiro Highline 1.6 T. Flex 8V CD",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005409-7",
            "sold": false
          },
          {
            "vehicle": "Saveiro Robust 1.6 Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005459-3",
            "sold": false
          },
          {
            "vehicle": "Saveiro Rock in Rio 1.6 Total Flex 8V CD",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005432-1",
            "sold": false
          },
          {
            "vehicle": "Saveiro SPORTLINE 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005247-7",
            "sold": false
          },
          {
            "vehicle": "Saveiro SPORTLINE 1.8 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005233-7",
            "sold": false
          },
          {
            "vehicle": "Saveiro Startline 1.6 T.Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005385-6",
            "sold": false
          },
          {
            "vehicle": "Saveiro Super Surf  1.8 Mi 8V 99cv",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005203-5",
            "sold": false
          },
          {
            "vehicle": "Saveiro Super Surf 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005194-2",
            "sold": false
          },
          {
            "vehicle": "Saveiro Super Surf 1.8 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005223-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro SURF 1.6 Mi Total Flex 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005268-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro SURF 1.8 Mi Total Flex 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005269-8",
            "sold": false
          },
          {
            "vehicle": "Saveiro TITAN  1.6 Mi Total Flex 2p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005267-1",
            "sold": false
          },
          {
            "vehicle": "Saveiro Trendline 1.6 T.Flex 8V CD",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005410-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro TROOPER 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005299-0",
            "sold": false
          },
          {
            "vehicle": "Saveiro TROOPER 1.6 Mi Total Flex 8V CE",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005300-7",
            "sold": false
          },
          {
            "vehicle": "Saveiro TSi 2.0 Mi",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005095-4",
            "sold": false
          },
          {
            "vehicle": "SpaceCross 1.6 Mi Total Flex 16V  ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005426-7",
            "sold": false
          },
          {
            "vehicle": "SpaceCross 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005334-1",
            "sold": false
          },
          {
            "vehicle": "SpaceCross I MOTION 1.6 Mi T. Flex 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005427-5",
            "sold": false
          },
          {
            "vehicle": "SpaceCross I MOTION 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005335-0",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX  SPORTLINE/HIGHLINE 1.6 T.Flex",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005279-5",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX  TREND I MOTION 1.6 T. Flex 8v",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005321-0",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX 1.6 Trendline I MOT. T.Flex 8V ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005442-9",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX 1.6 Trendline Total Flex 8v 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005441-0",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX 1.6/ 1.6 Trend Total Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005251-5",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX COMF. I MOTION 1.6 Flex 8V 5p ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005423-2",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX COMFORTLINE 1.6 Mi T.Flex 8V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005250-7",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX HIGHLINE 1.6 T.Flex 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005429-1",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX HIGHLINE I MOT. 1.6 T.Flex 16V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005428-3",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX Route 1.6 Mi T.Flex 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005286-8",
            "sold": false
          },
          {
            "vehicle": "SPACEFOX SPORTLINE/HIGHLINE I MOTION 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005322-8",
            "sold": false
          },
          {
            "vehicle": "TIGUAN 1.4 TSI 16V 150cv 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005471-2",
            "sold": false
          },
          {
            "vehicle": "TIGUAN 2.0 TSI 16V 200cv Tiptronic 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005291-4",
            "sold": false
          },
          {
            "vehicle": "TOUAREG 3.2 24V V6 Tiptronic 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005235-3",
            "sold": false
          },
          {
            "vehicle": "TOUAREG 3.6 24V V6 280cv Tiptronic 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005266-3",
            "sold": false
          },
          {
            "vehicle": "TOUAREG 4.2 32V V8 310cv Tiptronic 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005204-3",
            "sold": false
          },
          {
            "vehicle": "TOUAREG R-Line 4.2 V8 360cv Tiptronic 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005424-0",
            "sold": false
          },
          {
            "vehicle": "up! black/white/red 1.0 T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005368-6",
            "sold": false
          },
          {
            "vehicle": "up! black/white/red 1.0 TSI TFlex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005438-0",
            "sold": false
          },
          {
            "vehicle": "up! black/white/red I MOTION 1.0 Flex 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005374-0",
            "sold": false
          },
          {
            "vehicle": "up! cross 1.0 T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005416-0",
            "sold": false
          },
          {
            "vehicle": "up! cross 1.0 TSI Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005436-4",
            "sold": false
          },
          {
            "vehicle": "up! cross I MOTION 1.0 T.Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005417-8",
            "sold": false
          },
          {
            "vehicle": "up! high 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005367-8",
            "sold": false
          },
          {
            "vehicle": "up! high 1.0 TSI Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005437-2",
            "sold": false
          },
          {
            "vehicle": "up! high I MOTION 1.0 T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005373-2",
            "sold": false
          },
          {
            "vehicle": "up! move 1.0 T. Flex 12V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005375-9",
            "sold": false
          },
          {
            "vehicle": "up! move 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005366-0",
            "sold": false
          },
          {
            "vehicle": "up! move 1.0 TSI Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005435-6",
            "sold": false
          },
          {
            "vehicle": "up! move I MOTION 1.0 T. Flex 12V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005372-4",
            "sold": false
          },
          {
            "vehicle": "up! move I MOTION 1.0 T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005399-6",
            "sold": false
          },
          {
            "vehicle": "up! Run 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005460-7",
            "sold": false
          },
          {
            "vehicle": "up! Run I MOTION 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005463-1",
            "sold": false
          },
          {
            "vehicle": "up! SPEED 1.0 TSI T. Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005439-9",
            "sold": false
          },
          {
            "vehicle": "up! take 1.0 T. Flex 12V 3p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005376-7",
            "sold": false
          },
          {
            "vehicle": "up! take 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005365-1",
            "sold": false
          },
          {
            "vehicle": "up! track 1.0 Total Flex 12V 5p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005468-2",
            "sold": false
          },
          {
            "vehicle": "Van 1.6 Mi (furgão)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005096-2",
            "sold": false
          },
          {
            "vehicle": "VOYAGE  Trendline 1.0 T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005379-1",
            "sold": false
          },
          {
            "vehicle": "VOYAGE  Trendline 1.6 T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005380-5",
            "sold": false
          },
          {
            "vehicle": "VOYAGE 1.0/1.0 City Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005283-3",
            "sold": false
          },
          {
            "vehicle": "VOYAGE 1.6/1.6 City  Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005282-5",
            "sold": false
          },
          {
            "vehicle": "VOYAGE C/CL/Fox 1.6",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005066-0",
            "sold": false
          },
          {
            "vehicle": "VOYAGE CL 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005067-9",
            "sold": false
          },
          {
            "vehicle": "VOYAGE COMF/Highli. 1.6 Mi T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005280-9",
            "sold": false
          },
          {
            "vehicle": "VOYAGE Comfortline  1.0 T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005377-5",
            "sold": false
          },
          {
            "vehicle": "VOYAGE Comfortline 1.0 T.Flex 12V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005458-5",
            "sold": false
          },
          {
            "vehicle": "VOYAGE Evidence 1.6 Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005378-3",
            "sold": false
          },
          {
            "vehicle": "VOYAGE GL 1.8 4p (Argentino)",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005069-5",
            "sold": false
          },
          {
            "vehicle": "VOYAGE GL/ Special 1.6/ 1.8",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005068-7",
            "sold": false
          },
          {
            "vehicle": "VOYAGE I MOTION  Trendline 1.6 T.Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005381-3",
            "sold": false
          },
          {
            "vehicle": "VOYAGE I MOTION 1.6 Mi Total Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005311-2",
            "sold": false
          },
          {
            "vehicle": "VOYAGE I MOTION COMF/Hghli.1.6 T.Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005313-9",
            "sold": false
          },
          {
            "vehicle": "VOYAGE I MOTION Evidence 1.6 T.Flex 8V ",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005382-1",
            "sold": false
          },
          {
            "vehicle": "VOYAGE I MOTION TREND 1.6 Mi T. Flex 8V",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005312-0",
            "sold": false
          },
          {
            "vehicle": "VOYAGE L/LS/Plus/GLS/S/Sport/Super L.Ang",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005070-9",
            "sold": false
          },
          {
            "vehicle": "VOYAGE SELEÇÃO 1.0 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005360-0",
            "sold": false
          },
          {
            "vehicle": "VOYAGE SELEÇÃO 1.6 I MOTION T.Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005362-7",
            "sold": false
          },
          {
            "vehicle": "VOYAGE SELEÇÃO 1.6 Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005361-9",
            "sold": false
          },
          {
            "vehicle": "VOYAGE TREND 1.6 Mi Total Flex 8V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005281-7",
            "sold": false
          },
          {
            "vehicle": "VOYAGE Trendline 1.0 T.Flex 12V 4p",
            "manufacturer": "VW - VolksWagen",
            "fipe_code": "005457-7",
            "sold": false
          },
          {
            "vehicle": "Way 1.6 Total Flex 8V Mec.",
            "manufacturer": "Wake",
            "fipe_code": "074001-2",
            "sold": false
          },
          {
            "vehicle": "Way 1.8 Total Flex 8V Mec.",
            "manufacturer": "Wake",
            "fipe_code": "074002-0",
            "sold": false
          },
          {
            "vehicle": "Buggy Walk Sport 1.6 8V 58cv",
            "manufacturer": "Walk",
            "fipe_code": "061001-1",
            "sold": false
          }
        ]

      );
    });
};
