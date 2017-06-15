import delay from './delay';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const carriers = [
    {
        id: 1,
        name: 'CD'

    },
    {
        id: 2,
        name: 'DVD'

    },
    {
        id: 3,
        name: 'Pendrive'

    }
];

const generateId = () => {
    return persistedState.carriers.length ? Math.max(0, ...persistedState.carriers.map(c => c.id)) + 1 : 1;
};

class CarrierApi {
    static getAllCarriers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], persistedState.carriers));
            }, delay);
        });
    }

    static saveCarrier(carrier) {
        carrier = Object.assign({}, carrier);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCarrierNameLength = 2;
                if (carrier.name.length < minCarrierNameLength) {
                    reject(`Carrier name must be at least ${minCarrierNameLength} characters.`);
                }

                if (carrier.id) {
                    const existingCarrierIndex = persistedState.carriers.findIndex(a => a.id === carrier.id);
                    persistedState.carriers.splice(existingCarrierIndex, 1, carrier);
                } else {
                    carrier.id = generateId(carrier);
                    persistedState.carriers.push(carrier);
                }
                resolve(carrier);
            }, delay);
        });
    }

    static deleteCarrier(carrierId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCarrierToDelete = persistedState.carriers.findIndex(carrier =>
                    carrier.id == carrierId
                );
                persistedState.carriers.splice(indexOfCarrierToDelete, 1);
                resolve(carrierId);
            }, delay);
        });
    }
    static getInitialState(){
        return Object.assign([], carriers);
    }
}

export default CarrierApi;
