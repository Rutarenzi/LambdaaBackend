import responses from "../default.responses";


const Product ={
  "/api/v1/Product": {
    post: {
      tags: ['Product'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "Create Product",
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
                  name: "Nike shirt",
                  image: "https://image.example.com/online-image/image.jpg",
                  country: "USA",
                  categoryId:"1",
                  description:"Provide enought description for your product",
                  tag:"black",
                  
              }
          },
          
      },
      ],
      responses,
    },
      get:{
          tags:['Product'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'Get all your orders',
          consumes: ['application/json'],
          responses
  
        }
  },
  "/api/v1/Product/{id}": {
    put: {
      tags: ['Product'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "update product",
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description:"This must be Your product id",
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
                name: "Nike shirt",
                image: "https://image.example.com/online-image/image.jpg",
                country: "USA",
                categoryId:"1",
                description:"Provide enought description for your product",
                tag:"black",
                status: "active"
                
            }
          },
          
      },
      ],
      responses,
    },
    get: {
      tags: ['Product'],
      security: [
        {
          JWT: [],
        },
      ],
      summary: "Get Single product",
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description:"This must be Your product id",
          schema: {
            type: 'number',
      }}
      ],
      responses,
    },
  },
}

export default Product;     