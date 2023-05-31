import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb";

export async function GET(request: Request) {
    const pechgaz = await prisma.pech.findMany({
        where: {
            published: true,
            categorySecond1: "Печи для бани на газу",
        },
    });
    return NextResponse.json(pechgaz);
}