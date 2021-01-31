const items = [
    {
      id: 'figure_1',
      book: 'ENG121',
      section: '1.3',
      number: '1.1',
      title: 'Figure 1.1: The writing situation and context for writing',
      caption: 'Consider the elements of the writing situation and context, such as the characteristics of the audience, the writing circumstances, and the outside environment. Doing so will help you make choices that are appropriate for the occasion.',
      file: 'eng121/Fig1.1.jpg'
    },
    {
      id: 'figure_2',
      book: 'ENG121',
      section: '3.2',
      number: '3.1',
      title: 'Figure 3.1: Narrowing the topc',
      caption: 'This chart shows how to start with a basic idea and plot out additional ideas or subtopics.',
      file: 'eng121/Fig3.1.jpg'
    },
    {
      id: 'figure_3',
      book: 'ENG121',
      section: '3.3',
      number: '3.2',
      title: 'Figure 3.2: Mind map',
      caption: 'A mind map is a visual way to develop and connect your ideas before you write them out in your paper.',
      file: 'eng121/Fig3.2.jpg'
    },
    {
      id: 'figure_4',
      book: 'ENG121',
      section: '4.2',
      number: '4.1',
      title: 'Figure 4.1: Visualizing the body paragraph',
      caption: 'Body paragraphs should feature a topic sentence, claim, evidence, and a warrant.',
      file: 'eng121/Fig4.1.jpg'
    },
    {
      id: 'figure_5',
      book: 'ENG121',
      section: '4.3',
      number: '4.2',
      title: 'Figure 4.2: Components of the conclusion',
      caption: 'A visual for how to prepare your conclusion and express your final thoughts. See Signal the Conclusion for an example of how to apply to a writing sample.',
      file: 'eng121/Fig4.2.jpg'
    },
    {
      id: 'figure_6',
      book: 'ENG121',
      section: '5.1',
      number: '5.1',
      title: 'Figure 5.1: Genre and purpose',
      caption: 'There are significant differences between personal writing, expository writing, persuasive and argumentative writing, and research writing. A single paper can have more than one purpose and thus require multiple approaches.',
      file: 'eng121/Fig5.1.jpg'
    },
    {
      id: 'figure_7',
      book: 'ENG121',
      section: '6.4',
      number: '6.1',
      title: 'Figure 6.1: Argument and persuasive writing',
      caption: 'Argument is a form of persuasive writing that relies on the writer\'s use of evidence and reason to convince the reader of their point of view.',
      file: 'eng121/Fig6.1.jpg'
    },
    {
      id: 'figure_8',
      book: 'ENG121',
      section: '7.2',
      number: '7.1',
      title: 'Figure 7.1: The revising process',
      caption: 'The revision process will take several sessions of rewriting and review. Your goal is to be reflective about your writing and try to imagine yourself as someone else reading your work.',
      file: 'eng121/Fig7.1.jpg'
    }, 
    {
      id: 'figure_9',
      book: 'ENG122',
      section: '',
      number: '1.1',
      title: 'Figure 1.1',
      caption: '',
      file: 'eng122/fig_1.1.jpg'
    },  
    {
      id: 'figure_10',
      book: 'ENG122',
      section: '',
      number: '1.2',
      title: 'Figure 1.2',
      caption: '',
      file: 'eng122/fig_1.2.jpg'
    }, 
    {
      id: 'figure_11',
      book: 'ENG122',
      section: '',
      number: '1.3',
      title: 'Figure 1.3',
      caption: '',
      file: 'eng122/fig_1.3.jpg'
    }, 
    {
      id: 'figure_12',
      book: 'ENG122',
      section: '',
      number: '1.4',
      title: 'Figure 1.4',
      caption: '',
      file: 'eng122/fig_1.4.jpg'
    }, 
    {
      id: 'figure_13',
      book: 'ENG122',
      section: '',
      number: '1.5',
      title: 'Figure 1.5',
      caption: '',
      file: 'eng122/fig_1.5.jpg'
    }, 
    {
      id: 'figure_14',
      book: 'ENG122',
      section: '',
      number: '1.6',
      title: 'Figure 1.6',
      caption: '',
      file: 'eng122/fig_1.6.jpg'
    }, 
    {
      id: 'figure_15',
      book: 'ENG122',
      section: '',
      number: '1.7',
      title: 'Figure 1.7',
      caption: '',
      file: 'eng122/fig_1.7.jpg'
    }, 
    {
      id: 'figure_16',
      book: 'ENG122',
      section: '',
      number: '2.1',
      title: 'Figure 2.1',
      caption: '',
      file: 'eng122/fig_2.1.jpg'
    }, 
    {
      id: 'figure_17',
      book: 'ENG122',
      section: '',
      number: '2.2',
      title: 'Figure 2.2',
      caption: '',
      file: 'eng122/fig_2.2.jpg'
    }, 
    {
      id: 'figure_18',
      book: 'ENG122',
      section: '',
      number: '2.3',
      title: 'Figure 2.3',
      caption: '',
      file: 'eng122/fig_2.3.jpg'
    }, 
    {
      id: 'figure_19',
      book: 'ENG122',
      section: '',
      number: '2.4',
      title: 'Figure 2.4',
      caption: '',
      file: 'eng122/fig_2.4.jpg'
    }, 
    {
      id: 'figure_20',
      book: 'ENG122',
      section: '',
      number: '2.5',
      title: 'Figure 2.5',
      caption: '',
      file: 'eng122/fig_2.5.jpg'
    }, 
    {
      id: 'figure_21',
      book: 'ENG122',
      section: '',
      number: '4.1',
      title: 'Figure 4.1',
      caption: '',
      file: 'eng122/fig_4.1.jpg'
    }, 
    {
      id: 'figure_22',
      book: 'ENG122',
      section: '',
      number: '4.2',
      title: 'Figure 4.2',
      caption: '',
      file: 'eng122/fig_4.2.jpg'
    }, 
    {
      id: 'figure_23',
      book: 'ENG122',
      section: '',
      number: '4.3',
      title: 'Figure 4.3',
      caption: '',
      file: 'eng122/fig_4.3.jpg'
    }, 
    {
      id: 'figure_24',
      book: 'ENG122',
      section: '',
      number: '4.4',
      title: 'Figure 4.4',
      caption: '',
      file: 'eng122/fig_4.4.jpg'
    }, 
    {
      id: 'figure_25',
      book: 'ENG122',
      section: '',
      number: '4.5',
      title: 'Figure 4.5',
      caption: '',
      file: 'eng122/fig_4.5.jpg'
    }, 
    {
      id: 'figure_26',
      book: 'ENG122',
      section: '',
      number: '4.6',
      title: 'Figure 4.6',
      caption: '',
      file: 'eng122/fig_4.6.jpg'
    }, 
    {
      id: 'figure_27',
      book: 'ENG122',
      section: '',
      number: '4.7',
      title: 'Figure 4.7',
      caption: '',
      file: 'eng122/fig_4.7.jpg'
    }

    
  ];

  export default items;