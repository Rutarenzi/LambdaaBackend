import responses from "../default.responses";


const Category ={
  "/api/v1/Category": {
    post: {
      tags: ['Category'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "Create Category",
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          in: 'body',
          name: "Create",
          required: true,
          schema: {
              example: {
                  categoryName: "MEN SHOES",
                  imageCat: "https://image.example.com/online-image/image.jpg",
                  description: "Men shoes Category"
              }
          },
          
      },
      ],
      responses,
    },
      get:{
          tags:['Category'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'Get all your Categories',
          consumes: ['application/json'],
          responses
  
        }
  },
  "/api/v1/Category/{id}": {
    put: {
      tags: ['Category'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "update category",
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description:"This must be Your Category id",
          schema: {
            type: 'number',
          },
        },
        {
          in: 'body',
          name: "update",
          required: true,
          schema: {
              example: {
                  categoryName: "MEN SHOES",
                  imageCat: "https://image.example.com/online-image/image.jpg",
                  description: "Men shoes Category",
                  status: "active"
              }
          },
          
      },
      ],
      responses,
    },
    get: {
      tags: ['Category'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "update category",
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description:"This must be Your Categories id",
          schema: {
            type: 'number',
      }}
      ],
      responses,
    },
  },
}

export default Category;