const cards = [
    {
      id: 'card-1',
      title: 'CARD 1',
    },
    {
      id: 'card-2',
      title: 'CARD 2',
    },
    {
      id: 'card-3',
      title: 'CARD 3',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'List 1',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'List 2',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;