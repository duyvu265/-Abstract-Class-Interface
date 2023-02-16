abstract class Animal{
    abstract makesound():string;
}

 class Tiger extends Animal{
     makesound(): string {
         return "Tiger:roarr";
     }

 }

 class Chiken extends Animal{
    makesound():string {
        return "chiken :clucj cluck"
    }
    howeat():string{
        return "could be freid"
    }
 }

 let animals=[];
animals[0]=new Tiger();
animals[1]=new Chiken();
animals.forEach((a)=>{
    console.log(a.makesound())
    if (a instanceof Chiken){
        console.log(a.howeat())
    }

})