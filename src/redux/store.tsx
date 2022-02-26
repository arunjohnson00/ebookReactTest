import { createStore } from "redux";


const localData = JSON.parse(localStorage.getItem('data') || '{}');


const demoData=[
  {
      "title": "Arun Johnson",
      "id":1,
      "content": {
          "blocks": [
              {
                  "key": "smmr",
                  "text": "React Test",
                  "type": "unstyled",
                  "depth": 0,
                  "inlineStyleRanges": [],
                  "entityRanges": [],
                  "data": {}
              }
          ],
          "entityMap": {}
      }
  }
]




const initialValues:any = {
  data:[Object.keys(localData).length === 0?demoData:localData],

  tabChange:Object.keys(localData).length === 0? 1:localData[0].id,
  tabActive: "list",

};

const counterReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    case "tabClick":
      return {
        ...state,
        tabChange: action.id,
      };

    case "tabChange":
      return {
        ...state,
        tabChange: action.id,
      };

    case "tabActive":
      return {
        ...state,
        tabActive: action.tabClick,
      };

      case "Submit":
        console.log(action.payload)
           
            return {
    
            ...state,
            data: [...state.data, action.payload]
    
        };

    default:
      return state;
  }
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(counterReducer);

export default store;
