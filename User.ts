export class User {
    private list:string[];
 

    add(user:string, mdp:string):void{
        let obj:object ={
            user: user,
            mdp: mdp
        }
        this.list.push(obj);
    }
    display():string[] {
        return this.list;
    }
    delete(item:string):void{
        this.list =
        this.list.filter((valeur) => valeur !== item);
    }
}