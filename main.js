//borré clase grupo
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.siguiente=null;
    }
}


class Grupo{
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
    listar(){
        if(this.inicio == null){
            return null;
        }
        else {
            let aux=this.inicio
            let lista = ""
            while(aux!=null){
                lista += 'Nombre:${aux.getName()}, Edad:${aux.getAge()}'
                aux=aux.siguiente;
            }
            return lista
        }
    }
}
