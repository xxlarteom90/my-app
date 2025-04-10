import { getWeek } from "../../utils/DateWrangler"

interface Week {
    date: Date;
    start: Date;
    end: Date;
}

type Action =
| { type: "NEXT_WEEK" }
| { type: "PREV_WEEK"}
| { type: "TODAY" }
| { type: "SET_DATE"; payload: number };

export function WeekReducer(state: Week,action:Action): Week {

    switch (action.type){
        case "NEXT_WEEK":
            return getWeek({forDate: state.date, daysOffset: 7});
        case "PREV_WEEK":
            return getWeek({forDate: state.date, daysOffset: -7});
        case "TODAY":
            return getWeek({forDate: new Date(), daysOffset: 0});
        case "SET_DATE":
            return getWeek({forDate: new Date(action.payload), daysOffset: 0})
        default:
            throw new Error(`Unknown action type: ${action}`)
    }

}
