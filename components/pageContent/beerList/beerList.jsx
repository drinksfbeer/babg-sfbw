const BeerList = () => {
  const beerList = [{
    brewery: '101 North Brewing Co',
    image: '../../static/images/101brewering.png',
    beers: [
      {
        name: 'Two Hops For Sister Sara',
        style: 'Double IPA',
        subStyle: 'First-time Release, One Off, Limited/Rare | Dry Hopped',
        abv: '8',
        ibu: '65',
        description: 'Two Hops For Sister Sara, a Double IPA brewed with Mosaic and Citra hops, was created specifically for SF Beer Week 2018, and is the first of three beers celebrating our immense respect for legendary actor and director Clint Eastwood.',
        pairing: 'Pairs well with cowboy boots and a love for life.',
      },
      {
        name: 'Indigo Blue Agave Pale Ale',
        style: 'Pale Ale',
        subStyle: 'Year round | Dry Hopped',
        abv: '6',
        ibu: '49',
        description: 'Indigo Pale Ale is a fresh approach to a traditional style in which Blue Agave Nectar creates a unique malt profile, one that is complemented by a mandarin ho character derived from the single experimental hop ADHA 484.',
        pairing: 'Your favorite taco truck.',
      },
    ],
  }];
  return (
    beerList.map(brewery => (
      <div className="beerList">
        <img src={brewery.image} alt={brewery.brewery} />
        <div className="beerListBreweryName">{brewery.brewery}</div>
        <div className="breweryBeerList">
          <div>Beers</div>
          {
            brewery.beers.map(beer => (
              <div>{beer.name}</div>
            ))
          }
        </div>
      </div>
    ))
  );
};

export default BeerList;
