function getState<T>(arg:T):T{
    return arg
}

const res=getState<number>(1);

type TaddressType={
    street:string,
    city:string,
    state?:string
}

type TuserType={
    name:string,
    age:number,
    address:TaddressType
}

const user:{name:string, age:number, address:TaddressType}={
    name:"khusi",
    age:20,
    address:{
        street:"lc",
        city:"New York",
    }
}




type TarrayData={
    name:string,
    age:number,
    job:string,
    address?:TaddressType,
    fullInformation?:()=> string
}



const users:TarrayData[]=[
    {
        name:"khusi",
        age:21,
        job:"IT",
        address:{
            street:"nc",
            city:"lc",
        },
        fullInformation:function(){
            return "name"
        }
    },
    {
        name:"khusi",
        age:21,
        job:"IT"
    },
    {
        name:"khusi",
        age:21,
        job:"IT"
    },
    {
        name:"khusi",
        age:21,
        job:"IT"
    },
]


interface IcarType{
    name:string,
    age?:number
};

interface IphoneType extends IcarType{
    year:number,
    type:string
}

const car:IcarType[]=[
    {
        name:"malibu",
        age:2089,
    },
    {
        name:"malibu",
        age:2089,
    },
    {
        name:"malibu",
        age:2089,
    },
    {
        name:"malibu",
        age:2089,
    },
]

const phone:IphoneType[]=[
    {
        name:"samsung",
        year:2013,
        type:"new"
    },
    {
        name:"samsung",
        year:2013,
        type:"new"
    },
    {
        name:"samsung",
        year:2013,
        type:"new"
    }
]

function getData():Promise<string>{
    let isLoad=true;
    return new Promise((resolve, reject)=>{
        if(isLoad){
            setTimeout(()=>{
                resolve("Data fetched successfully")
            }, 2000);
        }else{
            reject("Data fetching failed")
        }
    })
};

getData().then((data:string)=>{
    console.log(data);
    
}).catch((err:string)=>{
    console.log(err);
    
})