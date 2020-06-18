import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <label>Contact Advertiser</label>
                    <form className="m-auto">
                        <textarea name="w3review" className="form-control m-1" rows="4" cols="25" placeholder="Message..">
                        </textarea>
                        <button className="form-control m-1">Submit message</button>
                    </form>
                </div>
            </div>
        )
    }
}
