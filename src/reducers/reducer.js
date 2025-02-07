export const initialState = {
     
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };
      
      export const reducer = (state = initialState, action) => {
          switch(action.type){
              case "ADD_ITEM":
                  return {
                      ...state,
                      additionalPrice: action.payload.price + state.additionalPrice,
                      car: {
                          ...state.car,
                          features: [...state.car.features, action.payload],
                          price: state.car.price + action.payload.price
                      },
                      additionalFeatures: state.additionalFeatures.filter(item =>{
                          return item.id !== action.payload.id;
                      })
                  }
               case "REMOVE_ITEM":
                   console.log("It works!")
                   return {
                       ...state,
                       additionalPrice: action.payload.price - state.additionalPrice,
                       car: {
                           ...state.car,
                           features: state.car.features.filter(item =>{
                            return item.id !== action.payload.id;
                           }),
                           price: state.car.price - action.payload.price
                       },
                       additionalFeatures: [...state.additionalFeatures, action.payload]
                   }
                   
              default:
                  return state
          }
      }
    