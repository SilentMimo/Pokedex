
import { PokemonProvider } from './context/PokemonProvider';
import { AppRouter } from './routes/AppRouter'

export const App = () => {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App;


