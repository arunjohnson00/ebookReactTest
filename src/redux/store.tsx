import { createStore } from "redux";

const initialValues: any = {
  data: [
    {
      title: "Arun Johnson",
      id: 1,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
    },
  ],

  tabChange: 1,
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
      console.log(action.payload);

      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "initialSetup":
      return {
        ...state,
        data: [state.data[0], ...action.payload],
      };

    case "Edit":
      const filterObjArray = state.data.filter(
        (ele: any) => ele.id !== action.payload.id
      );

      const extractedArrayNew: any = [...filterObjArray, action.payload];

      return {
        ...state,
        data: extractedArrayNew,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
