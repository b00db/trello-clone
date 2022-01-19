const cards = [
    {
      id: 'card-1',
      content: 'CARD 1',
    },
    {
      id: 'card-2',
      content: 'CARD 2',
    },
    {
      id: 'card-3',
      content: 'CARD 3',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'List 1',
        cards,
      },
    },
    listIds: ['list-1'],
  };
  
  export default data;