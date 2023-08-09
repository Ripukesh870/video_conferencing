import Chance from "chance";

const chance =Chance();


export const fakeUserData=()=>{
    console.log(chance.name({ middle : true }));
    console.log("Ripu");
    return chance.name({ middle : true });
};
