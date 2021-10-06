export default class Grupo{
constructor(){
        this.inicio=null;
    }
    agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
        } else {
            let aux=this.inicio;
            while(aux.siguiente!=null)
                aux=aux.siguiente;
            aux.siguiente=nuevo;
        }
    }
}