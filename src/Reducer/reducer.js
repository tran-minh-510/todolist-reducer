import {
    ADD_JOB,
    FILTER_JOB,
    HANDLE_CHECKED,
    EDIT_JOB,
    DELETE_JOB,
} from "./typesAction";
import uniqid from "uniqid";

export const initState = [
    { id: 1, content: "ReactJS", isChecked: false },
    { id: 2, content: "PHP", isChecked: false },
    { id: 3, content: "Javascript", isChecked: false },
];

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_JOB:
            const newJobs = {
                id: uniqid(),
                content: action.payload,
                isChecked: false,
            };
            return [...state, newJobs];
        case HANDLE_CHECKED:
            const cloneState = [...state];
            const findJob = cloneState.find((job) => job.id === action.payload.id);
            if (findJob) {
                findJob.isChecked = !action.payload.isChecked;
            }
            return cloneState;
        case EDIT_JOB:
            const cloneStatee = [...state];
            const findJobb = cloneStatee.find((job) => job.id === action.payload.id);
            findJobb.content = action.payload.valueInputEdit;
            return cloneStatee;
        case DELETE_JOB:
            return [...state].filter((item) => item.id !== action.payload);
        default:
            break;
    }
};

export default reducer;
