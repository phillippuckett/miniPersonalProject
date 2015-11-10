var app = angular.module('myApp');

app.service('mainService', function(){
	var myData = [	
	// Proteins 

	{
		type: 'Carbohydrates',
		desc: 'Carbohydrates Carbohydrates may be classified as monosaccharides, disaccharides, or polysaccharides depending on the number of monomer (sugar) units they contain. They constitute a large part of foods such as rice, noodles, bread, and other grain-based products. Monosaccharides, disaccharides, and polysaccharides contain one, two, and three or more sugar units, respectively. Polysaccharides are often referred to as complex carbohydrates because they are typically long, multiple branched chains of sugar units. Traditionally, simple carbohydrates are believed to be absorbed quickly, and therefore to raise blood-glucose levels more rapidly than complex carbohydrates. This, however, is not accurate.[54][55][56][57] Some simple carbohydrates (e.g., fructose) follow different metabolic pathways (e.g., fructolysis) that result in only a partial catabolism to glucose, while, in essence, many complex carbohydrates may be digested at the same rate as simple carbohydrates.[58] Glucose stimulates the production of insulin through food entering the bloodstream, which is grasped by the beta cells in the pancreas. Dietary fiber: Dietary fiber is a carbohydrate that is incompletely absorbed in humans and in some animals. Like all carbohydrates, when it is metabolized it can produce four Calories (kilocalories) of energy per gram. However, in most circumstances it accounts for less than that because of its limited absorption and digestibility. Dietary fiber consists mainly of cellulose, a large carbohydrate polymer which is indigestible as humans do not have the required enzymes to disassemble it. There are two subcategories: soluble and insoluble fiber. Whole grains, fruits (especially plums, prunes, and figs), and vegetables are good sources of dietary fiber. There are many health benefits of a high-fiber diet. Dietary fiber helps reduce the chance of gastrointestinal problems such as constipation and diarrhea by increasing the weight and size of stool and softening it. Insoluble fiber, found in whole wheat flour, nuts and vegetables, especially stimulates peristalsis – the rhythmic muscular contractions of the intestines, which move digesta along the digestive tract. Soluble fiber, found in oats, peas, beans, and many fruits, dissolves in water in the intestinal tract to produce a gel that slows the movement of food through the intestines. This may help lower blood glucose levels because it can slow the absorption of sugar. Additionally, fiber, perhaps especially that from whole grains, is thought to possibly help lessen insulin spikes, and therefore reduce the risk of type 2 diabetes. The link between increased fiber consumption and a decreased risk of colorectal cancer is still uncertain.'
	}

	// Lipids
	
	// Vitamins
	
	// Minerals
	
	// Dihyrogen Oxide
	
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