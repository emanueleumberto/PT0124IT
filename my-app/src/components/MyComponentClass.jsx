import React, { Component } from 'react'

export default class MyComponentClass extends Component {

    state;

    constructor(props) {
        super(props);
        this.state = {count: 0}
        // Metodo che viene invocato in automatico dopo per costruire un componente
        console.log("Sono il Constructor della Classe")
    }

    componentDidMount() {
        // Metodo che viene invocato in automatico dopo il caricamento di un componente
        // Carico tutti i dati della app
        console.log("Sono il ComponentDidMount della Classe")
    }

    componentDidUpdate() {
        // Metodo che viene invocato in automatico dopo la modifica di un componente
        console.log("Sono il ComponentDidUpdate della Classe")
    }

    componentWillUnmount() {
        // Metodo che viene invocato in automatico prima della distruzione di un componente
        console.log("Sono il ComponentWillUnmount della Classe")
    }

    render() {
        // Metodo che viene invocato in automatico in fase di caricamento di un componente
        console.log("Sono il Render della Classe")
        return (
        <div>MyComponentClass {this.state.count}</div>
        )
    }
}
