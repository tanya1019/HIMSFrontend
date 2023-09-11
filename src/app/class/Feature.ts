export class Feature{
    
    id:number;
    featureName:string;
    percent:number;

     constructor(id:number,name : string,percent:number)
    {
        this.id = id;
        this.featureName = name;
        this.percent = percent;
    }
   
}