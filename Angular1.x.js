(function () {
var pokemons = [
	{
		name: 'Pikachu',
		price: 20.30,
		description: 'Cutest pokemon Pokemon!',
		image: 'http://i811.photobucket.com/albums/zz32/lockb1992/04.jpg',
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Charmander',
		price: 40.20,
		description: 'A firey Pokemon',
		image: 'http://i838.photobucket.com/albums/zz306/kmyeakel/charmander/0000132.jpg',
		canPurchase: false,
		soldOut: false
	},
	{
		name: 'Ivysaur',
		price: 48.30,
		description: 'A leafy pokemon',
		image: 'http://i847.photobucket.com/albums/ab31/JuliesPokedex/PROJECT%20POKEDEX/I%20s/Ivysaur/5914868.jpg',
		canPurchase: true,
		soldOut: false
	}
];

var app = angular.module('pokemonShop', []); // depencies go into array

app.controller('ShopController', function () { // name of controller in capital case
	this.pokemons = pokemons;
});

}) ();