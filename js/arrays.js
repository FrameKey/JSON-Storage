const iva = 1.21
const ivaImportado = 2

const infoAutos = [{marca:"Fiat", año:2020,modelo:"500",precio:10000,iva:iva},
                    {marca:"Reanult", año:2022,modelo:"Megane",precio:250000,iva:iva},
                    {marca:"Volkswagen", año:2020,modelo:"Vento",precio:35300,iva:ivaImportado},
                    {marca:"Mercedes Benz", año:2021,modelo:"Clase A",precio:76000,iva:ivaImportado}];


                    class Auto{
                        constructor(marca,año,modelo,precio,iva){
                            this.marca = marca
                            this.año = año
                            this.modelo = modelo
                            this.precio = precio
                            this.iva = iva
                        }}