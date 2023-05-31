import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb";

export async function GET(request: Request) {
    const pechrus = await prisma.pech.findMany({
        where: {
            published: true,
            categorySecond2: "Печи для русской бани",
        },
    });
    return NextResponse.json(pechrus);
}