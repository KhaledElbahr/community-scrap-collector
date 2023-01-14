import { HAS_LOGED } from "./actiontypes";

const initialState = {
  has_loged: {
    id: "2960150400050",
    type: "super_admin",
    name: "saad",
    email: "saad_daaw25@gmail.com",
    password: "14g38!weFew#Moe",
    city: "cairo",
    zone: "nasr city",
    address: "Apt 3, Buliding No 6, wafeek.St, nasr city, cairo",
    tel: "01014037844",
    landline: null,
    class: "C",
    badge: "green saver",
    rank: "150",
    points: "70",
    contactPersonalName: "saad",
    addressConfirmImage: null,
    statusVerification: "verfied",
    requests: [
      {
        admin_Id: "2980150400040",
        req_Id: 0,
        req_date: "26/07/2022",
        time_slot: "02:00AM - 03:00AM",
        status: "pending",
        quantity: 9.5,
      },
      {
        admin_Id: "2980150400040",
        req_Id: 1,
        req_date: "24/06/2022",
        time_slot: "06:00PM - 09:00PM",
        status: "completed",
        quantity: 12,
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HAS_LOGED:
      return {
        ...state,
        has_loged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
