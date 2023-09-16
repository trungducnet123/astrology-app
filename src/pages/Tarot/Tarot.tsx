import useFetch from '../../hooks/useFetch.tsx';
import TarotCard from '../../components/TarotCard/TarotCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/TarotProps.ts';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }
  console.log(cards);

  return (
    <div>
      <h2>Tarot Cards</h2>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="card__list">
        {cards?.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}