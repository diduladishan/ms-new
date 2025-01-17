import { NextResponse } from 'next/server';
import { getAuthSession } from '../../auth/[...nextauth]/options';
import prisma from '@/lib/prisma';


export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    const session = await getAuthSession();
    if (!session) {
      throw new NextResponse('Unauthorized', { status: 401 });
    }

    const card = await prisma.card.findUnique({
      where: {
        id: params.cardId,
        // list: {
        //   board: {
        //     orgId,
        //   },
        // },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
