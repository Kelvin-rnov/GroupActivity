import React, { Component } from 'react';


class Resumo extends component {
	constructor(props){
		super(props);
		this.state = {
			consultas : {
				consultas_30dias_anteriores: 0;
				consultas_30dias_posteriores: 0;	
			},
			fatuaramento : {
				anterior {
					valor : 0,
					comparativo : 0				
				},
				previsao{
					valor : 0,
					comparativo : 0
				}
			}
		}
	}
	componentDidMount(){
		consultarResumo().then(dados => this.setState(dados));
	}
}
