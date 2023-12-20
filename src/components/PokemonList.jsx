import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';
import { PokemonPage } from '../pages/PokemonPage';

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	const handlePokemonClick = (id) => {
		// Al hacer clic en una tarjeta de Pokémon, actualiza el estado con el ID del Pokémon
		setSelectedPokemon(id);
	  };
	return (
		<div className='container-selected'>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon '>
				{filteredPokemons.length ? (
				  <>
					{filteredPokemons.map((pokemon) => (
					  <div
						key={pokemon.id}
						onClick={() => handlePokemonClick(pokemon.id)}
					  >
						<CardPokemon pokemon={pokemon} />
					  </div>
					))}
				  </>
				) : (
				  <>
					{allPokemons.map((pokemon) => (
					  <div
						key={pokemon.id}
						onClick={() => handlePokemonClick(pokemon.id)}
					  >
						<CardPokemon pokemon={pokemon} />
					  </div>
					))}
				  </>
				)}
			  </div>
			)}
			{selectedPokemon && <PokemonPage pokemonId={selectedPokemon} />}
		</div>
	);
};