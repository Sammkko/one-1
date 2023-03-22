import React from "react";
import Card from "react-credit-cards-2";

import '../../styles/creditCard.modules.css'

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "./utils";

import "react-credit-cards-2/es/styles-compiled.css";

export default class CardPage extends React.Component {
    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null
    };

    handleCallback = ({issuer}, isValid) => {
        if (isValid) {
            this.setState({issuer});
        }
    };

    handleInputFocus = ({target}) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({target}) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({[target.name]: target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {issuer} = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({formData});
        this.form.reset();
    };

    render() {
        const {name, number, expiry, cvc, focused, issuer, formData} = this.state;

        return (
            <div key="Payment">
                <div className="creditCard">
                    <h1 className="creditCard_title">Введите данные карты</h1>
                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />
                    <form className="creditCardForm" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                        <div className="creditCard_form">
                            <small>№ карты</small>

                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="№ карты"
                                pattern="[\d| ]{16, 22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="creditCard_form">
                            <small>ФИО</small>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="ФИО"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="creditCard_form-row">
                            <div className="creditCard_row">
                                <small>exp.</small>
                                <input
                                    type="tel"
                                    name="expiry"
                                    className="form-control"
                                    placeholder="exp."
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                            <div className="creditCard_row">
                                <small>CVC</small>
                                <input
                                    type="tel"
                                    name="cvc"
                                    className="form-control"
                                    placeholder="CVC"
                                    pattern="\d{3, 4}"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </div>
                        </div>
                        <input type="hidden" name="issuer" value={issuer}/>
                        <div className="creditCard_btn">
                            <button>Добавить</button>
                        </div>
                    </form>
                    {formData && (
                        <div className="creditCard_highlight">
                            {formatFormData(formData).map((d, i) => (
                                <div key={i}>{d}</div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        );
    }
}
