import React from 'react'
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner'

export default function LoadingIndicator(props) {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && <div
            style={{
                marginTop:"15%",
                width: "100%",
                // height: "100",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center"
            }}
        >
            <Loader type="Bars" color="#0063ba" height="100" width="100" />
        </div>
       );
}
