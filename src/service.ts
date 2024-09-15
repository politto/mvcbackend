import { CowDto } from "../dto/CreateCow";
import { changeNumOfTaonom, checkIfGoat, createCow, getAllCows, getCow } from "./model";


export const getCowServ = async (id: string) => {
    return getCow(id);
}

export const getAllCowsServ = async () => {
    return getAllCows();
}

export const addCowServ = async (data: CowDto) => {
    data.id = generateCustomId();
    return createCow(data);
}

export function checkIfGoatServ(id: string) {
    return checkIfGoat(id)
}

export const getMilk = async (id: string) => {
    // console.log("service passed")
    const foundCow = await getCowServ(id);
    if( foundCow && foundCow.numOfTaonom === 4) {
        // console.log(foundCow.ageYear + foundCow.ageMonth)
        if (Math.random() < 0.05) changeNumOfTaonom(id)
        
        else return foundCow.ageYear + foundCow.ageMonth;
    }
    else if (foundCow && foundCow.numOfTaonom === 3) {
        // console.log(foundCow.ageYear + foundCow.ageMonth)
        if (Math.random() < 0.2) changeNumOfTaonom(id)
        else return 0
    }
    return -1
}

function generateCustomId() {
    const characters = '123456789'; // First character cannot be 0
    const allCharacters = '0123456789';
    let id = characters.charAt(Math.floor(Math.random() * characters.length));
    for (let i = 1; i < 8; i++) {
      id += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    return id;
  }
