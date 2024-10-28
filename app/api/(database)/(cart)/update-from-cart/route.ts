import { NextRequest, NextResponse } from "next/server";
import db from "../../db-client";
import { CartItem } from "@prisma/client";

export const PUT = async (req: NextRequest) => {
  const body = await req.json();
  const { data } = body as { data: CartItem };

  try {
    const cartItem = await db.cartItem.update({
      where: {
        id: data.id,
      },
      data,
      include: {
        item: true,
      },
    });

    return NextResponse.json(cartItem, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
};
