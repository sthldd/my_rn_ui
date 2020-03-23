import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import ToasContanier from './ToastContainer';

let rootSibling:any

function destroy() {
    if (rootSibling) {
        rootSibling.destroy()
    }
}

interface option {
    position?:number,
    duration?:number,
    backgroundColor?:string,
    textColor?:string
}

export default class Toast {

    static showSuccess (message:string,option?:option) {
        let opts = Object.assign({'showInfo':true}, option)
        this.show(message,opts);
    }

    static showFail (message:string,option?:option) {
        let opts = Object.assign({'showInfo':true}, option)
        this.show(message,opts);
    }
    static showInfo (message:string,option?:option) {
        let opts = Object.assign({'showInfo':true}, option)
        this.show(message,opts);
    }

    static showError (message:string,option?:option) {
        let opts = Object.assign({'showInfo':true}, option)
        this.show(message,opts);
    }

    static show(message:string, options:option) {
        if (rootSibling) {
            rootSibling.destroy()
        }
        rootSibling = new RootSiblings(
            <ToasContanier
                {...options}
                message = { message }
                destroy={() => destroy()}
            />);
        return rootSibling;
    }
}