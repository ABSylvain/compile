export class todo{
    private list:string[] = [];

    add(item:string):void{
        this.list.push(item);
    }
    del(item:string):void{
        this.list = 
        this.list.filter((valeur) => valeur !== item);
    }
    lister():string[]{
        return this.list;
    }
}