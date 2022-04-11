export const getComments = async () => {
    return [
      {
        id: "1",
        topic:"topic01",
        body: "The main reason many people don't like American media is because most broadcasting agencies are owned by major corporations who have their own agendas. You will never find an agenda free news source. Fox news channel for example is owned by a company that is very Republican so its news program reflects that. Other news media like CNN has agreements with the US government to allow CNN special access to troops and other government areas so long as the news doesn't report certain stories. That is why Snowden took his leaked documents outside the US. He didn't want the media to bury it.",
        username: "Hollins",
        userId: "1",
        parentId: null,
        createdAt: "2022-03-16T16:00:33.010+02:00",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
      },
      {
        id: "2",
        topic:"topic01",
        body: "The article about the top 10 schools in the northeast was extremely informative!",
        username: "Erica",
        userId: "2",
        parentId: null,
        createdAt: "2022-03-17T16:00:33.010+02:00",
        image: "https://imageio.forbes.com/specials-images/imageserve/5db4c7b464b49a0007e9dfac/Photo-of-Maltese-dog/960x0.jpg?fit=bounds&format=jpg&width=960"
      },
      {
        id: "3",
        topic:"topic01",
        body: "Nope, it definetly handled the topics with a professional touch",
        username: "Vijay",
        userId: "2",
        parentId: null,
        createdAt: "2022-04-16T23:00:33.010+02:00",
        image: "https://miro.medium.com/max/1400/1*rIkmavUeqyRySwlQdA9kKg.jpeg  "
      },
      {
        id: "4",
        topic:"topic01",
        body: "Yes, I agree it was fantastic",
        username: "Shrusti",
        userId: "2",
        parentId: null,
        createdAt: "2022-05-16T23:00:33.010+02:00",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      }, {
        id: "5",
        topic:"topic01",
        body: "YO THIS IS THE COMMENT",
        username: "ME",
        userId: "1",
        parentId: null,
        createdAt: "2022-05-16T23:00:33.010+02:00",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      },
    ];
  };

  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Hollins",
      createdAt: new Date().toISOString(),
    };
  };

  export const deleteComment = async () => {
    return {};
  };