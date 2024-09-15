import { PrismaClient } from '@prisma/client';
import { CowDto } from '../dto/CreateCow';

const prisma = new PrismaClient();

export const getAllCows = async () => {
    return prisma.cow.findMany();
}

export const createCow = async (data: CowDto) => {
    return prisma.cow.create({ data });
}

export const checkIfGoat = async (id: string) => {
    const foundCow = await getCow(id);
    if (foundCow) return foundCow.isGoat;
    return false;
}

export const getCow = async (id: string) => {
    return prisma.cow.findUnique({ where: { id } });
}

export const changeNumOfTaonom = async (id: string) => {
    const foundCow = await getCow(id);
    if (foundCow && foundCow.numOfTaonom === 3) {
        return prisma.cow.update({where : {id: foundCow.id}, data: { numOfTaonom: 4 }});
    }
    else if (foundCow) {
        return prisma.cow.update({where : {id: foundCow.id}, data: { numOfTaonom: 3 }});
    }
    return null;
}
