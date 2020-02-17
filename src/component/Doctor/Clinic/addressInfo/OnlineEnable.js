import { render } from 'react-dom';
import './OnlineEnable.css';
import * as React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';
import { ToggleBtn } from './toggle';



export class OnlineEnable extends ToggleBtn {
    rendereComplete() {
        let elemArray = document.querySelectorAll(".switch-control label");
        for (let i = 0, len = elemArray.length; i < len; i++) {
            elemArray[i].addEventListener("mouseup", rippleHandler);
            elemArray[i].addEventListener("mousedown", rippleHandler);
        }
        function rippleHandler(e) {
            let rippleSpan = this.nextElementSibling.querySelector(".e-ripple-container");
            if (rippleSpan) {
                rippleMouseHandler(e, rippleSpan);
            }
        }
    }
    render() {
        return (<div className="control-pane">
                <div className="control-section">
                    <div className="switch-content">
                        <div className="switch-control">
                            <div>
                                <label htmlFor="OnlineCF" style={{ padding: "10px 24px 10px 0" }}> Online consultation fee </label>
                                <SwitchComponent id="OnlineCF"></SwitchComponent>
                            </div>
                        </div>
                    </div>
                    <div className="switch-content">
                        <div className="switch-control">
                            <div>
                                <label htmlFor="EnableOP" style={{ padding: "10px 24px 10px 0" }}> Enable online Payment </label>
                                <SwitchComponent id="EnableOP"></SwitchComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default (OnlineEnable);