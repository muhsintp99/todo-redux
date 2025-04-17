import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../container/todoSlice";


const FilterButtons = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.todos?.filter || "All");

    console.log("filter",filter);
    return (
        <div>
            {["All", "Active", "Completed"].map((f) => (
                <button
                    key={f}
                    onClick={() => dispatch(setFilter(f))}
                    style={{ fontWeight: filter === f ? "bold" : "normal" }}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
