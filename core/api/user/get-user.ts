import { auth } from "@/auth";
import { Cart, CartItem, User } from "@prisma/client";

type UserResponse = User & {
  cart: Cart & {
    items: CartItem[];
  };
};

const getUser = async () => {
  const session = await auth();
  if (!session) return null;

  try {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/get-user?email=${session.user?.email}`;

    const user: UserResponse = await fetch(URL).then((res) => res.json());
    return user;
  } catch (error) {
    console.error(error);
  }
};

export default getUser;
