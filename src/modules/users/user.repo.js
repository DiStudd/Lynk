import {prisma} from "../../core/prisma.js";

export async function createUser(data) {
    return prisma.user.create({
        data,
    })
}

export async function getUserByName(name) {
    return prisma.user.findUnique({
        where: {name}
    })
}