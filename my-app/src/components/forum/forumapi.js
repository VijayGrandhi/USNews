export const getComments = async () => {
    return [
      {
        id: "1",
        body: "I thought the article did not highlight some of the important issues",
        username: "Hollins",
        userId: "1",
        parentId: null,
        createdAt: "2022-03-16T16:00:33.010+02:00",
      },
      {
        id: "2",
        body: "The article about the top 10 schools in the northeast was extremely informative!",
        username: "Erica",
        userId: "2",
        parentId: null,
        createdAt: "2022-03-17T16:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Nope, it definetly handled the topics with a professional touch",
        username: "Vijay",
        userId: "2",
        parentId: "1",
        createdAt: "2022-04-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Yes, I agree it was fantastic",
        username: "Shrusti",
        userId: "2",
        parentId: "2",
        createdAt: "2022-05-16T23:00:33.010+02:00",
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