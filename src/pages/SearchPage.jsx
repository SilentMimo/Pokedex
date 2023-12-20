import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonPage } from './PokemonPage';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons,valueSearch } = useContext(PokemonContext);
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);


	const handlePokemonClick = (id) => {
		setSelectedPokemon(id);
	  };

	return (
		<>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados: {valueSearch}
			</p>
			<div className='container-selected'>
			<div className='card-list-pokemon'>
				{filteredPokemons.map(pokemon => (
				<div
				  key={pokemon.id}
				  onClick={() => handlePokemonClick(pokemon.id)}
				>
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				</div>
				))}
			</div>
				{selectedPokemon && <PokemonPage pokemonId={selectedPokemon} />}
			</div>
		</>
	);
};
