import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseCounter,
    increaseCounter,
    increaseCounterByVal,
} from "../store/slices/counter";

export default function Counter() {
    // TO READ VALUE FROM REDUX STORE
    const counter_val = useSelector((state) => state.counter.counter_val);
    // TO UPDATE VALUE 
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter Page</h2>
            <hr />
            <div className="d-flex my-3 align-items-center">
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(decreaseCounter())}
                >
                    -1
                </button>
                <p className="mb-0 mx-4"> {counter_val} </p>
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(increaseCounter())}
                >
                    +1
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={() => dispatch(increaseCounterByVal(10))}
                >
                    +10
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(increaseCounterByVal(15))}
                >
                    +15
                </button>
            </div>
        </>
    );
}
