var app = angular.module('myApp');

app.service('mainService', function(){

/* THE SECTION BELOW IS UTILIZED FOR THE BASICS PORTION OF MYAPP*/
	var myData = [	 
	{
		type: 'Proteins',
		desc: 'Proteins are structural materials in much of the animal body. They also form the enzymes that control chemical reactions throughout the body. Each protein molecule is composed of amino acids. The body requires amino acids to produce new proteins and to replace damaged proteins. For all animals, some amino acids are essential (an animal cannot produce them internally) and some are non-essential (the animal can produce them from other nitrogen-containing compounds). About twenty amino acids are found in the human body, and about ten of these are essential and, therefore, must be included in the diet. A diet that contains adequate amounts of amino acids (especially those that are essential) is particularly important in some situations: during early development and maturation, pregnancy, lactation, or injury (a burn, for instance). A complete protein source contains all the essential amino acids; an incomplete protein source lacks one or more of the essential amino acids.'
	},
	
	{
		type: 'Carbohydrates',
		desc: 'Carbohydrates are storage sugars, that can be utilized by the body to produce energy. They can be found in a variety of whole grains, fruits, and vegetables. Dietary fibers are structural sugars that are not easily digested by humans, and reduce the chance of gastrointestinal problems such as constipation and diarrhea by increasing the weight and size of stool and softening it. Two subcategories are: soluble and insoluble fiber. Insoluble fiber, stimulates the rhythmic muscular contractions of the intestines, which move digesta along the digestive tract. Soluble fiber, dissolves in water in the intestinal tract to produce a gel that slows the movement of food through the intestines.'
	},

	{
		type: 'Lipids',
		desc: 'A molecule of dietary fat typically consists of several fatty acids (containing long chains of carbon and hydrogen atoms), bonded to a glycerol. They are typically found as triglycerides (three fatty acids attached to one glycerol). There are nine kilocalories in each gram of fat. Some fatty acids, in addition to providing energy, play an important role in our body\'s immunity. Saturated and some trans fats are typically solid at room temperature, while unsaturated fats are typically liquids. Trans fats are very rare in nature, and have been shown to be highly detrimental to human health, but have properties useful in the food processing industry, such as rancidity resistance. If needed most fatty acids can be produced by the body, usually by using energy to covert other fatty acids in the body into needed fatty acids. In humans, an apporpriate balance of essential fatty acids—omega-3 and omega-6 is required to maintain good health. Omega fatty acids are used to create hormones in the body, in the structuring of body cells, and is crucial in maintaining good hormonal balance in the body.'
	},
	
	{
		type: 'Vitamins',
		desc: 'Vita Minerales' 
	},
	
	{
		type: 'Minerals',
		desc: 'Minerales de Terra' 
	},
	
	{
		type: 'Dihydrogen-Oxide',
		desc: 'Di-Acqua Aero' 
	},
	
/* THE SECTION BELOW IS UTILIZED FOR THE FACTS PORTION OF MYAPP*/
	{
		type: 'Nutrition Facts of Food',
		desc: 'Here is where a "Nutrition Fact" database will eventually get plugged in'
	}
	
	];
	
this.getData = function(type) {
	for (var i = 0; i < myData.length; i++) {
		if (myData[i].type === type) {
			console.log(myData[i].type);
			return myData[i];
		}
	}	
}

});