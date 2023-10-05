import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBreads(): string[][] {
    return [
      [
        'Aish merahrah',
        'Made with fenugreek seeds and maize; dough allowed to ferment overnight, then flattened and baked.',
      ],
      ['Anadama bread', 'A sweet, cornmeal- and molasses-based bread.'],
      [
        'Anpan',
        'Filled, usually with red bean paste, or with white beans, sesame, or chestnut.',
      ],
      [
        'Appam',
        'Bowl-shaped thin pancakes, made of fermented rice flour, shaped via cooking utensil, neutral taste, served usually with spicy condiment or curry, for breakfast or dinner.',
      ],
      [
        'Arboud',
        'Unleavened bread made from flour, water and salt, baked in the embers of a fire. Traditional among Arab Bedouin',
      ],
      [
        'Arepa',
        'Dish made of ground corn dough or cooked corn flour, similar to Mesoamerican tortilla and Salvadoran pupusa.',
      ],
      [
        'Baba',
        'Round, thick bread, often with various sweet or savoury fillings.',
      ],
      ['Babka', 'Sweet, braided bread popular among the Jewish diaspora.'],
      [
        'Bagel',
        'Ring-shaped, usually with a dense, chewy interior; usually topped with sesame or poppy seeds baked into the surface. May be boiled in lye.',
      ],
      [
        'Baguette',
        "Thin elongated loaf, made of water, flour, yeast, and salt, instantly recognizable by slits cut in top surface before baking to allow gas expansion. Can be cut to resemble the shape of wheat and called Pain d'épi.",
      ],
      [
        'Bakarkhani',
        'Thick, sweet or spicy flatbread made of Dough, ghee, milk, sugar. Mostly consumed as snacks and also in iftar.',
      ],
      [
        'Balep korkun',
        'Round, flat, easy to make, made of barley flour, water, baking powder, cooked in frying pan; Balep Korkun is a type of bannock.',
      ],
      ['Bammy', 'A bread of cassava, baked on a griddle.'],
      [
        'Banana bread',
        'Dense, made with mashed bananas, often a moist, sweet, cake-like quick bread, but some recipes are traditional yeast breads.',
      ],
      [
        'Bannock',
        'Modern types are made with baking soda or baking powder as leavening agent, giving a light, airy texture. May be baked or fried. Some Native American peoples in North America prepare their own versions of bannock.',
      ],
      [
        'Bara Brith',
        'Sometimes termed "speckled bread", raisins, currants and candied peel are added to dough.',
      ],
      [
        'Barbari bread',
        'Invented by the Barbar tribes of Iran and Northern Afghanistan.',
      ],
      [
        'Barmbrack',
        'Sweeter than sandwich bread, but less rich than cake, contains sultanas and raisins to add texture.',
      ],
      [
        'Barm cake',
        'Soft sweet roll. Derived from ancient pre-Roman leavening process using barm. Pictured is barm cake with black pudding and melted butter.',
      ],
      [
        'Bastone',
        'Shorter and thicker than a French baguette. Sometimes with sesame seed garnish.',
      ],
      ['Bazin', 'Prepared with barley, water and salt.'],
      [
        'Bazlama',
        'Flat and circular, average thickness of 2 cm, usually eaten fresh.',
      ],
      [
        'Beer bread',
        'Made with regular beer or other types such as stout or dark beer.',
      ],
      [
        'Belgian waffle',
        'A type of waffle popular in North America and in Belgium. Compared to the standard American waffle, it is identified by its larger size, lighter batter, larger squares, and a higher grid pattern that forms deep pockets.',
      ],
      [
        'Bhakri',
        'Usually grayish in colour, made of cereals and thus high in protein and fibre like Jowar, Bajra or Maize.',
      ],
      [
        'Bialy',
        'Similar to a bagel, but instead of a hole it has only a dimple on top, which is filled with a bit of butter and diced onion or garlic. Known as a cebularz in Poland.',
      ],
      [
        'Bing',
        'Similar to a Mexican tortilla, only much thicker; usually cooked on a griddle.',
      ],
      [
        'Biscotti',
        'Italian almond biscuits that are twice-baked, oblong-shaped, dry, crunchy, and may be dipped in a drink, traditionally Vin Santo.',
      ],
      [
        'Biscuit',
        'This refers to the North American quick bread, generally light and fluffy (similar to a scone). Elsewhere the term biscuit means a small baked product that would be called either a "cookie" or a "cracker" in the United States and most of English-speaking Canada.',
      ],
      [
        'Black bread',
        'Made of rye grain, usually dark colored and high fiber, ranges from crispy in texture to dense and chewy.',
      ],
      [
        'Blaa',
        'Doughy, white bread bun (roll) specialty; particularly associated with Waterford, Ireland. Currently made in Waterford and County Kilkenny, and was historically made in Wexford.',
      ],
      [
        'Bolani',
        'Has a very thin crust and can be stuffed with a variety of ingredients, such as potatoes, spinach, lentils, pumpkin, or leeks.',
      ],
      ['Bolo do caco', 'A circular flatbread made with sweet potatoes.'],
      [
        'Borlengo',
        'A thin crepe now made with milk, eggs (sometimes omitted), flour and salt. Originally a food eaten by the poor and made with flour and water.',
      ],
      [
        'Borodinsky',
        'A dark brown sourdough rye bread, traditionally sweetened with molasses and flavored with coriander and caraway seeds.',
      ],
      ['Boule', 'From the French for "ball".'],
      [
        'Bread roll',
        'Short, oblong or round, served usually before or with meals, often with butter.',
      ],
      ['Breadstick', 'A dry bread formed into sticks, served as an appetizer.'],
      [
        'Brioche',
        'A highly enriched bread, noted for its high butter and egg content, commonly served as a component of French desserts. Made in loaves or buns.',
      ],
      [
        'Broa',
        'Unlike the cornbread typical of the southern United States, made of mix of cornmeal and wheat or rye flour, leavened with yeast rather than baking powder or baking soda.',
      ],
      [
        'Brown bread',
        'Made with a significant amount of whole grain flour, usually rye or wheat; sometimes made with molasses or coffee. Also known as "wholemeal bread".',
      ],
      [
        'Bublik',
        'Made from yeast-leavened wheat dough that commonly contains milk, butter, and egg whites and is rather sweet.',
      ],
      ['Canadian White', 'A thick, protein-rich sliced sandwich bread.'],
      [
        'Carrot bread',
        'May be prepared with grated carrot[2] or carrot juice.[3] Pictured is a vegan carrot bread with raisins.',
      ],
      [
        'Česnica',
        'Baked during Christmas season with a solid silver coin in the dough for good luck; the family member whose bread piece contains the coin is viewed as the most fortunate for that year.',
      ],
      [
        'Challah',
        'Braided, made with wheat flour, yeast, oil/butter and eggs (optional), usually made by Jewish people for the Shabbat.',
      ],
      [
        'Chapati',
        'Thin in size and made with wheat flour; usually eaten with cooked dal (lentil soup), vegetable curry, chicken and mutton curry dishes; pieces are used to wrap around and pick up each bite of the cooked dish.',
      ],
      [
        'Chickpea bread',
        'Made from chickpea flour. The most significant difference of this type of bread is, instead of using regular yeast, they use a yeast made with chickpeas.',
      ],
      [
        'Cholermüs',
        'Also known as a "Swiss pancake", as its name self-explains, a Swiss pancake, or "shredded, fried crepe," is a breakfast pancake with dried fruit filling. This preparation should not be confused with Hollermus, or Holdermus, which is an elderberry mash.',
      ],
      [
        'Christmas wafer',
        'Christmas wafers are a ceremonial bread, usually embossed with images of Christian figures, such as Jesus or the Virgin Mary.',
      ],
      [
        'Ciabatta',
        'Loaf is somewhat elongated, broad and flattish and, like a slipper, should be somewhat collapsed in the middle.',
      ],
      [
        'Coppia Ferrarese',
        'Twisted in shape. Sourdough bread made with flour, lard, olive oil, and malt.',
      ],
      [
        'Cornbread',
        'Made from cornmeal, can be baked or fried, has a golden appearance, usually has a moist interior.',
      ],
      [
        'Cottage loaf',
        'Name refers mostly to shape of loaf, not consistency, loaves are made when larger and smaller roughly spherical balls are squashed together, forming a cottage shape.',
      ],
      [
        'Cozonac',
        'Prepared with milk, yeast, eggs, sugar, butter, raisins, lokum, grated orange or lemon zest, walnuts or hazelnuts, and vanilla or rum flavor.',
      ],
      [
        'Cracker',
        'A baked good typically made from a grain and flour, dough and usually manufactured in large quantities. Crackers (roughly equivalent to savory biscuits in the United Kingdom and the Isle of Man) are usually flat, crisp, small in size (usually 3 inches or less in diameter) and made in various shapes, commonly round or square.',
      ],
      [
        'Crêpe',
        'Extremely thin pancakes, can be stuffed with cheese, asparagus, ham, spinach, eggs, ratatouille, mushrooms, artichoke, or meat products. In Canada, they are often filled with fruit and consumed as a breakfast dish.',
      ],
      [
        'Crisp bread',
        'Very dry, traditionally consists of wholemeal rye flour, salt, and water.',
      ],
      [
        'Crumpet',
        'Usually circular and flat, but thick, with pores in upper surface. This gives it a light, spongy texture.',
      ],
      [
        'Cuban bread',
        'A fairly simple white bread, similar to French bread and Italian bread, but has a slightly different baking method and ingredient list.',
      ],
      [
        'Curry bread',
        'Some Japanese curry is wrapped in a piece of dough, which is coated in flaky bread crumbs, and usually deep fried or baked.',
      ],
      [
        'Damper',
        'Made of a wheat flour, traditionally baked in the coals of a campfire; iconic Australian dish.',
      ],
      ['Dampfnudel', 'Usually dense and moist with a white top surface.'],
      [
        'Dorayaki',
        'Japanese confection, which consists of two small pancake-like patties made from castella, wrapped around a filling of sweet Azuki red bean paste.',
      ],
      [
        'Dosa',
        'Fermented crêpe or pancake made from rice batter and black lentils. It is also served with variety of fillings like potato, coconut, paneer, vegetables, dry fruits etc.',
      ],
      [
        'Eggette',
        'Spherical pancake or ball waffle popular in Hong Kong and Macao. The food item is also referred to as an egg puff, egg waffle, puffle or by its Cantonese name, gai daan jai, and is made from eggs, sugar, flour, and light evaporated milk.',
      ],
      [
        'English muffin',
        'Small, round, thin, usually dusted with cornmeal and served split horizontally, toasted, buttered, eaten as a snack alone or part of meal, usually breakfast or, in the UK and Ireland, early-evening tea. In the UK, usually just called a "muffin".',
      ],
      [
        'Farl',
        'Made by spreading dough on a griddle or skillet in a rough circular shape, then cutting it into four equal pieces and cooking.',
      ],
      ['Filone', 'Similar to a French baguette.'],
      [
        'Flatbread',
        'Bread that is flat in shape, often round in shape. Cooked and eaten in many cultures around the world.',
      ],
      [
        'Flatbrød',
        'Traditional food, usually eaten with fish, salted meats and soups.',
      ],
      [
        'Flatkaka',
        'Soft, round, thin and dark with a characteristic pattern from the frying pan; traditionally fried in small, heavy cast iron frying pans.',
      ],
      [
        'Focaccia',
        'Often punctured or dotted with a knife to relieve surface bubbling.',
      ],
      [
        'Fougasse',
        'Some versions are sculpted or slashed into a pattern resembling an ear of wheat.',
      ],
      ['Graham bread', 'A whole wheat bread inspired by Sylvester Graham.'],
      [
        'Green onion pancake',
        'Savory, non-leavened flatbread folded with oil and minced scallions (green onions). Unlike a true pancake, it is made from dough instead of batter.',
      ],
      [
        'Guokui',
        'Flatbread made from flour with different regional variations, often cookied in a cylindrical oven.',
      ],
      [
        'Hallulla',
        'Round, baked with butter, used for Chilean aliados: cheese and ham sandwich.',
      ],
      ['Hard dough bread', 'A common sandwich bread.'],
      [
        'Hardbrood',
        'Dry white flat bread, consisting of two layers, each as thick as an American pancake, that are connected at the dents.',
      ],
      [
        'Hardtack',
        'Simple type of cracker or biscuit, made from flour, water, and sometimes salt.',
      ],
      [
        'Himbasha',
        'Celebratory, slightly sweet, often served at special occasions, several varieties, most distinctive flavoring is ground cardamom seeds.',
      ],
      [
        'Hot and spicy cheese bread',
        'Made from a brioche-like yeasted dough, mixed with Provolone cheese, Monterey Jack Cheese, and topped with crushed hot red peppers.',
      ],
      [
        'Injera',
        'Risen with a fermented starter with unique, slightly spongy texture, traditionally made of teff flour.',
      ],
      [
        'Johnnycake or Hoecake',
        'Fried gruel made of yellow or white cornmeal, mixed with salt, hot water or milk and cooked in a skillet or oven; sometimes sweetened; attributed to Native Americans.',
      ],
      ["Ka'ak", 'Varies with bread rings and sweets.'],
      ['Kalach', 'Kettlebell-shaped or ring-shaped bread.'],
      [
        'Kamir',
        'Round shape bread made of yeast, flour, butter, egg mixture and banana or tapai.',
      ],
      [
        'Khanom bueang',
        'Common Thai street food, resemble tacos made of rice flour, usually first topped or filled with coconut cream, then sweet or savory toppings: shredded coconut, strips of fried eggs or egg yolks, chopped scallions.',
      ],
      [
        'Khakhra',
        'Common Gujarati food, resembling roti or chapati in its round shape, but crispy and dry.',
      ],
      [
        'Khubz',
        'Medium-size yeast bread made with whole wheat flour, with a hollow pocket in the center.',
      ],
      [
        'Kifli',
        'Similar to a bagel, but the dough starts as a wedge and is rolled into a crescent shape rather than a circle – or sometimes into a straight stick. The kipferl is usually given an egg wash and sprinkled with either poppy seeds or caraway seeds mixed with coarse salt.',
      ],
      ['Kisra', 'Popular fermented bread made of sorghum (durra) or wheat'],
      [
        'Kitcha',
        'Also known as kitta or caccabsaa, a wheat-flour flatbread cooked in a pan. Often used to make fit-fit.',
      ],
      [
        'Kulcha',
        'Made of maida flour dough, mashed potatoes, onion (optional), many spices, rolled into flat round shape, baked until golden brown, usually rubbed with butter, eaten with spicy chickpea curry.',
      ],
      [
        'Lagana',
        'Special kind of azyme bread, baked only on Clean Monday, the first day of Lent. Not to be confused with lasagna.',
      ],
      [
        'Lahoh',
        'Spongy, pancake-like, dough of plain flour, self-raising flour, warm water, yeast, pinch of salt.',
      ],
      [
        'Lángos',
        'Dough patty baked in fat. It is served as a snack with sour cream and cheese as well as with ham, onion and parsley. It is served warm.',
      ],
      [
        'Laobing',
        'Unleavened, sometimes called a "Chinese pancake", very much like Indian chapati, can be size of a large pizza, about one centimeter thick, doughy and chewy texture, made by pan frying thick unleavened batter made of salt, flour, water.',
      ],
      [
        'Lavash',
        'Soft, thin, dough is rolled out flat, flexible when fresh, easier to use for wrap sandwiches, dries fast and grows brittle and hard, for long storage. A traditional dish of Armenian cuisine. In 2014, "lavash, the preparation, meaning and appearance of traditional bread as an expression of culture in Armenia" was inscribed in the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.[4]',
      ],
      [
        'Lefse',
        'Soft, made of potato, milk or cream (or sometimes lard), flour, cooked on a griddle.',
      ],
      ['Limpa', 'A sweet, spiced rye bread.'],
      [
        'Lye roll',
        'Rolls that are coated or immersed in lye before baking, though baking soda or washing soda may be substituted. A more generalized form of the pretzel.',
      ],
      [
        'Malooga',
        'Pizza-like dough (flour, water, yeast, salt) kneaded well, risen, cut to large rounds, stretched, repeatedly warm ghee spread on dough as it is folded, round is stretched into flat round form, baked in tandoor-like oven.',
      ],
      [
        'Maltese bread',
        'Traditional Maltese bread originating in Qormi, often served with tomato paste and olive oil.',
      ],
      ['Mantou', 'Steamed, made of white flour, often slightly sweetened.'],
      [
        'Markook',
        'Usually large, round dough, about 2 feet in diameter, kept thin before baking; can be baked either in a clay oven or on a saj, a domed-convex metal griddle.',
      ],
      ['Marraqueta', 'Kneaded, made with flour, salt, water, and leavening.'],
      [
        'Matzah',
        'Unleavened. Used in Judaism, mainly during Passover. Made in 18 minutes to avoid rising. Consists of 2 ingredients: flour and water.',
      ],
      [
        'Melonpan',
        'Made of enriched dough covered in thin layer of crispy cookie dough. Pineapple bun is a similar sweet bread from Hong Kong, and a Korean variation Soboro bread uses peanut butter in the top layer.',
      ],
      ['Miche', 'Rounded loaf, often sourdough based.'],
      ['Michetta', 'Also known as rosetta, it has a hollow, bulging shape.'],
      [
        'Milk bread',
        'Soft white bread, sometimes baked in loaf tin with circular cross-section; recipe includes milk.[5][6] Called shokupan(食パン) in Japan.',
      ],
      [
        'Mollete',
        'A soft white bread, often served toasted with oil and garlic or lard.',
      ],
      [
        'Mohnflesserl',
        'Traditional Austrian pastry in the form of a braided bun, sometimes sprinkled with poppy seeds or salt, or glazed',
      ],
      [
        'Montreal-style bagel',
        'A bagel that is boiled in honey-sweetened water and then baked in a wood-fired oven. It is smaller and denser and uniquely incorporates egg and honey in the dough.',
      ],
      ['Ngome', 'Made of millet, water, and vegetable oil.'],
      [
        'Obwarzanek krakowski',
        'A ring-shaped bread product made of strands of dough twisted into a spiral that is boiled and sprinkled with salt, poppy seeds, sesame seeds, etc., before being baked',
      ],
      ['Pain de mie', 'Slightly sweet sandwich-style loaf with a dense crumb.'],
      [
        'Palianytsia',
        'Traditionally made with an incision at the top and baked in a hearth',
      ],
      ['Pambazo', 'A bread for making a sandwich of the same name.'],
      [
        'Pan dulce',
        'A bread that is one of the poster treats in Mexico and other Latin American countries.',
      ],
      ['Panbrioche', 'A bread similar to brioche.'],
      [
        'Pandesal',
        'A rounded bread made of flour, eggs, yeast, sugar, and salt.',
      ],
      [
        'Pandoro',
        'Traditional sweet yeast loaf, most popular around Christmas and New Year, typically Veronese, usually shaped like a frustum with 8 pointed-star section, often served dusted with vanilla scented icing sugar made to resemble the snowy peaks of the Italian Alps in winter.',
      ],
      [
        'Pane carasau',
        'Traditional flatbread, thin, crisp, usually in form of a dish half a meter wide, made by taking baked flatbread, splitting it in two sheets that are re-baked, recipe is ancient for shepherds who used to stay far from home for months, can last up to one year if kept dry.',
      ],
      ['Pane di Altamura', 'Made from durum flour, often odd in shape.'],
      [
        'Pane ticinese',
        'White, distinguished by its shape and softness, made of several small sub-loaves or rolls to be broken off by hand, with oil added to dough, which makes it soft.',
      ],
      [
        'Panettone',
        'Fluffy, base round, octagon or star section, takes days to make to cure acidic dough like sourdough, contains candied citrus, raisins, sliced vertically, served with cider or champagne, esp. for Christmas, New Year.',
      ],
      ['Panfocaccia', 'A bread similar to focaccia.'],
      [
        'Papadum or Papad',
        'Thin, crisp, and cracker-like, served with meal, as appetizer, as final item in meal, or as snack, eaten with various toppings: chopped onions, chutney, other dips and condiments.',
      ],
      [
        'Paratha',
        'Unleavened, made by pan frying whole wheat dough, ghee or cooking oil usually in dough and on done loaves, usually stuffed with vegetables or cheese, served with butter, chutney, spicy sauces or curries of meat and vegetables.',
      ],
      [
        'Parotta or Barotta',
        'A common layered flatbread of Southern India. This is not to be confused with the North Indian Paratha. Parottas are usually available in restaurants and road side shops across Kerala, Karnataka, Tamil Nadu, southern Coastal Andhra and the Middle East.',
      ],
      [
        'Paximathia',
        'Also referred to as "rusks", it is prepared with whole wheat, chick pea, or barley flour, and is a common bread in Greece.',
      ],
      ['Peg bread', 'A bread similar to a bread roll'],
      ['Penia', 'Made from sugar, butter, eggs, anise seeds and lemons.'],
      [
        'Pita',
        'Round with inner pocket, as it cooks, steam puffs up dough, as it cools and flattens a pocket is left in the middle. A small version Khobz, is popular in Arab countries.',
      ],
      [
        'Pizza',
        'A round, flattened base of leavened wheat-based dough, topped with tomatoes, cheese, and various other ingredients that is baked at a high temperature, traditionally in a wood-fired oven. First recorded in the 10th century it has become one of the most popular foods in the world and a common fast food item in Europe and North America.',
      ],
      [
        'Piadina',
        'Thin, usually made in Romagna region with white flour, lard or olive oil, salt, water, dough traditionally cooked on terra cotta dish, today flat pans or electric griddles are more common.',
      ],
      [
        'Pistolet',
        'Round and small, traditionally filled with butter and jam for Sunday morning breakfast',
      ],
      [
        'Pogača',
        'Generally made from wheat flour, but barley and sometimes rye may be added. Can be stuffed with potatoes, ground beef, or cheese, and have grains and herbs like sesame, black sesame, dried dill in the dough or sprinkled on top.',
      ],
      [
        'Portuguese sweet bread',
        'Round, made with milk, sugar or honey, subtly sweet lightly textured loaf, traditionally made for Christmas and Easter times (when hard boiled eggs often baked in), today made year round.',
      ],
      [
        'Potato bread',
        'Potato replaces part of usual wheat flour, ratio of potato to wheat varies much, leavened or unleavened, may have many other ingredients baked in, varied cooking methods.',
      ],
      [
        'Potbrood',
        'Produced in a cast-iron pot covered with wood coals, there are a wide range of flavors but is often made with wheat flour and sweetcorn.',
      ],
      [
        'Pretzel',
        'Alemannic knot-shaped lye roll, sometimes soft, sometimes hard, sometimes sweet, sometimes salty.',
      ],
      [
        'Proja',
        'Small muffins or loaves of cornbread, was popular in times of widespread poverty, now is a common everyday meal.',
      ],
      [
        'Pumpernickel',
        'Very heavy, dense, slightly sweet dark pure rye traditionally made with coarsely ground flour; now often made with mixed flour and whole grain berries.',
      ],
      [
        'Pumpkin bread',
        'A type of moist quick bread made with pumpkin. The pumpkin can be cooked and softened before being used or simply baked with the bread; using canned pumpkin renders it a simpler dish to prepare. Additional ingredients include nuts (such as walnuts).',
      ],
      [
        'Puran Poli',
        'Sweet dessert served for special occasions and festivals, stuffing of boiled chickpea lentils, turmeric, sugar, jaggery and spices, cooked on hot griddle, served with milk or ghee and lentil broth soup.',
      ],
      [
        'Qistibi',
        'Roasted flatbreads with various fillings inside. The dough should be non-fermented. The most popular filling is mashed potato, but it may also be ragout or millet. Filling is placed on the one half of the flatbread and is covered by the other half. Later, clarified butter is spread on the flatbreads.',
      ],
      ['Quick bread', 'Leavened with a substance other than yeast.'],
      [
        'Rewena bread',
        'A round loaf made with a potato-based sourdough culture.',
      ],
      ['Rice bread', 'Made from rice flour.'],
      ['Rieska', 'Unleavened, commonly made from barley or potato.'],
      [
        'Röggelchen',
        'Small pastry in the form of a double roll made from two pieces of dough, the content of which is at least 50% rye.',
      ],
      [
        'Roti',
        'Unleavened, made from stone ground wholemeal flour, traditionally named atta flour.',
      ],
      [
        'Roti bolen',
        'Made of baked flour with butter or margarine layers, filled with cheese, durian or banana.',
      ],
      ['Roti buaya', 'Crocodile-shaped bread made of yam or cassava.'],
      [
        'Roti canai',
        'Flatbread dish served with curry. Of South Indian origin, it is popular in various Southeast Asian countries. This bread which is made of dough is usually composed of fat (usually ghee), flour and water; some recipes also include sweetened condensed milk.',
      ],
      [
        'Rugbrød',
        'Made of rye and wheat flour or up to 1/3 whole rye grains may have whole seeds, usual sourdough base, low fat, no oil or flavoring but salt, high fiber, little or no sugar, usually long brown rectangle.',
      ],
      [
        'Rumali Roti',
        'Rumali in Hindi means handkerchief or napkin. This flatbread is thin and soft like a handkerchief. It is made with maida flour (highly refined wheat flour).',
      ],
      [
        'Ryaninjun',
        'Brown bread made from rye flour and cornmeal and baked on oak or cabbage leaves, made by the Puritans in New England during the seventeenth and eighteenth centuries. The name is derived from "rye and Indian".[7]',
      ],
      [
        'Rye bread',
        'Made of various fractions of rye grain flour, color light to dark via flour used and if colors added, usually denser and higher fiber than many common breads, darker color, stronger flavor. Jewish rye bread is popular in Ashkenazi Jewish cuisine, and topped with caraway. In Germany, breads with a mixture of rye and other grains is a Mischbrot.',
      ],
      [
        'Sacramental bread',
        'Ceremonial bread used in the Christian Eucharist ritual.',
      ],
      [
        'Saj bread',
        'Daily staple in many Middle Eastern countries, especially in Lebanon',
      ],
      [
        'Samoon',
        'It is baked in traditional stone ovens, like pizza. Usually served with a variety of foods such as Hummus, Kebab, Shawarma.',
      ],
      [
        'Salt-rising bread',
        'Made of wheat flour, starter of liquid (water or milk), either corn, potatoes, or wheat, and some other minor ingredients; result has dense crumb and positive cheese-like flavor.',
      ],
      [
        'Sangak',
        'Plain, rectangular, or triangular, whole wheat sourdough, usually two types: generic no toppings and costlier topped with poppy or sesame seeds.',
      ],
      [
        'Scone',
        'Small quick bread usually made of wheat, barley or oatmeal, baking powder leavening.',
      ],
      ['Sgabeo', 'Cut into strips, fried and salted.'],
      [
        'Shaobing',
        'Thick, baked, layered flatbread which may have sweet or savory stuffings.',
      ],
      [
        'Shirmal',
        'Saffron-flavored traditional flatbread, usually made with milk instead of water.',
      ],
      [
        'Shoti',
        'Made of white flour and shaped like a canoe rowboat baked in tandoor.',
      ],
      [
        'Soda bread',
        'A variety of quick bread traditionally made in a variety of cuisines in which sodium bicarbonate (otherwise known as baking soda) is used as a raising agent rather than the more common yeast. The ingredients of traditional soda bread are flour, bread soda, salt, and buttermilk. The buttermilk in the dough contains lactic acid, which reacts with the baking soda to form tiny bubbles of carbon dioxide. Other ingredients can be added such as raisins, egg or various nuts.',
      ],
      [
        'Sourdough bread',
        'A bread product made by a long fermentation of dough using naturally occurring lactobacilli and yeasts. In comparison with breads made quickly with cultivated yeast, it usually has a mildly sour taste because of the lactic acid produced by the lactobacilli.',
      ],
      ['Spelt bread', 'Made mainly with spelt flour or coarse meal.'],
      [
        'Sprouted bread',
        'A type of bread made from sprouted (germinated) whole grains',
      ],
      [
        'Taboon bread',
        'Taboon is a wrap used in many cuisines. This type of flatbread is traditionally baked in a Tabun oven and eaten with different fillings.',
      ],
      [
        'Taftan',
        'Leavened flour bread with saffron and small amount of cardamom powder baked in a clay oven.',
      ],
      [
        'Tandoor bread',
        'A type of bread baked in a clay oven that is called a tandoor.',
      ],
      ['Teacake', 'Fruited sweet bun usually served toasted and buttered.'],
      [
        'Telera',
        'A soft, white bread generally used for making sandwiches called tortas.',
      ],
      [
        'Texas toast',
        'A type of packaged white bread (not sold toasted as the name implies) which is sold sliced at double the typical thickness of most sliced breads. While it can be used in the same manner as ordinary bread slices such as in sandwiches, it is especially useful for dishes involving liquids, such as barbecue sauce, or where extra thickness can improve the product, such as French toast.',
      ],
      [
        'Tiger bread',
        "Rice paste bread made with sesame oil and with a pattern baked into the top made by painting rice paste onto the surface prior to baking. The paste dries and cracks during the baking process, creating a two-colour effect similar to a tiger's markings, hence the name.",
      ],
      [
        'Tortilla',
        "Thin flatbread made from finely ground wheat flour. Originally derived from the corn tortilla (tortilla in Spanish means 'small torta', or 'small cake'), a bread of maize which predates the arrival of Europeans to the Americas, the wheat flour tortilla was an innovation after wheat was brought to the New World from Spain while this region was the colony of New Spain. It is made with an unleavened, water based dough, pressed and cooked like corn tortillas.",
      ],
      [
        'Tsoureki',
        'Sweet bread formed of braided strands of dough; may also be savory.',
      ],
      [
        'Ttongppang',
        'Korean bread sold at street markets. It is filled with red bean paste with walnut kernel and sold for about ₩1,000.',
      ],
      [
        'Tunnbröd',
        'Soft (used as wrap for other food), or crisp (used with fermented herring), many variants depending on type of grain (any mix of wheat, barley, rye), leavening agent (or lack), and rolling pin.',
      ],
      [
        'Uttapam',
        'Fermented crêpe or pancake made from rice batter and black lentils garnished with onion, chilli, capsicum, coriander, tomato and cheese. It is served with chutney or sambar',
      ],
      [
        'Vánočka',
        'Baked traditionally at Christmastime. It is rich in eggs and butter, making it similar to brioche. Lemon rind and nutmeg add color and flavor; the dough can also contain raisins and almonds, and is braided like challah.',
      ],
      [
        'Vienna bread',
        'Produced from a process using high milling of Hungarian grain, cereal press-yeast for leavening.',
      ],
      ['Wagafi bread', 'A flat, thin bread.'],
      [
        'White bread',
        'Made from wheat flour from which the bran and the germ have been removed through a process known as milling.',
      ],
      [
        'Whole wheat bread',
        'Made using flour which is partly or entirely made from whole or almost whole wheat grains. An Estonian version is the Sepik.',
      ],
      [
        'Wotou',
        'Cone-shaped steamed bread made from cornmeal, originating in northern China.',
      ],
      [
        'Yufka',
        'Thin, round, unleavened, similar to lavash, about 18 inches (46 cm) in diameter, usually made of wheat flour, water, table salt. The lower the moisture content, the longer the shelf life. Not to be confused with yufka meaning filo.',
      ],
      [
        'Zopf',
        'Made of white flour, milk, egg, butter, yeast, dough is braided, brushed with egg yolk before baking, forming a gold crust.',
      ],
      [
        'Zwieback',
        'Crisp, sweetened bread, made with eggs and baked twice. It is sliced before it is baked a second time, which produces crisp, brittle slices that closely resemble melba toast.',
      ],
    ];
  }
}
