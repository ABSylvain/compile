export class maClass {
    private maVar:string;
    private maNumb:number;

    constructor(){
        this.maVar = "blop";
        this.maNumb = 10;
    }
    method():string {
        return 'value of Prop1 :'+this.maVar+' and second value : '+this.maNumb;
    }
}