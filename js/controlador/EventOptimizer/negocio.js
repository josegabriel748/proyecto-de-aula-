class EventOptimizer{
    constructor(){
        this.valor_mesero = 30000;
        this.valor_mesa = 25000;

        this.valores_alquiler_salon_hora = {
            'Grande':150000,
            'Mediano':100000,
            'Pequeño':80000,
        }
        this.comidas_combo = {
            'Grande':850000,
            'Mediano':620000,
            'Pequeño':400000
        }

        this.decoracion_combo = {
            'Grande':2700000,
            'Mediano':1350000,
            'Pequeño':920000
        }

        this.tipo_evento = {
            'Fiesta comun':0.1,
            'Bodas':0.2,
            'Evento familiar':0.15,
            'Grados':0.08,
            'Otros':0.3
        }
    }

    calcular_cotizacion(
        numero_mesero,
        numero_mesa,
        tipo_local,
        horas_duracion,
        comida,
        decoracion,
        tipo_evento
        ){
            try {
                const costo = {
                    'Valor_mesas':(this.valor_mesa * numero_mesa),
                    'Valor_meseros':(this.valor_mesero * numero_mesero),
                    'Valor_local':(this.valores_alquiler_salon_hora[tipo_local] * horas_duracion),
                    'Valor_comida':(this.comidas_combo[comida]),
                    'Valor_decoraciones':(this.decoracion_combo[decoracion]),
                    'Valor_extra':(this.tipo_evento[tipo_evento])
                }

                let subtotal = 0;
                subtotal += costo.Valor_mesas;
                subtotal += costo.Valor_meseros;
                subtotal += costo.Valor_local;
                subtotal += costo.Valor_comida;
                subtotal += costo.Valor_decoraciones;

                let total = subtotal * costo.Valor_extra + subtotal;
                
                return {
                    'Subtotales':costo,
                    'Total':total
                }

            } catch (error) {
                console.log('Tipo de error',error);
                return null;
            }

    }
}